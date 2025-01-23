import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { motion, AnimatePresence } from "framer-motion";

export function NavMain({ items }) {
	const activeItems = items.filter((item) => item.isActive).map((item) => item.title);

	const [openItem, setOpenItem] = useState(activeItems);

	const handleCollapsible = (title) => {
		setOpenItem((prev) => (prev.includes(title) ? [] : [title]));
	};

	return (
		<SidebarGroup>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible
						key={item.title}
						asChild
						className="group/collapsible"
						defaultOpen={item.isActive}
						open={openItem.includes(item.title)}
						onOpenChange={() => handleCollapsible(item.title)}
					>
						<SidebarMenuItem>
							<CollapsibleTrigger asChild>
								<SidebarMenuButton
									tooltip={item.title}
									className={cn("px-3 py-0 h-12 shadow mt-4 flex items-center text-textUtama active:text-white hover:bg-utama hover:text-white active:bg-utama", item.isActive && "bg-utama hover:bg-utama active:bg-utama")}
								>
									<div className="font-bold flex gap-4 items-center">
										<div className={cn("", item.isActive && "bg-[#90CDF4] p-1 rounded-md")}>{item.icon && <item.icon style={{}} />}</div>
										<p className={cn("text-sm", item.isActive && "text-white")}>{item.title}</p>
									</div>
									<motion.span
										animate={{ rotate: openItem.includes(item.title) ? 0 : 0 }}
										transition={{ type: "spring", bounce: 0, duration: 0.2 }}
										className={cn("ml-auto ", item.isActive && "text-white")}
									>
										<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
									</motion.span>
								</SidebarMenuButton>
							</CollapsibleTrigger>
							<AnimatePresence initial={false}>
								{openItem.includes(item.title) && (
									<CollapsibleContent
										forceMount
										asChild
									>
										<motion.div
											initial={{ height: 0 }}
											animate={{ height: "auto" }}
											exit={{ height: 0 }}
											transition={{ type: "spring", bounce: 0, duration: 0.3 }}
											className="overflow-hidden w-full"
										>
											<SidebarMenuSub>
												{item.items?.map((subItem) => (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton
															className="px-3 py-0 h-12 shadow mt-4"
															asChild
														>
															<Link to={subItem.url}>
																<div className="text-textUtama hover:text-textUtama font-bold flex items-center gap-2">
																	<div className={cn("", subItem.isActive && "bg-[#90CDF4] p-1 rounded-md")}>{subItem.icon && <subItem.icon className={cn("text-textUtama hover:textUtama font-bold p-0.5", subItem.isActive && "text-white rounded")} />}</div>
																	<p className={cn("text-sm", subItem.isActive && "text-utama")}>{subItem.title}</p>
																</div>
															</Link>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										</motion.div>
									</CollapsibleContent>
								)}
							</AnimatePresence>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
