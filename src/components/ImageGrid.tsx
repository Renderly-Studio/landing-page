import React from "react";
import image1 from "../assets/image_3.png";
import image2 from "../assets/image_2.png";
import image3 from "../assets/image_1.png";

const ImageGrid: React.FC = () => {
	return (
		<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full p-6 lg:p-10">
			<div className="flex justify-start items-start lg:items-end">
				<img src={image1} alt="text" className="w-auto max-w-full h-[45vh] sm:h-[50vh] lg:h-2/3 object-contain" />
			</div>
			<div className="flex justify-center items-center">
				<img src={image2} alt="text" className="w-auto max-w-full h-[45vh] sm:h-[50vh] lg:h-2/3 object-contain" />
			</div>
			<div className="flex justify-end items-end">
				<img src={image3} alt="text" className="w-auto max-w-full h-[45vh] sm:h-[50vh] lg:h-2/3 object-contain" />
			</div>
		</div>
	);
};

export default ImageGrid;


