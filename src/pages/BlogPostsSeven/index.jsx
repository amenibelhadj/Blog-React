import React from "react";

import { Button, Img, Line, Text } from "components";

const BlogPostsSevenPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[120px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[52px] items-center justify-start max-w-[1141px] mx-auto pt-[9px] w-full">
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
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[24%] md:w-full">
              <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start pb-4 rounded shadow-bs w-full">
                <div className="md:h-[114px] h-[134px] relative w-full">
                  <Img
                    className="absolute h-[114px] inset-x-[0] mx-auto object-cover rounded-tl rounded-tr top-[0] w-full"
                    src="images/img_bitmap_236X360.png"
                    alt="Bitmap"
                  />
                  <Img
                    className="absolute bottom-[0] h-[42px] left-[10%] rounded-[50%] w-[42px]"
                    src="images/img_ovalcopy4_42X42.png"
                    alt="OvalCopyFour"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="leading-[27.00px] text-bluegray-900 text-lg w-[96%] sm:w-full"
                    size="txtMontserratBold18"
                  >
                    <>Netflix Break UX Design Principles</>
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-bluegray-600 w-full"
                    size="txtMontserratRomanLight16"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded shadow-bs w-full">
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-[94%] sm:w-full"
                  size="txtMontserratBold18"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start mt-[13px] w-full">
                  <Text
                    className="text-base text-bluegray-600"
                    size="txtMontserratRomanLight16"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray-100_4c h-px w-full" />
                </div>
                <div className="flex flex-row items-end justify-between mt-[11px] rounded-[13px] w-full">
                  <Text
                    className="mb-0.5 mt-[7px] text-bluegray-900 text-sm"
                    size="txtMontserratMedium14"
                  >
                    15 March, 2022
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[66px] text-center text-xs uppercase">
                    UX / UI
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-4 items-center justify-start pb-4 rounded shadow-bs w-[49%] md:w-full">
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[268px] mx-auto object-cover rounded-tl rounded-tr w-full"
                  src="images/img_bitmap.png"
                  alt="Bitmap One"
                />
                <Img
                  className="h-[42px] ml-6 mt-[-21px] rounded-[50%] w-[42px] z-[1]"
                  src="images/img_ovalcopy4.png"
                  alt="OvalCopyFour One"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg"
                  size="txtMontserratBold18"
                >
                  <>
                    How to create a UX Writing portfolio as a <br />
                    beginner
                  </>
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
                <Line className="bg-bluegray-100_4c h-px mt-4 w-full" />
                <div className="flex flex-row items-end justify-between mt-4 rounded-[13px] w-full">
                  <Text
                    className="mb-0.5 mt-[7px] text-bluegray-900 text-sm"
                    size="txtMontserratMedium14"
                  >
                    15 March, 2022
                  </Text>
                  <div className="flex flex-row gap-3 items-center justify-between rounded-[13px] w-2/5">
                    <Button className="cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                      UX DESIGN
                    </Button>
                    <Button className="!text-red-700 cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                      UI DESIGN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[24%] md:w-full">
              <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded shadow-bs w-full">
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-[94%] sm:w-full"
                  size="txtMontserratBold18"
                >
                  UX Writing portfolio as a beginner
                </Text>
                <div className="flex flex-col gap-3 items-start justify-start mt-[13px] w-full">
                  <Text
                    className="text-base text-bluegray-600"
                    size="txtMontserratRomanLight16"
                  >
                    Lorem Ipsum
                  </Text>
                  <Line className="bg-bluegray-100_4c h-px w-full" />
                </div>
                <div className="flex flex-row items-end justify-between mt-[11px] rounded-[13px] w-full">
                  <Text
                    className="mb-0.5 mt-[7px] text-bluegray-900 text-sm"
                    size="txtMontserratMedium14"
                  >
                    15 March, 2022
                  </Text>
                  <Button className="cursor-pointer font-medium min-w-[66px] text-center text-xs uppercase">
                    UX / UI
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start pb-4 rounded shadow-bs w-full">
                <div className="md:h-[114px] h-[134px] relative w-full">
                  <Img
                    className="absolute h-[114px] inset-x-[0] mx-auto object-cover rounded-tl rounded-tr top-[0] w-full"
                    src="images/img_bitmap_1.png"
                    alt="Bitmap Two"
                  />
                  <Img
                    className="absolute bottom-[0] h-[42px] left-[10%] rounded-[50%] w-[42px]"
                    src="images/img_ovalcopy4_48X48.png"
                    alt="OvalCopyFour Two"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="leading-[27.00px] text-bluegray-900 text-lg w-[96%] sm:w-full"
                    size="txtMontserratBold18"
                  >
                    Design Your Site Super-Fast
                  </Text>
                  <Text
                    className="leading-[24.00px] text-base text-bluegray-600 w-full"
                    size="txtMontserratRomanLight16"
                  >
                    Lorem Ipsum is simply dummy text of the
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsSevenPage;
