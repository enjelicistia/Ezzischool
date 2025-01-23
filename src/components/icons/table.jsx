import { forwardRef } from "react";

export const Sandi = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="pt-1.5 pl-0.5"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.83398 10C4.4451 10 3.26454 9.51389 2.29232 8.54167C1.3201 7.56944 0.833984 6.38889 0.833984 5C0.833984 3.61111 1.3201 2.43056 2.29232 1.45833C3.26454 0.486111 4.4451 0 5.83398 0C6.95898 0 7.94176 0.316111 8.78232 0.948333C9.62287 1.58056 10.2095 2.37556 10.5423 3.33333H19.1673V6.66667H17.5007V10H14.1673V6.66667H10.5423C10.209 7.625 9.62204 8.42028 8.78148 9.0525C7.94093 9.68472 6.95843 10.0006 5.83398 10ZM5.83398 6.66667C6.29232 6.66667 6.68482 6.50361 7.01148 6.1775C7.33815 5.85139 7.50121 5.45889 7.50065 5C7.5001 4.54111 7.33704 4.14889 7.01148 3.82333C6.68593 3.49778 6.29343 3.33444 5.83398 3.33333C5.37454 3.33222 4.98232 3.49556 4.65732 3.82333C4.33232 4.15111 4.16898 4.54333 4.16732 5C4.16565 5.45667 4.32898 5.84917 4.65732 6.1775C4.98565 6.50583 5.37787 6.66889 5.83398 6.66667Z"
			fill="black"
		/>
	</svg>
));
Sandi.displayName = "Sandi";

export const Gambar = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="max-w-max max-h-max pl-1 pt-1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333ZM5.08333 9.25L7.16667 11.7583L10.0833 8L13.8333 13H2.16667L5.08333 9.25Z"
			fill="black"
		/>
	</svg>
));
Gambar.displayName = "Gambar";

export const Edit = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="max-w-max max-h-max pl-1 pt-1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.2583 3.8668C15.5833 3.5418 15.5833 3.00013 15.2583 2.6918L13.3083 0.741797C13 0.416797 12.4583 0.416797 12.1333 0.741797L10.6 2.2668L13.725 5.3918M0.5 12.3751V15.5001H3.625L12.8417 6.27513L9.71667 3.15013L0.5 12.3751Z"
			fill="black"
		/>
	</svg>
));
Edit.displayName = "Edit";

export const Hapus = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="max-w-max max-h-max pl-1 pt-1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.8327 1.33333H8.91602L8.08268 0.5H3.91602L3.08268 1.33333H0.166016V3H11.8327M0.999349 13.8333C0.999349 14.2754 1.17494 14.6993 1.4875 15.0118C1.80006 15.3244 2.22399 15.5 2.66602 15.5H9.33268C9.77471 15.5 10.1986 15.3244 10.5112 15.0118C10.8238 14.6993 10.9993 14.2754 10.9993 13.8333V3.83333H0.999349V13.8333Z"
			fill="black"
		/>
	</svg>
));
Hapus.displayName = "Hapus";

export const Jadwal = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="max-w-max max-h-max pl-1 pt-1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3 2.99991V4.99791H13V2.99991H3ZM9.998 7.99991V10.9999H12.998V7.99991H9.998ZM0 2.75391C0 2.02456 0.289731 1.32509 0.805456 0.809363C1.32118 0.293638 2.02065 0.00390625 2.75 0.00390625H13.25C13.9792 0.0039062 14.6785 0.2935 15.1942 0.809009C15.7099 1.32452 15.9997 2.02373 16 2.75291V11.2529C16 11.9823 15.7103 12.6817 15.1945 13.1975C14.6788 13.7132 13.9793 14.0029 13.25 14.0029H2.75C2.02065 14.0029 1.32118 13.7132 0.805456 13.1975C0.289731 12.6817 0 11.9823 0 11.2529V2.75391ZM2 2.49991V5.49791C2 5.63052 2.05268 5.75769 2.14645 5.85146C2.24021 5.94523 2.36739 5.99791 2.5 5.99791H13.5C13.6326 5.99791 13.7598 5.94523 13.8536 5.85146C13.9473 5.75769 14 5.63052 14 5.49791V2.49991C14 2.3673 13.9473 2.24012 13.8536 2.14635C13.7598 2.05258 13.6326 1.99991 13.5 1.99991H2.5C2.36739 1.99991 2.24021 2.05258 2.14645 2.14635C2.05268 2.24012 2 2.3673 2 2.49991ZM8.998 7.49991V11.4999C8.998 11.6325 9.05068 11.7597 9.14445 11.8535C9.23821 11.9472 9.36539 11.9999 9.498 11.9999H13.498C13.6306 11.9999 13.7578 11.9472 13.8516 11.8535C13.9453 11.7597 13.998 11.6325 13.998 11.4999V7.49991C13.998 7.3673 13.9453 7.24012 13.8516 7.14635C13.7578 7.05258 13.6306 6.99991 13.498 6.99991H9.498C9.36539 6.99991 9.23821 7.05258 9.14445 7.14635C9.05068 7.24012 8.998 7.3673 8.998 7.49991ZM2.5 7.49991C2.36739 7.49991 2.24021 7.55258 2.14645 7.64635C2.05268 7.74012 2 7.8673 2 7.99991C2 8.13251 2.05268 8.25969 2.14645 8.35346C2.24021 8.44723 2.36739 8.49991 2.5 8.49991H7.504C7.63661 8.49991 7.76379 8.44723 7.85755 8.35346C7.95132 8.25969 8.004 8.13251 8.004 7.99991C8.004 7.8673 7.95132 7.74012 7.85755 7.64635C7.76379 7.55258 7.63661 7.49991 7.504 7.49991H2.5ZM2 10.9999C2 11.1325 2.05268 11.2597 2.14645 11.3535C2.24021 11.4472 2.36739 11.4999 2.5 11.4999H7.504C7.63661 11.4999 7.76379 11.4472 7.85755 11.3535C7.95132 11.2597 8.004 11.1325 8.004 10.9999C8.004 10.8673 7.95132 10.7401 7.85755 10.6464C7.76379 10.5526 7.63661 10.4999 7.504 10.4999H2.5C2.36739 10.4999 2.24021 10.5526 2.14645 10.6464C2.05268 10.7401 2 10.8673 2 10.9999Z"
			fill="black"
		/>
	</svg>
));
Jadwal.displayName = "Jadwal";

export const Pembayaran = forwardRef((props, ref) => (
	<svg
		{...props}
		ref={ref}
		width="20"
		height="20"
		fill="none"
		className="max-w-max max-h-max pl-1 pt-1"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M14.8332 17.3337H3.1665C2.50346 17.3337 1.86758 17.0703 1.39874 16.6014C0.929896 16.1326 0.666504 15.4967 0.666504 14.8337V1.50033C0.666504 1.27931 0.754301 1.06735 0.910582 0.91107C1.06686 0.75479 1.27882 0.666992 1.49984 0.666992H13.1665C13.3875 0.666992 13.5995 0.75479 13.7558 0.91107C13.912 1.06735 13.9998 1.27931 13.9998 1.50033V11.5003H17.3332V14.8337C17.3332 15.4967 17.0698 16.1326 16.6009 16.6014C16.1321 17.0703 15.4962 17.3337 14.8332 17.3337ZM13.9998 13.167V14.8337C13.9998 15.0547 14.0876 15.2666 14.2439 15.4229C14.4002 15.5792 14.6122 15.667 14.8332 15.667C15.0542 15.667 15.2661 15.5792 15.4224 15.4229C15.5787 15.2666 15.6665 15.0547 15.6665 14.8337V13.167H13.9998ZM3.99984 4.83366V6.50033H10.6665V4.83366H3.99984ZM3.99984 8.16699V9.83366H10.6665V8.16699H3.99984ZM3.99984 11.5003V13.167H8.1665V11.5003H3.99984Z"
			fill="black"
		/>
	</svg>
));
Pembayaran.displayName = "Pembayaran";
