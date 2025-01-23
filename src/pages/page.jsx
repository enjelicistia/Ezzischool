import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageHome() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/login");
	}, [navigate]);

	return null;
}
