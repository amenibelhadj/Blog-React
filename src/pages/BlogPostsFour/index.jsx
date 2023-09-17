import React from "react";

import { Button, Img, Line, List, Text } from "components";

const BlogPostsFourPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-center mx-auto p-[130px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-start max-w-[1140px] mb-9 mt-10 mx-auto w-full">
          <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[29%] md:w-full">
            <div className="flex flex-col items-start justify-start pt-1 w-[93%] md:w-full">
              <div className="flex flex-col items-start justify-start ml-0.5 md:ml-[0] w-2/5 md:w-full">
                <Text
                  className="text-bluegray-600 text-lg uppercase"
                  size="txtMontserratRomanRegular18"
                >
                  Blog posts
                </Text>
                <Img
                  className="h-px ml-0.5 md:ml-[0] mt-1 w-[28%]"
                  src="images/img_line_bluegray_600.svg"
                  alt="Line"
                />
              </div>
              <Text
                className="leading-[50.00px] mt-2 sm:text-4xl md:text-[38px] text-[40px] text-bluegray-900 w-full"
                size="txtMontserratBold40"
              >
                Read Our Latest Posts
              </Text>
              <Text
                className="leading-[27.00px] ml-0.5 md:ml-[0] mt-4 text-bluegray-600 text-lg w-full"
                size="txtMontserratRomanRegular18"
              >
                Adwords Keyword research for beginners when you embark on your
                first PPC journey.
              </Text>
            </div>
            <List
              className="flex flex-col gap-4 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-3 items-center justify-start w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="sm:flex-1 leading-[27.00px] text-base text-bluegray-900 w-[92%] sm:w-full"
                    size="txtMontserratBold16"
                  >
                    Writing A Good Headline For Your Advertisement
                  </Text>
                  <Img
                    className="h-6 mt-0.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
                <Line className="bg-bluegray-50 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="sm:flex-1 leading-[27.00px] text-base text-bluegray-900 w-[92%] sm:w-full"
                    size="txtMontserratBold16"
                  >
                    Where To Look For Cheap Printing Services
                  </Text>
                  <Img
                    className="h-6 mt-0.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright One"
                  />
                </div>
                <Line className="bg-bluegray-50 h-px w-full" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row items-start justify-evenly w-full">
                  <Text
                    className="sm:flex-1 leading-[27.00px] text-base text-bluegray-900 w-[92%] sm:w-full"
                    size="txtMontserratBold16"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Text>
                  <Img
                    className="h-6 mt-0.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright Two"
                  />
                </div>
                <Line className="bg-bluegray-50 h-px w-full" />
              </div>
            </List>
          </div>
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[312px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_312X360.png"
                alt="Bitmap"
              />
              <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[67%] md:w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Eleven"
                  />
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-4 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-bluegray-600 w-full"
                  size="txtMontserratRomanLight16"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s.
                  </>
                </Text>
                <Button className="cursor-pointer font-medium min-w-[101px] mt-4 text-center text-xs uppercase">
                  UX WRITING
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[312px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_236X360.png"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-start w-[67%] md:w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Twelve"
                  />
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-4 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  <>How Snapchat and Netflix Break UX Design Principles</>
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-bluegray-600 w-full"
                  size="txtMontserratRomanLight16"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s.
                  </>
                </Text>
                <div className="flex flex-row gap-3 items-center justify-start mt-4 rounded-[13px] w-[64%] md:w-full">
                  <Button className="cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                    UX DESIGN
                  </Button>
                  <Button className="!text-red-700 cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                    UI DESIGN
                  </Button>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostsFourPage;
