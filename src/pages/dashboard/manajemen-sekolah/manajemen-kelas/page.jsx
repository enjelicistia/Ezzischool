"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import ButtonDelete from "@/components/button-delete";
import ButtonImport from "@/components/button-import";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageManajemenKelas() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleTambahKelas = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan kelas.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	const handleEditKelas = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit kelas.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	const handleTambahJurusan = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan jurusan.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	const handleEditJurusan = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit jurusan.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan mata pelajaran.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit mata pelajaran.");
			navigate("/dashboard/manajemen-sekolah/manajemen-kelas");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Manajemen Kelas</h1>
			<Tabs defaultValue="kelas">
				<TabsList className="grid grid-cols-3 gap-2 w-[400px]">
					<TabsTrigger value="kelas">Kelas</TabsTrigger>
					<TabsTrigger value="jurusan">Jurusan</TabsTrigger>
					<TabsTrigger value="mapel">Mata Pelajaran</TabsTrigger>
				</TabsList>

				{/* KELAS */}
				<TabsContent
					value="kelas"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col gap-2">
									<p>Jenjang</p>
									<Select>
										<SelectTrigger className="xl:w-[139px] bg-white">
											<SelectValue placeholder="Pilih Jenjang" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Jenjang</SelectLabel>
												<SelectItem value="X">X</SelectItem>
												<SelectItem value="XI">XI</SelectItem>
												<SelectItem value="XII">XII</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<ButtonImport href={"/dashboard/manajemen-sekolah/manajemen-kelas"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
									</ButtonImport>
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Kelas</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-xl xl:max-w-7xl p-0 overflow-auto border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Tambah Kelas</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black">
														<div className="grid grid-cols-2 xl:grid-cols-9 gap-4 px-4 py-6 bg-utama/10">
															<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="tahunAjaran"
																>
																	Tahun Ajaran
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="tahunAjaran"
																			placeholder="Pilih Tahun Ajaran"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Tahun Ajaran</SelectLabel>
																			<SelectItem value="1">2024/2025 - Ganjil</SelectItem>
																			<SelectItem value="2">2023/2024 - Genap</SelectItem>
																			<SelectItem value="3">2023/2024 - Ganjil</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="kodeKelas"
																>
																	Kode
																</Label>
																<Input
																	type="text"
																	id="kodeKelas"
																	placeholder="Kode kelas"
																	className="bg-white"
																/>
															</div>
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="jenjang"
																>
																	Jenjang
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="jenjang"
																			placeholder="Pilih Jenjang"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Jenjang</SelectLabel>
																			<SelectItem value="1">X</SelectItem>
																			<SelectItem value="2">XI</SelectItem>
																			<SelectItem value="3">XII</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="jurusan"
																>
																	Jurusan
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="jurusan"
																			placeholder="Pilih Jurusan"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Jurusan</SelectLabel>
																			<SelectItem value="1">Rekayasa Perangkat Lunak</SelectItem>
																			<SelectItem value="2">Teknik Komputer dan Jaringan</SelectItem>
																			<SelectItem value="3">Multimedia</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="namaKelas"
																>
																	Nama
																</Label>
																<Input
																	type="text"
																	id="namaKelas"
																	placeholder="Nama kelas"
																	className="bg-white"
																/>
															</div>
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="ruangan"
																>
																	Ruangan
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="ruangan"
																			placeholder="Pilih Ruangan"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Ruangan</SelectLabel>
																			<SelectItem value="1">RK-01</SelectItem>
																			<SelectItem value="2">RK-02</SelectItem>
																			<SelectItem value="3">RK-03</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="status"
																>
																	Status
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="status"
																			placeholder="Pilih Status"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Status</SelectLabel>
																			<SelectItem value="yes">Aktif</SelectItem>
																			<SelectItem value="no">Tidak Aktif</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
														</div>
														<div className="p-4 flex flex-col gap-4">
															<div className="flex justify-between items-end">
																<div>
																	<h1 className="font-semibold mb-2 text-lg text-left text-black">Tambahkan Siswa</h1>
																	<div className="flex">
																		<Input
																			type="text"
																			placeholder="Cari Siswa"
																			className="xl:w-[300px] rounded-r-none"
																		/>
																		<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
																			<Search className="text-black size-4 aspect-square p-0.5" />
																		</Button>
																	</div>
																</div>
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleTambahKelas}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Tambah"}
																	</Button>
																</AlertDialogAction>
															</div>
															<Table>
																<TableHeader>
																	<TableRow className="bg-utama/50 border border-textUtama">
																		<TableHead className="w-16 text-black font-bold text-sm text-center">&nbsp;</TableHead>
																		<TableHead className="w-[200px] text-black font-bold text-sm text-center">NAMA SISWA</TableHead>
																		<TableHead className="w-[200px] text-black font-bold text-sm text-center">NISN</TableHead>
																		<TableHead className="w-[200px] text-black font-bold text-sm text-center">NIS</TableHead>
																	</TableRow>
																</TableHeader>
																<TableBody>
																	{[...Array(10)].map((_, index) => (
																		<TableRow
																			key={index}
																			className="border-l border-r border-b border-textUtama"
																		>
																			<TableCell className="text-center border-l border-textUtama">
																				<Checkbox id="tambahSiswaCheckbox" />
																			</TableCell>
																			<TableCell className="text-center border-textUtama text-black">Tabel</TableCell>
																			<TableCell className="text-center border-textUtama text-black">Tabel</TableCell>
																			<TableCell className="text-center border-r border-textUtama text-black">Tabel</TableCell>
																		</TableRow>
																	))}
																</TableBody>
																<TableFooter className="border border-textUtama">
																	<TableRow>
																		<TableCell
																			colSpan={2}
																			className="text-xs text-black"
																		>
																			Menampilkan 9 dari 40 hasil
																		</TableCell>
																		<TableCell
																			colSpan={2}
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
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
						<div className="flex md:w-[280px] w-full">
							<Input
								type="text"
								placeholder="Cari Siswa"
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
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">TAHUN AJARAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KODE KELAS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JENJANG</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JURUSAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA KELAS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">RUANGAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(5)].map((_, index) => (
									<TableRow
										key={index}
										className="border-l border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">{index + 1}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">
											<Badge className="bg-green-500 hover:bg-green-600">Label</Badge>
										</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-xl xl:max-w-7xl p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
															<p className="text-white font-semibold">Edit Kelas</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black">
																<div className="grid grid-cols-2 xl:grid-cols-9 gap-4 px-4 py-6 bg-utama/10">
																	<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="tahunAjaran"
																		>
																			Tahun Ajaran
																		</Label>
																		<Select defaultValue="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue
																					id="tahunAjaran"
																					placeholder="Pilih Tahun Ajaran"
																				/>
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Tahun Ajaran</SelectLabel>
																					<SelectItem value="1">2024/2025 - Ganjil</SelectItem>
																					<SelectItem value="2">2023/2024 - Genap</SelectItem>
																					<SelectItem value="3">2023/2024 - Ganjil</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="kodeKelas"
																		>
																			Kode
																		</Label>
																		<Input
																			type="text"
																			id="kodeKelas"
																			placeholder="Kode kelas"
																			value="Kode kelas"
																			className="bg-white"
																		/>
																	</div>
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="jenjang"
																		>
																			Jenjang
																		</Label>
																		<Select defaultValue="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue
																					id="jenjang"
																					placeholder="Pilih Jenjang"
																				/>
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Jenjang</SelectLabel>
																					<SelectItem value="1">X</SelectItem>
																					<SelectItem value="2">XI</SelectItem>
																					<SelectItem value="3">XII</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																	<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5 overflow-hidden">
																		<Label
																			className="text-left"
																			htmlFor="jurusan"
																		>
																			Jurusan
																		</Label>
																		<Select defaultValue="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue
																					id="jurusan"
																					placeholder="Pilih Jurusan"
																				/>
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Jurusan</SelectLabel>
																					<SelectItem value="1">Rekayasa Perangkat Lunak</SelectItem>
																					<SelectItem value="2">Teknik Komputer dan Jaringan</SelectItem>
																					<SelectItem value="3">Multimedia</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="namaKelas"
																		>
																			Nama
																		</Label>
																		<Input
																			type="text"
																			id="namaKelas"
																			placeholder="Nama kelas"
																			value="X RPL"
																			className="bg-white"
																		/>
																	</div>
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="ruangan"
																		>
																			Ruangan
																		</Label>
																		<Select defaultValue="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue
																					id="ruangan"
																					placeholder="Pilih Ruangan"
																				/>
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Ruangan</SelectLabel>
																					<SelectItem value="1">RK-01</SelectItem>
																					<SelectItem value="2">RK-02</SelectItem>
																					<SelectItem value="3">RK-03</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="status"
																		>
																			Status
																		</Label>
																		<Select defaultValue="yes">
																			<SelectTrigger className="bg-white">
																				<SelectValue
																					id="status"
																					placeholder="Pilih Status"
																				/>
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Status</SelectLabel>
																					<SelectItem value="yes">Aktif</SelectItem>
																					<SelectItem value="no">Tidak Aktif</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																</div>
																<div className="p-4 flex flex-col gap-4">
																	<div className="flex justify-between items-end">
																		<div>
																			<h1 className="font-semibold mb-2 text-lg text-black">Tambahkan Siswa</h1>
																			<div className="flex">
																				<Input
																					type="text"
																					placeholder="Cari Siswa"
																					className="xl:w-[300px] rounded-r-none"
																				/>
																				<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
																					<Search className="text-black size-4 aspect-square p-0.5" />
																				</Button>
																			</div>
																		</div>
																		<AlertDialogAction asChild>
																			<Button
																				onClick={handleEditKelas}
																				className="bg-utama hover:bg-utamaHover max-w-max"
																			>
																				{loading ? <Spinner className="size-16" /> : "Simpan"}
																			</Button>
																		</AlertDialogAction>
																	</div>
																	<Table>
																		<TableHeader>
																			<TableRow className="bg-utama/50 border border-textUtama">
																				<TableHead className="w-16 text-black font-bold text-sm text-center">&nbsp;</TableHead>
																				<TableHead className="w-[200px] text-black font-bold text-sm text-center">NAMA SISWA</TableHead>
																				<TableHead className="w-[200px] text-black font-bold text-sm text-center">NISN</TableHead>
																				<TableHead className="w-[200px] text-black font-bold text-sm text-center">NIS</TableHead>
																			</TableRow>
																		</TableHeader>
																		<TableBody>
																			{[...Array(10)].map((_, index) => (
																				<TableRow
																					key={index}
																					className="border-l border-r border-b border-textUtama"
																				>
																					<TableCell className="text-center border-l border-textUtama">
																						<Checkbox id="tambahSiswaCheckbox" />
																					</TableCell>
																					<TableCell className="text-center border-textUtama text-black">Tabel</TableCell>
																					<TableCell className="text-center border-textUtama  text-black">Tabel</TableCell>
																					<TableCell className="text-center border-r border-textUtama  text-black">Tabel</TableCell>
																				</TableRow>
																			))}
																		</TableBody>
																		<TableFooter className="border border-textUtama">
																			<TableRow>
																				<TableCell
																					colSpan={2}
																					className="text-xs text-black"
																				>
																					Menampilkan 9 dari 40 hasil
																				</TableCell>
																				<TableCell
																					colSpan={2}
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
											<ButtonDelete href="/dashboard/manajemen-sekolah/manajemen-kelas">
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-l-none shadow-none">{Ikon.Hapus && <Ikon.Hapus className="text-black" />}</Button>
											</ButtonDelete>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={5}
										className="text-xs text-black"
									>
										Menampilkan 5 dari 5 hasil
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
					value="jurusan"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col gap-2">
									<p>Jenjang</p>
									<Select>
										<SelectTrigger className="xl:w-[139px] bg-white">
											<SelectValue placeholder="Pilih Jenjang" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Jenjang</SelectLabel>
												<SelectItem value="X">X</SelectItem>
												<SelectItem value="XI">XI</SelectItem>
												<SelectItem value="XII">XII</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									{/* <ButtonImport href={"/dashboard/manajemen-sekolah/manajemen-kelas"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3]">Import</Button>
									</ButtonImport> */}
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Jurusan</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Tambah Jurusan</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black p-4 flex flex-col gap-4 ">
														<div className="grid w-full items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="kodeJurusan"
															>
																Kode Jurusan
															</Label>
															<Input
																type="text"
																id="kodeJurusan"
																placeholder="Kode Jurusan"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="namaJurusan"
															>
																Nama Jurusan
															</Label>
															<Input
																type="text"
																id="namaJurusan"
																placeholder="Nama Jurusan"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="jenjang"
															>
																Jenjang
															</Label>
															<Select>
																<SelectTrigger>
																	<SelectValue
																		id="jenjang"
																		placeholder="Pilih Jenjang"
																	/>
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Jenjang</SelectLabel>
																		<SelectItem value="1">X</SelectItem>
																		<SelectItem value="2">XI</SelectItem>
																		<SelectItem value="3">XII</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="flex justify-end">
															<AlertDialogAction asChild>
																<Button
																	onClick={handleTambahJurusan}
																	className="bg-utama hover:bg-utamaHover max-w-max"
																>
																	{loading ? <Spinner className="size-16" /> : "Tambah"}
																</Button>
															</AlertDialogAction>
														</div>
													</div>
												</AlertDialogDescription>
											</AlertDialogHeader>
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
						<div className="flex md:w-[280px] w-full">
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
					<div className="overflow-auto grid grid-cols-1">
						<Table>
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KODE</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JURUSAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JENJANG</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(6)].map((item, index) => (
									<TableRow
										key={index}
										className="border-l border-r border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
															<p className="text-white font-semibold">Edit Jurusan</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 flex flex-col gap-4 ">
																<div className="grid w-full items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="kodeJurusan"
																	>
																		Kode Jurusan
																	</Label>
																	<Input
																		type="text"
																		id="kodeJurusan"
																		placeholder="Kode Jurusan"
																		value="RPL"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="namaJurusan"
																	>
																		Nama Jurusan
																	</Label>
																	<Input
																		type="text"
																		id="namaJurusan"
																		placeholder="Nama Jurusan"
																		value="Rekayasa Perangkat Lunak"
																		className="w-full overflow-hidden"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="jenjang"
																	>
																		Jenjang
																	</Label>
																	<Select defaultValue="1">
																		<SelectTrigger>
																			<SelectValue
																				id="jenjang"
																				placeholder="Pilih Jenjang"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Jenjang</SelectLabel>
																				<SelectItem value="1">X</SelectItem>
																				<SelectItem value="2">XI</SelectItem>
																				<SelectItem value="3">XII</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="flex justify-end">
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleEditJurusan}
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
											<ButtonDelete href="/dashboard/manajemen-sekolah/manajemen-kelas">
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-l-none shadow-none">{Ikon.Hapus && <Ikon.Hapus className="text-black" />}</Button>
											</ButtonDelete>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={2}
										className="text-xs text-black"
									>
										Menampilkan 5 dari 5 hasil
									</TableCell>
									<TableCell
										colSpan={2}
										className="text-right"
									>
										<div className="flex items-center justify-end gap-1">
											<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
												<ChevronLeft className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
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

				{/* MATA PELAJARAN */}
				<TabsContent
					value="mapel"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col xl:flex-row gap-6">
									<div className="flex flex-col gap-2 w-[140px]">
										<p>Jenjang</p>
										<Select>
											<SelectTrigger className="bg-white">
												<SelectValue placeholder="Pilih Jenjang" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Jenjang</SelectLabel>
													<SelectItem value="1">X</SelectItem>
													<SelectItem value="2">XI</SelectItem>
													<SelectItem value="3">XII</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
									<div className="flex flex-col gap-2 w-[220px]">
										<p>Jurusan</p>
										<Select>
											<SelectTrigger className="bg-white">
												<SelectValue placeholder="Pilih Jurusan" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Jurusan</SelectLabel>
													<SelectItem value="1">Rekayasa Perangkat Lunak</SelectItem>
													<SelectItem value="3">Multimedia</SelectItem>
													<SelectItem value="3">Ilmu Komputer</SelectItem>
													<SelectItem value="2">Teknik Komputer Jaringan</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
								<div className="flex gap-2">
									<ButtonImport href={"/dashboard/manajemen-sekolah/manajemen-kelas"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
									</ButtonImport>
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Mapel</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
													<p className="text-white font-semibold">Tambah Mata Pelajaran</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black p-4 space-y-6">
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="kodeMapel">Kode Mata Pelajaran</Label>
															<Input
																type="text"
																id="kodeMapel"
																placeholder="Kode Mata Pelajaran"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="namaMapel">Nama Mata Pelajaran</Label>
															<Input
																type="text"
																id="namaMapel"
																placeholder="Nama Mata Pelajaran"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="jenjang">Jenjang</Label>
															<Select>
																<SelectTrigger className="bg-white">
																	<SelectValue
																		id="jenjang"
																		placeholder="Pilih Jenjang"
																	/>
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Jenjang</SelectLabel>
																		<SelectItem value="1">X</SelectItem>
																		<SelectItem value="2">XI</SelectItem>
																		<SelectItem value="3">XII</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="jurusan">Jurusan</Label>
															<Select>
																<SelectTrigger className="bg-white">
																	<SelectValue
																		id="jurusan"
																		placeholder="Pilih Jurusan"
																	/>
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Jurusan</SelectLabel>
																		<SelectItem value="1">Rekayasa Perangkat Lunak</SelectItem>
																		<SelectItem value="2">Ilmu Komputer</SelectItem>
																		<SelectItem value="3">Multimedia</SelectItem>
																		<SelectItem value="4">Teknik Komputer Jaringan</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="guru">Guru</Label>
															<Select>
																<SelectTrigger className="bg-white">
																	<SelectValue
																		id="guru"
																		placeholder="Pilih Guru"
																	/>
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Guru</SelectLabel>
																		<SelectItem value="1">Andi S.Kom</SelectItem>
																		<SelectItem value="2">Gunawan, S.T</SelectItem>
																		<SelectItem value="3">Budi, S.Pd</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="flex justify-end">
															<AlertDialogAction asChild>
																<Button
																	onClick={handleTambah}
																	className="bg-utama hover:bg-utamaHover max-w-max"
																>
																	{loading ? <Spinner className="size-16" /> : "Tambah"}
																</Button>
															</AlertDialogAction>
														</div>
													</div>
												</AlertDialogDescription>
											</AlertDialogHeader>
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col gap-2 xl:flex-row xl:justify-between">
						<div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
							<div className="flex w-[280px]">
								<Input
									type="text"
									placeholder="Cari Mata Pelajaran"
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
					</div>
					<div className="overflow-auto grid grid-cols-1">
						<Table>
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KODE</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">MATA PELAJARAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JENJANG</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JURUSAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(5)].map((_, index) => (
									<TableRow
										key={index}
										className="border-l border-r border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">{index + 1}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
															<p className="text-white font-semibold">Edit Mata Pelajaran</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 space-y-6">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="kodeMapel">Kode Mata Pelajaran</Label>
																	<Input
																		type="text"
																		id="kodeMapel"
																		placeholder="Kode Mata Pelajaran"
																		value="MTK"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="namaMapel">Nama Mata Pelajaran</Label>
																	<Input
																		type="text"
																		id="namaMapel"
																		placeholder="Nama Mata Pelajaran"
																		value="Matematika"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="jenjang">Jenjang</Label>
																	<Select defaultValue="1">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="jenjang"
																				placeholder="Pilih Jenjang"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Jenjang</SelectLabel>
																				<SelectItem value="1">X</SelectItem>
																				<SelectItem value="2">XI</SelectItem>
																				<SelectItem value="3">XII</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="jurusan">Jurusan</Label>
																	<Select defaultValue="1">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="jurusan"
																				placeholder="Pilih Jurusan"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Jurusan</SelectLabel>
																				<SelectItem value="1">Rekayasa Perangkat Lunak</SelectItem>
																				<SelectItem value="3">Multimedia</SelectItem>
																				<SelectItem value="3">Ilmu Komputer</SelectItem>
																				<SelectItem value="2">Teknik Komputer Jaringan</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="guru">Guru</Label>
																	<Select defaultValue="1">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="guru"
																				placeholder="Pilih Guru"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Guru</SelectLabel>
																				<SelectItem value="1">Andi S.Kom</SelectItem>
																				<SelectItem value="2">Gunawan, S.T</SelectItem>
																				<SelectItem value="3">Budi, S.Pd</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="flex justify-end">
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleEdit}
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
											<ButtonDelete href="/dashboard/manajemen-sekolah/manajemen-kelas">
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-l-none shadow-none">{Ikon.Hapus && <Ikon.Hapus className="text-black" />}</Button>
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
										Menampilkan 5 dari 5 hasil
									</TableCell>
									<TableCell
										colSpan={2}
										className="text-right"
									>
										<div className="flex items-center justify-end gap-1">
											<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
												<ChevronLeft className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
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
