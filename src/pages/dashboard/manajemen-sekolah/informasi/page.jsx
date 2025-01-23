"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { toast } from "sonner";
import ButtonDelete from "@/components/button-delete";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import * as Ikon from "@/components/icons/table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageManajemenInformasi() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const [statusesMading, setStatusesMading] = useState(Array(6).fill(false));
	const [statusesArtikel, setStatusesArtikel] = useState(Array(6).fill(false));
	const [selectedOption, setSelectedOption] = useState("semuaMurid");

	const toggleStatusMading = (index) => {
		setStatusesMading((prevStatuses) => {
			const newStatuses = [...prevStatuses];
			const newStatus = !newStatuses[index];
			newStatuses[index] = newStatus;
			toast.success(newStatus ? `Mading ${index + 1} diaktifkan.` : `Mading ${index + 1} dinonaktifkan.`);
			return newStatuses;
		});
	};

	const toggleStatusArtikel = (index) => {
		setStatusesArtikel((prevStatuses) => {
			const newStatuses = [...prevStatuses];
			const newStatus = !newStatuses[index];
			newStatuses[index] = newStatus;
			toast.success(newStatus ? `Artikel ${index + 1} diaktifkan.` : `Artikel ${index + 1} dinonaktifkan.`);
			return newStatuses;
		});
	};

	const handleAddPengumuman = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan pengumuman.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 250);
	};

	const handleEditPengumuman = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit pengumuman.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 250);
	};

	const handleTambahMading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan mading.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 250);
	};

	const handleTambahArtikel = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan artikel.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 1000);
	};

	const handleEditMading = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil memperbaharui mading.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 1000);
	};

	const handleEditArtikel = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil memperbaharui artikel.");
			navigate("/dashboard/manajemen-sekolah/informasi");
		}, 1000);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Informasi</h1>
			<Tabs defaultValue="pengumuman">
				<TabsList className="flex flex-row gap-2 justify-start">
					<TabsTrigger
						value="pengumuman"
						className="w-full md:w-[200px]"
					>
						Pengumuman
					</TabsTrigger>
					<TabsTrigger
						value="mading"
						className="w-full md:w-[140px]"
					>
						Mading
					</TabsTrigger>
					<TabsTrigger
						value="artikel"
						className="w-full md:w-[140px]"
					>
						Artikel
					</TabsTrigger>
				</TabsList>

				{/* PENGUMUMAN */}

				<TabsContent
					value="pengumuman"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
								<div className="flex flex-col gap-2 w-full sm:w-[220px]">
									<p>Ditunjukan Untuk</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih</SelectLabel>
												<SelectItem value="semuaMurid">Semua Murid</SelectItem>
												<SelectItem value="jenjang">Jejang</SelectItem>
												<SelectItem value="kelas">Kelas</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Pengumuman</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-xl xl:max-w-2xl p-0 overflow-auto border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Buat Pengumuman</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black p-4 flex flex-col gap-4 ">
														<form
															action=""
															className="flex flex-col gap-6 text-black"
														>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="judul">Judul</Label>
																<Input
																	type="text"
																	id="judul"
																	placeholder="Text"
																/>
															</div>

															{/* Ditunjukan Untuk */}
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="untuk">Ditunjukan Untuk</Label>
																<Select onValueChange={(value) => setSelectedOption(value)}>
																	<SelectTrigger className="w-full">
																		<SelectValue placeholder="Semua Murid" />
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Pilih</SelectLabel>
																			<SelectItem value="semuaMurid">Semua Murid</SelectItem>
																			<SelectItem value="jenjang">Jenjang</SelectItem>
																			<SelectItem value="kelas">Kelas</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>

															{/* Jenjang */}
															{selectedOption === "jenjang" && (
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="jenjang">Jenjang</Label>
																	<Select>
																		<SelectTrigger className="w-full">
																			<SelectValue placeholder="Pilih Jenjang" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Jenjang</SelectLabel>
																				<SelectItem value="X">X</SelectItem>
																				<SelectItem value="XI">XI</SelectItem>
																				<SelectItem value="XII">XII</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
															)}

															{/* Kelas */}
															{selectedOption === "kelas" && (
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="kelas">Kelas</Label>
																	<Select>
																		<SelectTrigger className="w-full">
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
															)}

															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="judul">Isi Pengumuman</Label>
																<Textarea placeholder="Text" />
															</div>
															<div className="flex flex-row justify-end">
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleAddPengumuman}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Tambah"}
																	</Button>
																</AlertDialogAction>
															</div>
														</form>
													</div>
												</AlertDialogDescription>
											</AlertDialogHeader>
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
						<div className="flex w-full sm:w-[280px]">
							<Input
								type="text"
								placeholder="Cari Pengumuman"
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
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JUDUL</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">PENGUMUMAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">DITUNJUKAN UNTUK</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(5)].map((_, index) => (
									<TableRow
										key={index}
										className="border-l border-b border-textUtama"
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
												<AlertDialogContent className="max-w-xl xl:max-w-2xl p-0 overflow-hidden border-none">
													<AlertDialogHeader className="">
														<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
															<p className="text-white font-semibold">Edit Pengumuman</p>
															<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																<X />
															</AlertDialogCancel>
														</AlertDialogTitle>
														<AlertDialogDescription asChild>
															<div className="text-black p-4 flex flex-col gap-4 ">
																<form
																	action=""
																	className="flex flex-col gap-6 text-black"
																>
																	<div className="grid w-full items-center gap-1.5">
																		<Label htmlFor="judul">Judul</Label>
																		<Input
																			type="text"
																			id="judul"
																			placeholder="Text"
																			defaultValue="Selamat Hari Guru"
																		/>
																	</div>
																	{/* Ditunjukan Untuk */}
																	<div className="grid w-full items-center gap-1.5">
																		<Label htmlFor="untuk">Ditunjukan Untuk</Label>
																		<Select onValueChange={(value) => setSelectedOption(value)}>
																			<SelectTrigger className="w-full">
																				<SelectValue placeholder="Semua Murid" />
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Pilih</SelectLabel>
																					<SelectItem value="semuaMurid">Semua Murid</SelectItem>
																					<SelectItem value="jenjang">Jenjang</SelectItem>
																					<SelectItem value="kelas">Kelas</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>

																	{/* Jenjang */}
																	{selectedOption === "jenjang" && (
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="jenjang">Jenjang</Label>
																			<Select>
																				<SelectTrigger className="w-full">
																					<SelectValue placeholder="Pilih Jenjang" />
																				</SelectTrigger>
																				<SelectContent>
																					<SelectGroup>
																						<SelectLabel>Pilih Jenjang</SelectLabel>
																						<SelectItem value="X">X</SelectItem>
																						<SelectItem value="XI">XI</SelectItem>
																						<SelectItem value="XII">XII</SelectItem>
																					</SelectGroup>
																				</SelectContent>
																			</Select>
																		</div>
																	)}

																	{/* Kelas */}
																	{selectedOption === "kelas" && (
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="kelas">Kelas</Label>
																			<Select>
																				<SelectTrigger className="w-full">
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
																	)}
																	<div className="grid w-full items-center gap-1.5">
																		<Label htmlFor="judul">Isi Pengumuman</Label>
																		<Textarea
																			placeholder="Type your message here."
																			defaultValue="Selamat memperingati hari guru."
																		/>
																	</div>
																	<div className="flex flex-row justify-end">
																		<AlertDialogAction asChild>
																			<Button
																				onClick={handleEditPengumuman}
																				className="bg-utama hover:bg-utamaHover max-w-max"
																			>
																				{loading ? <Spinner className="size-16" /> : "Simpan"}
																			</Button>
																		</AlertDialogAction>
																	</div>
																</form>
															</div>
														</AlertDialogDescription>
													</AlertDialogHeader>
												</AlertDialogContent>
											</AlertDialog>
											<ButtonDelete href="/dashboard/manajemen-sekolah/informasi">
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-l-none shadow-none">{Ikon.Hapus && <Ikon.Hapus className="text-black" />}</Button>
											</ButtonDelete>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={3}
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

				{/* MADING */}

				<TabsContent
					value="mading"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
								<div className="flex flex-col gap-2 w-full sm:w-[140px]">
									<p>Status</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Status</SelectLabel>
												<SelectItem value="aktif">Aktif</SelectItem>
												<SelectItem value="tidak_aktif">Tidak Aktif</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Mading</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-2xl p-0 overflow-hidden border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Tambah Mading</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black p-4 flex flex-col gap-4 ">
														<div className="grid w-full items-center gap-1.5">
															<Label
																htmlFor="judul"
																className="text-left"
															>
																Judul
															</Label>
															<Input
																type="text"
																id="judul"
																placeholder="Judul"
															/>
														</div>
														<div className="grid w-full max-w items-center gap-1.5">
															<Label
																htmlFor="gambar"
																className="text-left"
															>
																Gambar
															</Label>
															<div className="flex flex-row">
																<label
																	htmlFor="picture"
																	className="cursor-pointer bg-utama/50 text-blue-900 w-2/6 py-1.5 px-4 rounded-l-md  text-center hover:bg-utama hover:text-white duration-100 font-medium"
																>
																	Pilih File
																</label>
																<label
																	htmlFor="picture"
																	className="cursor-pointer text-black font-medium py-1.5 px-4 border-utama/50 border rounded-r-md w-2/3"
																>
																	No File Choosen
																</label>
															</div>
															<Input
																id="picture"
																type="file"
																className="hidden"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label
																htmlFor="deskripsi"
																className="text-left"
															>
																Deskripsi
															</Label>
															<Textarea placeholder="Text" />
														</div>
														<div className="flex gap-4 justify-end">
															<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>

															<AlertDialogAction asChild>
																<Button
																	onClick={handleTambahMading}
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
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
						<div className="flex w-full sm:w-[280px]">
							<Input
								type="text"
								placeholder="Cari Mading"
								className=" rounded-r-none"
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
					<div className="overflow-auto grid grid-cols-1 max-w-full gap-4">
						{[...Array(5)].map((_, index) => (
							<div
								key={index}
								className="border shadow-sm bg-[#E9EEF2] rounded-md grid grid-cols-2 gap-6 h-auto p-4"
							>
								<div className="grid grid-cols-2 gap-4">
									<div className="w-full h-full bg-[#D9D9D9] shadow-sm"></div>
									<div className="text-center flex flex-col justify-start items-start gap-2">
										<h1 className="text-xl text-[#0987A0] font-bold">Lomba Sekolah</h1>
										<p className="text-xs text-textUtama">Dibuat 01 Juni 2024</p>
										{/* DETAIL */}
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Lihat Mading</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
														<p className="text-white font-semibold">Lihat Mading</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black flex flex-col">
															<div className="flex flex-col items-center px-8">
																<img
																	src="/mading.png"
																	alt="artikel"
																	width={1000}
																	height={1000}
																	className=""
																/>
															</div>
															<div className="grid w-full items-center gap-1.5 p-2 px-3">
																<h1 className="text-left text-black text-xl font-bold">Judul Mading</h1>
																<p className="text-left text-sm text-black">Deskripsi</p>
															</div>
														</div>
													</AlertDialogDescription>
												</AlertDialogHeader>
											</AlertDialogContent>
										</AlertDialog>
									</div>
								</div>
								<div className="text-center flex justify-end items-center">
									<div className="text-center flex flex-col justify-center items-end gap-2 w-[118px]">
										{/* EDIT */}
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="bg-[#4299E1] hover:bg-[#3a88c7] w-full">Edit</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-2xl p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
														<p className="text-white font-semibold">Edit Mading</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<form className="text-black px-4 py-2 flex flex-col gap-4 ">
															<div className="grid w-full items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="judul"
																>
																	Judul
																</Label>
																<Input
																	type="text"
																	id="judul"
																	placeholder="Judul Mading"
																	defaultValue="Judul Mading"
																/>
															</div>
															<div className="flex flex-col items-start gap-2">
																<Label
																	htmlFor="gambar"
																	className="text-left"
																>
																	Gambar
																</Label>
																<img
																	src="/mading.png"
																	alt="artikel"
																	width={1000}
																	height={1000}
																	className="h-40 w-auto"
																/>
															</div>

															<div className="grid w-full max-w items-center gap-1.5">
																<div className="flex flex-row">
																	<label
																		htmlFor="picture"
																		className="cursor-pointer bg-utama/50 text-blue-900 w-2/6 py-1.5 px-4 rounded-l-md  text-center hover:bg-utama hover:text-white duration-100 font-medium"
																	>
																		Pilih File
																	</label>
																	<label
																		htmlFor="picture"
																		className="cursor-pointer text-black font-medium py-1.5 px-4 border-utama/50 border rounded-r-md w-2/3"
																	>
																		No File Choosen
																	</label>
																</div>
																<Input
																	id="picture"
																	type="file"
																	className="hidden"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label
																	htmlFor="deskripsi"
																	className="text-left"
																>
																	Deskripsi
																</Label>
																<Textarea
																	placeholder="Text"
																	defaultValue="Liburan telah usai, saatnya kembali ke sekolah!"
																/>
															</div>
															<div className="flex gap-4 justify-end">
																<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>

																<AlertDialogAction asChild>
																	<Button
																		onClick={handleEditMading}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Simpan"}
																	</Button>
																</AlertDialogAction>
															</div>
														</form>
													</AlertDialogDescription>
												</AlertDialogHeader>
											</AlertDialogContent>
										</AlertDialog>
										{/* AKTIFKAN */}
										{statusesMading[index] ? (
											<Button
												className="bg-[#90CDF4] hover:bg-[#5fc1fe] text-[#2C5282] w-full"
												onClick={() => toggleStatusMading(index)}
											>
												Aktifkan
											</Button>
										) : (
											<Button
												className="bg-[#EDFDFD] hover:bg-[#6ed8d8] text-[#00A3C4] w-full"
												onClick={() => toggleStatusMading(index)}
											>
												Non-Aktifkan
											</Button>
										)}
										{/* HAPUS */}
										<ButtonDelete href="/dashboard/manajemen-sekolah/informasi">
											<Button className="bg-red-500 hover:bg-red-600 text-white w-full">Hapus</Button>
										</ButtonDelete>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabsContent>

				{/* ARTIKEL */}

				<TabsContent
					value="artikel"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
								<div className="flex flex-col gap-2 w-full sm:w-[140px]">
									<p>Status</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Status</SelectLabel>
												<SelectItem value="aktif">Aktif</SelectItem>
												<SelectItem value="tidak_aktif">Tidak Aktif</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Artikel</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-2xl p-0 overflow-hidden border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Tambah Artikel</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black p-4 flex flex-col gap-4 ">
														<div className="grid w-full items-center gap-1.5">
															<Label
																htmlFor="judul"
																className="text-left"
															>
																Judul
															</Label>
															<Input
																type="text"
																id="judul"
																placeholder="Judul"
															/>
														</div>
														<div className="grid w-full max-w items-center gap-1.5">
															<Label
																htmlFor="gambar"
																className="text-left"
															>
																Gambar
															</Label>
															<div className="flex flex-row">
																<label
																	htmlFor="picture"
																	className="cursor-pointer bg-utama/50 text-blue-900 w-2/6 py-1.5 px-4 rounded-l-md  text-center hover:bg-utama hover:text-white duration-100 font-medium"
																>
																	Pilih File
																</label>
																<label
																	htmlFor="picture"
																	className="cursor-pointer text-black font-medium py-1.5 px-4 border-utama/50 border rounded-r-md w-2/3"
																>
																	No File Choosen
																</label>
															</div>
															<Input
																id="picture"
																type="file"
																className="hidden"
															/>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label
																htmlFor="deskripsi"
																className="text-left"
															>
																Deskripsi
															</Label>
															<Textarea placeholder="Text" />
														</div>
														<div className="flex gap-4 justify-end">
															<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>

															<AlertDialogAction asChild>
																<Button
																	onClick={handleTambahArtikel}
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
								</div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
						<div className="flex w-full sm:w-[280px]">
							<Input
								type="text"
								placeholder="Cari Artikel"
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
					<div className="overflow-auto grid grid-cols-1 max-w-full gap-4">
						{[...Array(5)].map((_, index) => (
							<div
								key={index}
								className="border shadow-sm bg-[#E9EEF2] rounded-md grid grid-cols-2 gap-6 h-auto p-4"
							>
								<div className="text-center flex flex-col justify-center items-start gap-2">
									<h1 className="text-xl text-[#0987A0] font-bold">Artikel</h1>
									<p className="text-xs text-textUtama">Dibuat 01 Juni 2024</p>
									{/* DETAIL */}
									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Lihat Artikel</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
											<AlertDialogHeader className="">
												<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
													<p className="text-white font-semibold">Artikel</p>
													<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
														<X />
													</AlertDialogCancel>
												</AlertDialogTitle>
												<AlertDialogDescription asChild>
													<div className="text-black flex flex-col">
														<div className="flex flex-col items-center px-8">
															<img
																src="/artikel.png"
																alt="artikel"
																width={1000}
																height={1000}
															/>
														</div>
														<div className="grid w-full items-center gap-1.5  p-2 px-3">
															<h1 className="text-left text-black text-xl font-bold">Judul Artikel</h1>
															<p className="text-left text-sm text-black">Deskripsi</p>
														</div>
													</div>
												</AlertDialogDescription>
											</AlertDialogHeader>
										</AlertDialogContent>
									</AlertDialog>
								</div>
								<div className="text-center flex justify-end items-center">
									<div className="text-center flex flex-col justify-center items-end gap-2 w-[118px]">
										{/* EDIT */}
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="bg-[#4299E1] hover:bg-[#3a88c7] w-full">Edit</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-2xl p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
														<p className="text-white font-semibold">Edit Artikel</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<form className="text-black px-4 py-2 flex flex-col gap-4 ">
															<div className="grid w-full items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="judul"
																>
																	Judul
																</Label>
																<Input
																	type="text"
																	id="judul"
																	placeholder="Judul Artikel"
																	defaultValue="Judul Artikel"
																/>
															</div>
															<div className="flex flex-col items-start gap-2">
																<Label
																	htmlFor="gambar"
																	className="text-left"
																>
																	Gambar
																</Label>
																<img
																	src="/artikel.png"
																	alt="artikel"
																	width={1000}
																	height={1000}
																	className="h-40 w-auto"
																/>
															</div>

															<div className="grid w-full max-w items-center gap-1.5">
																<div className="flex flex-row">
																	<label
																		htmlFor="picture"
																		className="cursor-pointer bg-utama/50 text-blue-900 w-2/6 py-1.5 px-4 rounded-l-md  text-center hover:bg-utama hover:text-white duration-100 font-medium"
																	>
																		Pilih File
																	</label>
																	<label
																		htmlFor="picture"
																		className="cursor-pointer text-black font-medium py-1.5 px-4 border-utama/50 border rounded-r-md w-2/3"
																	>
																		No File Choosen
																	</label>
																</div>
																<Input
																	id="picture"
																	type="file"
																	className="hidden"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label
																	htmlFor="deskripsi"
																	className="text-left"
																>
																	Deskripsi
																</Label>
																<Textarea
																	placeholder="Text"
																	defaultValue="Pentingnya pendidikan digital untuk meninngkatkan kemampuan."
																/>
															</div>
															<div className="flex gap-4 justify-end">
																<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>

																<AlertDialogAction asChild>
																	<Button
																		onClick={handleEditArtikel}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Simpan"}
																	</Button>
																</AlertDialogAction>
															</div>
														</form>
													</AlertDialogDescription>
												</AlertDialogHeader>
											</AlertDialogContent>
										</AlertDialog>
										{/* AKTIFKAN */}
										{statusesArtikel[index] ? (
											<Button
												className="bg-[#90CDF4] hover:bg-[#5fc1fe] text-[#2C5282] w-full"
												onClick={() => toggleStatusArtikel(index)}
											>
												Aktifkan
											</Button>
										) : (
											<Button
												className="bg-[#EDFDFD] hover:bg-[#6ed8d8] text-[#00A3C4] w-full"
												onClick={() => toggleStatusArtikel(index)}
											>
												Non-Aktifkan
											</Button>
										)}
										{/* HAPUS */}
										<ButtonDelete href="/dashboard/manajemen-sekolah/informasi">
											<Button className="bg-red-500 hover:bg-red-600 text-white w-full">Hapus</Button>
										</ButtonDelete>
									</div>
								</div>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
