import React from "react";

import { Button, Img, List, Text } from "components";

const BlogPostsThreePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-center justify-start mx-auto p-[95px] md:px-10 sm:px-5 w-full">
        <div className="md:h-[1450px] sm:h-[2190px] h-[710px] max-w-[1140px] mx-auto relative w-full">
          <div className="flex flex-row gap-3.5 h-full items-center justify-center ml-auto mr-[98px] mt-[11px] w-[23%]">
            <Img
              className="h-px w-[11%]"
              src="images/img_line.svg"
              alt="Line"
            />
            <Text
              className="text-base text-bluegray-900"
              size="txtMontserratBold16"
            >
              Read our latest blog posts
            </Text>
          </div>
          <List
            className="absolute sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start mb-[223px] sm:ml-[0] rounded shadow-bs w-full">
              <div className="flex flex-col gap-4 items-end justify-start w-full">
                <Img
                  className="h-[315px] md:h-auto object-cover w-full"
                  src="images/img_bitmap.png"
                  alt="Bitmap"
                />
                <div className="flex flex-row gap-[18px] items-start justify-end w-[94%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-5 w-[78%]">
                    <Button className="cursor-pointer font-medium min-w-[101px] text-center text-xs uppercase">
                      UX WRITING
                    </Button>
                    <Text
                      className="leading-[27.00px] mt-4 text-bluegray-900 text-lg w-full"
                      size="txtMontserratBold18"
                    >
                      How to create a UX Writing portfolio as a beginner
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-[23px] w-4/5 md:w-full">
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        by John Doe
                      </Text>
                      <Img
                        className="h-1 mt-1 w-1"
                        src="images/img_.svg"
                        alt="Eight"
                      />
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center mt-[100px] w-14"
                    shape="square"
                    color="blue_A700"
                    size="sm"
                  >
                    <Img
                      className="h-8"
                      src="images/img_arrowright_white_A700.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] sm:mt-0 my-[111px] rounded shadow-bs w-full">
              <div className="flex flex-col gap-4 items-end justify-start w-full">
                <Img
                  className="h-[315px] md:h-auto object-cover w-full"
                  src="images/img_bitmap_236X360.png"
                  alt="Bitmap One"
                />
                <div className="flex flex-row gap-4 items-start justify-end w-[94%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-5 w-[79%]">
                    <div className="flex flex-row gap-3 items-center justify-start rounded-[13px] w-3/4 md:w-full">
                      <Button className="cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                        UX DESIGN
                      </Button>
                      <Button className="!text-red-700 cursor-pointer font-medium min-w-[93px] text-center text-xs uppercase">
                        UI DESIGN
                      </Button>
                    </div>
                    <Text
                      className="leading-[27.00px] mt-4 text-bluegray-900 text-lg w-full"
                      size="txtMontserratBold18"
                    >
                      <>How Snapchat and Netflix Break UX Design Principles</>
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-[23px] w-4/5 md:w-full">
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        by John Doe
                      </Text>
                      <Img
                        className="h-1 mt-1 w-1"
                        src="images/img_.svg"
                        alt="Nine"
                      />
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center mt-[100px] w-14"
                    shape="square"
                    color="blue_A700"
                    size="sm"
                  >
                    <Img
                      className="h-8"
                      src="images/img_arrowright_white_A700.svg"
                      alt="arrowright One"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] sm:mt-0 mt-[223px] rounded shadow-bs w-full">
              <div className="flex flex-col gap-4 items-end justify-start w-full">
                <Img
                  className="h-[315px] md:h-auto object-cover w-full"
                  src="images/img_bitmap_1.png"
                  alt="Bitmap Two"
                />
                <div className="flex flex-row gap-[18px] items-start justify-end w-[94%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-5 w-[78%]">
                    <Button className="cursor-pointer font-medium min-w-[111px] text-center text-xs uppercase">
                      WEB DESIGN
                    </Button>
                    <Text
                      className="leading-[27.00px] mt-4 text-bluegray-900 text-lg w-full"
                      size="txtMontserratBold18"
                    >
                      How to Design Your Site to Make it Super-fast
                    </Text>
                    <div className="flex flex-row gap-2 items-start justify-start mt-[23px] w-4/5 md:w-full">
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        by John Doe
                      </Text>
                      <Img
                        className="h-1 mt-1 w-1"
                        src="images/img_.svg"
                        alt="Ten"
                      />
                      <Text
                        className="text-bluegray-600 text-sm"
                        size="txtMontserratRomanRegular14"
                      >
                        15 March, 2022
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex h-14 items-center justify-center mt-[100px] w-14"
                    shape="square"
                    color="blue_A700"
                    size="sm"
                  >
                    <Img
                      className="h-8"
                      src="images/img_arrowright_white_A700.svg"
                      alt="arrowright Two"
                    />
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

export default BlogPostsThreePage;
