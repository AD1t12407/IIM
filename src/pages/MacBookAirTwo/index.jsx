import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, TextArea, Input, Img, Heading } from "../../components";
import MacBookAirTwoColumn from "../../components/MacBookAirTwoColumn";
import MacBookAirTwoColumn1 from "../../components/MacBookAirTwoColumn1";
import MacBookAirTwoColumn2 from "../../components/MacBookAirTwoColumn2";
import MacBookAirTwoColumnSeven from "../../components/MacBookAirTwoColumnSeven";
import MacBookAirTwoColumnThree from "../../components/MacBookAirTwoColumnThree";
import MacBookAirTwoListloremipsum from "../../components/MacBookAirTwoListloremipsum";
import MacBookAirTwoRowOne from "../../components/MacBookAirTwoRowOne";

export default function MacBookAirTwoPage() {
  return (
    <>
      <Helmet>
        <title>IIMWEBSITE</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center p-10 sm:p-5 bg-black-900">
          <div className="w-full mt-[26px] mx-auto md:p-5 max-w-[1168px]">
            <div className="flex flex-col items-center">
              <header className="flex self-stretch justify-center items-center gap-[22px]">
                <div className="flex md:flex-row gap-[22px] flex-1">
                  <div className="flex justify-center w-full">
                    <div className="flex justify-center w-full">
                      <a
                        href="#"
                        className="flex justify-center items-center h-[42px] px-[35px] py-1 sm:px-5 bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                      >
                        <Text size="2xl" as="p" className="tracking-[0.38px] text-center">
                          Home
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <div className="flex justify-center w-full">
                      <a
                        href="#"
                        className="flex justify-center items-center h-[42px] px-[22px] py-1 sm:px-5 bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                      >
                        <Text size="2xl" as="p" className="tracking-[0.38px] text-center">
                          About Us
                        </Text>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-[13%]">
                  <div className="w-full">
                    <Button className="w-full font-medium rounded-[21px]">Our Vision</Button>
                  </div>
                </div>
                <div className="flex md:flex-row gap-[22px] flex-1">
                  <div className="flex justify-center w-full">
                    <div className="flex justify-center w-full">
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[42px] pt-1.5 pb-0.5 px-2 tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                      >
                        Our Activity
                      </Text>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <div className="flex justify-center w-full">
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[42px] pt-[7px] pb-px px-[33px] sm:px-5 tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts1 rounded-[21px]"
                      >
                        Gallery
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row gap-[22px] flex-1">
                  <div className="flex justify-center w-full">
                    <div className="w-full">
                      <Button className="w-full sm:px-5 font-medium rounded-[21px]">Team</Button>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <div className="w-full">
                      <Button className="w-full font-medium rounded-[21px]">Contact Us</Button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="h-[300px] w-[300px] mt-[67px] bg-gradient shadow-xl rounded-[50%]" />
              <div className="flex justify-center w-[55%] md:w-full mt-9">
                <div className="flex flex-col items-center">
                  <Text size="4xl" as="p" className="tracking-[0.38px] text-center">
                    Hey, we are{" "}
                  </Text>
                  <Heading size="4xl" as="h1" className="mt-[-16px] tracking-[0.38px] text-center">
                    Idea Incubator MGIT
                  </Heading>
                </div>
              </div>
              <MacBookAirTwoRowOne className="flex justify-end items-center w-[40%] md:w-full mt-1.5" />
              <div className="flex justify-between w-[36%] md:w-full mt-[17px] gap-5">
                <div className="flex justify-center w-[41%]">
                  <Button size="md" shape="round" className="w-full sm:px-5 font-medium !shadow-2xl">
                    JOIN US!
                  </Button>
                </div>
                <div className="flex justify-center w-[41%]">
                  <Text
                    size="2xl"
                    as="p"
                    className="flex justify-center items-center h-[63px] px-[5px] py-[15px] tracking-[0.38px] text-center bg-gray-900_02 text-shadow-ts rounded-[24px]"
                  >
                    IDEA VALIDATE
                  </Text>
                </div>
              </div>
              <div className="flex justify-between w-[14%] md:w-full mt-[21px] gap-5 p-[11px]">
                <Img src="images/img_facebook_white.svg" alt="facebookwhite" className="h-[20px] w-[20px] ml-[11px]" />
                <Img src="images/img_instagram_white.svg" alt="instagramwhite" className="h-[20px] w-[20px]" />
                <Img src="images/img_github_white.svg" alt="githubwhite_one" className="h-[20px] w-[20px] mr-[11px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-40 gap-[122px] mx-auto md:p-5 max-w-[1078px]">
            <div className="flex flex-col items-end w-[86%] md:w-full">
              <div className="self-stretch h-[2px] w-full bg-red-700 rounded-[1px]" />
              <div className="h-[2px] w-[32%] mt-[-2px] bg-yellow-800 rounded-[1px]" />
            </div>
            <div className="self-stretch p-[22px] sm:p-5">
              <div className="flex md:flex-col items-center gap-7 my-[13px]">
                <div className="w-full pt-2.5 px-2.5 bg-gradient shadow-xl rounded-[25px]">
                  <div>
                    <Img
                      src="images/img_whatsapp_image_2024_03_12.png"
                      alt="whatsappimage"
                      className="h-[383px] w-full object-cover rounded-[25px]"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col">
                    <Heading size="2xl" as="h2" className="ml-[33px] tracking-[0.38px] text-center">
                      About Us{" "}
                    </Heading>
                    <div className="mt-[-17px]">
                      <Text size="xl" as="p" className="tracking-[0.38px] text-center !font-normal">
                        Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                        research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head.
                        Since then it runs with motivation to develop roots of entrepreneurship and innovation in
                        students through nurturing skills like finding and solving real world problem, creative
                        thinking, networking, management.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[66px] gap-[33px] mx-auto md:p-5 max-w-[985px]">
            <Heading as="h2" className="tracking-[0.38px] text-center">
              OUR VISION
            </Heading>
            <div className="flex flex-col ml-[11px] gap-[39px]">
              <div className="flex flex-col items-end">
                <div className="self-stretch h-[3px] w-full bg-red-700 rounded-[1px]" />
                <div className="h-[3px] w-[32%] mt-[-3px] bg-yellow-800 rounded-[1px]" />
              </div>
              <div className="justify-center gap-[35px] grid-cols-2 md:grid-cols-[1fr] grid">
                <MacBookAirTwoColumn className="flex flex-col w-full" />
                <MacBookAirTwoColumn className="flex flex-col w-full" />
                <MacBookAirTwoColumn className="flex flex-col w-full" />
                <MacBookAirTwoColumn className="flex flex-col w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-[129px] pl-[51px] mx-auto md:p-5 md:pl-5 max-w-[1107px]">
            <Heading as="h2" className="tracking-[0.38px] text-center">
              OUR ACTIVITY
            </Heading>
            <div className="flex flex-col items-end ml-[81px]">
              <div className="self-stretch h-[3px] w-full bg-red-700 rounded-[1px]" />
              <div className="h-[3px] w-[32%] mt-[-3px] bg-yellow-800 rounded-[1px]" />
            </div>
            <Text as="p" className="flex self-center mt-[23px] tracking-[0.38px] text-center">
              <span className="text-white-A700">Previous </span>
              <span className="text-red-700">Events</span>
            </Text>
            <MacBookAirTwoListloremipsum className="flex flex-col w-[43%] md:w-full mt-[68px] pl-[75px] gap-[77px] md:pl-5" />
          </div>
          <div className="flex flex-col items-center w-[83%] md:w-full mt-[114px] gap-[94px]">
            <div className="flex justify-center w-[48%] md:w-full p-[19px]">
              <Text as="p" className="mt-[7px] !text-red-700 tracking-[0.38px] text-center">
                Upcomming Events
              </Text>
            </div>
            <div className="flex md:flex-col gap-11">
              <MacBookAirTwoColumn1 className="flex flex-col w-full" />
              <MacBookAirTwoColumn2 className="flex flex-col w-full" />
            </div>
          </div>
          <div className="flex flex-col w-full mt-[115px] gap-[85px] p-5 mx-auto border-deep_purple-A200 border border-dashed max-w-[1021px] rounded-[5px]">
            <div className="flex flex-col gap-[15px]">
              <Heading as="h2" className="ml-[29px] tracking-[0.38px] text-center !font-extrabold">
                GALLERY
              </Heading>
              <div className="h-[5px] ml-[41px] bg-red-700 relative rounded-sm">
                <div style={{ width: "32%" }} className="h-full bg-yellow-800 absolute rounded-sm" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-[45px]">
                <div className="flex md:flex-col self-stretch justify-center items-center gap-[27px]">
                  <MacBookAirTwoColumnThree className="w-full" />
                  <MacBookAirTwoColumnSeven className="w-full" />
                </div>
                <div className="flex justify-center w-[26%] md:w-full">
                  <Button color="red_700" size="sm" shape="round" className="w-full sm:px-5 font-semibold">
                    EXPLORE &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-[89%] md:w-full mt-[61px] gap-[37px] p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
            <div className="flex justify-center w-[31%] md:w-full">
              <Heading size="3xl" as="h2" className="flex tracking-[0.38px] text-center">
                <span className="text-white-A700">OUR </span>
                <span className="text-red-700">Team</span>
                <span className="text-white-A700">&nbsp;</span>
              </Heading>
            </div>
            <div className="self-stretch w-full mx-auto md:p-5 max-w-[1029px]">
              <div className="flex md:flex-col gap-px">
                <div className="flex flex-col items-center w-full">
                  <MacBookAirTwoColumn content="EXECUTIVE TEAM " className="w-[89%] md:w-full" />
                  <div className="self-stretch">
                    <Text size="xl" as="p" className="tracking-[0.38px] text-center">
                      Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and research
                      amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head. Since then
                      it runs with motivation to develop roots of entrepreneurship and innovation in students through
                      nurturing skills like finding and solving real world problem, creative thinking, networking,
                      management.
                    </Text>
                  </div>
                  <MacBookAirTwoColumn content="EXECUTIVE TEAM " className="w-[89%] md:w-full mt-[7px]" />
                  <div className="self-stretch">
                    <Text size="xl" as="p" className="tracking-[0.38px] text-center">
                      Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and research
                      amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head. Since then
                      it runs with motivation to develop roots of entrepreneurship and innovation in students through
                      nurturing skills like finding and solving real world problem, creative thinking, networking,
                      management.
                    </Text>
                  </div>
                </div>
                <div className="h-[1767px] w-full my-[7px] relative">
                  <div className="flex flex-col items-center w-[98%] bottom-0 right-0 left-0 m-auto absolute">
                    <MacBookAirTwoColumn content="EXECUTIVE TEAM " className="w-[91%] md:w-full" />
                    <div className="self-stretch">
                      <Text size="xl" as="p" className="tracking-[0.38px] text-center">
                        Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                        research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head.
                        Since then it runs with motivation to develop roots of entrepreneurship and innovation in
                        students through nurturing skills like finding and solving real world problem, creative
                        thinking, networking, management.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-[98%] top-0 right-0 left-0 m-auto absolute">
                    <MacBookAirTwoColumn content="EXECUTIVE TEAM " className="w-[91%] md:w-full" />
                    <div className="self-stretch">
                      <Text size="xl" as="p" className="tracking-[0.38px] text-center">
                        Idea Incubator MGIT, is a student club focused on fostering Leadership in innovation and
                        research amongst MGITans.Found on 17th April 2019 by the Principal, MGIT as its de facto head.
                        Since then it runs with motivation to develop roots of entrepreneurship and innovation in
                        students through nurturing skills like finding and solving real world problem, creative
                        thinking, networking, management.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="self-start mt-[85px]">
            <Heading as="h2" className="tracking-[0.38px] text-center !font-extrabold">
              CONTACT US
            </Heading>
          </a>
          <div className="w-[84%] md:w-full mt-[33px] mb-[205px]">
            <div className="flex flex-col items-end w-full mx-auto md:p-5 max-w-[915px]">
              <div className="self-stretch h-[2px] w-full bg-red-700 rounded-[1px]" />
              <div className="h-[2px] w-[32%] mt-[-2px] bg-yellow-800 rounded-[1px]" />
            </div>
            <div className="flex md:flex-col justify-between items-start mt-[46px] gap-5">
              <Img
                src="images/img_image_2.png"
                alt="imagetwo_one"
                className="w-[45%] md:w-full mt-[15px] object-cover rounded-[29px]"
              />
              <div className="flex flex-col w-[49%] md:w-full gap-[27px] p-5 border-deep_purple-A200 border border-dashed rounded-[5px]">
                <div className="flex justify-center w-[89%] md:w-full ml-[11px] p-4">
                  <Text as="p" className="flex tracking-[0.38px] text-center">
                    <span className="text-white-A700">Wanna Reach </span>
                    <span className="text-red-700">OUt? </span>
                  </Text>
                </div>
                <div className="flex flex-col items-center gap-[33px]">
                  <Input shape="round" type="text" name="name" placeholder="Name*" className="sm:pr-5" />
                  <Input shape="round" type="email" name="email" placeholder="Email ID*" className="sm:pr-5" />
                  <TextArea
                    shape="round"
                    name="message"
                    placeholder="Message*"
                    className="self-stretch sm:pr-5 sm:py-5 text-white-A700_7f tracking-[0.38px] font-medium"
                  />
                  <div className="flex justify-center w-[33%] md:w-full">
                    <Button color="blue_gray_900_01" size="sm" shape="round" className="w-full sm:px-5 font-semibold">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[84px] p-5 mx-auto border-deep_purple-A200 border border-dashed max-w-[917px] rounded-[5px]">
              <div className="flex justify-center mt-[7px] p-2">
                <Text size="lg" as="p" className="flex self-end mt-[3px] tracking-[0.38px] text-center">
                  <span className="text-white-A700">Copyright smthgsmthg | IDEA INCUBATOR MGIT | </span>
                  <span className="text-red-700">All Rights Reserved</span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
