"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import * as Ikon from "@/components/icons/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Spinner } from "@/components/spinner";
import ButtonDelete from "@/components/button-delete";

export default function PageBiodataOperator() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleAddOperator = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambah operator.");
			navigate("/dashboard/biodata/operator");
		}, 250);
	};

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport Excel.");
			navigate("/dashboard/biodata/operator");
		}, 250);
	};

	const handleEditPassword = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit password.");
			navigate("/dashboard/biodata/operator");
		}, 250);
	};

	const handleEditOperator = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit operator.");
			navigate("/dashboard/biodata/operator");
		}, 250);
	};

	const [role, setRole] = useState("super_operator");
	const [status, setStatus] = useState("active");

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Operator</h1>
			<Tabs defaultValue="operator">
				<TabsContent
					value="operator"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4">
								<div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
									<div className="flex flex-col gap-2">
										<p>Peran</p>
										<Select>
											<SelectTrigger className="w-[220px] bg-white">
												<SelectValue placeholder="Pilih Peran" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Pilih Peran</SelectLabel>
													<SelectItem value="pic">PIC</SelectItem>
													<SelectItem value="operator">Operator</SelectItem>
													<SelectItem value="superOperator">Super Operator</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
									<div className="flex flex-col gap-2">
										<p>Status</p>
										<Select>
											<SelectTrigger className="w-[140px] bg-white">
												<SelectValue placeholder="Pilih Status" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Pilih Satus</SelectLabel>
													<SelectItem value="aktif">Aktif</SelectItem>
													<SelectItem value="nonAktif">Tidak Aktif</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-utama hover:bg-utamaHover text-white">Tambah Operator</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
										<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
											<p className="text-white font-semibold">Tambah Operator</p>
											<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
												<X />
											</AlertDialogCancel>
										</AlertDialogTitle>
										<AlertDialogDescription asChild>
											<div className="text-black px-4 pb-4 flex flex-col gap-4 ">
												<form
													action=""
													className="flex flex-col gap-4 text-black"
												>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="idPegawai">ID Pegawai</Label>
														<Input
															type="text"
															id="idPegawai"
															placeholder="ID Pegawai Operator"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="namaOperator">Nama Lengkap</Label>
														<Input
															type="text"
															id="namaOperator"
															placeholder="Nama Operator"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="email">Email</Label>
														<Input
															type="email"
															id="email"
															placeholder="Email Operator"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="no_tlpn">Nomor Telepon</Label>
														<Input
															type="text"
															id="no_tlpn"
															placeholder="Nomor Telepon Operator"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="peran">Peran</Label>
														<Select>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Pilih Peran" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Pilih Peran</SelectLabel>
																	<SelectItem value="pic">PIC</SelectItem>
																	<SelectItem value="operator">Operator</SelectItem>
																	<SelectItem value="superOperator">Super Operator</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="status">Status</Label>
														<Select>
															<SelectTrigger className="w-full">
																<SelectValue placeholder="Pilih Status" />
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Pilih Satus</SelectLabel>
																	<SelectItem value="aktif">Aktif</SelectItem>
																	<SelectItem value="nonAktif">Tidak Aktif</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="password">Password</Label>
														<Input
															type="password"
															id="password"
															placeholder="Tambahkan Password"
														/>
													</div>
													<div className="flex flex-row justify-end">
														<AlertDialogAction asChild>
															<Button
																onClick={handleAddOperator}
																className="bg-utama hover:bg-utamaHover max-w-max"
															>
																{loading ? <Spinner className="size-16" /> : "Tambah"}
															</Button>
														</AlertDialogAction>
													</div>
												</form>
											</div>
										</AlertDialogDescription>
									</AlertDialogContent>
								</AlertDialog>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex gap-6 w-full xl:flex-row flex-col">
						<div className="flex xl:w-[280px] w-full">
							<Input
								type="text"
								placeholder="Cari Operator"
								className="xl:w-[300px] w-full rounded-r-none"
							/>
							<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
								<Search className="text-black size-4 aspect-square p-0.5" />
							</Button>
						</div>
						<div className="flex gap-4 w-full  items-center justify-between">
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
						<Table className="min-w-full table-auto">
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">ID PEGAWAI</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA LENGKAP</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">EMAIL</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NOMOR TELEPON</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">PERAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(5)].map((item, index) => (
									<TableRow
										key={index}
										className="border-l border-r border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">{index + 1}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">
											<Badge className="bg-green-500 hover:bg-green-600">Aktif</Badge>
										</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											{/* password */}
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Sandi && <Ikon.Sandi className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Unggah Kata Sandi</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 flex flex-col gap-4 ">
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="kataSandi">Kata Sandi</Label>
																<Input
																	type="text"
																	id="kataSandi"
																	placeholder="Text"
																/>
															</div>
															<div className="flex flex-row justify-end gap-4">
																<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleEditPassword}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Simpan"}
																	</Button>
																</AlertDialogAction>
															</div>
														</div>
													</AlertDialogDescription>
												</AlertDialogContent>
											</AlertDialog>
											{/* edit */}
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Operator</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black px-4 pb-4 flex flex-col gap-4 ">
															<form
																action=""
																className="flex flex-col gap-4 text-black"
															>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="idPegawai">ID Pegawai</Label>
																	<Input
																		type="text"
																		id="idPegawai"
																		placeholder="ID Pegawai Operator"
																		defaultValue="12345678"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="namaOperator">Nama Lengkap</Label>
																	<Input
																		type="text"
																		id="namaOperator"
																		placeholder="Nama Operator"
																		defaultValue="Bayu"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="email">Email</Label>
																	<Input
																		type="email"
																		id="email"
																		placeholder="Email Operator"
																		defaultValue="admin@gmail.com"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="no_tlpn">Nomor Telepon</Label>
																	<Input
																		type="text"
																		id="no_tlpn"
																		placeholder="Nomor Telepon Operator"
																		defaultValue="081290219021"
																	/>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="peran">Peran</Label>
																	<Select
																		value={role}
																		onValueChange={(value) => setRole(value)}
																	>
																		<SelectTrigger className="w-full">
																			<SelectValue placeholder="Pilih Peran" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Peran</SelectLabel>
																				<SelectItem value="pic">PIC</SelectItem>
																				<SelectItem value="operator">Operator</SelectItem>
																				<SelectItem value="superOperator">Super Operator</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="status">Status</Label>
																	<Select
																		value={status}
																		onValueChange={(value) => setStatus(value)}
																	>
																		<SelectTrigger className="w-full">
																			<SelectValue placeholder="Pilih Status" />
																		</SelectTrigger>
																		<SelectContent>
																			<SelectGroup>
																				<SelectLabel>Pilih Satus</SelectLabel>
																				<SelectItem value="aktif">Aktif</SelectItem>
																				<SelectItem value="nonAktif">Tidak Aktif</SelectItem>
																			</SelectGroup>
																		</SelectContent>
																	</Select>
																</div>
																<div className="grid w-full items-center gap-1.5">
																	<Label htmlFor="password">Password</Label>
																	<Input
																		type="password"
																		id="password"
																		placeholder="Tambahkan Password"
																		defaultValue="012345678"
																	/>
																</div>
																<div className="flex flex-row justify-end">
																	<AlertDialogAction asChild>
																		<Button
																			onClick={handleEditOperator}
																			className="bg-utama hover:bg-utamaHover max-w-max"
																		>
																			{loading ? <Spinner className="size-16" /> : "Simpan"}
																		</Button>
																	</AlertDialogAction>
																</div>
															</form>
														</div>
													</AlertDialogDescription>
												</AlertDialogContent>
											</AlertDialog>
											{/* delete */}
											<ButtonDelete href="/dashboard/biodata/operator">
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
				</TabsContent>
			</Tabs>
		</div>
	);
}
