"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Ellipsis, Search, X } from "lucide-react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import ButtonDelete from "@/components/button-delete";
import ButtonImport from "@/components/button-import";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

const data = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];

export default function PageJadwal() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan jadwal.");
			navigate("/dashboard/manajemen-sekolah/jadwal");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit jadwal.");
			navigate("/dashboard/manajemen-sekolah/jadwal");
		}, 250);
	};

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport Excel.");
			navigate("/dashboard/manajemen-sekolah/jadwal");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white gap-4 flex flex-col">
			<h1 className="font-bold text-2xl ">Jadwal</h1>
			<div className="flex flex-col gap-2">
				<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
					<CardHeader>
						<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
							<div className="flex flex-col xl:flex-row gap-4">
								<div className="flex flex-col gap-2 w-[140px]">
									<p>Kelas</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Kelas" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Kelas</SelectLabel>
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
								<div className="flex flex-col gap-2">
									<p>Guru</p>
									<Select>
										<SelectTrigger className="xl:w-[220px] bg-white">
											<SelectValue placeholder="Pilih Guru" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih Guru</SelectLabel>
												<SelectItem value="1">Andi, S.Kom</SelectItem>
												<SelectItem value="2">Gunawan, S.Kom</SelectItem>
												<SelectItem value="2">Budi, S.Pd</SelectItem>
												<SelectItem value="3">Dino</SelectItem>
												<SelectItem value="3">Mingyu</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2">
									<p>Mata Pelajaran</p>
									<Select>
										<SelectTrigger className="xl:w-[220px] bg-white">
											<SelectValue placeholder="Pilih Mata Pelajaran" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih Mata Pelajaran</SelectLabel>
												<SelectItem value="1">Matematika</SelectItem>
												<SelectItem value="2">Fisika</SelectItem>
												<SelectItem value="3">Praktik Komputer</SelectItem>
												<SelectItem value="3">Bahasa Inggris</SelectItem>
												<SelectItem value="3">Algoritma</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex gap-2">
								<ButtonImport href={"/dashboard/manajemen-sekolah/jadwal"}>
									<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
								</ButtonImport>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Jadwal</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Jadwal</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black p-4 space-y-4">
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="hari">Hari</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="hari"
																	placeholder="Pilih Hari"
																/>
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Pilih Hari</SelectLabel>
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
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="jamMulai">Jam Mulai</Label>
														<Input
															type="text"
															id="jamMulai"
															placeholder="00:00"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="jamSelesai">Jam Selesai</Label>
														<Input
															type="text"
															id="jamSelesai"
															placeholder="00:00"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="kelas">Kelas</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="kelas"
																	placeholder="Pilih Kelas"
																/>
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
																	<SelectLabel>Pilih Guru</SelectLabel>
																	<SelectItem value="1">Andi, S.Kom</SelectItem>
																	<SelectItem value="2">Gunawan, S.Kom</SelectItem>
																	<SelectItem value="2">Budi, S.Pd</SelectItem>
																	<SelectItem value="3">Dino</SelectItem>
																	<SelectItem value="3">Mingyu</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="mataPelajaran">Mata Pelajaran</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="mataPelajaran"
																	placeholder="Pilih Mata Pelajaran"
																/>
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Pilih Mata Pelajaran</SelectLabel>
																	<SelectItem value="1">Matematika</SelectItem>
																	<SelectItem value="2">Fisika</SelectItem>
																	<SelectItem value="3">Praktik Komputer</SelectItem>
																	<SelectItem value="3">Bahasa Inggris</SelectItem>
																	<SelectItem value="3">Algoritma</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="ruangan">Ruangan</Label>
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
																	<SelectItem value="1">Ruangan 1</SelectItem>
																	<SelectItem value="2">Ruangan 2</SelectItem>
																	<SelectItem value="3">Ruangan 3</SelectItem>
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
								placeholder="Cari"
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
			</div>

			<div className="overflow-auto grid grid-cols-1">
				<Tabs defaultValue={data[0] ?? "senin"}>
					<TabsList className="flex flex-row gap-2 overflow-auto justify-start">
						{data.map((item, index) => {
							return (
								<TabsTrigger
									key={index}
									value={item}
									className="capitalize w-[80px] rounded-t-lg border-t border-x border-[#89B7CC]"
								>
									{item}
								</TabsTrigger>
							);
						})}
					</TabsList>
					{data.map((item, index) => {
						return (
							<TabsContent
								key={index}
								value={item}
								className="flex flex-col gap-4"
							>
								<div className="overflow-auto grid grid-cols-1">
									<Table>
										<TableHeader>
											<TableRow className="bg-utama/50 border border-textUtama">
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">WAKTU</TableHead>
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">GURU</TableHead>
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">MATA PELAJARAN</TableHead>
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">RUANGAN</TableHead>
												<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{[...Array(9)].map((_, index) => (
												<TableRow
													key={index}
													className="border-l border-r border-b border-textUtama"
												>
													<TableCell className="text-center border-l border-textUtama">Tabel</TableCell>
													<TableCell className="text-center border-textUtama">Tabel</TableCell>
													<TableCell className="text-center border-textUtama">Tabel</TableCell>
													<TableCell className="text-center border-textUtama">Tabel</TableCell>
													<TableCell className="text-center border-textUtama">Tabel</TableCell>
													<TableCell className="text-center border-r border-textUtama text-nowrap">
														{/* DETAIL */}
														<AlertDialog>
															<AlertDialogTrigger asChild>
																<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Jadwal && <Ikon.Jadwal className="text-black" />}</Button>
															</AlertDialogTrigger>
															<AlertDialogContent className="max-w-2xl p-0 overflow-hidden border-none">
																<AlertDialogHeader className="">
																	<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
																		<p className="text-white font-semibold">Jadwal Guru Andi, S.Kom</p>
																		<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																			<X />
																		</AlertDialogCancel>
																	</AlertDialogTitle>
																	<AlertDialogDescription asChild>
																		<div className="text-black p-4 space-y-6">
																			<Table className="shadow border-red-600">
																				<TableHeader>
																					<TableRow className="bg-utama/50 border border-textUtama">
																						<TableHead className="text-black font-bold text-sm text-center text-nowrap">WAKTU</TableHead>
																						<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
																						<TableHead className="text-black font-bold text-sm text-center text-nowrap">MATA PELAJARAN</TableHead>
																					</TableRow>
																				</TableHeader>
																				<TableBody>
																					{[...Array(3)].map((_, index) => {
																						return (
																							<TableRow
																								key={index}
																								className="border border-textUtama"
																							>
																								<TableCell className="text-center border-l border-textUtama font-bold text-black">Tabel</TableCell>
																								<TableCell className="text-center border-textUtama font-bold text-black">Tabel</TableCell>
																								<TableCell className="text-center border-r border-textUtama font-bold text-black">Tabel</TableCell>
																							</TableRow>
																						);
																					})}
																					<div></div>
																				</TableBody>
																			</Table>
																		</div>
																	</AlertDialogDescription>
																</AlertDialogHeader>
															</AlertDialogContent>
														</AlertDialog>
														{/* EDIT */}
														<AlertDialog>
															<AlertDialogTrigger asChild>
																<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
															</AlertDialogTrigger>
															<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
																<AlertDialogHeader className="">
																	<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
																		<p className="text-white font-semibold">Edit Jadwal</p>
																		<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
																			<X />
																		</AlertDialogCancel>
																	</AlertDialogTitle>
																	<AlertDialogDescription asChild>
																		<div className="text-black p-4 space-y-4">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="hari">Hari</Label>
																				<Select defaultValue="2">
																					<SelectTrigger className="bg-white">
																						<SelectValue
																							id="hari"
																							placeholder="Pilih Hari"
																						/>
																					</SelectTrigger>
																					<SelectContent>
																						<SelectGroup>
																							<SelectLabel>Pilih Hari</SelectLabel>
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
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="jamMulai">Jam Mulai</Label>
																				<Input
																					type="text"
																					id="jamMulai"
																					placeholder="00:00"
																					value="07:00"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="jamSelesai">Jam Selesai</Label>
																				<Input
																					type="text"
																					id="jamSelesai"
																					placeholder="00:00"
																					value="09:00"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="kelas">Kelas</Label>
																				<Select defaultValue="X MM">
																					<SelectTrigger className="bg-white">
																						<SelectValue
																							id="kelas"
																							placeholder="Pilih Kelas"
																						/>
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
																							<SelectLabel>Pilih Guru</SelectLabel>
																							<SelectItem value="1">Andi, S.Kom</SelectItem>
																							<SelectItem value="2">Gunawan, S.Kom</SelectItem>
																							<SelectItem value="2">Budi, S.Pd</SelectItem>
																							<SelectItem value="3">Dino</SelectItem>
																							<SelectItem value="3">Mingyu</SelectItem>
																						</SelectGroup>
																					</SelectContent>
																				</Select>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="mataPelajaran">Mata Pelajaran</Label>
																				<Select defaultValue="1">
																					<SelectTrigger className="bg-white">
																						<SelectValue
																							id="mataPelajaran"
																							placeholder="Pilih Mata Pelajaran"
																						/>
																					</SelectTrigger>
																					<SelectContent>
																						<SelectGroup>
																							<SelectLabel>Pilih Mata Pelajaran</SelectLabel>
																							<SelectItem value="1">Matematika</SelectItem>
																							<SelectItem value="2">Fisika</SelectItem>
																							<SelectItem value="3">Praktik Komputer</SelectItem>
																							<SelectItem value="3">Bahasa Inggris</SelectItem>
																							<SelectItem value="3">Algoritma</SelectItem>
																						</SelectGroup>
																					</SelectContent>
																				</Select>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="ruangan">Ruangan</Label>
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
																							<SelectItem value="1">Ruangan 1</SelectItem>
																							<SelectItem value="2">Ruangan 2</SelectItem>
																							<SelectItem value="3">Ruangan 3</SelectItem>
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
														{/* DELETE */}
														<ButtonDelete href="/dashboard/manajemen-sekolah/jadwal">
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
						);
					})}
				</Tabs>
			</div>
		</div>
	);
}
