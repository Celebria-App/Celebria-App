import Image from "next/image";
import { useRouter } from "next/router";

const HomeCard = ({ image, size, title, path, onClick }) => {
	const router = useRouter();

	const navigateTo = (path) => {
		if (path) {
			router.push(path);
		}
	};

	return (
		<div
			className={
				path || onClick
					? `cursor-pointer relative overflow-hidden shadow-lg rounded-lg col-span-${size}`
					: `relative overflow-hidden shadow-lg rounded-lg col-span-${size}`
			}
			onClick={path ? () => navigateTo(path) : onClick}
		>
			<div className="h-[400px] sm:h-[700px]">
				{" "}
				<Image
					className="w-full h-full object-cover"
					src={image}
					width="auto"
					height="auto"
					alt="card-img"
				/>
			</div>
			<div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
				<h3 className="text-white text-xl text-center md:text-3xl bg-gradient-to-r from-primary to-red-200 p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 font-bold">
					{title}
				</h3>
			</div>
		</div>
	);
};

export default HomeCard;
