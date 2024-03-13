import React from "react";
import { Heading, Text, Img } from "./..";

export default function MacBookAirTwoColumnThree({ certificate, p11thmarch2024 = "11th March 2024", ...props }) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center justify-end p-[25px] sm:p-5 bg-black-900 backdrop-opacity-[0.5] blur-[4.00px]">
        <div className="self-stretch mt-[42px]">
          <div>
            <div className="p-[27px] sm:p-5 bg-blue_gray-900_01 shadow-sm rounded-[10px]">
              <Img
                src="images/img_rectangle_65.png"
                alt="image"
                className="self-stretch mt-[3px] mb-[168px] object-cover rounded-[16px]"
              />
            </div>
          </div>
        </div>
        <Text as="p" className="flex mt-[47px] tracking-[0.38px] text-center">
          <span className="text-white-A700">Certificate </span>
          <span className="text-red-700">Distribution</span>
        </Text>
        <Heading size="lg" as="h1" className="mb-[9px] tracking-[0.38px] text-center">
          {p11thmarch2024}
        </Heading>
      </div>
    </div>
  );
}
