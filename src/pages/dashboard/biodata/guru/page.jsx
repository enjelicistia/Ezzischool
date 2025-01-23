import * as React from "react";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import * as Ikon from "@/components/icons/table";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { Spinner } from "@/components/spinner";
import ButtonDelete from "@/components/button-delete";
import ButtonImport from "@/components/button-import";

export default function PageBiodataGuru() {
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(false);
	const [activeAddGuru, setActiveAddGuru] = React.useState("pribadi");
	const [activeEditGuru, setActiveEditGuru] = React.useState("pribadi");

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport Excel.");
			navigate("/dashboard/biodata/guru");
		}, 250);
	};

	const handleEditPassword = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengedit password.");
			navigate("/dashboard/biodata/guru");
		}, 250);
	};

	const handleUploadImage = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengupload Image.");
			navigate("/dashboard/biodata/guru");
		}, 250);
	};

	const handleEditGuru = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Melanjutkan Edit Data Sertifikasi.");
			setActiveEditGuru("serti");
		}, 250);
	};

	const handleEditSerti = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil Mengedit Data Guru Dan Sertifikasi.");
			navigate("/dashboard/biodata/guru");
			setActiveEditGuru("pribadi");
		}, 250);
	};

	const handleTambahGuru = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Melanjutkan Isi Data Sertifikasi.");
			setActiveAddGuru("serti");
		}, 250);
	};

	const handleTambahSerti = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil Menambah Data Guru Dan Sertifikasi.");
			navigate("/dashboard/biodata/guru");
			setActiveAddGuru("pribadi");
		}, 250);
	};

	const [date, setDate] = React.useState();

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Guru</h1>
			<Tabs defaultValue="guru">
				<TabsContent
					value="guru"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="flex flex-col gap-4 xl:flex-row xl:justify-between xl:items-center">
								<div className="flex flex-col gap-2">
									<p>Status</p>
									<Select>
										<SelectTrigger className="w-[140px] bg-white">
											<SelectValue placeholder="Pilih Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Pilih Status</SelectLabel>
												<SelectItem value="pns">PNS</SelectItem>
												<SelectItem value="non-pns">Non PNS</SelectItem>
												<SelectItem value="pppk">PPPK</SelectItem>
												<SelectItem value="kontrak">kontrak</SelectItem>
												<SelectItem value="honorer">Honorer</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="flex gap-2">
									<ButtonImport href={"/dashboard/biodata/guru"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
									</ButtonImport>

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button className="bg-utama hover:bg-utamaHover text-white">Tambah Guru</Button>
										</AlertDialogTrigger>
										<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
											<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
												<p className="text-white font-semibold">Tambah Guru</p>
												<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
													<X />
												</AlertDialogCancel>
											</AlertDialogTitle>
											<AlertDialogDescription asChild>
												<div className="text-black px-4 flex flex-col gap-6 rounded-lg bg-white">
													<Tabs
														value={activeAddGuru}
														onValueChange={setActiveAddGuru}
													>
														<TabsList className="grid grid-cols-3 gap-2 w-[500px]">
															<TabsTrigger value="pribadi">Data Pribadi</TabsTrigger>
															<TabsTrigger value="serti">Data Sertifikasi</TabsTrigger>
														</TabsList>

														{/* PRIBADI */}

														<TabsContent
															value="pribadi"
															className="flex flex-col"
														>
															<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																<CardHeader>
																	<h1 className="font-bold text-2xl">Tambah Data Guru</h1>
																</CardHeader>
																<CardContent className="px-1 pb-1">
																	<form
																		className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[60vh]"
																		onSubmit={(e) => e.preventDefault()}
																	>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="fullName">Nama Lengkap*</Label>
																			<Input
																				type="text"
																				id="fullName"
																				placeholder="Nama Lengkap"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="nik">NIK*</Label>
																			<Input
																				type="text"
																				id="nik"
																				placeholder="NIK"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="nuptk">NUPTK*</Label>
																			<Input
																				type="text"
																				id="nuptk"
																				placeholder="NUPTK"
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
																						<SelectLabel>Pilih Agama</SelectLabel>
																						<SelectItem value="islam">Islam</SelectItem>
																						<SelectItem value="kristen">Kristen</SelectItem>
																						<SelectItem value="katolik">Katolik</SelectItem>
																						<SelectItem value="hindu">Hindu</SelectItem>
																						<SelectItem value="budha">Budha</SelectItem>
																						<SelectItem value="konghucu">Konghucu</SelectItem>
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
																			<Label htmlFor="pendidikanTerakhir">Pendidikan Terakhir</Label>
																			<Input
																				type="text"
																				id="pendidikanTerakhir"
																				placeholder="Pendidikan Terakhir"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="status">Status</Label>
																			<Select>
																				<SelectTrigger className=" bg-white">
																					<SelectValue placeholder="Pilih Status" />
																				</SelectTrigger>
																				<SelectContent>
																					<SelectGroup>
																						<SelectLabel>Pilih Status</SelectLabel>
																						<SelectItem value="pns">PNS</SelectItem>
																						<SelectItem value="non-pns">Non PNS</SelectItem>
																						<SelectItem value="pppk">PPPK</SelectItem>
																						<SelectItem value="kontrak">kontrak</SelectItem>
																						<SelectItem value="honorer">Honorer</SelectItem>
																					</SelectGroup>
																				</SelectContent>
																			</Select>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="lamaBekerja">Lama Bekerja</Label>
																			<Input
																				type="text"
																				id="lamaBekerja"
																				placeholder="Lama Bekerja"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="jumlahJam">Jumlah Jam</Label>
																			<Input
																				type="text"
																				id="jumlahJam"
																				placeholder="Jumlah Jam"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="waliKelas">Wali Kelas</Label>
																			<Input
																				type="text"
																				id="waliKelas"
																				placeholder="Wali Kelas"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="status">Status Pernikahan</Label>
																			<Select>
																				<SelectTrigger className=" bg-white">
																					<SelectValue placeholder="Pilih Status" />
																				</SelectTrigger>
																				<SelectContent>
																					<SelectGroup>
																						<SelectLabel>Pilih Status Pernikahan</SelectLabel>
																						<SelectItem value="belumMenikah">Belum Menikah</SelectItem>
																						<SelectItem value="menikah">Menikah</SelectItem>
																						<SelectItem value="janda/duda">Janda/Duda</SelectItem>
																					</SelectGroup>
																				</SelectContent>
																			</Select>
																		</div>
																	</form>
																</CardContent>
															</Card>
															<div className="my-4 grid w-full justify-end items-center gap-1.5">
																<AlertDialogAction asChild>
																	<Button
																		onClick={(e) => {
																			e.preventDefault();
																			handleTambahGuru();
																		}}
																		className="bg-utama hover:bg-utamaHover max-w-max"
																	>
																		{loading ? <Spinner className="size-16" /> : "Lanjut"}
																	</Button>
																</AlertDialogAction>
															</div>
														</TabsContent>

														{/* SERTIFIKASI */}

														<TabsContent
															value="serti"
															className="flex flex-col"
														>
															<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																<CardHeader>
																	<h1 className="font-bold text-2xl">Tambah Data Guru </h1>
																</CardHeader>
																<CardContent className="px-1 pb-1">
																	<form className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="lembaga">Lembaga</Label>
																			<Input
																				type="text"
																				id="lembaga"
																				placeholder="Nama Lembaga"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="bidangStudi">Bidang Studi</Label>
																			<Input
																				type="text"
																				id="bidangStudi"
																				placeholder="Nama Bidang Studi"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="jenisSerti">Jenis Sertifikasi</Label>
																			<Input
																				type="text"
																				id="jenisSerti"
																				placeholder="Jenis Sertifikasi"
																			/>
																		</div>
																		<div className="grid grid-cols-2 gap-4 w-full">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="mulaiBerlaku">Tanggal Mulai Berlaku</Label>
																				<Popover>
																					<PopoverTrigger asChild>
																						<Button
																							variant={"outline"}
																							className="justify-between text-left font-normal"
																						>
																							{date ? format(date, "PPP") : <span>Pilih Tanggal Mulai Berlaku</span>}
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
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="habisBerlaku">Tanggal Habis Berlaku</Label>
																				<Popover>
																					<PopoverTrigger asChild>
																						<Button
																							variant={"outline"}
																							className="justify-between text-left font-normal"
																						>
																							{date ? format(date, "PPP") : <span>Pilih Tanggal Habis Berlaku</span>}
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
																			<Label htmlFor="noSerti">Nomor Sertifikat</Label>
																			<Input
																				type="text"
																				id="noSerti"
																				placeholder="Nomor Sertifikat"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="noPeserta">Nomor Peserta</Label>
																			<Input
																				type="text"
																				id="noPeserta"
																				placeholder="Nomor Peserta"
																			/>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="noRegistrasi">Nomor Registrasi</Label>
																			<Input
																				type="text"
																				id="noRegistrasi"
																				placeholder="Nomor Registrasi"
																			/>
																		</div>
																		<div className="grid grid-cols-2 gap-4 w-full">
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="noDoc">Nomor Dokumen</Label>
																				<Input
																					type="text"
																					id="noDoc"
																					placeholder="Nomor Dokumen"
																				/>
																			</div>
																			<div className="grid w-full items-center gap-1.5">
																				<Label htmlFor="namaDoc">Nama Dokumen</Label>
																				<Input
																					type="text"
																					id="namaDoc"
																					placeholder="Nama Dokumen"
																				/>
																			</div>
																		</div>
																		<div className="grid w-full items-center gap-1.5">
																			<Label htmlFor="keterangan">Keterangan</Label>
																			<Input
																				type="text"
																				id="keterangan"
																				placeholder="Keterangan"
																			/>
																		</div>
																	</form>
																</CardContent>
															</Card>
															<div className="my-4 grid w-full justify-end items-center gap-1.5">
																<AlertDialogAction asChild>
																	<Button
																		onClick={handleTambahSerti}
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
								placeholder="Cari Guru"
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
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NIP</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">TEMPAT TANGGAL LAHIR</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NUPTK</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">EMAIL</TableHead>
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
										<TableCell className="text-center border-textUtama">{index === 0 ? "1234567890123456" : "Tabel"}</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
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

											{/* edit page */}

											<AlertDialog>
												<AlertDialogTrigger asChild>
													<Button className="p-2 size-7 bg-white hover:bg-gray-100 border border-gray-300 rounded-none shadow-none">{Ikon.Edit && <Ikon.Edit className="text-black" />}</Button>
												</AlertDialogTrigger>
												<AlertDialogContent className="max-w-6xl p-0 overflow-hidden border-none">
													<AlertDialogTitle className="flex justify-between bg-[#90CDF4] py-2 px-4">
														<p className="text-white font-semibold">Edit Guru</p>
														<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
															<X />
														</AlertDialogCancel>
													</AlertDialogTitle>
													<AlertDialogDescription asChild>
														<div className="text-black px-4 flex flex-col gap-6 rounded-lg bg-white">
															<Tabs
																value={activeEditGuru}
																onValueChange={setActiveEditGuru}
															>
																<TabsList className="grid grid-cols-3 gap-2 w-[500px]">
																	<TabsTrigger value="pribadi">Data Pribadi</TabsTrigger>
																	<TabsTrigger value="serti">Data Sertifikasi</TabsTrigger>
																</TabsList>

																{/* PRIBADI */}

																<TabsContent
																	value="pribadi"
																	className="flex flex-col"
																>
																	<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																		<CardHeader>
																			<h1 className="font-bold text-2xl">Edit Data Guru</h1>
																		</CardHeader>
																		<CardContent className="px-1 pb-1">
																			<form
																				className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[60vh]"
																				onSubmit={(e) => e.preventDefault()}
																			>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="fullName">Nama Lengkap*</Label>
																					<Input
																						type="text"
																						id="fullName"
																						placeholder="Nama Lengkap"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="nik">NIK*</Label>
																					<Input
																						type="text"
																						id="nik"
																						placeholder="NIK"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="nuptk">NUPTK*</Label>
																					<Input
																						type="text"
																						id="nuptk"
																						placeholder="NUPTK"
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
																								<SelectLabel>Pilih Agama</SelectLabel>
																								<SelectItem value="islam">Islam</SelectItem>
																								<SelectItem value="kristen">Kristen</SelectItem>
																								<SelectItem value="katolik">Katolik</SelectItem>
																								<SelectItem value="hindu">Hindu</SelectItem>
																								<SelectItem value="budha">Budha</SelectItem>
																								<SelectItem value="konghucu">Konghucu</SelectItem>
																							</SelectGroup>
																						</SelectContent>
																					</Select>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="alamat">Alamat</Label>
																					<Input
																						type="text"
																						id="alamat"
																						placeholder="Alamat Lengkap dengan kode pos"
																					/>
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
																					<Label htmlFor="status">Status</Label>
																					<Select>
																						<SelectTrigger className=" bg-white">
																							<SelectValue placeholder="Pilih Status" />
																						</SelectTrigger>
																						<SelectContent>
																							<SelectGroup>
																								<SelectLabel>Pilih Status</SelectLabel>
																								<SelectItem value="pns">PNS</SelectItem>
																								<SelectItem value="non-pns">Non PNS</SelectItem>
																								<SelectItem value="pppk">PPPK</SelectItem>
																								<SelectItem value="kontrak">kontrak</SelectItem>
																								<SelectItem value="honorer">Honorer</SelectItem>
																							</SelectGroup>
																						</SelectContent>
																					</Select>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="lamaBekerja">Lama Bekerja</Label>
																					<Input
																						type="text"
																						id="lamaBekerja"
																						placeholder="Lama Bekerja"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="jumlahJam">Jumlah Jam</Label>
																					<Input
																						type="text"
																						id="jumlahJam"
																						placeholder="Jumlah Jam"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="waliKelas">Wali Kelas</Label>
																					<Input
																						type="text"
																						id="waliKelas"
																						placeholder="Wali Kelas"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="status">Status Pernikahan</Label>
																					<Select>
																						<SelectTrigger className=" bg-white">
																							<SelectValue placeholder="Pilih Status" />
																						</SelectTrigger>
																						<SelectContent>
																							<SelectGroup>
																								<SelectLabel>Pilih Status Pernikahan</SelectLabel>
																								<SelectItem value="belumMenikah">Belum Menikah</SelectItem>
																								<SelectItem value="menikah">Menikah</SelectItem>
																								<SelectItem value="janda/duda">Janda/Duda</SelectItem>
																							</SelectGroup>
																						</SelectContent>
																					</Select>
																				</div>
																			</form>
																		</CardContent>
																	</Card>
																	<div className="my-4 grid w-full justify-end items-center gap-1.5">
																		<AlertDialogAction asChild>
																			<Button
																				onClick={(e) => {
																					e.preventDefault();
																					handleEditGuru();
																				}}
																				className="bg-utama hover:bg-utamaHover max-w-max"
																			>
																				{loading ? <Spinner className="size-16" /> : "Lanjut"}
																			</Button>
																		</AlertDialogAction>
																	</div>
																</TabsContent>

																{/* SERTIFIKASI */}

																<TabsContent
																	value="serti"
																	className="flex flex-col"
																>
																	<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
																		<CardHeader>
																			<h1 className="font-bold text-2xl">Edit Data Serifikasi Guru</h1>
																		</CardHeader>
																		<CardContent className="px-1 pb-1">
																			<form className="bg-white rounded-md p-4 flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="lembaga">Lembaga</Label>
																					<Input
																						type="text"
																						id="lembaga"
																						placeholder="Nama Lembaga"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="bidangStudi">Bidang Studi</Label>
																					<Input
																						type="text"
																						id="bidangStudi"
																						placeholder="Nama Bidang Studi"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="jenisSerti">Jenis Sertifikasi</Label>
																					<Input
																						type="text"
																						id="jenisSerti"
																						placeholder="Jenis Sertifikasi"
																					/>
																				</div>
																				<div className="grid grid-cols-2 gap-4 w-full">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="mulaiBerlaku">Tanggal Mulai Berlaku</Label>
																						<Popover>
																							<PopoverTrigger asChild>
																								<Button
																									variant={"outline"}
																									className="justify-between text-left font-normal"
																								>
																									{date ? format(date, "PPP") : <span>Pilih Tanggal Mulai Berlaku</span>}
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
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="habisBerlaku">Tanggal Habis Berlaku</Label>
																						<Popover>
																							<PopoverTrigger asChild>
																								<Button
																									variant={"outline"}
																									className="justify-between text-left font-normal"
																								>
																									{date ? format(date, "PPP") : <span>Pilih Tanggal Habis Berlaku</span>}
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
																					<Label htmlFor="noSerti">Nomor Sertifikat</Label>
																					<Input
																						type="text"
																						id="noSerti"
																						placeholder="Nomor Sertifikat"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="noPeserta">Nomor Peserta</Label>
																					<Input
																						type="text"
																						id="noPeserta"
																						placeholder="Nomor Peserta"
																					/>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="noRegistrasi">Nomor Registrasi</Label>
																					<Input
																						type="text"
																						id="noRegistrasi"
																						placeholder="Nomor Registrasi"
																					/>
																				</div>
																				<div className="grid grid-cols-2 gap-4 w-full">
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="noDoc">Nomor Dokumen</Label>
																						<Input
																							type="text"
																							id="noDoc"
																							placeholder="Nomor Dokumen"
																						/>
																					</div>
																					<div className="grid w-full items-center gap-1.5">
																						<Label htmlFor="namaDoc">Nama Dokumen</Label>
																						<Input
																							type="text"
																							id="namaDoc"
																							placeholder="Nama Dokumen"
																						/>
																					</div>
																				</div>
																				<div className="grid w-full items-center gap-1.5">
																					<Label htmlFor="keterangan">Keterangan</Label>
																					<Input
																						type="text"
																						id="keterangan"
																						placeholder="Keterangan"
																					/>
																				</div>
																			</form>
																		</CardContent>
																	</Card>
																	<div className="my-4 grid w-full justify-end items-center gap-1.5">
																		<AlertDialogAction asChild>
																			<Button
																				onClick={handleEditSerti}
																				className="bg-utama hover:bg-utamaHover max-w-max"
																			>
																				{loading ? <Spinner className="size-16" /> : "Simpan"}
																			</Button>
																		</AlertDialogAction>
																	</div>
																</TabsContent>
															</Tabs>
														</div>
													</AlertDialogDescription>
												</AlertDialogContent>
											</AlertDialog>

											{/* Delete */}
											<ButtonDelete href="/dashboard/biodata/guru">
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
										colSpan={4}
										className="text-right"
									>
										<div className="flex items-center justify-end gap-1">
											<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
												<ChevronLeft className="text-black p-1" />
											</Button>
											<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
											<Button className="p-0 size-6 text-xs bg-transparent hover:bg-gray-200 text-black">2</Button>
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
