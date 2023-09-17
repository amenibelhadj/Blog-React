import React from "react";

import { Img, Text } from "components";

const BlogPostsTwoPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto p-[95px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[951px] mb-[34px] mx-auto w-full">
          <Img
            className="h-px w-[6%]"
            src="images/img_line3.svg"
            alt="LineThree"
          />
          <Text
            className="mt-6 sm:text-4xl md:text-[38px] text-[40px] text-bluegray-900"
            size="txtGilroyBold40"
          >
            Our Latest Posts
          </Text>
          <div className="flex flex-col font-montserrat items-center justify-start mt-8 w-full">
            <div className="md:gap-5 gap-[31px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_bitmap_160X460.png"
                  alt="Bitmap"
                />
                <div className="flex flex-row items-start justify-between mt-6 w-full">
                  <div className="flex flex-row gap-2 items-start justify-between mt-[3px] w-[53%]">
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      className="h-1 mt-1 w-1"
                      src="images/img_.svg"
                      alt="Four"
                    />
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  How to create a UX Writing portfolio as a beginner
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_bitmap_2.png"
                  alt="Bitmap One"
                />
                <div className="flex flex-row items-start justify-between mt-6 w-full">
                  <div className="flex flex-row gap-2 items-start justify-between mt-[3px] w-[53%]">
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      className="h-1 mt-1 w-1"
                      src="images/img_.svg"
                      alt="Five"
                    />
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="mt-[3px] text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  <>How Snapchat and Netflix Break UX Design Principles</>
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_bitmap_3.png"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row items-start justify-between mt-6 pt-[3px] w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-[53%]">
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      className="h-1 mt-1 w-1"
                      src="images/img_.svg"
                      alt="Six"
                    />
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  Designing Content for Readability, Legibility and Clarity.
                </Text>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_bitmap_4.png"
                  alt="Bitmap Three"
                />
                <div className="flex flex-row items-start justify-between mt-6 pt-[3px] w-full">
                  <div className="flex flex-row gap-2 items-start justify-between w-[53%]">
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      by Virgie Patterson
                    </Text>
                    <Img
                      className="h-1 mt-1 w-1"
                      src="images/img_.svg"
                      alt="Seven"
                    />
                    <Text
                      className="text-bluegray-600 text-sm"
                      size="txtMontserratRomanRegular14"
                    >
                      UX WRITING
                    </Text>
                  </div>
                  <Text
                    className="text-bluegray-600 text-sm"
                    size="txtMontserratRomanRegular14"
                  >
                    15 March, 2022
                  </Text>
                </div>
                <Text
                  className="leading-[27.00px] mt-3 text-bluegray-900 text-lg w-full"
                  size="txtMontserratBold18"
                >
                  Survey: UX, Interactive Designer or Full-Stack Developer - Who
                  are you?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostsTwoPage;
