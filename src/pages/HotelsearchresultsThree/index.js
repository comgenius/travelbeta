import React from "react";

import { Img, Text, Button, List, Line } from "components";

const HotelsearchresultsThreePage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-metropolis items-center justify-start mx-[auto] pt-[1px] w-[100%]">
        <header className="w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[5px] md:p-[7px] shadow-bs1 w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1200px] md:ml-[75px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_travelbetalogo.png"
                className="max-w-[100%] w-[13%]"
                alt="travelbetalogo"
              />
              <div className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[53px] ml-[78px] sm:mx-[0] pt-[3px] sm:px-[0] px-[3px] sm:w-[100%] w-[55%] common-row-list">
                <ul className="flex flex-row items-start justify-center">
                  <li className="w-[auto] mt-[1px] mb-[4px] ml-[128px] sm:ml-[68px] sm:w-[100%] sm:my-[10px] md:ml-[88px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                      rel="noreferrer"
                    >
                      Visa
                    </a>
                  </li>
                  <li className="w-[auto] mt-[1px] ml-[32px] sm:ml-[17px] sm:w-[100%] sm:my-[10px] md:ml-[22px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                      rel="noreferrer"
                    >
                      Vacation packages
                    </a>
                  </li>
                  <li className="w-[auto] mb-[4px] ml-[32px] mr-[128px] sm:mr-[68px] sm:ml-[17px] sm:w-[100%] sm:my-[10px] md:mr-[88px] md:ml-[22px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                      rel="noreferrer"
                    >
                      Become an affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[53px] ml-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                <Text
                  className="font-semibold text-gray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Log in{" "}
                </Text>
                <Button
                  className="cursor-pointer font-bold min-w-[70%] text-[16px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder4"
                >
                  Create account
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-gray_901 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[944px] ml-[auto] mr-[auto] sm:mx-[0] md:mx-[148px] mx-[216px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[27px] pr-[40px] sm:w-[100%] w-[80%]">
                <Text
                  className="font-bold text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Accra, Ghana
                </Text>
                <Text
                  className="font-bold sm:ml-[42px] md:ml-[55px] ml-[80px] text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Sun Dec 2, 2021 - Mon Dec 20, 2021
                </Text>
                <div className="flex flex-col items-center ml-[120px] md:ml-[82px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    1 Adult, 1 Room
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[9%] ml-[120px] sm:ml-[63px] md:ml-[82px] text-[16px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder1"
                size="md"
                variant="OutlineWhiteA700"
              >
                Edit
              </Button>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[997px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                <Text
                  className="font-semibold text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  ibis Styles Accra Airport
                </Text>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Text
                      className="flex-grow font-semibold text-gray_801"
                      as="h4"
                      variant="h4"
                    >
                      4.2
                    </Text>
                    <Img
                      src="images/img_star.svg"
                      className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="star"
                    />
                  </div>
                  <Text
                    className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    (2,768)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Img
                    src="images/img_location.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="location"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-gray_801"
                    as="h6"
                    variant="h6"
                  >
                    Plot 24 Airport City Area AirportCity Enclave, Ghana..
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <Img
                    src="images/img_call.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="call"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] not-italic text-gray_801"
                    as="h6"
                    variant="h6"
                  >
                    +233 30 274 6600
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <List
                  className="md:gap-[10px] gap-[15.49px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[64%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_signal_12X12.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="signal"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Free Wi-FI
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] rounded-radius428 w-[100%]">
                      <Img
                        src="images/img_filter_12X12.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="filter"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Bar/Lounge
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[95%]">
                      <Img
                        src="images/img_airplane_12X12.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="airplane"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Restaurant
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_notification_12X12.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="notification"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Free breakfast
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_minimize_12X12.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="minimize"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Air conditioned
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_minimize_1.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="minimize One"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Fitness Centre
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius428 sm:w-[100%] w-[86%]">
                    <Img
                      src="images/img_question_12X12.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="question"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Free parking
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] rounded-radius428 w-[100%]">
                    <Img
                      src="images/img_lightbulb.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="lightbulb"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Swimming pool
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <Text
                  className="font-semibold text-gray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  ₦39,936
                </Text>
                <Text
                  className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Per night & room
                </Text>
              </div>
              <div className="flex flex-col items-end justify-start sm:mt-[27px] md:mt-[35px] mt-[52px] w-[100%]">
                <div className="flex flex-col items-end justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    ₦39,936 for 1 night 1 room(s)
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    Includes taxes & fees
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold min-w-[86%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder4"
                >
                  Select room
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[998px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Overview
                </Text>
                <Text
                  className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Rooms
                </Text>
                <Text
                  className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  About
                </Text>
                <Text
                  className="font-normal sm:ml-[30px] md:ml-[39px] ml-[57px] not-italic text-bluegray_400 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Reviews
                </Text>
              </div>
              <Line className="bg-bluegray_100 h-[0.5px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
            </div>
            <div className="flex flex-col items-center justify-start sm:mt-[29px] md:mt-[37px] mt-[55px] pb-[1px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Img
                  src="images/img_unsplashrlwe8f_412X794.png"
                  className="max-w-[100%] mb-[1px] sm:w-[100%] w-[80%]"
                  alt="unsplashrlwE8f"
                />
                <div className="flex flex-col items-center mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                  <Img
                    src="images/img_unsplasht5pl6c_127X187.png"
                    className="max-w-[100%] w-[100%]"
                    alt="unsplashT5pL6c"
                  />
                  <Img
                    src="images/img_unsplashhdbcjh.png"
                    className="max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                    alt="unsplashhDbCjH"
                  />
                  <Img
                    src="images/img_unsplashvhztm9.png"
                    className="max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]"
                    alt="unsplashvhztmNine"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[998px] ml-[auto] mr-[auto] sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <Text
                className="font-semibold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Kindly choose room
              </Text>
              <Line className="bg-bluegray_100 h-[0.5px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
            </div>
            <List
              className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] sm:mt-[29px] md:mt-[37px] mt-[55px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                <Img
                  src="images/img_unsplashcbz4ed.png"
                  className="max-w-[100%] w-[32%]"
                  alt="unsplashCbZ4ED"
                />
                <div className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <Text
                      className="font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Single standard Bed
                      <br />
                      and Breakfast
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        1 guests maximum
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] mt-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        Refundable
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        Rooms
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[37%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray51"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[29%]">
                  <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        ₦39,936
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Per night & room
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        ₦39,936 for 1 night 1 room(s)
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        Includes taxes & fees
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[80%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Book
                  </Button>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                <Img
                  src="images/img_unsplashcbz4ed.png"
                  className="max-w-[100%] w-[32%]"
                  alt="unsplashCbZ4ED One"
                />
                <div className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Double standard Bed
                      <br />
                      and Breakfast
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        1 guests maximum
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] mt-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        Refundable
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        Rooms
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[37%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray51"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[29%]">
                  <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        ₦39,936
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Per night & room
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        ₦39,936 for 1 night 1 room(s)
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        Includes taxes & fees
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[80%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Book
                  </Button>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                <Img
                  src="images/img_unsplashcbz4ed.png"
                  className="max-w-[100%] w-[32%]"
                  alt="unsplashCbZ4ED Two"
                />
                <div className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Text
                      className="font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Twin standard Bed
                      <br />
                      and Breakfast
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        1 guests maximum
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] mt-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        Refundable
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        Rooms
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[37%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray51"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[29%]">
                  <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        ₦39,936
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Per night & room
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        ₦39,936 for 1 night 1 room(s)
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        Includes taxes & fees
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[80%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Book
                  </Button>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 w-[100%]">
                <Img
                  src="images/img_unsplashcbz4ed.png"
                  className="max-w-[100%] w-[32%]"
                  alt="unsplashCbZ4ED Three"
                />
                <div className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[40%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                    <Text
                      className="font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Tripple standard Bed
                      <br />
                      and Breakfast
                    </Text>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user Three"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        1 guests maximum
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Img
                        src="images/img_checkmark_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Three"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] mt-[4px] not-italic text-gray_801"
                        variant="body2"
                      >
                        Refundable
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body2"
                      >
                        Rooms
                      </Text>
                      <Button
                        className="cursor-pointer font-semibold min-w-[37%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-center text-gray_900 w-[max-content]"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillGray51"
                      >
                        1
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[29%]">
                  <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                    <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        ₦39,936
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Per night & room
                      </Text>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        ₦39,936 for 1 night 1 room(s)
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_801 w-[auto]"
                        variant="body2"
                      >
                        Includes taxes & fees
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-bold min-w-[80%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder4"
                  >
                    Book
                  </Button>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[998px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <Text
                className="font-semibold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                About
              </Text>
              <Line className="bg-bluegray_100 h-[0.5px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
            </div>
            <div className="flex flex-col justify-start sm:mt-[29px] md:mt-[37px] mt-[55px] w-[100%]">
              <Text
                className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-gray_900 w-[100%]"
                as="h6"
                variant="h6"
              >
                This refined, warmly decorated hotel in the city centre is an
                11-minute walk from the National Museum and 8 km from Kotoka
                International Airport.
                <br />
                The posh rooms come with free Wi-Fi, flat screens, tea and
                coffee makers, plus safes and sofabeds. Upgraded rooms and
                minibars. Suites provide living rooms with dining areas. Room
                service is available 24/7.
                <br />
                <br />
                {`Freebies include airport shuttle service, parking and a breakfast buffet. There's a cosy international restaurant, as well as 2 bars. A sundeck with shaded loungers flanks an outdoor pool. Amenities include a gym, a tennis court, a business centre and several meeting rooms.`}
                <br />
                <br />
                Check-in time: 2:00 PM
                <br />
                Check-out time: 12:00 PM
              </Text>
              <div className="flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                <Text
                  className="font-bold text-gray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Address & contact information
                </Text>
                <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Img
                      src="images/img_location.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="location One"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[4px] not-italic text-gray_801"
                      as="h6"
                      variant="h6"
                    >
                      Plot 24 Airport City Area AirportCity Enclave, Ghana..
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_call.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="call One"
                    />
                    <Text
                      className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[3px] not-italic text-gray_801"
                      as="h6"
                      variant="h6"
                    >
                      +233 30 274 6600
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[998px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start w-[100%]">
              <Text
                className="font-semibold text-gray_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Reviews
              </Text>
              <Line className="bg-bluegray_100 h-[0.5px] sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]" />
            </div>
            <div className="flex flex-col items-center justify-start sm:mt-[29px] md:mt-[37px] mt-[55px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Review Summary
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                    <Text
                      className="flex-grow font-semibold text-indigo_900"
                      as="h6"
                      variant="h6"
                    >
                      Write a guest review
                    </Text>
                    <Img
                      src="images/img_edit.svg"
                      className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                      alt="edit One"
                    />
                  </div>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                    <List
                      className="md:gap-[11px] gap-[16.01px] sm:gap-[8px] grid min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_900"
                              as="h6"
                              variant="h6"
                            >
                              5
                            </Text>
                            <Img
                              src="images/img_star_16X16.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star One"
                            />
                          </div>
                          <div className="bg-gray_51 flex flex-col sm:mx-[0] sm:w-[100%] w-[82%]">
                            <div className="bg-amber_500 md:h-[12px] h-[16px] sm:h-[9px] sm:w-[100%] w-[53%]"></div>
                          </div>
                        </div>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          53%
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_900"
                              as="h6"
                              variant="h6"
                            >
                              4
                            </Text>
                            <Img
                              src="images/img_star_16X16.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Two"
                            />
                          </div>
                          <div className="bg-gray_51 flex flex-col sm:mx-[0] sm:w-[100%] w-[82%]">
                            <div className="bg-amber_500 md:h-[12px] h-[16px] sm:h-[9px] w-[29%]"></div>
                          </div>
                        </div>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          29%
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_900"
                              as="h6"
                              variant="h6"
                            >
                              3
                            </Text>
                            <Img
                              src="images/img_star_16X16.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Three"
                            />
                          </div>
                          <div className="bg-gray_51 flex flex-col sm:mx-[0] sm:w-[100%] w-[82%]">
                            <div className="bg-amber_500 md:h-[12px] h-[16px] sm:h-[9px] w-[13%]"></div>
                          </div>
                        </div>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          13%
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_900"
                              as="h6"
                              variant="h6"
                            >
                              2
                            </Text>
                            <Img
                              src="images/img_star_16X16.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Four"
                            />
                          </div>
                          <div
                            className="md:h-[12px] h-[16px] sm:h-[9px] overflow-hidden relative sm:w-[100%] w-[82%]"
                            name="GroupFortyEight"
                          >
                            <div className="w-full h-full absolute bg-gray_51"></div>
                            <div
                              className="h-full absolute bg-amber_500"
                              style={{ width: "2%" }}
                            ></div>
                          </div>
                        </div>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          2%
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[13%]">
                            <Text
                              className="flex-grow font-normal not-italic text-gray_900"
                              as="h6"
                              variant="h6"
                            >
                              1
                            </Text>
                            <Img
                              src="images/img_star_16X16.svg"
                              className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                              alt="star Five"
                            />
                          </div>
                          <div
                            className="md:h-[12px] h-[16px] sm:h-[9px] overflow-hidden relative sm:w-[100%] w-[82%]"
                            name="GroupFortyNine"
                          >
                            <div className="w-full h-full absolute bg-gray_51"></div>
                            <div
                              className="h-full absolute bg-amber_500"
                              style={{ width: "3%" }}
                            ></div>
                          </div>
                        </div>
                        <Text
                          className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          3%
                        </Text>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      4.2
                    </Text>
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Very good
                      </Text>
                      <div className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                        <Img
                          src="images/img_minimize_12X68.svg"
                          className="max-w-[100%] sm:w-[100%] w-[98%]"
                          alt="minimize One"
                        />
                        <Text
                          className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                          variant="body2"
                        >
                          664 reviews
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Text
                  className="font-semibold text-gray_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Reviews
                </Text>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between outline outline-[0.5px] outline-bluegray_100 sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Img
                          src="images/img_reviewavatar.png"
                          className="sm:h-[22px] md:h-[28px] h-[40px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          alt="reviewavatar"
                        />
                        <div className="flex flex-col justify-start ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-bold text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jane Doe
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            June 7, 2019
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[35px] ml-[52px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Text
                          className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_400 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Lorem iosum dolor sit amet, consectetur adipiscing
                          elit. Lorem iosum dolor sit amet, consectetur
                          adipiscing elit. Lorem iosum dolor sit amet,
                          consectetur adipiscing elit. Lorem iosum dolor sit
                          amet, consectetur adipiscing elit.{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      5/5
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between outline outline-[0.5px] outline-bluegray_100 sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Img
                          src="images/img_reviewavatar.png"
                          className="sm:h-[22px] md:h-[28px] h-[40px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          alt="reviewavatar One"
                        />
                        <div className="flex flex-col justify-start ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-bold text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jane Doe
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            June 7, 2019
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[35px] ml-[52px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Text
                          className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_400 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Lorem iosum dolor sit amet, consectetur adipiscing
                          elit. Lorem iosum dolor sit amet, consectetur
                          adipiscing elit. Lorem iosum dolor sit amet,
                          consectetur adipiscing elit. Lorem iosum dolor sit
                          amet, consectetur adipiscing elit.{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      5/5
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between outline outline-[0.5px] outline-bluegray_100 sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Img
                          src="images/img_reviewavatar.png"
                          className="sm:h-[22px] md:h-[28px] h-[40px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          alt="reviewavatar Two"
                        />
                        <div className="flex flex-col justify-start ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-bold text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jane Doe
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            June 7, 2019
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[35px] ml-[52px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Text
                          className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_400 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Lorem iosum dolor sit amet, consectetur adipiscing
                          elit. Lorem iosum dolor sit amet, consectetur
                          adipiscing elit. Lorem iosum dolor sit amet,
                          consectetur adipiscing elit. Lorem iosum dolor sit
                          amet, consectetur adipiscing elit.{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      5/5
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between outline outline-[0.5px] outline-bluegray_100 sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                        <Img
                          src="images/img_reviewavatar.png"
                          className="sm:h-[22px] md:h-[28px] h-[40px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          alt="reviewavatar Three"
                        />
                        <div className="flex flex-col justify-start ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-bold text-gray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jane Doe
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                            variant="body1"
                          >
                            June 7, 2019
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[35px] ml-[52px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Text
                          className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_400 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Lorem iosum dolor sit amet, consectetur adipiscing
                          elit. Lorem iosum dolor sit amet, consectetur
                          adipiscing elit. Lorem iosum dolor sit amet,
                          consectetur adipiscing elit. Lorem iosum dolor sit
                          amet, consectetur adipiscing elit.{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-bold text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      5/5
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <footer className="bg-gray_901 sm:mt-[101px] md:mt-[131px] mt-[191px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between max-w-[1002px] mb-[138px] sm:mb-[73px] md:mb-[94px] ml-[auto] mr-[auto] sm:mt-[50px] md:mt-[64px] mt-[94px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                  <Text
                    className="font-bold text-gray_52 w-[auto]"
                    variant="body1"
                  >
                    Services
                  </Text>
                  <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-white_A700_b2"
                          variant="body1"
                        >
                          Flights
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Hotels
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Visas
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Vacation
                          <br />
                          Packages
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Protocol
                          <br />
                          Services
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Blue Ribbon
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                  <Text
                    className="font-bold text-gray_52 w-[auto]"
                    variant="body1"
                  >
                    Account
                  </Text>
                  <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-white_A700_b2 w-[auto]"
                      variant="body1"
                    >
                      My Account
                    </Text>
                    <Text
                      className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700_b2 w-[auto]"
                      variant="body1"
                    >
                      Affiliate
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                  <Text
                    className="font-bold text-gray_52 w-[auto]"
                    variant="body1"
                  >
                    Travelbeta
                  </Text>
                  <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-white_A700_b2"
                          variant="body1"
                        >
                          About us
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Contact us
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          FAQ’s
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Feedback
                        </a>
                      </li>
                      <li className="w-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[14px] text-white_A700_b2"
                          rel="noreferrer"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                <Img
                  src="images/img_eye.svg"
                  className="max-w-[100%] w-[37%]"
                  alt="eye"
                />
                <div className="flex flex-col items-end justify-start sm:mt-[20px] md:mt-[26px] mt-[39px] w-[100%]">
                  <Img
                    src="images/img_frame1278.svg"
                    className="max-w-[100%] sm:w-[100%] w-[47%]"
                    alt="Frame1278"
                  />
                  <Text
                    className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700_b2 w-[100%]"
                    variant="body1"
                  >
                    <span className="text-white_A700_b2 text-[14px] font-roboto">
                      ©{" "}
                    </span>
                    <span className="text-white_A700_b2 text-[14px] font-metropolis">
                      2021 Travelbeta All Rights Reserved.
                      <br />
                      Privacy Policy | Terms and Conditions
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default HotelsearchresultsThreePage;
