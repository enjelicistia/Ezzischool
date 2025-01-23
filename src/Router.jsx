import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout/BaseLayout";
import DashboardLayout from "./components/Layout/DashboardLayout";
import PageHome from "./pages/page";
import PageLogin from "./pages/login/page";
import PageDashboard from "./pages/dashboard/page";
import PageKalender from "./pages/dashboard/kalender/page";
import PageBiodataGuru from "./pages/dashboard/biodata/guru/page";
import PageBiodataOperator from "./pages/dashboard/biodata/operator/page";
import PageBiodataSiswa from "./pages/dashboard/biodata/siswa/page";
import PageBiodataPpdb from "./pages/dashboard/biodata/ppdb/page";
import PageKehadiranGuru from "./pages/dashboard/kehadiran/guru/page";
import PageKehadiranSiswa from "./pages/dashboard/kehadiran/siswa/page";
import PageRiwayatKehadiran from "./pages/dashboard/kehadiran/riwayat/page";
import PageEkstrakurikuler from "./pages/dashboard/manajemen-sekolah/ekstrakurikuler/page";
import PageManajemenInformasi from "./pages/dashboard/manajemen-sekolah/informasi/page";
import PageJadwal from "./pages/dashboard/manajemen-sekolah/jadwal/page";
import PageJenjang from "./pages/dashboard/manajemen-sekolah/jenjang/page";
import PageManajemenKelas from "./pages/dashboard/manajemen-sekolah/manajemen-kelas/page";
import PageRuangan from "./pages/dashboard/manajemen-sekolah/ruangan/page";
import PageTahunAjaran from "./pages/dashboard/manajemen-sekolah/tahun-ajaran/page";
import PageTagihan from "./pages/dashboard/pembayaran/tagihan/page";
import PageSetting from "./pages/dashboard/setting/page";
import PageSettingEdit from "./pages/dashboard/setting/edit/page";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<BaseLayout />}>
					<Route
						index
						element={<PageHome />}
					/>
					<Route
						path="login"
						element={<PageLogin />}
					/>
					<Route
						path="dashboard"
						element={<DashboardLayout />}
					>
						<Route
							index
							element={<PageDashboard />}
						/>
						<Route
							path="kalender"
							element={<PageKalender />}
						/>
						<Route path="biodata">
							<Route
								path="guru"
								element={<PageBiodataGuru />}
							/>
							<Route
								path="siswa"
								element={<PageBiodataSiswa />}
							/>
							<Route
								path="operator"
								element={<PageBiodataOperator />}
							/>
							<Route
								path="ppdb"
								element={<PageBiodataPpdb />}
							/>
						</Route>
						<Route path="kehadiran">
							<Route
								path="guru"
								element={<PageKehadiranGuru />}
							/>
							<Route
								path="siswa"
								element={<PageKehadiranSiswa />}
							/>
							<Route
								path="riwayat"
								element={<PageRiwayatKehadiran />}
							/>
						</Route>
						<Route path="manajemen-sekolah">
							<Route
								path="ekstrakurikuler"
								element={<PageEkstrakurikuler />}
							/>
							<Route
								path="informasi"
								element={<PageManajemenInformasi />}
							/>
							<Route
								path="jadwal"
								element={<PageJadwal />}
							/>
							<Route
								path="jenjang"
								element={<PageJenjang />}
							/>
							<Route
								path="manajemen-kelas"
								element={<PageManajemenKelas />}
							/>
							<Route
								path="ruangan"
								element={<PageRuangan />}
							/>
							<Route
								path="tahun-ajaran"
								element={<PageTahunAjaran />}
							/>
						</Route>
						<Route path="pembayaran">
							<Route
								path="tagihan"
								element={<PageTagihan />}
							/>
						</Route>
						<Route path="setting">
							<Route
								index
								element={<PageSetting />}
							/>
							<Route
								path="edit"
								element={<PageSettingEdit />}
							/>
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
