import React from "react";

import { Img, List, Text } from "components";

const BlogPostsSixPage = () => {
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
          <List
            className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[258px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap.png"
                alt="Bitmap"
              />
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-bluegray-600 w-full"
                  size="txtMontserratRomanLight16"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-4 rounded-[24px] w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ovalcopy4.png"
                    alt="OvalCopyFour"
                  />
                  <Text
                    className="sm:ml-[0] ml-[7px] text-base text-bluegray-900"
                    size="txtMontserratRomanLight16Bluegray900"
                  >
                    Jane Phillips
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[141px] text-base text-bluegray-900"
                    size="txtMontserratRomanLight16Bluegray900"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-6 items-center justify-start pb-6 rounded shadow-bs w-full">
              <Img
                className="h-[258px] md:h-auto object-cover rounded-tl rounded-tr w-full"
                src="images/img_bitmap_1.png"
                alt="Bitmap One"
              />
              <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
                <Text
                  className="leading-[27.00px] text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to Design Your Site to Make it Super-fast
                </Text>
                <Text
                  className="leading-[24.00px] mt-2 text-base text-bluegray-600 w-full"
                  size="txtMontserratRomanLight16"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-4 rounded-[24px] w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ovalcopy4_48X48.png"
                    alt="OvalCopyFour One"
                  />
                  <Text
                    className="ml-2 sm:ml-[0] text-base text-bluegray-900"
                    size="txtMontserratRomanLight16Bluegray900"
                  >
                    Wade Warren
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[131px] text-base text-bluegray-900"
                    size="txtMontserratRomanLight16Bluegray900"
                  >
                    15 March, 2022
                  </Text>
                </div>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default BlogPostsSixPage;
