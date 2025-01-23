import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import { CheckCircleIcon, CircleAlertIcon } from "lucide-react";

export default function BaseLayout() {
	return (
		<main>
			<Outlet />
			<Toaster
				icons={{
					success: <CheckCircleIcon className="size-5" />,
					error: <CircleAlertIcon className="size-5" />,
				}}
				toastOptions={{
					unstyled: false,
					classNames: {
						toast: "rounded-sm bg-background border border-border text-foreground",
						default: "p-4 px-6 inline-flex gap-4",
						success: "bg-green-50 text-green-700 border-green-700",
						error: "bg-red-50 text-red-700 border-red-700",
					},
				}}
			/>
		</main>
	);
}
