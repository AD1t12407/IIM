import React from "react";
import { Img, Text, Heading } from "./..";

export default function MacBookAirTwoColumnSeven({ p27thdecember = "27th December 2023", duration, ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center justify-end p-[18px] bg-black-900 backdrop-opacity-[0.5] blur-[4.00px]">
        <Heading size="lg" as="h1" className="mt-[31px] tracking-[0.38px] text-center">
          {p27thdecember}
        </Heading>
        <Text as="p" className="flex mt-[9px] tracking-[0.38px] text-center">
          <span className="text-white-A700">SYNAPSE’23 </span>
          <span className="text-red-700">Day 1</span>
        </Text>
        <div className="self-stretch mt-[57px] mb-1.5">
          <div>
            <div className="p-[27px] sm:p-5 bg-blue_gray-900_01 shadow-sm rounded-[10px]">
              <Img
                src="images/img_rectangle_65.png"
                alt="image_one"
                className="self-stretch mt-[3px] mb-[168px] object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
