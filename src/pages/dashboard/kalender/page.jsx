"use client";

import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, ChevronDown, ChevronLeft, ChevronRight, X, CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/spinner";
import { toast } from "sonner";
import { format } from "date-fns";

export default function PageKalender() {
	const navigate = useNavigate();

	const [pages, setPages] = useState([
		{ name: "bulan", active: true },
		{ name: "minggu", active: false },
		{ name: "hari", active: false },
	]);

	const [loading, setLoading] = useState(false);
	const [date, setDate] = useState();

	const handleAdd = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Berhasil menambah acara.");
			navigate("/dashboard/kalender");
		}, 250);
	};

	const handlerChangePage = (event, index) => {
		event.preventDefault();
		setPages((prev) => prev.map((item, idx) => (index === idx ? { ...item, active: true } : { ...item, active: false })));
	};

	const handleTodayClick = () => {
		setPages((prev) => prev.map((item) => (item.name === "hari" ? { ...item, active: true } : { ...item, active: false })));
	};

	return (
		<div className="bg-white m-4 p-4 rounded-lg shadow-lg border-2 flex flex-col gap-4">
			<div className="px-4 pt-8 pb-4 gap-8 bg-utama/10">
				<div className="flex flex-col xl:flex-row xl:justify-between xl:items-end gap-4 py-2 border-b-2 border-black/10">
					<div className="flex flex-col xl:flex-row xl:gap-12 xl:items-end gap-2">
						<h1 className="font-bold text-2xl text-utama">Kalender</h1>
						<div>
							<div className="flex gap-2 items-center">
								{pages.map((item, index) => {
									return (
										<p
											key={index}
											className={`font-medium cursor-pointer py-2 px-3 capitalize ${item.active && "text-utama border-b-2 border-b-utama"}`}
											onClick={(event) => handlerChangePage(event, index)}
										>
											{item.name}
										</p>
									);
								})}
							</div>
						</div>
					</div>
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<Button className="bg-utama hover:bg-utamaHover text-white">
								Tambah Acara <Plus />
							</Button>
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
											<Label htmlFor="judul">Judul</Label>
											<Input
												type="text"
												id="judul"
												placeholder="Judul"
											/>
										</div>
										<div className="grid w-full items-center gap-1.5">
											<Label
												htmlFor="tanggal"
												className="text-black"
											>
												Tanggal
											</Label>
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
											<Label htmlFor="waktu">Waktu</Label>
											<Input
												type="waktu"
												id="waktu"
												placeholder="Waktu"
											/>
										</div>
										<div className="grid grid-cols-3 gap-4">
											<div className="col-span-2 grid w-full items-center bg-[#BEE3F8] p-2 rounded">
												<Label
													htmlFor="daftar"
													className="mb-1"
												>
													Daftar
												</Label>
												<Input
													type="text"
													id="daftar"
													placeholder="Daftar"
													className="border-none shadow-none p-0 max-h-max m-0 font-bold text-2xl text-utama"
													value="Rapat"
												/>
											</div>
											<div className="grid w-full items-center bg-[#BEE3F8] p-2 rounded">
												<Label
													htmlFor="posisi"
													className="mb-1"
												>
													Posisi
												</Label>
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
				</div>
			</div>
			<div className="flex gap-6">
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className="border-none shadow-none rounded-none"
						>
							<p className="text-lg">Desember 2024</p>
							<ChevronDown className="ml-2" />
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0 bg-white border rounded"
						align="start"
					>
						<Calendar
							mode="single"
							initialFocus
						/>
					</PopoverContent>
				</Popover>
				<div className="flex gap-1 items-center">
					<Button className="bg-gray-300 hover:bg-gray-400 p-0 size-8">
						<ChevronLeft className="text-black p-1" />
					</Button>
					<Button
						className="bg-utama max-w-max h-8 flex items-center px-4 rounded text-white font-semibold text-sm text-nowrap hover:bg-utamaHover"
						onClick={handleTodayClick}
					>
						Hari ini
					</Button>
					<Button className="bg-gray-300 hover:bg-gray-400 p-0 size-8">
						<ChevronRight className="text-black p-1" />
					</Button>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{pages.map((item, idx) => {
					if (item.name === "bulan" && item.active) {
						return (
							<div
								key={idx}
								className="grid grid-cols-1 overflow-auto"
							>
								<div className="flex flex-col gap-4">
									<div className="w-full bg-utama/40 rounded-md border shadow border-utamaHover grid grid-cols-7">
										{["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"].map((item, index) => {
											return (
												<p
													key={index}
													className="text-center py-2 font-bold text-sm"
												>
													{item}
												</p>
											);
										})}
									</div>
									<div
										key={idx}
										className="table-auto w-full border-collapse border border-utamaHover grid grid-cols-7"
									>
										{[...Array(36)].map((_, index) => {
											if (index === 0) return;
											return (
												<div
													key={index}
													className={`h-40 flex flex-col justify-between text-left p-2 font-semibold text-sm border border-utamaHover overflow-y-auto ${index > 3 && index < 35 ? "text-black" : "text-gray-400"}`}
												>
													<p>{index <= 3 ? index + 27 : index === 35 ? 1 : index - 3}</p>
													{index <= 3 || index >= 35 ? (
														<div className="flex flex-col gap-1">
															<div className="text-xs bg-gray-200 text-gray-400 p-1">
																<p>Rapat</p>
																<p>09:00 - 11:00</p>
															</div>
															<div className="text-xs bg-gray-200 text-gray-400 p-1">
																<p>Design Riview</p>
																<p>13:00 - 15:00</p>
															</div>
														</div>
													) : (
														<div className="flex flex-col gap-1">
															<div className="text-xs bg-[#B2F5EA] text-[#319795] p-1">
																<p>Rapat</p>
																<p>09:00 - 11:00</p>
															</div>
															<div className="text-xs bg-[#FFDBDF] text-[#FF4D60] p-1">
																<p>Design Riview</p>
																<p>13:00 - 15:00</p>
															</div>
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						);
					} else if (item.name === "minggu" && item.active) {
						const dates = [28, 29, 30, 1, 2, 3, 4, 5, 6];
						const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

						const selectedDay = "Kamis";

						const times = [];
						for (let i = 1; i <= 11; i++) {
							times.push(`${i} AM`);
						}
						for (let i = 1; i <= 11; i++) {
							times.push(`${i} PM`);
						}

						return (
							<div
								key={idx}
								className="flex flex-col"
							>
								{/* Head */}
								<div className="flex flex-row w-full bg-utama/10 border-utama border rounded-md">
									<div className="flex font-semibold justify-center items-center text-sm h-14 w-14">
										<p>WIB</p>
									</div>
									<div className="w-full grid grid-cols-7 border-l border-utama">
										{days.map((day, index) => {
											const isSelected = day === selectedDay;
											return (
												<div
													key={index}
													className={`flex flex-col w-full justify-center items-center gap-1 p-1 ${isSelected ? "bg-utama text-white" : ""}`}
												>
													<p className="text-sm font-semibold">{day}</p>
													<p className="font-semibold">{dates[index] || ""}</p>
												</div>
											);
										})}
									</div>
								</div>

								{/* List */}

								<div className="flex flex-col border-utama border rounded-md">
									<div className="">
										{times.map((time, timeIdx) => (
											<div
												key={timeIdx}
												className="flex flex-row w-full "
											>
												<div className="flex font-medium justify-end items-end text-sm h-14 w-14 p-1">
													<p>{time}</p>
												</div>
												<div className="border-b w-full border-utama grid grid-cols-7">
													{days.map((day, index) => {
														const isSelected = day === selectedDay;
														return (
															<div
																key={index}
																className="flex flex-col w-full justify-center items-center gap-1 p-1 border-l px-2 border-utama"
															>
																{isSelected && (
																	<div className="text-xs bg-[#B2F5EA] text-[#319795] p-1 w-full">
																		<p>Rapat</p>
																	</div>
																)}
															</div>
														);
													})}
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						);
					} else if (item.name === "hari" && item.active) {
						const dates = [28, 29, 30, 1, 2, 3, 4, 5, 6];
						const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

						const selectedDay = "Minggu";

						const times = [];
						for (let i = 1; i <= 11; i++) {
							times.push(`${i} AM`);
						}
						for (let i = 1; i <= 11; i++) {
							times.push(`${i} PM`);
						}

						const ourSelected = ["1 PM", "5 AM"];

						return (
							<div
								key={idx}
								className="flex flex-col"
							>
								{/* Head */}
								<div className="flex flex-row w-full bg-utama/10 border-utama border rounded-md">
									<div className="flex font-semibold justify-center items-center text-sm h-14 w-14">
										<p>WIB</p>
									</div>
									<div className="w-full grid grid-cols-7 border-l border-utama">
										{days.map((day, index) => {
											if (day === selectedDay) {
												return (
													<div
														key={index}
														className="flex flex-col w-full justify-center items-center gap-1 p-1 bg-utama text-white"
													>
														<p className="text-sm font-semibold">{day}</p>
														<p className="font-semibold">{dates[index] || ""}</p>
													</div>
												);
											}
											return null;
										})}
									</div>
								</div>

								{/* List */}
								<div className="flex flex-col border-utama border rounded-md">
									<div className="">
										{times.map((time, timeIdx) => (
											<div
												key={timeIdx}
												className={`flex flex-row w-full ${ourSelected.includes(time) ? "bg-[#76E4F7]" : ""}`}
											>
												<div className="flex font-medium justify-end items-end text-sm h-14 w-14 p-1">
													<p>{time}</p>
												</div>
												<div className="border-l border-b w-full border-utama"></div>
											</div>
										))}
									</div>
								</div>
							</div>
						);
					}

					return;
				})}
			</div>
		</div>
	);
}
