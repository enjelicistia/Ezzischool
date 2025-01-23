"use client";

import { useState } from "react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import ButtonDelete from "@/components/button-delete";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageJenjang() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleTambahJenjang = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan jenjang.");
			navigate("/dashboard/manajemen-sekolah/jenjang");
		}, 250);
	};

	const handleEditJenjang = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit jenjang.");
			navigate("/dashboard/manajemen-sekolah/jenjang");
		}, 1000);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Jenjang</h1>
			<div className="space-y-4">
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
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Jenjang</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
												<p className="text-white font-semibold">Tambah Jenjang</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black p-4 flex flex-col gap-4 ">
													<div className="grid w-full items-center gap-1.5">
														<Label
															className="text-left"
															htmlFor="kodeJenjang"
														>
															Kode Jenjang
														</Label>
														<Input
															type="text"
															id="kodeJenjang"
															placeholder="Kode Jenjang"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label
															className="text-left"
															htmlFor="namaJenjang"
														>
															Nama Jenjang
														</Label>
														<Input
															type="text"
															id="namaJenjang"
															placeholder="Nama Jenjang"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label
															className="text-left"
															htmlFor="jenjang"
														>
															Jenjang
														</Label>
														<Input
															type="text"
															id="jenjang"
															placeholder="Jenjang"
														/>
													</div>
													<div className="flex justify-end">
														<AlertDialogAction asChild>
															<Button
																onClick={handleTambahJenjang}
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
				<div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
					<div className="flex w-full md:w-[280px]">
						<Input
							type="text"
							placeholder="Cari Jenjang"
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
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">JENJANG</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{[...Array(6)].map((_, index) => (
								<TableRow
									key={index}
									className="border-l border-r border-b border-textUtama"
								>
									<TableCell className="text-center border-l border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-r border-textUtama">
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4 items-center">
														<p className="text-white font-semibold">Edit Jenjang</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 flex flex-col gap-4 ">
															<div className="grid w-full items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="kodeJenjang"
																>
																	Kode Jenjang
																</Label>
																<Input
																	type="text"
																	id="kodeJenjang"
																	placeholder="Kode Jenjang"
																	value="X"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="namaJenjang"
																>
																	Nama Jenjang
																</Label>
																<Input
																	type="text"
																	id="namaJenjang"
																	placeholder="Nama Jenjang"
																	value="X"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label
																	className="text-left"
																	htmlFor="jenjang"
																>
																	Jenjang
																</Label>
																<Input
																	type="text"
																	id="jenjang"
																	placeholder="Jenjang"
																	value="X"
																/>
															</div>
															<div className="flex justify-end">
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleEditJenjang}
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
										<ButtonDelete href="/dashboard/manajemen-sekolah/jenjang">
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
			</div>
		</div>
	);
}
