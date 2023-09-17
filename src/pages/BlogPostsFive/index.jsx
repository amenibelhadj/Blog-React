import React from "react";

import { Button, Img, Text } from "components";

const BlogPostsFivePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[52px] items-center justify-start max-w-[946px] mb-2.5 mx-auto pt-[9px] w-full">
          <div className="flex flex-col gap-[17px] items-center justify-start">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-bluegray-900"
              size="txtMontserratRomanBold40"
            >
              Our Latest Posts
            </Text>
            <Text
              className="leading-[26.00px] text-bluegray-600 text-center text-lg w-full"
              size="txtMontserratRomanLight18"
            >
              Adwords Keyword research for beginners when you embark on your
              first PPC journey, you need to keep a small number of keywords at
              first.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[30px] items-end justify-between w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[27px] items-center justify-start md:mt-0 mt-[154px] pb-6 rounded shadow-bs w-[28%] md:w-full">
              <Img
                className="h-[174px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap.png"
                alt="Bitmap"
              />
              <div className="flex flex-col gap-3 items-center justify-start w-[82%] md:w-full">
                <div className="flex flex-row gap-2 items-start justify-between w-[98%] md:w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Thirteen"
                  />
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] text-base text-bluegray-900 w-full"
                  size="txtMontserratBold16"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[27px] items-center justify-start pb-6 rounded shadow-bs w-[39%] md:w-full">
              <Img
                className="h-[244px] md:h-auto object-cover rounded-tl rounded-tr w-full"
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
                    alt="Fourteen"
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
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
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-[27px] items-center justify-start mb-[154px] pb-6 rounded shadow-bs w-[28%] md:w-full">
              <Img
                className="h-[174px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_1.png"
                alt="Bitmap Two"
              />
              <div className="flex flex-col gap-3 items-start justify-start w-4/5 md:w-full">
                <div className="flex flex-row gap-2 items-start justify-between w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Fifteen"
                  />
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] text-base text-bluegray-900 w-[96%] sm:w-full"
                  size="txtMontserratBold16"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsFivePage;
