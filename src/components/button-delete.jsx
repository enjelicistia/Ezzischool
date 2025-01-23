import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";

export default function ButtonDelete({ children, href }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleDelete = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menghapus data.");
			navigate(href);
		}, 250);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className="max-w-sm p-0 overflow-hidden border-none rounded-lg">
				<AlertDialogHeader>
					<AlertDialogTitle className={`flex justify-between py-2 px-4 bg-red-600 hover:bg-red-700`}>
						<p className="text-white font-semibold">Hapus Data</p>
						<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
							<X />
						</AlertDialogCancel>
					</AlertDialogTitle>
					<AlertDialogDescription asChild>
						<div className="text-black p-4 flex flex-col gap-2">
							<p className="font-semibold text-black mb-4 text-left">Apakah anda yakin ingin menghapus data ini?</p>
							<div className="flex justify-end gap-2 items-end">
								<AlertDialogCancel asChild>
									<Button className="border-2 border-utama max-w-max text-utama hover:text-utamaHover">Batal</Button>
								</AlertDialogCancel>
								<AlertDialogAction asChild>
									<Button
										onClick={handleDelete}
										className="bg-red-600 hover:bg-red-700 max-w-max"
									>
										{loading ? <Spinner className="size-16" /> : "Hapus"}
									</Button>
								</AlertDialogAction>
							</div>
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
			</AlertDialogContent>
		</AlertDialog>
	);
}
