import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Outlet } from "react-router";

export default function DashboardLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset className="relative z-50">
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4 w-full">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 h-4"
						/>
						<div className="w-full">
							<Select defaultValue="2024/2025 - Ganjil">
								<SelectTrigger className="w-full border-utama border-2 ring-0 outline-none focus:ring-0 focus:outline-none">
									<SelectValue placeholder="Pilih tahun ajaran" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										value="2024/2025 - Ganjil"
										className="cursor-pointer"
										defaultChecked
									>
										2024/2025 - Ganjil
									</SelectItem>
									<SelectItem
										value="2023/2024 - Genap"
										className="cursor-pointer"
									>
										2023/2024 - Genap
									</SelectItem>
									<SelectItem
										value="2023/2024 - Ganjil"
										className="cursor-pointer"
									>
										2023/2024 - Ganjil
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<Link to="/dashboard/setting">
							<Settings className="size-9 bg-[#90CDF4] text-white hover:bg-utamaHover rounded-full p-1 duration-200 hover:duration-200" />
						</Link>
						<img
							src="/icon.png"
							alt="Logo"
							width={1000}
							height={1000}
							className="h-9 w-auto mr-2"
						/>
					</div>
				</header>
				<div className="bg-[#E9EEF2] min-h-screen flex flex-col justify-between">
					<Outlet />
					<Footer />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
