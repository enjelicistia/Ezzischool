"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Ellipsis, Search } from "lucide-react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ButtonImport from "@/components/button-import";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { useNavigate } from "react-router";

export default function PageBiodataPpdb() {
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(false);

	const [date, setDate] = React.useState();

	const handleExport = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil mengexport Excel.");
			navigate("/dashboard/biodata/ppdb");
		}, 250);
	};

	return (
		<div className="m-4 p-4 rounded-lg bg-white">
			<h1 className="font-bold text-2xl mb-4">PPDB</h1>
			<Tabs defaultValue="ppdb">
				<TabsContent
					value="ppdb"
					className="flex flex-col gap-4"
				>
					<Card className="rounded-none shadow-none border-none bg-[#EBF8FF]">
						<CardHeader>
							<CardTitle className="grid grid-col-1 xl:grid-cols-2 xl:justify-between xl:items-center gap-4">
								<div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
									<div className="flex flex-col gap-2 w-[219px]">
										<p>Tanggal</p>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant={"outline"}
													className="justify-between text-left font-semibold"
												>
													{date ? format(date, "PPP") : <span>Pilih tanggal</span>}
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
									<div className="flex flex-col gap-2 w-full xl:w-[140px]">
										<p>Status</p>
										<Select>
											<SelectTrigger className=" bg-white">
												<SelectValue placeholder="Pilih Status" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Pilih Satus</SelectLabel>
													<SelectItem value="menunggu-konfirmasi-sekolah">Menunggu Konfirmasi Sekolah</SelectItem>
													<SelectItem value="menunggu-konfirmasi-ortu">Menunggu Konfirmasi Ortu</SelectItem>
													<SelectItem value="sekolah-menolak">Sekolah Menolak</SelectItem>
													<SelectItem value="ortu-menyetujui">Ortu Menyetujui</SelectItem>
													<SelectItem value="ortu-menolak">Ortu Menolak</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
								<div className="flex justify-end">
									<ButtonImport href={"/dashboard/biodata/ppdb"}>
										<Button className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282]">Import</Button>
									</ButtonImport>
								</div>
							</CardTitle>
						</CardHeader>
					</Card>

					<div className="grid grid-col-1 md:grid-cols-2 md:justify-between md:items-center">
						<div className="flex flex-col md:flex-row gap-4 md:gap-4">
							<div className="flex w-[280px]">
								<Input
									type="text"
									placeholder="Cari Siswa"
									className="rounded-r-none"
								/>
								<Button className="bg-gray-200 max-w-max hover:bg-gray-400 aspect-square rounded-l-none border shadow-none">
									<Search className="text-black size-4 aspect-square p-0.5" />
								</Button>
							</div>
							<div className="flex">
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
						<div className="flex justify-end">
							<Button
								onClick={handleExport}
								className="bg-[#90CDF4] hover:bg-[#7bb1d3] text-[#2C5282] font-bold"
							>
								{loading ? <Spinner className="h-6 w-6" /> : "Export to Excel"}
							</Button>
						</div>
					</div>

					<div className="overflow-auto grid grid-cols-1">
						<Table className="min-w-full table-auto">
							<TableHeader>
								<TableRow className="bg-utama/50 border border-textUtama">
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NO</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">TANGGAL DAFTAR</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NAMA LENGKAP</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">TEMPAT TANGGAL LAHIR</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JENIS KELAMIN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">NISN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">ASAL SEKOLAH</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">JURUSAN</TableHead>
									<TableHead className="text-black font-bold text-sm text-center text-nowrap">STATUS</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{[...Array(9)].map((_, index) => (
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
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama">Tabel</TableCell>
										<TableCell className="text-center border-textUtama border-r">
											<Badge className="bg-green-500 hover:bg-green-600">Diterima</Badge>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
							<TableFooter className="border border-textUtama">
								<TableRow>
									<TableCell
										colSpan={5}
										className="text-xs text-black"
									>
										Menampilkan 9 dari 100 hasil
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
