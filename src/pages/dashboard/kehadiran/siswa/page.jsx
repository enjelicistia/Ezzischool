"use client";

import { useState } from "react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import { CalendarIcon, ChevronLeft, ChevronRight, Ellipsis, Search, X } from "lucide-react";
import ButtonDelete from "@/components/button-delete";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { format } from "date-fns";
import { useNavigate } from "react-router";

export default function PageKehadiranSiswa() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [datePresensi, setDatePresensi] = useState();
	const [dateRiwayat, setDateRiwayat] = useState();

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport file.");
			navigate("/dashboard/kehadiran/siswa");
		}, 250);
	};

	const handleUnduh = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengunduh file.");
			navigate("/dashboard/kehadiran/siswa");
		}, 250);
	};

	const handleTambahPresensiMasuk = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan presensi masuk.");
			navigate("/dashboard/kehadiran/siswa");
		}, 250);
	};

	const handleTambahPresensiKeluar = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan presensi keluar.");
			navigate("/dashboard/kehadiran/siswa");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Presensi Siswa</h1>
			<Tabs defaultValue="presensi">
				<TabsList className="grid grid-cols-3 gap-2 w-[300px]">
					<TabsTrigger value="presensi">Presensi</TabsTrigger>
					<TabsTrigger value="riwayat">Riwayat</TabsTrigger>
				</TabsList>

				{/* KELAS */}

				<TabsContent
					value="presensi"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col xl:flex-row gap-4 items-end">
									<div className="grid w-full lg:w-[220px] items-center gap-1">
										<Label
											htmlFor="tanggal"
											className="text-base font-semibold"
										>
											Tanggal
										</Label>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant={"outline"}
													className="justify-between text-left font-semibold"
												>
													{datePresensi ? format(datePresensi, "PPP") : <span>Pilih tanggal</span>}
													<CalendarIcon className="mr-2 h-4 w-4" />
												</Button>
											</PopoverTrigger>
											<PopoverContent className="p-0 w-full">
												<Calendar
													mode="single"
													selected={datePresensi}
													onSelect={setDatePresensi}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
									</div>
									<div className="flex flex-col gap-2 w-[140px] ">
										<p>Kelas</p>
										<Select>
											<SelectTrigger className="bg-white">
												<SelectValue placeholder="Pilih Kelas" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Pilih Kelas</SelectLabel>
													<SelectItem value="X MM">X MM</SelectItem>
													<SelectItem value="X RPL">X RPL</SelectItem>
													<SelectItem value="XI MM">XI MM</SelectItem>
													<SelectItem value="XI RPL">XI RPL</SelectItem>
													<SelectItem value="XII">XII</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
						<div className="flex w-full lg:w-[280px]">
							<Input
								type="text"
								placeholder="Cari siswa"
								className="rounded-r-none"
							/>
							<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
								<Search className="text-black size-4 aspect-square p-0.5" />
							</Button>
						</div>
						<Select defaultValue="5">
							<SelectTrigger className="w-[100px]">
								<SelectValue placeholder="Pilih" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="5">5</SelectItem>
									<SelectItem value="20">20</SelectItem>
									<SelectItem value="50">50</SelectItem>
									<SelectItem value="100">100</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="overflow-auto grid grid-cols-1">
						<Table>
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NO</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA SISWA</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">PRESENSI MASUK</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">PRESENSI KELUAR</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(9)].map((item, index) => (
									<TableRow
										key={index}
										className="border-l border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">{index + 1}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="bg-[#90CDF4] hover:bg-utama text-black font-semibold">
														Presensi Masuk
														{Ikon.Edit && <Ikon.Edit className="text-black" />}
													</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-sm p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
															<p className="text-white font-semibold">Presensi Masuk</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 space-y-6">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="nama">Nama Siswa</Label>
																	<Input
																		type="text"
																		id="nama"
																		placeholder="00:00"
																		defaultValue="Bayu"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="jamMasuk">Jam Masuk</Label>
																	<Input
																		type="text"
																		id="jamMasuk"
																		placeholder="00:00"
																		defaultValue="08:00"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="status">Status</Label>
																	<Select defaultValue="1">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="status"
																				placeholder="Status Masuk"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Status</SelectLabel>
																				<SelectItem value="1">Hadir</SelectItem>
																				<SelectItem value="2">Telat</SelectItem>
																				<SelectItem value="3">Izin</SelectItem>
																				<SelectItem value="3">Sakit</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="keterangan">Keterangan</Label>
																	<Input
																		type="text"
																		id="keterangan"
																		placeholder="Keterangan"
																	/>
																</div>
																<div className="flex justify-end">
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleTambahPresensiMasuk}
																			className="bg-utama hover:bg-utamaHover max-w-max"
																		>
																			{loading ? <Spinner className="size-16" /> : "Submit"}
																		</Button>
																	</AlertDialogAction>
																</div>
															</div>
														</AlertDialogDescription>
													</AlertDialogHeader>
												</AlertDialogContent>
											</AlertDialog>
										</TableCell>
										<TableCell className="text-center border-r border-textUtama">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="bg-[#90CDF4] hover:bg-utama text-black font-semibold">
														Presensi Keluar
														{Ikon.Edit && <Ikon.Edit className="text-black" />}
													</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-sm p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
															<p className="text-white font-semibold">Presensi Keluar</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 space-y-6">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="nama">Nama</Label>
																	<Input
																		type="text"
																		id="nama"
																		placeholder="00:00"
																		defaultValue="Bayu"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="jamKeluar">Jam Keluar</Label>
																	<Input
																		type="text"
																		id="jamKeluar"
																		placeholder="00:00"
																		defaultValue="15:00"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="status">Status</Label>
																	<Select defaultValue="1">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="status"
																				placeholder="Status Keluar"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Status</SelectLabel>
																				<SelectItem value="1">Tepat Waktu</SelectItem>
																				<SelectItem value="3">Terlalu Cepat</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="keterangan">Keterangan</Label>
																	<Input
																		type="text"
																		id="keterangan"
																		placeholder="Keterangan"
																	/>
																</div>
																<div className="flex justify-end">
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleTambahPresensiKeluar}
																			className="bg-utama hover:bg-utamaHover max-w-max"
																		>
																			{loading ? <Spinner className="size-16" /> : "Submit"}
																		</Button>
																	</AlertDialogAction>
																</div>
															</div>
														</AlertDialogDescription>
													</AlertDialogHeader>
												</AlertDialogContent>
											</AlertDialog>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={4}
										className="text-xs text-black"
									>
										Menampilkan 9 dari 40 hasil
									</TableCell>
									<TableCell
										colSpan={3}
										className="text-right"
									>
										<div className="flex items-center justify-end gap-1">
											<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
												<ChevronLeft className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
											<Button className="p-0 size-6 text-xs bg-white hover:bg-gray-200 text-black">2</Button>
											<Button className="p-0 size-6 text-xs bg-white hover:bg-gray-200 text-black">3</Button>
											<Button className="p-0 size-6 bg-transparent hover:bg-transparent">
												<Ellipsis className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6  bg-gray-200 hover:bg-gray-300">
												<ChevronRight className="text-black p-1" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							</TableFooter>
						</Table>
					</div>
				</TabsContent>

				{/* JURUSAN */}

				<TabsContent
					value="riwayat"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col xl:flex-row gap-4 items-end">
									<div className="grid w-full lg:w-[220px] items-center gap-1">
										<Label
											htmlFor="tanggal"
											className="text-base font-semibold"
										>
											Tanggal
										</Label>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant={"outline"}
													className="justify-between text-left font-semibold"
												>
													{dateRiwayat ? format(dateRiwayat, "PPP") : <span>Pilih tanggal</span>}
													<CalendarIcon className="mr-2 h-4 w-4" />
												</Button>
											</PopoverTrigger>
											<PopoverContent className="p-0 w-full">
												<Calendar
													mode="single"
													selected={dateRiwayat}
													onSelect={setDateRiwayat}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
									</div>
									<div className="flex flex-col gap-2 w-full lg:w-[140px] ">
										<p>Kelas</p>
										<Select>
											<SelectTrigger className="bg-white">
												<SelectValue placeholder="Pilih Kelas" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Pilih Kelas</SelectLabel>
													<SelectItem value="X MM">X MM</SelectItem>
													<SelectItem value="X RPL">X RPL</SelectItem>
													<SelectItem value="XI MM">XI MM</SelectItem>
													<SelectItem value="XI RPL">XI RPL</SelectItem>
													<SelectItem value="XII">XII</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Report Preview</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Report Presensi Siswa</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black">
													<div className="grid grid-cols-2 xl:grid-cols-5 gap-4 px-4 py-6 bg-utama/10 items-end">
														<div className="grid w-full items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="kelas"
															>
																Kelas
															</Label>
															<Select>
																<SelectTrigger className="bg-white">
																	<SelectValue placeholder="Pilih Kelas" />
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Pilih Kelas</SelectLabel>
																		<SelectItem value="X MM">X MM</SelectItem>
																		<SelectItem value="X RPL">X RPL</SelectItem>
																		<SelectItem value="XI MM">XI MM</SelectItem>
																		<SelectItem value="XI RPL">XI RPL</SelectItem>
																		<SelectItem value="XII">XII</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="grid w-full items-center gap-1">
															<Label
																htmlFor="tanggalMulai"
																className="text-sm font-medium"
															>
																Tanggal Mulai
															</Label>
															<Popover>
																<PopoverTrigger asChild>
																	<Button
																		variant={"outline"}
																		className="justify-between text-left font-normal"
																	>
																		<span>Pilih tanggal mulai</span>
																		<CalendarIcon className="mr-2 h-4 w-4" />
																	</Button>
																</PopoverTrigger>
																<PopoverContent className="p-0 w-full">
																	<Calendar
																		mode="single"
																		initialFocus
																	/>
																</PopoverContent>
															</Popover>
														</div>
														<div className="grid w-full items-center gap-1">
															<Label
																htmlFor="tanggalAkhir"
																className="text-sm font-medium"
															>
																Tanggal Akhir
															</Label>
															<Popover>
																<PopoverTrigger asChild>
																	<Button
																		variant={"outline"}
																		className="justify-between text-left font-normal"
																	>
																		<span>Pilih tanggal akhir</span>
																		<CalendarIcon className="mr-2 h-4 w-4" />
																	</Button>
																</PopoverTrigger>
																<PopoverContent className="p-0 w-full">
																	<Calendar
																		mode="single"
																		initialFocus
																	/>
																</PopoverContent>
															</Popover>
														</div>
														<div className="w-full items-center gap-1 hidden xl:block"></div>
														<div className="flex justify-end">
															<AlertDialogCancel asChild>
																<Button
																	onClick={handleUnduh}
																	className="w-[148px] bg-utama hover:bg-utama text-white hover:text-white font-semibold"
																>
																	{loading ? <Spinner className="size-16" /> : "Unduh"}
																</Button>
															</AlertDialogCancel>
														</div>
													</div>
													<div className="p-4 flex flex-col gap-4">
														<Table>
															<TableHeader>
																<TableRow className="bg-utama/50 border border-textUtama">
																	<TableHead className="w-[240px] text-black font-bold text-sm text-center text-nowrap">NAMA SISWA</TableHead>
																	<TableHead className="text-black font-bold text-sm text-center text-nowrap">JUMLAH HADIR</TableHead>
																	<TableHead className="text-black font-bold text-sm text-center text-nowrap">TEPAT WAKTU</TableHead>
																	<TableHead className="text-black font-bold text-sm text-center text-nowrap">TERLAMBAT</TableHead>
																	<TableHead className="text-black font-bold text-sm text-center text-nowrap">IN-SCHOOL</TableHead>
																	<TableHead className="text-black font-bold text-sm text-center text-nowrap">OUT-SCHOOL</TableHead>
																</TableRow>
															</TableHeader>
															<TableBody>
																{[...Array(10)].map((_, index) => (
																	<TableRow
																		key={index}
																		className="border-l border-r border-b border-textUtama"
																	>
																		<TableCell className="text-center font-medium text-black border-l border-textUtama">Tabel</TableCell>
																		<TableCell className="text-center font-medium text-black border-textUtama">Tabel</TableCell>
																		<TableCell className="text-center font-medium text-black border-textUtama">Tabel</TableCell>
																		<TableCell className="text-center font-medium text-black border-textUtama">Tabel</TableCell>
																		<TableCell className="text-center font-medium text-black border-textUtama">Tabel</TableCell>
																		<TableCell className="text-center font-medium text-black border-r border-textUtama">Tabel</TableCell>
																	</TableRow>
																))}
															</TableBody>
															<TableFooter className="border border-textUtama">
																<TableRow>
																	<TableCell
																		colSpan={1}
																		className="text-xs text-black"
																	>
																		Menampilkan 9 dari 40 hasil
																	</TableCell>
																	<TableCell
																		colSpan={5}
																		className="text-right"
																	>
																		<div className="flex items-center justify-end gap-1">
																			<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
																				<ChevronLeft className="text-black p-1" />
																			</Button>
																			<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
																			<Button className="p-0 size-6 text-xs bg-white hover:bg-gray-100 text-black">2</Button>
																			<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
																				<ChevronRight className="text-black p-1" />
																			</Button>
																		</div>
																	</TableCell>
																</TableRow>
															</TableFooter>
														</Table>
													</div>
												</div>
											</AlertDialogDescription>
										</AlertDialogHeader>
									</AlertDialogContent>
								</AlertDialog>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row xl:justify-between gap-2 xl:gap-8">
						<div className="flex gap-2 flex-col xl:flex-row">
							<div className="flex w-full lg:w-[280px]">
								<Input
									type="text"
									placeholder="Cari jurusan"
									className="rounded-r-none"
								/>
								<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
									<Search className="text-black size-4 aspect-square p-0.5" />
								</Button>
							</div>
							<Select defaultValue="5">
								<SelectTrigger className="w-[100px]">
									<SelectValue placeholder="Pilih" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="5">5</SelectItem>
										<SelectItem value="20">20</SelectItem>
										<SelectItem value="50">50</SelectItem>
										<SelectItem value="100">100</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="flex justify-end">
							<Button
								onClick={handleExport}
								className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282] font-bold"
							>
								{loading ? <Spinner className="size-6" /> : "Export to Excel"}
							</Button>
						</div>
					</div>
					<div className="overflow-auto grid grid-cols-1">
						<Table>
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">TANGGAL</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">WAKTU MASUK</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS MASUK</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">WAKTU KELUAR</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS KELUAR</TableHead>
									<TableHead className="text-black font-bold text-sm text-center">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(9)].map((_, index) => (
									<TableRow
										key={index}
										className="border-l border-r border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">{(index + 1) % 4 || 2}</TableCell>
										<TableCell className="text-center border-textUtama text-nowrap">Senin, 12-12-2024</TableCell>
										<TableCell className="text-center border-textUtama">08:00</TableCell>
										<TableCell className="text-center border-textUtama">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className={`w-full bg-utama hover:bg-utamaHover ${((index + 1) % 4 || 1) === 1 ? "bg-utama hover:bg-utamaHover" : ((index + 1) % 4 || 1) === 2 ? "bg-[#F6E05E] hover:bg-yellow-500" : "bg-red-500 hover:bg-red-600"}`}>{((index + 1) % 4 || 1) === 1 ? "Tepat Waktu" : ((index + 1) % 4 || 1) === 2 ? "Sakit" : "Terlambat"}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
															<p className="text-white font-semibold">Detail Presensi Masuk</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 space-y-6">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="nama">Nama</Label>
																	<Input
																		type="text"
																		id="nama"
																		defaultValue="Name"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="foto">Foto</Label>
																	<div className="bg-red-500 w-full h-48">
																		<img
																			src="/photo.png"
																			width={500}
																			height={500}
																			alt="photo"
																			className="object-cover w-full h-full"
																		/>
																	</div>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="lokasi">Lokasi</Label>
																	<div className="bg-red-500 w-full h-48">
																		<img
																			src="/maps.png"
																			width={500}
																			height={500}
																			alt="photo"
																			className="object-cover w-full h-full"
																		/>
																	</div>
																</div>
															</div>
														</AlertDialogDescription>
													</AlertDialogHeader>
												</AlertDialogContent>
											</AlertDialog>
										</TableCell>
										<TableCell className="text-center border-textUtama">15:00</TableCell>
										<TableCell className="text-center border-textUtama">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className={`w-full bg-utama hover:bg-utamaHover ${((index + 1) % 4 || 1) === 1 ? "bg-utama hover:bg-utamaHover" : ((index + 1) % 4 || 1) === 2 ? "bg-[#F6E05E] hover:bg-yellow-500" : "bg-red-500 hover:bg-red-600"}`}>{((index + 1) % 4 || 1) === 1 ? "Tepat Waktu" : ((index + 1) % 4 || 1) === 2 ? "Sakit" : "Terlambat"}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
															<p className="text-white font-semibold">Detail Presensi Keluar</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 space-y-6">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="nama">Nama</Label>
																	<Input
																		type="text"
																		id="nama"
																		placeholder="00:00"
																		defaultValue="Name"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="foto">Foto</Label>
																	<div className="bg-red-500 w-full h-48">
																		<img
																			src="/photo.png"
																			width={500}
																			height={500}
																			alt="photo"
																			className="object-cover w-full h-full"
																		/>
																	</div>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="lokasi">Lokasi</Label>
																	<div className="bg-red-500 w-full h-48">
																		<img
																			src="/maps.png"
																			width={500}
																			height={500}
																			alt="photo"
																			className="object-cover w-full h-full"
																		/>
																	</div>
																</div>
															</div>
														</AlertDialogDescription>
													</AlertDialogHeader>
												</AlertDialogContent>
											</AlertDialog>
										</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											<ButtonDelete href="/dashboard/kehadiran/siswa">
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded shadow-none">{Ikon.Hapus && <Ikon.Hapus className="text-black" />}</Button>
											</ButtonDelete>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={4}
										className="text-xs text-black"
									>
										Menampilkan 9 dari 40 hasil
									</TableCell>
									<TableCell
										colSpan={4}
										className="text-right"
									>
										<div className="flex items-center justify-end gap-1">
											<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
												<ChevronLeft className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
											<Button className="p-0 size-6 text-xs bg-white hover:bg-gray-200 text-black">2</Button>
											<Button className="p-0 size-6 text-xs bg-white hover:bg-gray-200 text-black">3</Button>
											<Button className="p-0 size-6 bg-transparent hover:bg-transparent">
												<Ellipsis className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6  bg-gray-200 hover:bg-gray-300">
												<ChevronRight className="text-black p-1" />
											</Button>
										</div>
									</TableCell>
								</TableRow>
							</TableFooter>
						</Table>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
