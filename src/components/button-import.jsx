import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogHeader, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";

export default function ButtonImport({ children, href }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleUpload = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengunggah gambar.");
			navigate(href);
		}, 250);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
				<AlertDialogHeader>
					<AlertDialogTitle className={`flex justify-between py-2 px-4 bg-[#90CDF4]`}>
						<p className="text-white font-semibold">Import Data</p>
						<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
							<X />
						</AlertDialogCancel>
					</AlertDialogTitle>
					<AlertDialogDescription asChild>
						<div className="text-black p-4 flex flex-col gap-4 ">
							<div className="flex items-center justify-center w-full">
								<label
									htmlFor="file-upload"
									className="flex items-center justify-center w-full h-60 px-4 transition-colors border-4 border-utama border-dashed rounded-md cursor-pointer text-muted-foreground hover:border-primary hover:bg-primary/5"
								>
									<div className="space-y-2 text-center">
										<img
											src="/unggah.png"
											width={500}
											height={500}
											alt="Unggah Icon"
											className="w-28 mx-auto"
										/>
										<div className="flex text-sm text-muted-foreground">
											<span className="relative flex justify-center cursor-pointer rounded-md font-medium text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary-foreground w-full">
												<span className="font-bold text-xl text-black hover:text-black">Seret dan lepas file disini</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
												/>
											</span>
										</div>
										<p className="text-muted-foreground bg-yellow-400 text-black font-semibold py-1 px-2 text-sm">Tidak ada file yang dipilih, klik untuk unggah file</p>
									</div>
								</label>
							</div>
							<p className="text-black text-center mb-4">
								Format file Excel dapat dilihat <span className="text-utama hover:underline cursor-pointer">disini</span>
							</p>
							<div className="flex justify-end gap-2">
								<AlertDialogAction asChild>
									<Button
										onClick={handleUpload}
										className="bg-utama hover:bg-utamaHover max-w-max"
									>
										{loading ? <Spinner className="size-16" /> : "Unggah"}
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
