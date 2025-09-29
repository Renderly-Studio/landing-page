import React from "react";

const Header: React.FC = () => {
	return (
		<header className="absolute top-0 left-0 w-full p-4 z-30">
			<nav className="flex justify-center items-center">
				<p className="tracking-widest text-sm font-light text-gray-300">COMING SOON</p>
			</nav>
		</header>
	);
};

export default Header;
