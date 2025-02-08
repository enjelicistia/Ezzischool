"use client";

import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox-setting";
import { Button } from "@/components/ui/button";

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

export default function PageSetting() {
	return (
		<div className="bg-white m-4 p-4 rounded-lg flex flex-col gap-4">
			<h1 className="font-bold text-xl">Settings</h1>
			<div className="flex justify-between bg-utama/10 shadow-md p-4 rounded-lg items-center">
				<div className="flex flex-col gap-4">
					<h1 className="text-utama font-bold text-lg">Kelola Tingkat</h1>
					<RadioGroup
						defaultValue="sd"
						className="flex gap-4"
					>
						<div className="flex items-center space-x-2">
							<RadioGroupItem
								id="sd"
								value="sd"
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
								id="smp"
								value="smp"
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
								id="sma"
								value="sma"
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
				<Button className="bg-utama hover:bg-utamaHover px-6 shadow-md w-[100px]">
					<Link to="/dashboard/setting/edit">Edit</Link>
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
				<div className="flex flex-col">
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="masuk">Waktu Masuk</Label>
						<Input
							type="masuk"
							id="masuk"
							placeholder="Waktu masuk"
							defaultValue="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="keluar">Waktu Keluar</Label>
						<Input
							type="keluar"
							id="keluar"
							placeholder="Waktu keluar"
							defaultValue="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-3 mb-6">
						<Label htmlFor="lokasi">Lokasi</Label>
						<img
							id="lokasi"
							src="/maps.png"
							alt="Google maps"
							width={3000}
							height={1000}
							className="aspect-video"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="domain">Domain</Label>
						<Input
							type="domain"
							id="domain"
							placeholder="Domain"
							defaultValue="Text"
						/>
					</div>
					<div className="grid w-full items-center gap-1.5 mb-6">
						<Label htmlFor="jarak_absensi">Jarak Presensi</Label>
						<Input
							type="jarak_absensi"
							id="jarak_absensi"
							placeholder="Jarak Absensi"
							defaultValue="Text"
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
						<Label htmlFor="izinkan_guru">Izinkan guru untuk menggunakan photo ketika presensi.</Label>
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
						<Label htmlFor="izinkan_siswa">Izinkan siswa untuk menggunakan photo ketika presensi.</Label>
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
						<Label htmlFor="kunci_lokasi">Kunci lokasi presensi.</Label>
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
