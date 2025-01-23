import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { NavMain } from "@/components/nav-main";
import { Spinner } from "@/components/spinner";
import * as Ikon from "@/components/icons/sidebar";
import { Button } from "@/components/ui/button";
import { useSidebar, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "HOME",
			url: "/dashboard",
			isActive: true,
			icon: Ikon.HomeIcon,
			items: [
				{
					title: "Dashboard",
					url: "/dashboard",
					isActive: true,
					icon: Ikon.Dashboard,
				},
				{
					title: "Kalender Akademik",
					url: "/dashboard/kalender",
					isActive: false,
					icon: Ikon.Kalender,
				},
			],
		},
		{
			title: "DATA DIRI",
			url: "/dashboard/biodata/ppdb",
			isActive: false,
			icon: Ikon.Biodata,
			items: [
				{
					title: "PPDB",
					url: "/dashboard/biodata/ppdb",
					isActive: false,
					icon: Ikon.Ppdb,
				},
				{
					title: "Siswa",
					url: "/dashboard/biodata/siswa",
					isActive: false,
					icon: Ikon.Siswa,
				},
				{
					title: "Guru",
					url: "/dashboard/biodata/guru",
					isActive: false,
					icon: Ikon.Guru,
				},
				{
					title: "Operator",
					url: "/dashboard/biodata/operator",
					isActive: false,
					icon: Ikon.Operator,
				},
			],
		},
		{
			title: "MANAJEMEN SEKOLAH",
			url: "/dashboard/manajemen-sekolah",
			isActive: false,
			icon: Ikon.Management,
			items: [
				{
					title: "Informasi",
					url: "/dashboard/manajemen-sekolah/informasi",
					isActive: false,
					icon: Ikon.Informasi,
				},
				{
					title: "Manajemen Kelas",
					url: "/dashboard/manajemen-sekolah/manajemen-kelas",
					isActive: false,
					icon: Ikon.Kelas,
				},
				{
					title: "Jadwal",
					url: "/dashboard/manajemen-sekolah/jadwal",
					isActive: false,
					icon: Ikon.Jadwal,
				},
				{
					title: "Jenjang",
					url: "/dashboard/manajemen-sekolah/jenjang",
					isActive: false,
					icon: Ikon.Mapel,
				},
				{
					title: "Ruangan",
					url: "/dashboard/manajemen-sekolah/ruangan",
					isActive: false,
					icon: Ikon.Ruangan,
				},
				{
					title: "Tahun Ajaran",
					url: "/dashboard/manajemen-sekolah/tahun-ajaran",
					isActive: false,
					icon: Ikon.TahunAjaran,
				},
				{
					title: "Ekstrakurikuler",
					url: "/dashboard/manajemen-sekolah/ekstrakurikuler",
					isActive: false,
					icon: Ikon.Ekstrakurikuler,
				},
			],
		},
		{
			title: "KEHADIRAN",
			url: "/dashboard/kehadiran/siswa",
			isActive: false,
			icon: Ikon.Kehadiran,
			items: [
				{
					title: "Presensi Siswa",
					url: "/dashboard/kehadiran/siswa",
					isActive: false,
					icon: Ikon.PresensiSiswa,
				},
				{
					title: "Presensi Guru",
					url: "/dashboard/kehadiran/guru",
					isActive: false,
					icon: Ikon.PresensiGuru,
				},
				{
					title: "Riwayat Presensi",
					url: "/dashboard/kehadiran/riwayat",
					isActive: false,
					icon: Ikon.RiwayatPresensi,
				},
			],
		},
		{
			title: "PEMBAYARAN",
			url: "/dashboard/pembayaran/tagihan",
			isActive: false,
			icon: Ikon.Pembayaran,
			items: [
				{
					title: "Tagihan",
					url: "/dashboard/pembayaran/tagihan",
					isActive: false,
					icon: Ikon.Tagihan,
				},
			],
		},
	],
};

import { useLocation } from "react-router-dom";

export function AppSidebar({ ...props }) {
	const navigate = useNavigate();
	const { open } = useSidebar();
	const [loading, setLoading] = React.useState(false);
	const [nav, setNav] = React.useState(data.navMain);

	const location = useLocation();
	const pathname = location.pathname;

	React.useEffect(() => {
		setNav((prev) =>
			prev.map((item) => {
				const updatedItems = item.items.map((subItem) => {
					return {
						...subItem,
						isActive: subItem.url === pathname,
					};
				});
				const isParentActive = updatedItems.some((subItem) => subItem.isActive);
				return {
					...item,
					isActive: isParentActive,
					items: updatedItems,
				};
			}),
		);
	}, [pathname]);

	const handlerLogout = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Logout berhasil.");
			navigate("/login");
		}, 1000);
	};

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<img
					src="/logo-blue.png"
					alt="Logo"
					width={1000}
					height={1000}
					className="w-32 mx-auto"
				/>
			</SidebarHeader>
			<SidebarContent className="px-2">
				<NavMain items={nav} />
			</SidebarContent>
			<SidebarFooter>
				<Button
					className="bg-white shadow-lg border text-black hover:bg-gray-100 cursor-pointer flex justify-start p-2 h-auto"
					onClick={handlerLogout}
					asChild
				>
					{loading ? (
						<div className="w-full shadow-lg border rounded-md flex justify-center items-center">
							<Spinner className="size-12 m-2" />
						</div>
					) : (
						<div>
							<span className="size-8 shadow-lg border rounded-md flex justify-center items-center">{Ikon.LogOut && <Ikon.LogOut className="size-8" />}</span>
							{open && <span>Keluar</span>}
						</div>
					)}
				</Button>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
