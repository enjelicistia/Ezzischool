import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function PageLogin() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleLogin = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Login berhasil.");
			navigate("/dashboard");
		}, 1000);
	};

	return (
		<div className="w-full h-screen relative">
			<div className="absolute z-10 w-full h-full flex flex-col justify-center items-center gap-8">
				<div className="bg-white w-96 p-4 rounded-lg shadow-lg border grid grid-cols-1">
					<img
						src="/logo-blue.png"
						alt="Logo"
						width={1000}
						height={1000}
						className="size-32 aspect-square mx-auto"
					/>
					<h1 className="font-bold text-center text-2xl mb-8">Welcome Back</h1>
					<div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							id="email"
							placeholder="contoh: user@mail.com"
						/>
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							placeholder="••••••••••••"
						/>
					</div>
					<Button
						className="w-full bg-utama hover:bg-utamaHover"
						onClick={handleLogin}
					>
						{loading ? <Spinner className="size-16" /> : "Login"}
					</Button>
				</div>
				<div className="flex items-center gap-2">
					<p className="text-sm font-medium">Made with love by</p>
					<img
						src="/logo.png"
						alt="Logo"
						width={1000}
						height={1000}
						className="size-16 aspect-square"
					/>
				</div>
			</div>
			<div className="w-full h-1/2 rounded-lg bg-red-500">
				<img
					src="/background.png"
					alt="background"
					width={2000}
					height={2000}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
