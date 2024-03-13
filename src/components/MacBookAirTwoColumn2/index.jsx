import React from "react";
import { Button, Heading } from "./..";

export default function MacBookAirTwoColumn2({
  description = "Shark Tank MGIT is an entrepreneurial event at MGIT, featuring aspiring student innovators pitching their ideas to a panel of judges. It fosters creativity, collaboration, and entrepreneurship, providing a platform for students to showcase their startups and win support for their ventures.",
  registerNow = "Register Now",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch items-center justify-end gap-[45px] p-[47px] md:p-5 bg-blue_gray-900_01 rounded-[25px]">
        <div className="flex justify-center w-[89%] md:w-full mt-[668px]">
          <Heading size="s" as="h1" className="tracking-[0.38px] text-center">
            {description}
          </Heading>
        </div>
        <Button className="h-[69px] px-[35px] sm:px-5 text-xl font-semibold bg-red-700 shadow-xs min-w-[253px] rounded-[24px]">
          {registerNow}
        </Button>
      </div>
    </div>
  );
}
