"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox-setting";
import { useNavigate } from "react-router";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function PageSettingEdit() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handlerSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Setting berhasil disimpan.");
			navigate("/dashboard/setting");
		}, 1000);
	};

	const handlerTitikLokasi = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Menyimpan Titik Lokasi Saat ini.");
		}, 1000);
	};
	return (
		<div className="bg-white m-4 p-4 rounded-lg flex flex-col gap-4">
			<h1 className="font-bold text-xl">Edit</h1>
			<div className="flex justify-between bg-utama/10 shadow-md p-4 rounded-lg items-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-utama font-bold text-lg">Kelola Tingkat</h1>
					<RadioGroup
						defaultValue="sd"
						className="flex gap-4"
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="sd"
								id="sd"
							/>
							<Label
								htmlFor="sd"
								className="my-auto"
							>
								SD
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="smp"
								id="smp"
							/>
							<Label
								htmlFor="smp"
								className="my-auto"
							>
								SMP
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								value="sma"
								id="sma"
							/>
							<Label
								htmlFor="sma"
								className="my-auto"
							>
								SMA/SMK
							</Label>
						</div>
					</RadioGroup>
				</div>
				<Button
					className="bg-utama hover:bg-utamaHover px-6 shadow-md"
					onClick={handlerSubmit}
				>
					{loading ? <Spinner className="size-16" /> : "Simpan"}
				</Button>
			</div>
			<div className="border shadow flex flex-col  py-8 px-16 gap-8">
				<div className="p-4 aspect-square rounded-full border-2 max-w-max flex items-center mx-auto">
					<img
						src="/icon.png"
						width={1000}
						height={1000}
						alt="Icon"
						className="w-12"
					/>
				</div>
				<div className="w-full flex flex-col justify-center items-center">
					<div className="flex flex-row">
						<label
							htmlFor="picture"
							className="cursor-pointer bg-[#4299E1] text-white py-2 px-4 rounded-md text-center hover:bg-utama hover:text-white duration-100 font-medium w-[160px]"
						>
							Pilih file
						</label>
						<label
							htmlFor="picture"
							className="cursor-pointer text-black font-medium py-2 px-4 w-[160px]"
						>
							No file choosen
						</label>
					</div>
					<Input
						id="picture"
						type="file"
						className="hidden"
					/>
				</div>
				<div className="flex flex-col">
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="masuk">Waktu Masuk</Label>
						<Input
							type="masuk"
							id="masuk"
							placeholder="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="keluar">Waktu Keluar</Label>
						<Input
							type="keluar"
							id="keluar"
							placeholder="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="lokasi">Lokasi</Label>
						<Input
							type="keluar"
							id="keluar"
							placeholder="Masukkan Lokasi"
						/>
						<img
							id="lokasi"
							src="/maps.png"
							alt="Google maps"
							width={3000}
							height={1000}
							className="aspect-video"
						/>
						<Button
							className="bg-utama hover:bg-utamaHover px-6 shadow-md w-[148px]"
							onClick={handlerTitikLokasi}
						>
							{loading ? <Spinner className="size-16" /> : "Konfirmasi titik"}
						</Button>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="domain">Domain</Label>
						<Input
							type="domain"
							id="domain"
							placeholder="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="jarak_absensi">Jarak Absensi</Label>
						<Input
							type="jarak_absensi"
							id="jarak_absensi"
							placeholder="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="izinkan_guru">Hari</Label>
						<div className="flex items-center space-x-2">
							{days.map((day) => (
								<div
									key={day}
									className="flex items-center space-x-2"
								>
									<Checkbox id={day} />
									<label
										htmlFor={day}
										className="text-sm text-[#1A202C] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										{day}
									</label>
								</div>
							))}
						</div>
					</div>

					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="izinkan_guru">Izinkan guru untuk menggunakan photo ketika absen.</Label>
						<RadioGroup
							id="izinkan_guru"
							defaultValue="izinkan_guru_ya"
							className="flex gap-4"
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="ya"
									id="izinkan_guru_ya"
								/>
								<Label htmlFor="izinkan_guru_ya">Ya</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="tidak"
									id="izinkan_guru_tidak"
								/>
								<Label htmlFor="izinkan_guru_tidak">Tidak</Label>
							</div>
						</RadioGroup>
					</div>
					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="izinkan_siswa">Izinkan siswa untuk menggunakan photo ketika absen.</Label>
						<RadioGroup
							id="izinkan_siswa"
							defaultValue="izinkan_siswa_ya"
							className="flex gap-4"
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="ya"
									id="izinkan_siswa_ya"
								/>
								<Label htmlFor="izinkan_siswa_ya">Ya</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="tidak"
									id="izinkan_siswa_tidak"
								/>
								<Label htmlFor="izinkan_siswa_tidak">Tidak</Label>
							</div>
						</RadioGroup>
					</div>
					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="kunci_lokasi">Kunci lokasi absen.</Label>
						<RadioGroup
							id="kunci_lokasi"
							defaultValue="kunci_lokasi_ya"
							className="flex gap-4"
						>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="ya"
									id="kunci_lokasi_ya"
								/>
								<Label htmlFor="kunci_lokasi_ya">Ya</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="tidak"
									id="kunci_lokasi_tidak"
								/>
								<Label htmlFor="kunci_lokasi_tidak">Tidak</Label>
							</div>
						</RadioGroup>
					</div>
				</div>
			</div>
		</div>
	);
}
