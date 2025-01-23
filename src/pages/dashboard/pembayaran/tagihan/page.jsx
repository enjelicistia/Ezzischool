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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

export default function PageTagihan() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport file.");
			navigate("/dashboard/pembayaran/tagihan");
		}, 250);
	};

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil membuat tagihan.");
			navigate("/dashboard/pembayaran/tagihan");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit tagihan.");
			navigate("/dashboard/pembayaran/tagihan");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Tagihan</h1>
			<div className="space-y-4">
				<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
					<CardHeader>
						<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
							<div className="flex flex-col xl:flex-row gap-4">
								<div className="flex flex-col gap-2 w-full lg:w-[140px] ">
									<p>Kelas</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Kelas" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Kelas</SelectLabel>
												<SelectItem value="1">X RPL</SelectItem>
												<SelectItem value="2">XI RPL</SelectItem>
												<SelectItem value="3">XII RPL</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2 w-full lg:w-[140px]">
									<p>Bulan</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Bulan" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Bulan</SelectLabel>
												<SelectItem value="1">Januari</SelectItem>
												<SelectItem value="2">Februari</SelectItem>
												<SelectItem value="3">Maret</SelectItem>
												<SelectItem value="4">April</SelectItem>
												<SelectItem value="5">Mei</SelectItem>
												<SelectItem value="6">Juni</SelectItem>
												<SelectItem value="7">Juli</SelectItem>
												<SelectItem value="8">Agustus</SelectItem>
												<SelectItem value="9">September</SelectItem>
												<SelectItem value="10">Oktober</SelectItem>
												<SelectItem value="11">November</SelectItem>
												<SelectItem value="12">Desember</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex gap-2">
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Buat Tagihan</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-lg p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Buat Tagihan</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black p-4 space-y-6">
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="namaSiswa">Nama Siswa</Label>
														<Input
															type="text"
															id="namaSiswa"
															placeholder="Nama Siswa"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="jenisTagihan">Jenis Tagihan</Label>
														<Input
															type="text"
															id="jenisTagihan"
															placeholder="Jenis Tagihan"
														/>
													</div>
													<div className="flex gap-4">
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="bulan">Bulan</Label>
															<Select>
																<SelectTrigger className="bg-white">
																	<SelectValue
																		id="bulan"
																		placeholder="Pilih Bulan"
																	/>
																</SelectTrigger>
																<SelectContent>
																	<SelectGroup>
																		<SelectLabel>Pilih Bulan</SelectLabel>
																		<SelectItem value="1">Januari</SelectItem>
																		<SelectItem value="2">Februari</SelectItem>
																		<SelectItem value="3">Maret</SelectItem>
																		<SelectItem value="4">April</SelectItem>
																		<SelectItem value="5">Mei</SelectItem>
																		<SelectItem value="6">Juni</SelectItem>
																		<SelectItem value="7">Juli</SelectItem>
																		<SelectItem value="8">Agustus</SelectItem>
																		<SelectItem value="9">September</SelectItem>
																		<SelectItem value="10">Oktober</SelectItem>
																		<SelectItem value="11">November</SelectItem>
																		<SelectItem value="12">Desember</SelectItem>
																	</SelectGroup>
																</SelectContent>
															</Select>
														</div>
														<div className="grid w-full items-center gap-1.5">
															<Label htmlFor="tahun">Tahun</Label>
															<Input
																type="text"
																id="tahun"
																placeholder="Tahun"
															/>
														</div>
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
																	<SelectLabel>Kelas</SelectLabel>
																	<SelectItem value="1">X RPL</SelectItem>
																	<SelectItem value="2">XI RPL</SelectItem>
																	<SelectItem value="3">XII RPL</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="jumlahTagihan">Jumlah Tagihan</Label>
														<Input
															type="text"
															id="jumlahTagihan"
															placeholder="Jumlah Tagihan"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="jenisPembayaran">Jenis Pembayaran</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="jenisPembayaran"
																	placeholder="Pilih Jenis Pembayaran"
																/>
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Jenis Pembayaran</SelectLabel>
																	<SelectItem value="1">Tunai</SelectItem>
																	<SelectItem value="2">Tranfer</SelectItem>
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
													<div className="flex justify-end mt-2">
														<AlertDialogAction asChild>
															<Button
																onClick={handleTambah}
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
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">NO</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA SISWA</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">JUMLAH TAGIHAN</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">KETERANGAN</TableHead>
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
									<TableCell className="text-center border-textUtama">Nama</TableCell>
									<TableCell className="text-center border-textUtama">{(index + 1) % 3 || 3}</TableCell>
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-textUtama">Tabel</TableCell>
									<TableCell className="text-center border-r border-textUtama text-nowrap">
										<Dialog>
											<DialogTrigger asChild>
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Pembayaran && <Ikon.Pembayaran className="text-black" />}</Button>
											</DialogTrigger>
											<DialogContent className="bg-[#F7FAFC] max-w-2xl p-0 overflow-hidden">
												<DialogHeader>
													<DialogTitle className="font-semibold text-center bg-[#90CDF4] p-3 text-white">Dokumen Tagihan</DialogTitle>
												</DialogHeader>
												<div className="p-4 pt-0 space-y-4">
													<div className="flex gap-8 justify-between px-4">
														<div className="flex gap-4">
															<div>
																<img
																	src="/icon-blue.png"
																	alt="icon"
																	width={500}
																	height={500}
																	className="w-16"
																/>
															</div>
															<div className="text-sm text-gray-500">
																<h1 className="font-bold text-2xl text-utamaHover">SMK BAHAWAN</h1>
																<p>www.ezzischool.com</p>
																<p>hello@email.com</p>
																<p>+91 00000 00000</p>
															</div>
														</div>
														<div className="text-sm text-right text-gray-500">
															<p>Alamat Sekolah</p>
															<p>Jakarta, Indonesia</p>
														</div>
													</div>
													<div className="bg-white border p-4 rounded-lg space-y-4">
														<div className="flex justify-between gap-4">
															<div className="text-xs space-y-0.5">
																<h1 className="text-gray-600 text-sm font-semibold">Tagihan Kepada:</h1>
																<h3 className="font-bold">Bayu Risky</h3>
																<p className="text-gray-500 font-medium">Kelas X RPL</p>
																<p className="text-gray-500 font-medium">Jakarta, Indonesia</p>
																<p className="text-gray-500 font-medium">086789098765</p>
															</div>
															<div className="text-xs space-y-0.5">
																<h1 className="text-gray-600 text-sm font-semibold">Nomor Tagihan</h1>
																<p className="font-bold">#AB2324-01</p>
															</div>
															<div className="text-xs space-y-0.5 text-right">
																<h1 className="text-gray-600 text-sm font-semibold">Jumlah</h1>
																<p className="text-xl font-bold text-utama">Rp 3.000.000</p>
															</div>
														</div>
														<div className="space-y-0.5">
															<div className="flex justify-between text-sm ">
																<h1 className="text-gray-600 text-sm font-semibold">Subjek</h1>
																<h1 className="text-gray-600 text-sm font-semibold">Tanggal</h1>
															</div>
															<div className="flex justify-between text-xs">
																<p className="font-bold">Tagihan</p>
																<p className="font-bold">15 Des, 2024</p>
															</div>
														</div>
														<div className="text-xs">
															<div className="flex justify-between font-medium text-gray-400 border-y py-3">
																<h1>Jenis Tagihan</h1>
																<h1>Qty</h1>
																<h1>Jumlah</h1>
															</div>
															<div className="flex justify-between py-3 border-b">
																<div className="space-y-0.5">
																	<p className="font-bold">Tagihan SPP</p>
																	<p className="font-medium text-gray-400">Kekurangan SPP</p>
																</div>
																<p className="font-bold">Rp 3.000.000</p>
															</div>
														</div>
														<div className="flex flex-col items-end pt-8">
															<div className="w-1/2 flex justify-between font-semibold border-b py-4">
																<p>Subtotal</p>
																<p>Rp 3.000.000</p>
															</div>
															<div className="w-1/2 flex justify-between font-bold py-4">
																<p>Total</p>
																<p>Rp 3.000.000</p>
															</div>
														</div>
														<p className="font-bold text-xs pt-20">Terima kasih.</p>
													</div>
													<p className="text-xs px-4">Mohon untuk membayar paling lambat 15 hari setelah mendapat tagihan.</p>
												</div>
											</DialogContent>
										</Dialog>
										<AlertDialog>
											<AlertDialogTrigger asChild>
												<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
											</AlertDialogTrigger>
											<AlertDialogContent className="max-w-lg p-0 overflow-hidden border-none">
												<AlertDialogHeader className="">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Tagihan</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 space-y-6">
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="namaSiswa">Nama Siswa</Label>
																<Input
																	type="text"
																	id="namaSiswa"
																	placeholder="Nama Siswa"
																	value="Doni"
																/>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="jenisTagihan">Tagihan SPP</Label>
																<Input
																	type="text"
																	id="jenisTagihan"
																	placeholder="Tagihan SPP"
																	value="Tagihan SPP"
																/>
															</div>
															<div className="flex gap-4">
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="bulan">Bulan</Label>
																	<Select defaultValue="5">
																		<SelectTrigger className="bg-white">
																			<SelectValue
																				id="bulan"
																				placeholder="Pilih Bulan"
																			/>
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Bulan</SelectLabel>
																				<SelectItem value="1">Januari</SelectItem>
																				<SelectItem value="2">Februari</SelectItem>
																				<SelectItem value="3">Maret</SelectItem>
																				<SelectItem value="4">April</SelectItem>
																				<SelectItem value="5">Mei</SelectItem>
																				<SelectItem value="6">Juni</SelectItem>
																				<SelectItem value="7">Juli</SelectItem>
																				<SelectItem value="8">Agustus</SelectItem>
																				<SelectItem value="9">September</SelectItem>
																				<SelectItem value="10">Oktober</SelectItem>
																				<SelectItem value="11">November</SelectItem>
																				<SelectItem value="12">Desember</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="tahun">Tahun</Label>
																	<Input
																		type="text"
																		id="tahun"
																		placeholder="Tahun"
																		value="2024"
																	/>
																</div>
															</div>

															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="kelas">Kelas</Label>
																<Select defaultValue="1">
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="kelas"
																			placeholder="Pilih Kelas"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Kelas</SelectLabel>
																			<SelectItem value="1">X RPL</SelectItem>
																			<SelectItem value="2">XI RPL</SelectItem>
																			<SelectItem value="3">XII RPL</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>

															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="jumlahTagihan">Jumlah Tagihan</Label>
																<Input
																	type="text"
																	id="jumlahTagihan"
																	placeholder="Jumlah Tagihan"
																	value="Rp 3.000.000"
																/>
															</div>

															<div className="grid w-full items-center gap-1.5 text-black">
																<Label htmlFor="jenisPembayaran">Jenis Pembayaran</Label>
																<Select defaultValue="2">
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="jenisPembayaran"
																			placeholder="Pilih Jenis Pembayaran"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Jenis Pembayaran</SelectLabel>
																			<SelectItem value="1">Tunai</SelectItem>
																			<SelectItem value="2">Tranfer</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>

															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="Ketarangan">Ketarangan</Label>
																<Input
																	type="text"
																	id="Ketarangan"
																	placeholder="Ketarangan"
																	value="Kekurangan SPP"
																/>
															</div>

															<div className="flex justify-end mt-2">
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
										<ButtonDelete href="/dashboard/pembayaran/tagihan">
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
			</div>
		</div>
	);
}
