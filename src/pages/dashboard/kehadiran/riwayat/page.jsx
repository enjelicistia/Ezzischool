"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CalendarIcon, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Table, TableBody, TableCell, TableFooter, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { useNavigate } from "react-router";

export default function PageRiwayatKehadiran() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [tab, setTab] = useState("mapel");
	const [dateMpMulai, setDateMpMulai] = useState();
	const [dateMpAkhir, setDateMpAkhir] = useState();
	const [dateEkskulMulai, setDateEkskulMulai] = useState();
	const [dateEkskulAkhir, setDateEkskulAkhir] = useState();

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengeksport file.");
			navigate("/dashboard/kehadiran/riwayat");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">Riwayat Presensi {tab === "mapel" ? "Mata Pelajaran" : tab === "ekskul" ? "Ekstrakurikuler" : ""}</h1>
			<Tabs defaultValue="mapel">
				<TabsList className="grid grid-cols-3 gap-2 w-[400px]">
					<TabsTrigger
						onClick={() => setTab("mapel")}
						value="mapel"
					>
						Mata Pelajaran
					</TabsTrigger>
					<TabsTrigger
						onClick={() => setTab("ekskul")}
						value="ekskul"
					>
						Ekstrakurikuler
					</TabsTrigger>
				</TabsList>

				{/* MAPEL */}

				<TabsContent
					value="mapel"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="grid grid-cols-1 xl:grid-cols-12 gap-4 items-end">
								<div className="grid w-full items-center gap-1 col-span-3">
									<Label
										htmlFor="tanggalMulai"
										className="text-base font-semibold"
									>
										Tanggal Mulai
									</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="justify-between text-left font-semibold overflow-hidden"
											>
												{dateMpMulai ? format(dateMpMulai, "PPP") : <span>Pilih tanggal mulai</span>}
												<CalendarIcon className="h-4 w-4" />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="p-0 w-full">
											<Calendar
												mode="single"
												selected={dateMpMulai}
												onSelect={setDateMpMulai}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="grid w-full items-center gap-1 col-span-3">
									<Label
										htmlFor="tanggalAkhir"
										className="text-base font-semibold"
									>
										Tanggal Akhir
									</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="justify-between text-left font-semibold overflow-hidden"
											>
												{dateMpAkhir ? format(dateMpAkhir, "PPP") : <span>Pilih tanggal mulai</span>}
												<CalendarIcon className="h-4 w-4" />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="p-0 w-full">
											<Calendar
												mode="single"
												selected={dateMpAkhir}
												onSelect={setDateMpAkhir}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="flex flex-col gap-3 col-span-2">
									<p>Kelas</p>
									<Select>
										<SelectTrigger className="bg-white">
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
								<div className="flex flex-col gap-3 col-span-3">
									<p>Mata Pelajaran</p>
									<Select>
										<SelectTrigger className="bg-white">
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
								<div className="hidden xl:block"></div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-8 xl:justify-between">
						<div className="flex gap-4">
							<div className="flex">
								<Input
									type="text"
									placeholder="Cari mata pelajaran"
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
						<div className="flex justify-end">
							<Button
								onClick={handleExport}
								className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282] font-bold"
							>
								{loading ? <Spinner className="size-6" /> : "Export to Excel"}
							</Button>
						</div>
					</div>
					<div className="overflow-auto grid grid-cols-1 shadow-md">
						<Table className="border">
							<TableBody>
								<TableRow>
									<TableCell className="h-52 text-center">
										<img
											src="/nodata.png"
											width={500}
											height={500}
											alt="No data"
											className="w-12 mx-auto mb-2"
										/>
										<p className="font-semibold text-sm text-gray-400">No data available</p>
									</TableCell>
								</TableRow>
							</TableBody>
							<TableFooter className="border-none bg-transparent">
								<TableRow>
									<TableCell
										colSpan={1}
										className="text-xs text-black"
									>
										<div className="flex justify-between gap-4">
											<p className="text-black">Menampilkan 5 dari 5 hasil</p>
											<div className="flex items-center justify-end gap-1">
												<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
													<ChevronLeft className="text-black p-1" />
												</Button>
												<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
												<Button className="p-0 size-6  bg-gray-200 hover:bg-gray-300">
													<ChevronRight className="text-black p-1" />
												</Button>
											</div>
										</div>
									</TableCell>
								</TableRow>
							</TableFooter>
						</Table>
					</div>
				</TabsContent>

				{/* EKSKUL */}

				<TabsContent
					value="ekskul"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="grid grid-cols-1 xl:grid-cols-4 gap-4 items-end">
								<div className="grid w-full items-center gap-1">
									<Label
										htmlFor="tanggalMulai"
										className="text-base font-semibold"
									>
										Tanggal Mulai
									</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="justify-between text-left font-semibold overflow-hidden"
											>
												{dateEkskulMulai ? format(dateEkskulMulai, "PPP") : <span>Pilih tanggal mulai</span>}
												<CalendarIcon className="h-4 w-4" />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="p-0 w-full">
											<Calendar
												mode="single"
												selected={dateEkskulMulai}
												onSelect={setDateEkskulMulai}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="grid w-full items-center gap-1">
									<Label
										htmlFor="tanggalAkhir"
										className="text-base font-semibold"
									>
										Tanggal Akhir
									</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="justify-between text-left font-semibold overflow-hidden"
											>
												{dateEkskulAkhir ? format(dateEkskulAkhir, "PPP") : <span>Pilih tanggal akhir</span>}
												<CalendarIcon className="h-4 w-4" />
											</Button>
										</PopoverTrigger>
										<PopoverContent className="p-0 w-full">
											<Calendar
												mode="single"
												selected={dateEkskulAkhir}
												onSelect={setDateEkskulAkhir}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div className="flex flex-col gap-3">
									<p>Ekstrakurikuler</p>
									<Select>
										<SelectTrigger className="bg-white">
											<SelectValue placeholder="Pilih Ekstrakurikuler" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Ekstrakurikuler</SelectLabel>
												<SelectItem value="1">Ekstrakurikuler 1</SelectItem>
												<SelectItem value="2">Ekstrakurikuler 2</SelectItem>
												<SelectItem value="3">Ekstrakurikuler 3</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div className="hidden xl:block"></div>
							</CardTitle>
						</CardHeader>
					</Card>
					<div className="flex flex-col xl:flex-row gap-2 xl:gap-8 xl:justify-between">
						<div className="flex gap-4">
							<div className="flex">
								<Input
									type="text"
									placeholder="Cari Ekstrakurikuler"
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
						<Button
							onClick={handleExport}
							className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282] font-bold"
						>
							{loading ? <Spinner className="size-16" /> : "Export to Excel"}
						</Button>
					</div>
					<div className="overflow-auto grid grid-cols-1 shadow-md">
						<Table className="border">
							<TableBody>
								<TableRow>
									<TableCell className="h-52 text-center">
										<img
											src="/nodata.png"
											width={500}
											height={500}
											alt="No data"
											className="w-12 mx-auto mb-2"
										/>
										<p className="font-semibold text-sm text-gray-400">No data available</p>
									</TableCell>
								</TableRow>
							</TableBody>
							<TableFooter className="border-none bg-transparent">
								<TableRow>
									<TableCell
										colSpan={1}
										className="text-xs text-black"
									>
										<div className="flex justify-between gap-4">
											<p>Menampilkan 5 dari 5 hasil</p>
											<div className="flex items-center justify-end gap-1">
												<Button className="p-0 size-6 bg-gray-200 hover:bg-gray-300">
													<ChevronLeft className="text-black p-1" />
												</Button>
												<Button className="p-0 size-6 text-xs bg-utama hover:bg-utamaHover text-white">1</Button>
												<Button className="p-0 size-6  bg-gray-200 hover:bg-gray-300">
													<ChevronRight className="text-black p-1" />
												</Button>
											</div>
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
