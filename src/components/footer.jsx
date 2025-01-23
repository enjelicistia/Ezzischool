export default function Footer() {
	return (
		<div className="mt-4 py-5 px-12 flex flex-col xl:flex-row xl:justify-between gap-2 bg-white shadow-lg border-t-2">
			<div className="flex gap-6">
				<p className="text-textUtama text-sm font-semibold hover:underline cursor-pointer">Privacy Police</p>
				<p className="text-textUtama text-sm font-semibold hover:underline cursor-pointer">Terms Of Use</p>
			</div>
			<p className="text-sm">&copy; {new Date().getFullYear()} Smart School System</p>
		</div>
	);
}
