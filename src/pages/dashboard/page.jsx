import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { ChevronDown, Ellipsis, X, Calendar as CalendarIcon } from "lucide-react";
import * as Ikon from "@/components/icons/main-menu";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Bar, BarChart, CartesianGrid, XAxis, Label, Pie, PieChart, YAxis } from "recharts";
import { toast } from "sonner";
import { Label as LabelInput } from "@/components/ui/label";

const chartData = [
	{ month: "JANUARI", presensi: 29, tidak_presensi: 22 },
	{ month: "FEBRUARI", presensi: 21, tidak_presensi: 17 },
	{ month: "MARET", presensi: 39, tidak_presensi: 31 },
	{ month: "APRIL", presensi: 21, tidak_presensi: 17 },
	{ month: "MEI", presensi: 29, tidak_presensi: 24 },
	{ month: "JUNI", presensi: 21, tidak_presensi: 17 },
	{ month: "JULI", presensi: 38, tidak_presensi: 31 },
	{ month: "AGUSTUS", presensi: 29, tidak_presensi: 24 },
	{ month: "SEPTEMBER", presensi: 21, tidak_presensi: 17 },
	{ month: "OKTOBER", presensi: 21, tidak_presensi: 17 },
	{ month: "NOVERMBER", presensi: 39, tidak_presensi: 31 },
	{ month: "DESEMBER", presensi: 29, tidak_presensi: 24 },
];

const chartDataSiswa = [
	{ siswa: "lakilaki", value: 30, fill: "#3182CE" },
	{ siswa: "perempuan", value: 10, fill: "#9DECF9" },
];

const chartConfig = {
	presensi: {
		label: "Presensi",
		color: "#3182CE",
	},
	tidak_presensi: {
		label: "Tidak Presensi",
		color: "#9DECF9",
	},
};

const chartConfigSiswa = {
	lakilaki: {
		label: "Laki-laki",
		color: "#3182CE",
	},
	perempuan: {
		label: "Perempuan",
		color: "#9DECF9",
	},
};

const data = {
	card: [
		{
			title: "Jumlah Siswa",
			icon: Ikon.JumlahSiswa,
			value: 40,
		},
		{
			title: "Jumlah Guru",
			icon: Ikon.JumlahGuru,
			value: 40,
		},
		{
			title: "Jumlah Staff",
			icon: Ikon.JumlahStaff,
			value: 10,
		},
		{
			title: "Jumlah Ruangan",
			icon: Ikon.JumlahRuangan,
			value: 30,
		},
	],
};

export default function PageDashboard() {
	const navigate = useNavigate();
	const [loading, setLoading] = React.useState(false);

	const totalSiswa = React.useMemo(() => {
		return chartDataSiswa.reduce((acc, curr) => acc + curr.value, 0);
	}, []);

	const handleAdd = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambah acara.");
			navigate("/dashboard");
		}, 250);
	};

	const [date, setDate] = React.useState();

	return (
		<div>
			<div>
				<div
					className="h-56 w-full p-12 flex flex-col gap-2 justify-start items-start text-white bg-cover bg-center"
					style={{ backgroundImage: "url('/background.png')" }}
				>
					<h1 className="font-bold text-2xl">Hello, Operator Bawahan !</h1>
					<p>Welcome to SMK Bawahan Dashboard.</p>
				</div>
				<div className="bg-white flex px-8 xl:px-20 gap-12 shadow-md rounded-t-2xl relative -top-6">
					<div className="w-24 p-4 aspect-square bg-white max-w-max flex justify-center items-center rounded-full shadow-lg border-2 relative -top-9 xl:-top-12">
						<img
							src="/icon.png"
							alt="Icon"
							width={2000}
							height={2000}
							className="w-20"
						/>
					</div>
					<div className="flex items-center">
						<h1 className="font-bold text-md xl:text-2xl">
							Operator Bahawan - <span className="text-gray-400 text-xl">superoperator</span>
						</h1>
					</div>
				</div>
			</div>
			<div className="px-4 flex flex-col gap-4">
				<div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
					{/* CARD */}
					{data.card.map((item, index) => {
						return (
							<div
								key={index}
								className="bg-white rounded-lg shadow-lg border-2 p-4 flex flex-col gap-2 content-center"
							>
								<div className="flex justify-between items-center">
									<p className="text-md font-semibold">{item.title}</p>
									<div className="p-1 bg-textUtama/40 rounded-md">{item.icon && <item.icon />}</div>
								</div>
								<p className="font-bold text-xl">{item.value}</p>
							</div>
						);
					})}
				</div>
				<div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
					<div className="xl:col-span-3 flex flex-col gap-4">
						{/* TODO RESIZIG BAR */}
						<Card>
							<CardHeader>
								<CardTitle className="text-lg font-bold">Kehadiran Siswa Perbulan</CardTitle>
							</CardHeader>
							<CardContent className="flex px-0">
								<ChartContainer
									config={chartConfig}
									className="w-full h-[313px]"
								>
									<BarChart
										accessibilityLayer
										data={chartData}
										barSize={8}
									>
										<CartesianGrid vertical={false} />
										<XAxis
											dataKey="month"
											tickLine={false}
											tickMargin={10}
											axisLine={false}
											tickFormatter={(value) => value.slice(0, 3)}
										/>
										<YAxis
											axisLine={false}
											tickLine={false}
											tickCount={6}
											ticks={[0, 10, 20, 30, 40, 50]}
											domain={[0, 50]}
											width={40}
										/>
										<ChartTooltip
											cursor={false}
											content={<ChartTooltipContent indicator="dashed" />}
										/>
										<Bar
											dataKey="prsensi"
											fill="#3182CE"
											radius={0}
										/>
										<Bar
											dataKey="tidak_presensi"
											fill="#9DECF9"
											radius={0}
										/>
									</BarChart>
								</ChartContainer>
							</CardContent>
							<CardFooter className="w-full flex flex-col gap-2">
								<div className="w-full flex flex-row justify-center content-center text-sm gap-2">
									<div className="flex flex-row gap-2 items-center">
										<div className="w-2 h-2 rounded-full bg-[#3182CE]" />
										<p>Siswa Presensi</p>
									</div>
									<div className="flex flex-row gap-2 items-center">
										<div className="w-2 h-2 rounded-full bg-[#9DECF9]" />
										<p>Siswa Tidak Presensi</p>
									</div>
								</div>
								<div className="w-full grid grid-cols-2 xl:grid-cols-2 gap-4">
									<div className="bg-[#F7F7F7] p-4">
										<h1 className="text-gray-500 mb-2 text-sm">Siswa Presensi Tepat Waktu</h1>
										<p className="font-semibold text-2xl">40</p>
									</div>
									<div className="bg-[#F7F7F7] p-4">
										<h1 className="text-gray-500 mb-2 text-sm">Siswa Presensi Terlambat</h1>
										<p className="font-semibold text-2xl">10</p>
									</div>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-xl font-bold flex justify-between">
									<p>Pengumuman</p>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="border-utama border-2"
											>
												<p className="text-utama">Senin, 12 Des 2024</p>
												<ChevronDown className="text-utama" />
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-4">
								{[...Array(4)].map((_, index) => (
									<div
										key={index}
										className="bg-[#EDF2F7] rounded-lg p-4 flex items-center gap-4"
									>
										<div className="w-full">
											<h1 className="text-lg font-semibold mb-1">Upacara Hari Pahlawan</h1>
											<p className="text-sm">Senin - 07.30 WIB</p>
										</div>
										<div className="flex">
											{Ikon.Pin && <Ikon.Pin className="size-10" />}
											<Ellipsis className="size-7" />
										</div>
									</div>
								))}
							</CardContent>
							<CardFooter className="border-t-4 p-2 flex justify-center">
								{/* TODO REDIRECT TI INFORMATION */}
								<Link
									to="/dashboard/manajemen-sekolah/informasi"
									className="text-[#00A3C4] font-bold hover:underline cursor-pointer"
								>
									Lihat semua pengumuman
								</Link>
							</CardFooter>
						</Card>
					</div>
					<div className="xl:col-span-2 flex flex-col gap-4">
						<Card className="flex flex-col">
							<CardHeader className="items-center pb-0">
								<CardTitle className="text-lg font-bold">Perbandingan Siswa Laki-laki dan Perempuan</CardTitle>
							</CardHeader>
							<CardContent className="flex-1 pb-0">
								<ChartContainer
									config={chartConfigSiswa}
									className="mx-auto aspect-square max-h-[160px]"
								>
									<PieChart barSize={1}>
										<ChartTooltip
											cursor={false}
											content={<ChartTooltipContent hideLabel />}
										/>
										<Pie
											data={chartDataSiswa}
											dataKey="value"
											nameKey="siswa"
											innerRadius={50}
											strokeWidth={5}
										>
											<Label
												content={({ viewBox }) => {
													if (viewBox && "cx" in viewBox && "cy" in viewBox) {
														return (
															<text
																x={viewBox.cx}
																y={viewBox.cy}
																textAnchor="middle"
																dominantBaseline="middle"
															>
																<tspan
																	x={viewBox.cx}
																	y={(viewBox.cy || 0) - 20}
																	className="fill-muted-foreground text-lg"
																>
																	Siswa
																</tspan>
																<tspan
																	x={viewBox.cx}
																	y={(viewBox.cy || 0) + 16}
																	className="fill-foreground text-3xl font-semibold"
																>
																	{totalSiswa.toLocaleString()}
																</tspan>
															</text>
														);
													}
												}}
											/>
										</Pie>
									</PieChart>
								</ChartContainer>
							</CardContent>
							<CardFooter className="flex-col gap-2 text-sm">
								<div className="flex gap-6">
									<p className="text-lg font-semibold">
										<span className="text-[#3182CE] text-2xl">•</span> Laki-Laki
									</p>
									<p className="text-lg font-semibold">
										<span className="text-[#9DECF9] text-2xl">•</span> Perempuan
									</p>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle className="text-xl font-bold flex justify-between">
									<p>Acara</p>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className="border-utama border-2"
											>
												<p className="text-utama">Senin, 12 Des 2024</p>
												<ChevronDown className="text-utama" />
											</Button>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col gap-4">
								<div className="flex flex-col gap-4">
									<p className="text-sm font-medium text-gray-400">Prioritas</p>
									<div className="bg-[#EDF2F7] rounded-lg p-4 flex items-center gap-4">
										<div className="w-full">
											<h1 className="text-lg font-semibold mb-1">Upacara Hari Pahlawan</h1>
											<p className="text-sm">Senin - 07.30 WIB</p>
										</div>
										<div className="flex">{Ikon.Pin && <Ikon.Pin className="size-10" />}</div>
									</div>
									<div className="bg-[#EDF2F7] rounded-lg p-4 flex items-center gap-4">
										<div className="w-full">
											<h1 className="text-lg font-semibold mb-1">Rapat Harian</h1>
											<p className="text-sm">Senin - 09.30 WIB</p>
										</div>
										<div className="flex">{Ikon.Pin && <Ikon.Pin className="size-10" />}</div>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<p className="text-sm font-medium text-gray-400">Lainnya</p>
									<div className="bg-[#EDF2F7] rounded-lg p-4 flex items-center gap-4">
										<div className="w-full">
											<h1 className="text-lg font-semibold mb-1">Penjadwalan UAS</h1>
											<p className="text-sm">Senin - 11.30 WIB</p>
										</div>
										<div className="flex">
											<Ellipsis className="size-7" />
										</div>
									</div>
									{[...Array(3)].map((_, index) => (
										<div
											key={index}
											className="bg-[#EDF2F7] rounded-lg p-4 flex items-center gap-4"
										>
											<div className="w-full">
												<h1 className="text-lg font-semibold mb-1">Agenda Lain</h1>
												<p className="text-sm">Rabu - 13.00 WIB</p>
											</div>
											<div className="flex">
												<Ellipsis className="size-7" />
											</div>
										</div>
									))}
								</div>
							</CardContent>
							<CardFooter className="border-t-4 p-2 flex justify-center">
								{/* TODO POPUP FOR CREATE AGENDA */}
								<AlertDialog>
									<AlertDialogTrigger asChild>
										<p className="text-[#00A3C4] font-semibold hover:underline cursor-pointer">Buat Acara Baru</p>
									</AlertDialogTrigger>
									<AlertDialogContent className="max-w-md p-0 border-none">
										<AlertDialogTitle className="overflow-hidden flex justify-between bg-utama py-2 px-4 rounded-t-md">
											<p className="text-white font-semibold">Tambah Acara</p>
											<AlertDialogCancel className="p-0 size-6 border-none shadow-none bg-transparent">
												<X />
											</AlertDialogCancel>
										</AlertDialogTitle>
										<AlertDialogDescription asChild>
											<div className="text-black px-4 pb-4 flex flex-col gap-4 ">
												<form
													action=""
													className="flex flex-col gap-6 text-black"
												>
													<div className="grid w-full items-center gap-1.5">
														<LabelInput htmlFor="judul">Judul</LabelInput>
														<Input
															type="text"
															id="judul"
															placeholder="Judul"
														/>
													</div>
													<div className="grid w-full items-center gap-1.5">
														<LabelInput className="text-black">Tanggal</LabelInput>
														<Popover>
															<PopoverTrigger asChild>
																<Button
																	variant={"outline"}
																	className="justify-between text-left font-normal px-3"
																>
																	{date ? format(date, "PPP") : <span>Pilih tanggal</span>}
																	<CalendarIcon className="h-4 w-4" />
																</Button>
															</PopoverTrigger>
															<PopoverContent className="border shadow rounded mt-2 bg-white">
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
														<LabelInput htmlFor="waktu">Waktu</LabelInput>
														<Input
															type="waktu"
															id="waktu"
															placeholder="Waktu"
														/>
													</div>
													<div className="grid grid-cols-3 gap-4">
														<div className="col-span-2 grid w-full items-center bg-[#BEE3F8] p-2 rounded">
															<LabelInput
																htmlFor="daftar"
																className="mb-1"
															>
																Daftar
															</LabelInput>
															<Input
																type="text"
																id="daftar"
																placeholder="Daftar"
																className="border-none shadow-none p-0 max-h-max m-0 font-bold text-2xl text-utama"
																value="Rapat"
															/>
														</div>
														<div className="grid w-full items-center bg-[#BEE3F8] p-2 rounded">
															<LabelInput
																htmlFor="posisi"
																className="mb-1"
															>
																Posisi
															</LabelInput>
															<Input
																type="text"
																id="posisi"
																placeholder="Posisi"
																className="border-none shadow-none p-0 max-h-max m-0 font-bold text-2xl text-utama"
																value="2"
															/>
														</div>
													</div>
													<div className="flex flex-row justify-end">
														<AlertDialogAction asChild>
															<Button
																onClick={handleAdd}
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
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
