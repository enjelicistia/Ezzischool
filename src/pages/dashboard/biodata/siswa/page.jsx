"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Ikon from "@/components/icons/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Calendar } from "@/components/ui/calendar";
import ButtonDelete from "@/components/button-delete";
import ButtonImport from "@/components/button-import";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router";

export default function PageBiodataSiswa() {
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(false);
	const [activeAddSiswa, setActiveAddSiswa] = React.useState("pribadi");
	const [activeEditSiswa, setActiveEditSiswa] = React.useState("pribadi");

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport Excel.");
			navigate("/dashboard/biodata/siswa");
		}, 250);
	};

	const handleEditPassword = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit password.");
			navigate("/dashboard/biodata/siswa");
		}, 250);
	};

	const handleUploadImage = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengupload Image.");
			navigate("/dashboard/biodata/siswa");
		}, 250);
	};

	const handleTambahSiswa = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Melanjutkan Tambah data orang tua.");
			setActiveAddSiswa("ortu");
		}, 250);
	};

	const handleTambahOrtu = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil Menambah Data Siswa dan Orang Tua.");
			navigate("/dashboard/biodata/siswa");
			setActiveAddSiswa("pribadi");
		}, 250);
	};

	const handleEditSiswa = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Melanjutkan Edit data orang tua.");
			setActiveEditSiswa("ortu");
		}, 250);
	};

	const handleEditOrtu = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil Mengedit Data Siswa dan Orang Tua.");
			navigate("/dashboard/biodata/siswa");
			setActiveEditSiswa("pribadi");
		}, 250);
	};

	const [date, setDate] = React.useState();

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Siswa</h1>
			<Tabs defaultValue="siswa">
				<TabsContent
					value="siswa"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col gap-2">
									<p>Kelas</p>
									<Select>
										<SelectTrigger className="w-[140px] bg-white">
											<SelectValue placeholder="Pilih Kelas" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih Kelas</SelectLabel>
												<SelectItem value="X-MM">X MM</SelectItem>
												<SelectItem value="X-RPL">X RPL</SelectItem>
												<SelectItem value="XI-MM">XI MM</SelectItem>
												<SelectItem value="XI-RPL">XI RPL</SelectItem>
												<SelectItem value="XII">XII</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<ButtonImport href={"/dashboard/biodata/siswa"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
									</ButtonImport>

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-utama hover:bg-utamaHover text-white">Tambah Siswa</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Siswa</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black px-4 flex flex-col gap-6 rounded-lg bg-white">
													<Tabs
														value={activeAddSiswa}
														onValueChange={setActiveAddSiswa}
													>
														<TabsList className="grid grid-cols-3 gap-2 w-[500px]">
															<TabsTrigger value="pribadi">Data Pribadi</TabsTrigger>
															<TabsTrigger value="ortu">Data Orang Tua</TabsTrigger>
														</TabsList>

														{/* PRIBADI */}

														<TabsContent
															value="pribadi"
															className="flex flex-col"
														>
															<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																<CardHeader>
																	<h1 className="font-bold text-xl">Tambah Data Siswa</h1>
																</CardHeader>
																<CardContent className="px-1 pb-1">
																	<form
																		className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[70vh]"
																		onSubmit={(e) => e.preventDefault()}
																	>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="fullName">Nama Lengkap</Label>
																			<Input
																				type="text"
																				id="fullName"
																				placeholder="Nama Lengkap"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="nisn">NISN*</Label>
																			<Input
																				type="text"
																				id="nisn"
																				placeholder="NISN"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="nis">NIS*</Label>
																			<Input
																				type="text"
																				id="nis"
																				placeholder="NIS"
																			/>
																		</div>
																		<div className="grid grid-cols-2 gap-4 w-full">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																				<Input
																					type="text"
																					id="tempatLahir"
																					placeholder="Tempat Lahir"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																				<Popover>
																					<PopoverTrigger asChild>
																						<Button
																							variant={"outline"}
																							className="justify-between text-left font-normal"
																						>
																							{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																							<CalendarIcon className="h-4 w-4" />
																						</Button>
																					</PopoverTrigger>
																					<PopoverContent className="p-0 w-full">
																						<Calendar
																							mode="single"
																							selected={date}
																							onSelect={setDate}
																							initialFocus
																						/>
																					</PopoverContent>
																				</Popover>
																			</div>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="jk">Jenis Kelamin</Label>
																			<Select>
																				<SelectTrigger className="w-full">
																					<SelectValue placeholder="Pilih Jenis Kelamin" />
																				</SelectTrigger>
																				<SelectContent>
																					<SelectGroup>
																						<SelectLabel>Jenis Kelamin</SelectLabel>
																						<SelectItem value="laki-laki">Laki-laki</SelectItem>
																						<SelectItem value="perempuan">Perempuan</SelectItem>
																					</SelectGroup>
																				</SelectContent>
																			</Select>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="agama">Agama</Label>
																			<Select>
																				<SelectTrigger className="w-full">
																					<SelectValue placeholder="Pilih Agama" />
																				</SelectTrigger>
																				<SelectContent>
																					<SelectGroup>
																						<SelectLabel>Agama</SelectLabel>
																						<SelectItem value="islam">Islam</SelectItem>
																						<SelectItem value="kristen">Kristen</SelectItem>
																						<SelectItem value="budha">Budha</SelectItem>
																						<SelectItem value="hindu">Hindu</SelectItem>
																					</SelectGroup>
																				</SelectContent>
																			</Select>
																		</div>
																		<div className="flex flex-row gap-4 w-full">
																			<div className="grid w-2/3 items-center gap-1.5">
																				<Label htmlFor="alamat">Alamat</Label>
																				<Input
																					type="text"
																					id="alamat"
																					placeholder="Alamat Lengkap"
																				/>
																			</div>
																			<div className="grid w-1/3 items-center gap-1.5">
																				<Label htmlFor="kodePos">Kode Pos</Label>
																				<Input
																					type="text"
																					id="kodePos"
																					placeholder="Kode Pos"
																				/>
																			</div>
																		</div>
																		<div className="grid grid-cols-2 gap-4 w-full">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="email">Email</Label>
																				<Input
																					type="email"
																					id="email"
																					placeholder="Email"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="noTlpn">Nomor Telepon</Label>
																				<Input
																					type="text"
																					id="noTlpn"
																					placeholder="Nomor Telepon"
																				/>
																			</div>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="asalSekolah">Asal Sekolah</Label>
																			<Input
																				type="text"
																				id="asalSekolah"
																				placeholder="Asal Sekolah"
																			/>
																		</div>
																	</form>
																</CardContent>
															</Card>
															<div className="my-4 grid w-full justify-end items-center gap-1.5">
																<Button
																	onClick={(e) => {
																		e.preventDefault();
																		handleTambahSiswa();
																	}}
																	className="bg-utama hover:bg-utamaHover max-w-max"
																>
																	{loading ? <Spinner className="size-16" /> : "Lanjut"}
																</Button>
															</div>
														</TabsContent>

														{/* ORTU */}

														<TabsContent
															value="ortu"
															className="flex flex-col"
														>
															<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																<CardContent className="px-1 pb-1">
																	<form className="rounded-md pt-4 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
																		<h1 className="font-bold text-xl px-3">Tambah Data Ayah</h1>
																		<div className="bg-white rounded-md p-4 flex flex-col gap-4">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="fullName">Nama Lengkap</Label>
																				<Input
																					type="text"
																					id="fullName"
																					placeholder="Nama Lengkap"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="nik">NIK</Label>
																				<Input
																					type="text"
																					id="nik"
																					placeholder="NIK"
																				/>
																			</div>
																			<div className="grid grid-cols-2 gap-4 w-full">
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																					<Input
																						type="text"
																						id="tempatLahir"
																						placeholder="Tempat Lahir"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																					<Popover>
																						<PopoverTrigger asChild>
																							<Button
																								variant={"outline"}
																								className="justify-between text-left font-normal"
																							>
																								{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																								<CalendarIcon className="h-4 w-4" />
																							</Button>
																						</PopoverTrigger>
																						<PopoverContent className="p-0 w-full">
																							<Calendar
																								mode="single"
																								selected={date}
																								onSelect={setDate}
																								initialFocus
																							/>
																						</PopoverContent>
																					</Popover>
																				</div>
																			</div>
																			<div className="flex flex-row gap-4 w-full">
																				<div className="grid w-2/3 items-center gap-1.5">
																					<Label htmlFor="alamat">Alamat</Label>
																					<Input
																						type="text"
																						id="alamat"
																						placeholder="Alamat Lengkap"
																					/>
																				</div>
																				<div className="grid w-1/3 items-center gap-1.5">
																					<Label htmlFor="kodePos">Kode Pos</Label>
																					<Input
																						type="text"
																						id="kodePos"
																						placeholder="Kode Pos"
																					/>
																				</div>
																			</div>
																			<div className="grid grid-cols-2 gap-4 w-full">
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="email">Email</Label>
																					<Input
																						type="email"
																						id="email"
																						placeholder="Email"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="noTlpn">Nomor Telepon</Label>
																					<Input
																						type="text"
																						id="noTlpn"
																						placeholder="Nomor Telepon"
																					/>
																				</div>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="pendidikanTerakhir">Pendidikan Terakhir</Label>
																				<Input
																					type="text"
																					id="pendidikanTerakhir"
																					placeholder="Pendidikan Terakhir"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="pekerjaan">Pekerjaan</Label>
																				<Input
																					type="text"
																					id="pekerjaan"
																					placeholder="Pekerjaan"
																				/>
																			</div>
																		</div>
																		<h1 className="font-bold text-xl px-3">Tambah Data Ibu</h1>
																		<div className="bg-white rounded-md p-4 flex flex-col gap-4">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="fullName">Nama Lengkap</Label>
																				<Input
																					type="text"
																					id="fullName"
																					placeholder="Nama Lengkap"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="nik">NIK</Label>
																				<Input
																					type="text"
																					id="nik"
																					placeholder="NIK"
																				/>
																			</div>
																			<div className="grid grid-cols-2 gap-4 w-full">
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																					<Input
																						type="text"
																						id="tempatLahir"
																						placeholder="Tempat Lahir"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																					<Popover>
																						<PopoverTrigger asChild>
																							<Button
																								variant={"outline"}
																								className="justify-between text-left font-normal"
																							>
																								{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																								<CalendarIcon className="h-4 w-4" />
																							</Button>
																						</PopoverTrigger>
																						<PopoverContent className="p-0 w-full">
																							<Calendar
																								mode="single"
																								selected={date}
																								onSelect={setDate}
																								initialFocus
																							/>
																						</PopoverContent>
																					</Popover>
																				</div>
																			</div>
																			<div className="flex flex-row gap-4 w-full">
																				<div className="grid w-2/3 items-center gap-1.5">
																					<Label htmlFor="alamat">Alamat</Label>
																					<Input
																						type="text"
																						id="alamat"
																						placeholder="Alamat Lengkap"
																					/>
																				</div>
																				<div className="grid w-1/3 items-center gap-1.5">
																					<Label htmlFor="kodePos">Kode Pos</Label>
																					<Input
																						type="text"
																						id="kodePos"
																						placeholder="Kode Pos"
																					/>
																				</div>
																			</div>
																			<div className="grid grid-cols-2 gap-4 w-full">
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="email">Email</Label>
																					<Input
																						type="email"
																						id="email"
																						placeholder="Email"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="noTlpn">Nomor Telepon</Label>
																					<Input
																						type="text"
																						id="noTlpn"
																						placeholder="Nomor Telepon"
																					/>
																				</div>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="pendidikanTerakhir">Pendidikan Terakhir</Label>
																				<Input
																					type="text"
																					id="pendidikanTerakhir"
																					placeholder="Pendidikan Terakhir"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="pekerjaan">Pekerjaan</Label>
																				<Input
																					type="text"
																					id="pekerjaan"
																					placeholder="Pekerjaan"
																				/>
																			</div>
																		</div>
																	</form>
																</CardContent>
															</Card>
															<div className="my-4 grid w-full justify-end items-center gap-1.5">
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleTambahOrtu}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Tambah"}
																	</Button>
																</AlertDialogAction>
															</div>
														</TabsContent>
													</Tabs>
												</div>
											</AlertDialogDescription>
										</AlertDialogContent>
									</AlertDialog>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>

					<div className="flex gap-8 w-full xl:flex-row flex-col">
						<div className="flex xl:w-[280px] w-full">
							<Input
								type="text"
								placeholder="Cari Siswa"
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
						<Table>
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NO</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA LENGKAP</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NISN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NIS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">KELAS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">AKSI</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(9)].map((item, index) => (
									<TableRow
										key={index}
										className="border-l border-r border-b border-textUtama"
									>
										<TableCell className="text-center border-l border-textUtama">{index + 1}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-r border-textUtama text-nowrap">
											{/* password */}
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 bg-white size-7  hover:bg-gray-100 border border-gray-300 rounded-r-none shadow-none">{Ikon.Sandi && <Ikon.Sandi className="text-black" />}</Button>
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
											{/* image */}
											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-none shadow-none">{Ikon.Gambar && <Ikon.Gambar className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-md p-0 overflow-hidden border-none">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Unggah Gambar</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black p-4 flex flex-col gap-6 ">
															<div className="flex flex-col items-center">
																<img
																	src="/userIcon.png"
																	alt="user icon"
																	width={1000}
																	height={1000}
																	className="h-32 w-auto"
																/>
															</div>
															<div className="grid w-full max-w items-center gap-1.5 mb-4">
																<div className="flex flex-row">
																	<label
																		htmlFor="picture"
																		className="cursor-pointer bg-utama/50 text-blue-900 w-1/3 py-2 px-4 rounded-l-md  text-center hover:bg-utama hover:text-white duration-100 font-medium"
																	>
																		Pilih File
																	</label>
																	<label
																		htmlFor="picture"
																		className="cursor-pointer text-black font-medium py-2 px-4 border-utama/50 border rounded-r-md w-2/3"
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
															<div className="flex flex-row justify-end gap-4">
																<AlertDialogCancel className="border-2 border-utama text-utama bg-white hover:bg-gray-100 px-6">Batal</AlertDialogCancel>
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleUploadImage}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Unggah"}
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
												<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Siswa</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black px-4 flex flex-col gap-6 rounded-lg bg-white">
															<Tabs
																value={activeEditSiswa}
																onValueChange={setActiveEditSiswa}
															>
																<TabsList className="grid grid-cols-3 gap-2 w-[500px]">
																	<TabsTrigger value="pribadi">Data Pribadi</TabsTrigger>
																	<TabsTrigger value="ortu">Data Orang Tua</TabsTrigger>
																</TabsList>

																{/* PRIBADI */}

																<TabsContent
																	value="pribadi"
																	className="flex flex-col"
																>
																	<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																		<CardHeader>
																			<h1 className="font-bold text-xl">Edit Data Siswa</h1>
																		</CardHeader>
																		<CardContent className="px-1 pb-1">
																			<form
																				className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[70vh]"
																				onSubmit={(e) => e.preventDefault()}
																			>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="fullName">Nama Lengkap</Label>
																					<Input
																						type="text"
																						id="fullName"
																						placeholder="Nama Lengkap"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="nisn">NISN*</Label>
																					<Input
																						type="text"
																						id="nisn"
																						placeholder="NISN"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="nis">NIS*</Label>
																					<Input
																						type="text"
																						id="nis"
																						placeholder="NIS"
																					/>
																				</div>
																				<div className="grid grid-cols-2 gap-4 w-full">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																						<Input
																							type="text"
																							id="tempatLahir"
																							placeholder="Tempat Lahir"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																						<Popover>
																							<PopoverTrigger asChild>
																								<Button
																									variant={"outline"}
																									className="justify-between text-left font-normal"
																								>
																									{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																									<CalendarIcon className="h-4 w-4" />
																								</Button>
																							</PopoverTrigger>
																							<PopoverContent className="p-0 w-full">
																								<Calendar
																									mode="single"
																									selected={date}
																									onSelect={setDate}
																									initialFocus
																								/>
																							</PopoverContent>
																						</Popover>
																					</div>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="jk">Jenis Kelamin</Label>
																					<Select>
																						<SelectTrigger className="w-full">
																							<SelectValue placeholder="Pilih Jenis Kelamin" />
																						</SelectTrigger>
																						<SelectContent>
																							<SelectGroup>
																								<SelectLabel>Jenis Kelamin</SelectLabel>
																								<SelectItem value="laki-laki">Laki-laki</SelectItem>
																								<SelectItem value="perempuan">Perempuan</SelectItem>
																							</SelectGroup>
																						</SelectContent>
																					</Select>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="agama">Agama</Label>
																					<Select>
																						<SelectTrigger className="w-full">
																							<SelectValue placeholder="Pilih Agama" />
																						</SelectTrigger>
																						<SelectContent>
																							<SelectGroup>
																								<SelectLabel>Agama</SelectLabel>
																								<SelectItem value="islam">Islam</SelectItem>
																								<SelectItem value="kristen">Kristen</SelectItem>
																								<SelectItem value="budha">Budha</SelectItem>
																								<SelectItem value="hindu">Hindu</SelectItem>
																							</SelectGroup>
																						</SelectContent>
																					</Select>
																				</div>
																				<div className="flex flex-row gap-4 w-full">
																					<div className="grid w-2/3 items-center gap-1.5">
																						<Label htmlFor="alamat">Alamat</Label>
																						<Input
																							type="text"
																							id="alamat"
																							placeholder="Alamat Lengkap"
																						/>
																					</div>
																					<div className="grid w-1/3 items-center gap-1.5">
																						<Label htmlFor="kodePos">Kode Pos</Label>
																						<Input
																							type="text"
																							id="kodePos"
																							placeholder="Kode Pos"
																						/>
																					</div>
																				</div>
																				<div className="grid grid-cols-2 gap-4 w-full">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="email">Email</Label>
																						<Input
																							type="email"
																							id="email"
																							placeholder="Email"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="noTlpn">Nomor Telepon</Label>
																						<Input
																							type="text"
																							id="noTlpn"
																							placeholder="Nomor Telepon"
																						/>
																					</div>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="asalSekolah">Asal Sekolah</Label>
																					<Input
																						type="text"
																						id="asalSekolah"
																						placeholder="Asal Sekolah"
																					/>
																				</div>
																			</form>
																		</CardContent>
																	</Card>
																	<div className="my-4 grid w-full justify-end items-center gap-1.5">
																		<Button
																			onClick={(e) => {
																				e.preventDefault();
																				handleEditSiswa();
																			}}
																			className="bg-utama hover:bg-utamaHover max-w-max"
																		>
																			{loading ? <Spinner className="size-16" /> : "Lanjut"}
																		</Button>
																	</div>
																</TabsContent>

																{/* ORTU */}

																<TabsContent
																	value="ortu"
																	className="flex flex-col"
																>
																	<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																		<CardContent className="px-1 pb-1">
																			<form className="rounded-md p-0 pt-4 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
																				<h1 className="font-bold text-xl px-3">Edit Data Ayah</h1>
																				<div className="bg-white rounded-md p-4 flex flex-col gap-4">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="fullName">Nama Lengkap</Label>
																						<Input
																							type="text"
																							id="fullName"
																							placeholder="Nama Lengkap"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="nik">NIK</Label>
																						<Input
																							type="text"
																							id="nik"
																							placeholder="NIK"
																						/>
																					</div>
																					<div className="grid grid-cols-2 gap-4 w-full">
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																							<Input
																								type="text"
																								id="tempatLahir"
																								placeholder="Tempat Lahir"
																							/>
																						</div>
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																							<Popover>
																								<PopoverTrigger asChild>
																									<Button
																										variant={"outline"}
																										className="justify-between text-left font-normal"
																									>
																										{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																										<CalendarIcon className="h-4 w-4" />
																									</Button>
																								</PopoverTrigger>
																								<PopoverContent className="p-0 w-full">
																									<Calendar
																										mode="single"
																										selected={date}
																										onSelect={setDate}
																										initialFocus
																									/>
																								</PopoverContent>
																							</Popover>
																						</div>
																					</div>
																					<div className="flex flex-row gap-4 w-full">
																						<div className="grid w-2/3 items-center gap-1.5">
																							<Label htmlFor="alamat">Alamat</Label>
																							<Input
																								type="text"
																								id="alamat"
																								placeholder="Alamat Lengkap"
																							/>
																						</div>
																						<div className="grid w-1/3 items-center gap-1.5">
																							<Label htmlFor="kodePos">Kode Pos</Label>
																							<Input
																								type="text"
																								id="kodePos"
																								placeholder="Kode Pos"
																							/>
																						</div>
																					</div>
																					<div className="grid grid-cols-2 gap-4 w-full">
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="email">Email</Label>
																							<Input
																								type="email"
																								id="email"
																								placeholder="Email"
																							/>
																						</div>
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="noTlpn">Nomor Telepon</Label>
																							<Input
																								type="text"
																								id="noTlpn"
																								placeholder="Nomor Telepon"
																							/>
																						</div>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="pendidikanTerakhir">Pendidikan Terakhir</Label>
																						<Input
																							type="text"
																							id="pendidikanTerakhir"
																							placeholder="Pendidikan Terakhir"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="pekerjaan">Pekerjaan</Label>
																						<Input
																							type="text"
																							id="pekerjaan"
																							placeholder="Pekerjaan"
																						/>
																					</div>
																				</div>
																				<h1 className="font-bold text-xl px-3">Edit Data Ibu</h1>
																				<div className="bg-white rounded-md p-4 flex flex-col gap-4">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="fullName">Nama Lengkap</Label>
																						<Input
																							type="text"
																							id="fullName"
																							placeholder="Nama Lengkap"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="nik">NIK</Label>
																						<Input
																							type="text"
																							id="nik"
																							placeholder="NIK"
																						/>
																					</div>
																					<div className="grid grid-cols-2 gap-4 w-full">
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="tempatLahir">Tempat Lahir</Label>
																							<Input
																								type="text"
																								id="tempatLahir"
																								placeholder="Tempat Lahir"
																							/>
																						</div>
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="tgl Lahir">Tanggal Lahir</Label>
																							<Popover>
																								<PopoverTrigger asChild>
																									<Button
																										variant={"outline"}
																										className="justify-between text-left font-normal"
																									>
																										{date ? format(date, "PPP") : <span>Pilih Tanggal Lahir</span>}
																										<CalendarIcon className="h-4 w-4" />
																									</Button>
																								</PopoverTrigger>
																								<PopoverContent className="p-0 w-full">
																									<Calendar
																										mode="single"
																										selected={date}
																										onSelect={setDate}
																										initialFocus
																									/>
																								</PopoverContent>
																							</Popover>
																						</div>
																					</div>
																					<div className="flex flex-row gap-4 w-full">
																						<div className="grid w-2/3 items-center gap-1.5">
																							<Label htmlFor="alamat">Alamat</Label>
																							<Input
																								type="text"
																								id="alamat"
																								placeholder="Alamat Lengkap"
																							/>
																						</div>
																						<div className="grid w-1/3 items-center gap-1.5">
																							<Label htmlFor="kodePos">Kode Pos</Label>
																							<Input
																								type="text"
																								id="kodePos"
																								placeholder="Kode Pos"
																							/>
																						</div>
																					</div>
																					<div className="grid grid-cols-2 gap-4 w-full">
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="email">Email</Label>
																							<Input
																								type="email"
																								id="email"
																								placeholder="Email"
																							/>
																						</div>
																						<div className="grid w-full items-center gap-1.5">
																							<Label htmlFor="noTlpn">Nomor Telepon</Label>
																							<Input
																								type="text"
																								id="noTlpn"
																								placeholder="Nomor Telepon"
																							/>
																						</div>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="pendidikanTerakhir">Pendidikan Terakhir</Label>
																						<Input
																							type="text"
																							id="pendidikanTerakhir"
																							placeholder="Pendidikan Terakhir"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="pekerjaan">Pekerjaan</Label>
																						<Input
																							type="text"
																							id="pekerjaan"
																							placeholder="Pekerjaan"
																						/>
																					</div>
																				</div>
																			</form>
																		</CardContent>
																	</Card>
																	<div className="my-4 grid w-full justify-end items-center gap-1.5">
																		<AlertDialogAction asChild>
																			<Button
																				onClick={handleEditOrtu}
																				className="bg-utama hover:bg-utamaHover max-w-max"
																			>
																				{loading ? <Spinner className="size-16" /> : "Edit"}
																			</Button>
																		</AlertDialogAction>
																	</div>
																</TabsContent>
															</Tabs>
														</div>
													</AlertDialogDescription>
												</AlertDialogContent>
											</AlertDialog>
											{/* delete */}
											<ButtonDelete href="/dashboard/biodata/siswa">
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
			</Tabs>
		</div>
	);
}
