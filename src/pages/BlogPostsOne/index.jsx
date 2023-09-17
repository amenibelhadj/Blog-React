import React from "react";

import { Button, Img, List, Text } from "components";

const BlogPostsOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-end max-w-[1140px] mx-auto py-0.5 w-full">
          <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5">
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
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[55px] w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[236px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap.png"
                alt="Bitmap"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-[87%] md:w-full">
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
                    alt="One"
                  />
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Button className="cursor-pointer font-medium min-w-[101px] text-center text-xs uppercase">
                  UX WRITING
                </Button>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[236px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_236X360.png"
                alt="Bitmap One"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-[87%] md:w-full">
                <div className="flex flex-row items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 ml-0.5 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Two"
                  />
                  <Text
                    className="ml-2 text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  <>How Snapchat and Netflix Break UX Design Principles</>
                </Text>
                <div className="flex flex-row gap-3 items-center justify-start rounded-[13px] w-[64%] md:w-full">
                  <Button className="cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                    UX DESIGN
                  </Button>
                  <Button className="!text-red-700 cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                    UI DESIGN
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[236px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_1.png"
                alt="Bitmap Two"
              />
              <div className="flex flex-col gap-4 items-start justify-start w-[87%] md:w-full">
                <div className="flex flex-row items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    by John Doe
                  </Text>
                  <Img
                    className="h-1 ml-0.5 mt-1 w-1"
                    src="images/img_.svg"
                    alt="Three"
                  />
                  <Text
                    className="ml-2 text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Button className="cursor-pointer font-medium min-w-[111px] text-center text-xs uppercase">
                  WEB DESIGN
                </Button>
              </div>
            </div>
          </List>
          <div className="flex flex-row items-center justify-center mt-[52px] w-[13%] md:w-full">
            <Text
              className="text-blue-A700 text-lg"
              size="txtMontserratRomanSemiBold18"
            >
              READ MORE
            </Text>
            <Img
              className="h-6 ml-1 w-6"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsOnePage;
