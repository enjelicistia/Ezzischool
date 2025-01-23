import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogCancel, AlertDialogDescription, AlertDialogAction } from "@/components/ui/alert-dialog";

export function ButtonUnggahGambar({ children, href }) {
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
			<AlertDialogContent className="max-w-sm p-0 overflow-hidden border-none">
				<AlertDialogHeader>
					<AlertDialogTitle className={`flex justify-between py-2 px-4 bg-utama`}>
						<p className="text-white font-semibold">Unggah Gambar</p>
						<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
							<X />
						</AlertDialogCancel>
					</AlertDialogTitle>
					<AlertDialogDescription asChild>
						<div className="text-black p-4 flex flex-col gap-4 ">
							<img
								src="/user.png"
								width={500}
								height={500}
								alt="icon user"
								className="aspect-square size-24 mx-auto"
							/>
							<div className="relative overflow-hidden mb-4">
								<Label
									htmlFor="picture"
									className="absolute px-7 bg-[#90CDF4] hover:bg-[#7eb7db] h-full flex items-center font-semibold rounded-l duration-150 hover:duration-150 cursor-pointer"
								>
									Pilih file
								</Label>
								<Input
									id="picture"
									type="file"
									className="p-1.5 pl-6"
								/>
							</div>
							<div className="flex justify-end gap-2">
								<AlertDialogCancel asChild>
									<Button className="border-2 border-utama max-w-max text-utama hover:text-utamaHover">Batal</Button>
								</AlertDialogCancel>
								<AlertDialogAction asChild>
									<Button
										onClick={handleDelete}
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

export function ButtonUnggahKataSandi({ children, href }) {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleDelete = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil unggah kata sandi.");
			navigate(href);
		}, 250);
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent className="max-w-sm p-0 overflow-hidden border-none">
				<AlertDialogHeader>
					<AlertDialogTitle className={`flex justify-between py-2 px-4 bg-utama`}>
						<p className="text-white font-semibold">Unggah Kata Sandi</p>
						<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
							<X />
						</AlertDialogCancel>
					</AlertDialogTitle>
					<AlertDialogDescription asChild>
						<div className="text-black p-4 flex flex-col gap-4 ">
							<div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
								<Label htmlFor="katasandi">Kata Sandi</Label>
								<Input
									type="text"
									id="katasandi"
									placeholder="Masukkan kata sandi"
								/>
							</div>
							<div className="flex justify-end gap-2">
								<AlertDialogCancel asChild>
									<Button className="border-2 border-utama max-w-max text-utama hover:text-utamaHover">Batal</Button>
								</AlertDialogCancel>
								<AlertDialogAction asChild>
									<Button
										onClick={handleDelete}
										className="bg-utama hover:bg-utamaHover max-w-max"
									>
										{loading ? <Spinner className="size-16" /> : "Simpan"}
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
