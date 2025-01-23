"use client";

import { useState } from "react";
import { toast } from "sonner";
import * as Ikon from "@/components/icons/table";
import { CalendarIcon, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import ButtonDelete from "@/components/button-delete";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router";

function formatDate(date) {
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${day}/${month}/${year}`;
}

export default function PageTahunAjaran() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [date, setDate] = useState(new Date());

	const handleTambah = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambahkan tahun ajaran.");
			navigate("/dashboard/manajemen-sekolah/tahun-ajaran");
		}, 250);
	};

	const handleEdit = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit tahun ajaran.");
			navigate("/dashboard/manajemen-sekolah/tahun-ajaran");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Tahun Ajaran</h1>
			<div className="space-y-4">
				<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
					<CardHeader>
						<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
							<div className="flex flex-col xl:flex-row gap-4">
								<div className="flex flex-col gap-2 w-full lg:w-[220px]">
									<p>Semester</p>
									<Select>
										<SelectTrigger className=" bg-white">
											<SelectValue placeholder="Pilih Semester" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih Semester</SelectLabel>
												<SelectItem value="1">Ganjil</SelectItem>
												<SelectItem value="2">Genap</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex gap-2">
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<Button className="bg-[#4299E1] hover:bg-[#3a88c7]">Tambah Tahun Ajaran</Button>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-xl p-0 overflow-hidden border-none">
										<AlertDialogHeader className="">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Tahun Ajaran</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black p-4 space-y-6">
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="tahun">Tahun</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="tahun"
																	placeholder="Pilih Tahun"
																/>
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Tahun</SelectLabel>
																	<SelectItem value="1">2025</SelectItem>
																	<SelectItem value="2">2024</SelectItem>
																	<SelectItem value="3">2023</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="semester">Semester</Label>
														<Select>
															<SelectTrigger className="bg-white">
																<SelectValue
																	id="semester"
																	placeholder="Pilih Semester"
																/>
															</SelectTrigger>
															<SelectContent>
																<SelectGroup>
																	<SelectLabel>Semester</SelectLabel>
																	<SelectItem value="1">Ganjil</SelectItem>
																	<SelectItem value="2">Genap</SelectItem>
																</SelectGroup>
															</SelectContent>
														</Select>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="awalSemester">Awal Semester</Label>
														<Popover>
															<PopoverTrigger asChild>
																<Button
																	variant={"outline"}
																	className="justify-between text-left font-normal"
																>
																	<span>Pilih tanggal</span>
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
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="akhirSemester">Akhir Semester</Label>
														<Popover>
															<PopoverTrigger asChild>
																<Button
																	variant={"outline"}
																	className="justify-between text-left font-normal"
																>
																	<span>Pilih tanggal</span>
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
													<div className="grid w-full items-center gap-1.5">
														<Label htmlFor="description">Deskripsi</Label>
														<Textarea
															id="description"
															name="description"
															placeholder="Deskripsi"
															className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive min-h-24"
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
						<div className="flex w-full lg:w-[280px]">
							<Input
								type="text"
								placeholder="Cari Tahun Ajaran"
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
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">TAHUN</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">SEMESTER</TableHead>
								<TableHead className="text-black font-bold text-sm text-center text-nowrap">PERIODE</TableHead>
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
														<p className="text-white font-semibold">Edit Tahun Ajaran</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 flex flex-col gap-4 ">
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="tahun">Tahun</Label>
																<Select defaultValue="2">
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="tahun"
																			placeholder="Pilih Tahun"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Tahun</SelectLabel>
																			<SelectItem value="1">2025</SelectItem>
																			<SelectItem value="2">2024</SelectItem>
																			<SelectItem value="3">2023</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="semester">Semester</Label>
																<Select defaultValue="1">
																	<SelectTrigger className="bg-white">
																		<SelectValue
																			id="semester"
																			placeholder="Pilih Semester"
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		<SelectGroup>
																			<SelectLabel>Semester</SelectLabel>
																			<SelectItem value="1">Ganjil</SelectItem>
																			<SelectItem value="2">Genap</SelectItem>
																		</SelectGroup>
																	</SelectContent>
																</Select>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="awalSemester">Awal Semester</Label>
																<Popover>
																	<PopoverTrigger asChild>
																		<Button
																			variant={"outline"}
																			className="justify-between text-left font-normal"
																		>
																			{date ? <span>{formatDate(date)}</span> : <span>Pilih tanggal</span>}
																			<CalendarIcon className="mr-2 h-4 w-4" />
																		</Button>
																	</PopoverTrigger>
																	<PopoverContent className="p-0 w-full">
																		<Calendar
																			mode="single"
																			initialFocus
																			selected={date}
																			onSelect={(newDate) => newDate && setDate(newDate)}
																		/>
																	</PopoverContent>
																</Popover>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="akhirSemester">Akhir Semester</Label>
																<Popover>
																	<PopoverTrigger asChild>
																		<Button
																			variant={"outline"}
																			className="justify-between text-left font-normal"
																		>
																			{date ? <span>{formatDate(date)}</span> : <span>Pilih tanggal</span>}
																			<CalendarIcon className="mr-2 h-4 w-4" />
																		</Button>
																	</PopoverTrigger>
																	<PopoverContent className="p-0 w-full">
																		<Calendar
																			mode="single"
																			initialFocus
																			selected={date}
																			onSelect={(newDate) => newDate && setDate(newDate)}
																		/>
																	</PopoverContent>
																</Popover>
															</div>
															<div className="grid w-full items-center gap-1.5">
																<Label htmlFor="description">Deskripsi</Label>
																<Textarea
																	id="description"
																	name="description"
																	placeholder="Deskripsi"
																	className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive min-h-24"
																	value="Text"
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
										<ButtonDelete href="/dashboard/manajemen-sekolah/tahun-ajaran">
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
