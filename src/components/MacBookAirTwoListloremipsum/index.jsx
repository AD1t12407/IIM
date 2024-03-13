import React from "react";
import { Text, Heading } from "./..";

export default function MacBookAirTwoListloremipsum({
  loremipsum,
  price = "Lorem ipsum dolor | 28-12-23",
  description = "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
  loremipsum1,
  price1 = "Lorem ipsum dolor | 28-12-23",
  description1 = "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
  loremipsum2,
  price2 = "Lorem ipsum dolor | 28-12-23",
  description2 = "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start gap-2.5 p-1 border-2 border-solid blue_gray_900_gray_900_01_border bg-blue_gray-900_01 shadow-md flex-1 rounded-[24px]">
        <Heading size="xs" as="h1" className="flex mt-[30px] ml-[23px] tracking-[0.38px] underline">
          <span className="text-white-A700">Lorem ipsum dolor sit </span>
          <span className="text-red-700">amet</span>
        </Heading>
        <Text size="s" as="p" className="ml-[23px] !text-gray-500 tracking-[0.38px] underline">
          {price}
        </Text>
        <Text size="xs" as="p" className="w-[97%] md:w-full ml-[23px] !text-gray-500 tracking-[0.38px] underline">
          {description}
        </Text>
      </div>
      <div className="flex flex-col gap-2.5 p-3.5 border-2 border-solid blue_gray_900_gray_900_01_border bg-blue_gray-900_01 shadow-md flex-1 rounded-[24px]">
        <Heading size="xs" as="h2" className="flex mt-2.5 ml-3 tracking-[0.38px] underline">
          <span className="text-white-A700">Lorem ipsum dolor sit </span>
          <span className="text-red-700">amet</span>
        </Heading>
        <Text size="s" as="p" className="ml-3 !text-gray-500 tracking-[0.38px] underline">
          {price1}
        </Text>
        <Text size="xs" as="p" className="ml-3 !text-gray-500 tracking-[0.38px] underline">
          {description1}
        </Text>
      </div>
      <div className="flex flex-col gap-2.5 p-3.5 border-2 border-solid blue_gray_900_gray_900_01_border bg-blue_gray-900_01 shadow-md flex-1 rounded-[24px]">
        <Heading size="xs" as="h2" className="flex mt-2.5 ml-3 tracking-[0.38px] underline">
          <span className="text-white-A700">Lorem ipsum dolor sit </span>
          <span className="text-red-700">amet</span>
        </Heading>
        <Text size="s" as="p" className="ml-3 !text-gray-500 tracking-[0.38px] underline">
          {price2}
        </Text>
        <Text size="xs" as="p" className="ml-3 !text-gray-500 tracking-[0.38px] underline">
          {description2}
        </Text>
      </div>
    </div>
  );
}
