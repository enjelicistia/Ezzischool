"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import * as Ikon from "@/components/icons/table";
import ButtonDelete from "@/components/button-delete";
import ButtonImport from "@/components/button-import";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageEkstrakurikuler() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan ekstrakurikuler.");
			navigate("/dashboard/manajemen-sekolah/ekstrakurikuler");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit ekstrakurikuler.");
			navigate("/dashboard/manajemen-sekolah/ekstrakurikuler");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Ekstrakurikuler</h1>
			<div className="space-y-4">
				<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
					<CardHeader>
						<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
							<div className="flex flex-col xl:flex-row gap-4">
								<div className="flex flex-col gap-2 w-full lg:w-[220px]">
									<p>Penanggung Jawab</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Penanggung Jawab" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Penanggung Jawab</SelectLabel>
												<SelectItem value="1">Pak Budi, S.Kom</SelectItem>
												<SelectItem value="2">Pak Wawan, S.T</SelectItem>
												<SelectItem value="3">Ibu Putri, S.Kom</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2 w-[140px]">
									<p>Hari</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Hari" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Hari</SelectLabel>
												<SelectItem value="1">Senin</SelectItem>
												<SelectItem value="2">Selasa</SelectItem>
												<SelectItem value="3">Rabu</SelectItem>
												<SelectItem value="4">Kamis</SelectItem>
												<SelectItem value="5">Jumat</SelectItem>
												<SelectItem value="6">Sabtu</SelectItem>
												<SelectItem value="7">Minggu</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex gap-2">
								<ButtonImport href={"/dashboard/manajemen-sekolah/ekstrakurikuler"}>
									<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
								</ButtonImport>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Ekskul</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Ekstrakurikuler</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black">
													<div className="grid grid-cols-2 xl:grid-cols-8 gap-4 px-4 py-6 bg-utama/10">
														<div className="grid w-full max-w-sm items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="namaEkskul"
															>
																Nama
															</Label>
															<Input
																type="text"
																id="namaEkskul"
																placeholder="Nama Ekskul"
																className="bg-white"
															/>
														</div>
														<div className="grid w-full max-w-sm items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="hari"
															>
																Hari
															</Label>
															<Select>
																<SelectTrigger className="xl:w-[120px] bg-white">
																	<SelectValue placeholder="Pilih Hari" />
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Hari</SelectLabel>
																		<SelectItem value="1">Senin</SelectItem>
																		<SelectItem value="2">Selasa</SelectItem>
																		<SelectItem value="3">Rabu</SelectItem>
																		<SelectItem value="4">Kamis</SelectItem>
																		<SelectItem value="5">Jumat</SelectItem>
																		<SelectItem value="6">Sabtu</SelectItem>
																		<SelectItem value="7">Minggu</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="grid w-full max-w-sm items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="jamMulai"
															>
																Jam Mulai
															</Label>
															<Input
																type="text"
																id="jamMulai"
																placeholder="00:00"
																className="bg-white"
															/>
														</div>
														<div className="grid w-full max-w-sm items-center gap-1.5">
															<Label
																className="text-left"
																htmlFor="jamSelesai"
															>
																Jam Selesai
															</Label>
															<Input
																type="text"
																id="jamSelesai"
																placeholder="00:00"
																className="bg-white"
															/>
														</div>
														<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="penanggungJawab"
																>
																	Penanggung Jawab
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue placeholder="Pilih Penanggung Jawab" />
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Penanggung Jawab</SelectLabel>
																			<SelectItem value="1">Pak Budi, S.Kom</SelectItem>
																			<SelectItem value="2">Pak Wawan, S.T</SelectItem>
																			<SelectItem value="3">Ibu Putri, S.Kom</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
														</div>
														<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
															<div className="grid w-full max-w-sm items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="ruangan"
																>
																	Ruangan
																</Label>
																<Select>
																	<SelectTrigger className="bg-white">
																		<SelectValue placeholder="Pilih Ruangan" />
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Ruangan</SelectLabel>
																			<SelectItem value="1">Indoor</SelectItem>
																			<SelectItem value="2">Outdoor</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
														</div>
													</div>
													<div className="p-4 flex flex-col gap-4">
														<div className="flex justify-between items-end">
															<div className="xl:w-[280px] ">
																<h1 className="font-semibold mb-2 text-lg text-left text-black">Tambahkan Siswa</h1>
																<div className="flex">
																	<Input
																		type="text"
																		placeholder="Cari Siswa"
																		className="rounded-r-none"
																	/>
																	<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
																		<Search className="text-black size-4 aspect-square p-0.5" />
																	</Button>
																</div>
															</div>
															<AlertDialogAction asChild>
																<Button
																	onClick={handleTambah}
																	className="bg-utama hover:bg-utamaHover max-w-max"
																>
																	{loading ? <Spinner className="size-16" /> : "Tambah"}
																</Button>
															</AlertDialogAction>
														</div>
														<Table>
															<TableHeader>
																<TableRow className="bg-utama/50 border border-textUtama">
																	<TableHead className="w-16 text-black font-bold text-sm text-center text-nowrap">&nbsp;</TableHead>
																	<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NAMA SISWA</TableHead>
																	<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NISN</TableHead>
																	<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NIS</TableHead>
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
																		<TableCell className="text-center border-textUtama text-black font-semibold">Tabel</TableCell>
																		<TableCell className="text-center border-textUtama text-black font-semibold">Tabel</TableCell>
																		<TableCell className="text-center border-r border-textUtama text-black font-semibold">Tabel</TableCell>
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
				<div className="flex flex-col gap-2 xl:flex-row xl:justify-between">
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-6">
						<div className="flex w-full lg:w-[280px]">
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
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">NO</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">EXTRAKURIKULER</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">HARI</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">WAKTU</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">PENANGGUNG JAWAB</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">RUANGAN</TableHead>
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
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-r border-textUtama text-nowrap">
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Ekstrakurikuler</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black">
															<div className="grid grid-cols-2 xl:grid-cols-8 gap-4 px-4 py-6 bg-utama/10">
																<div className="grid w-full max-w-sm items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="namaEkskul"
																	>
																		Nama
																	</Label>
																	<Input
																		type="text"
																		id="namaEkskul"
																		placeholder="Nama Ekskul"
																		className="bg-white"
																		value="Pramuka"
																	/>
																</div>
																<div className="grid w-full max-w-sm items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="hari"
																	>
																		Hari
																	</Label>
																	<Select value="2">
																		<SelectTrigger className="xl:w-[120px] bg-white">
																			<SelectValue placeholder="Pilih Hari" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Hari</SelectLabel>
																				<SelectItem value="1">Senin</SelectItem>
																				<SelectItem value="2">Selasa</SelectItem>
																				<SelectItem value="3">Rabu</SelectItem>
																				<SelectItem value="4">Kamis</SelectItem>
																				<SelectItem value="5">Jumat</SelectItem>
																				<SelectItem value="6">Sabtu</SelectItem>
																				<SelectItem value="7">Minggu</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full max-w-sm items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="jamMulai"
																	>
																		Jam Mulai
																	</Label>
																	<Input
																		type="text"
																		id="jamMulai"
																		placeholder="00:00"
																		className="bg-white"
																		value="14:00"
																	/>
																</div>
																<div className="grid w-full max-w-sm items-center gap-1.5">
																	<Label
																		className="text-left"
																		htmlFor="jamSelesai"
																	>
																		Jam Selesai
																	</Label>
																	<Input
																		type="text"
																		id="jamSelesai"
																		placeholder="00:00"
																		className="bg-white"
																		value="16:00"
																	/>
																</div>
																<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="penanggungJawab"
																		>
																			Penanggung Jawab
																		</Label>
																		<Select value="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue placeholder="Pilih Penanggung Jawab" />
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Penanggung Jawab</SelectLabel>
																					<SelectItem value="1">Pak Budi, S.Kom</SelectItem>
																					<SelectItem value="2">Pak Wawan, S.T</SelectItem>
																					<SelectItem value="3">Ibu Putri, S.Kom</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																</div>
																<div className="xl:col-span-2 grid w-full max-w-sm items-center gap-1.5">
																	<div className="grid w-full max-w-sm items-center gap-1.5">
																		<Label
																			className="text-left"
																			htmlFor="ruangan"
																		>
																			Ruangan
																		</Label>
																		<Select value="1">
																			<SelectTrigger className="bg-white">
																				<SelectValue placeholder="Pilih Ruangan" />
																			</SelectTrigger>
																			<SelectContent>
																				<SelectGroup>
																					<SelectLabel>Ruangan</SelectLabel>
																					<SelectItem value="1">Indoor</SelectItem>
																					<SelectItem value="2">Outdoor</SelectItem>
																				</SelectGroup>
																			</SelectContent>
																		</Select>
																	</div>
																</div>
															</div>
															<div className="p-4 flex flex-col gap-4">
																<div className="flex justify-between items-end">
																	<div className="xl:w-[280px] ">
																		<h1 className="font-semibold mb-2 text-lg text-left text-black">Tambahkan Siswa</h1>
																		<div className="flex">
																			<Input
																				type="text"
																				placeholder="Cari Siswa"
																				className="rounded-r-none"
																			/>
																			<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
																				<Search className="text-black size-4 aspect-square p-0.5" />
																			</Button>
																		</div>
																	</div>
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleEdit}
																			className="bg-utama hover:bg-utamaHover max-w-max"
																		>
																			{loading ? <Spinner className="size-16" /> : "Simpan"}
																		</Button>
																	</AlertDialogAction>
																</div>
																<Table>
																	<TableHeader>
																		<TableRow className="bg-utama/50 border border-textUtama">
																			<TableHead className="w-16 text-black font-bold text-sm text-center text-nowrap">&nbsp;</TableHead>
																			<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NAMA SISWA</TableHead>
																			<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NISN</TableHead>
																			<TableHead className="w-[200px] text-black font-bold text-sm text-center text-nowrap">NIS</TableHead>
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
																				<TableCell className="text-center border-textUtama text-black font-semibold">Tabel</TableCell>
																				<TableCell className="text-center border-textUtama text-black font-semibold">Tabel</TableCell>
																				<TableCell className="text-center border-r border-textUtama text-black font-semibold">Tabel</TableCell>
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
										<ButtonDelete href="/dashboard/manajemen-sekolah/ekstrakurikuler">
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
			</div>
		</div>
	);
}
