"use client";

import { useState } from "react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import ButtonDelete from "@/components/button-delete";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageRuangan() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan ruangan.");
			navigate("/dashboard/manajemen-sekolah/ruangan");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit ruangan.");
			navigate("/dashboard/manajemen-sekolah/ruangan");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Ruangan</h1>
			<div className="space-y-4">
				<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
					<CardHeader>
						<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
							<div className="flex gap-2 justify-end w-full">
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Ruangan</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Ruangan</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black p-4 space-y-6">
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="kodeRuangan">Kode Ruangan</Label>
														<Input
															type="text"
															id="kodeRuangan"
															placeholder="Kode Ruangan"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="namaRuangan">Nama Ruangan</Label>
														<Input
															type="text"
															id="namaRuangan"
															placeholder="Nama Ruangan"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="kapasitas">Kapasitas</Label>
														<Input
															type="text"
															id="kapasitas"
															placeholder="Kapasitas"
														/>
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
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-8">
						<div className="flex">
							<Input
								type="text"
								placeholder="Cari Ruangan"
								className="xl:w-[300px] rounded-r-none"
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
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">KAPASITAS</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{[...Array(3)].map((_, index) => (
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
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Ruangan</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 space-y-6">
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="kodeRuangan">Kode Ruangan</Label>
																<Input
																	type="text"
																	id="kodeRuangan"
																	placeholder="Kode Ruangan"
																	value="RK-01"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="namaRuangan">Nama Ruangan</Label>
																<Input
																	type="text"
																	id="namaRuangan"
																	placeholder="Nama Ruangan"
																	value="Ruang Kelas 1"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="kapasitas">Kapasitas</Label>
																<Input
																	type="text"
																	id="kapasitas"
																	placeholder="Kapasitas"
																	value="40"
																/>
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
										<ButtonDelete href="/dashboard/manajemen-sekolah/ruangan">
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
									Menampilkan 3 dari 3 hasil
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
