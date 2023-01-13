import React from "react";

import { Img, Text, Button, Line, CheckBox, List } from "components";

const AdditionalInformationPage = () => {
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
        <div className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[71px] w-[100%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[490px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Text
                className="bg-indigo_900 flex font-bold items-center px-[4px] rounded-radius50 text-white_A700 w-[14px]"
                variant="body3"
              >
                1
              </Text>
              <Text
                className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900 w-[auto]"
                variant="body3"
              >
                Search Hotel
              </Text>
            </div>
            <div className="flex flex-col items-center md:ml-[40px] ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
              <Text
                className="bg-indigo_900 flex font-bold items-center px-[3px] rounded-radius50 text-white_A700 w-[14px]"
                variant="body3"
              >
                2
              </Text>
              <Text
                className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-gray_900 w-[auto]"
                variant="body3"
              >
                Guests Info
              </Text>
            </div>
            <div className="flex flex-col items-center md:ml-[40px] ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
              <Text
                className="bg-gray_51 flex font-normal items-center not-italic outline outline-[0.29px] outline-bluegray_100 px-[3px] rounded-radius50 text-gray_900 w-[14px]"
                variant="body3"
              >
                3
              </Text>
              <Text
                className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_900 w-[auto]"
                variant="body3"
              >
                Payment Methods
              </Text>
            </div>
            <div className="flex flex-col items-center md:ml-[40px] ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              <Text
                className="bg-gray_51 flex font-normal items-center not-italic outline outline-[0.29px] outline-bluegray_100 px-[3px] rounded-radius50 text-gray_900 w-[14px]"
                variant="body3"
              >
                4
              </Text>
              <Text
                className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_900 w-[auto]"
                variant="body3"
              >
                Booking Confirmation{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1200px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[28px] mt-[41px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] sm:w-[100%] w-[63%]">
              <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Additional Information
                  </Text>
                  <Text
                    className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                    variant="body1"
                  >
                    All fields are required unless otherwise stated.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                  <div className="bg-yellow_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[11px] sm:p-[5px] md:p-[7px] w-[100%]">
                    <Img
                      src="images/img_info.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="info"
                    />
                    <Text
                      className="flex-grow font-normal leading-[18.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] my-[1px] not-italic text-gray_903"
                      variant="body2"
                    >
                      Use all given names and surnames exactly as they appear on
                      your
                      <br />
                      passport/ID to avoid complications.
                    </Text>
                  </div>
                  <div className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          <span className="text-gray_900 text-[14px] font-metropolis">
                            Guest Information{" "}
                          </span>
                          <span className="text-red_A700 text-[14px] font-metropolis">
                            *
                          </span>
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[100%]"
                          variant="body2"
                        >
                          IMPORTANT
                          <br />
                          Guest details must be entered as it appears on
                          <br />
                          the passport or ID.
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[110px] sm:ml-[58px] md:ml-[75px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowdown"
                      />
                    </div>
                    <Line className="bg-bluegray_101 h-[0.5px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Reservation Terms and Cancellation Policy
                      </Text>
                      <Text
                        className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_400 w-[100%]"
                        variant="body2"
                      >
                        For refundable hotels, cancellation deadline is 7 days
                        before check-in date. 50% will be chargeable as
                        cancellation fee. 7 days notice must be given for all
                        cancellation requests and amendment will only be
                        possible if same rooms are available and initial room
                        rates are still the same. For non-refundable hotels,
                        bookings are non-refundable/non-amendable once payment
                        is made, hence, no amendment or cancellation is
                        permitted.
                      </Text>
                    </div>
                    <Line className="bg-bluegray_101 h-[0.5px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-semibold text-gray_900 w-[auto]"
                          variant="body1"
                        >
                          Hotel Policies
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[100%]"
                          variant="body2"
                        >
                          CHECK-IN INSTRUCTION
                          <br />
                          <br />
                          Check-in time is 3pm and check-out time is 12pm, but
                          this may vary depending on the hotel. Early check-in
                          or late check-out is not guaranteed but subject to
                          availability.
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[81%]"
                        variant="body2"
                      >
                        <span className="text-bluegray_400 text-[12px] font-metropolis">
                          CANCELLATION POLICY
                          <br />
                          <br />
                        </span>
                        <span className="text-gray_801 text-[12px] font-metropolis font-bold">
                          Room 1<br />
                        </span>
                        <span className="text-bluegray_400 text-[12px] font-metropolis">
                          cancellation from 12/29/2021 12:00:00 PM will be NGN
                          80736
                        </span>
                      </Text>
                    </div>
                    <Line className="bg-bluegray_101 h-[0.5px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start sm:mb-[21px] md:mb-[27px] mb-[40px] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                  <CheckBox
                    className="font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] not-italic sm:pl-[4px] md:pl-[5px] pl-[8px] text-[12px] text-bluegray_400"
                    inputClassName="mr-[5px]"
                    name="Byproceeding"
                    label="By proceeding, I acknowledge that I have read and agreed to Travelbeta's Hotel booking terms & conditions"
                  ></CheckBox>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                  <Button
                    className="cursor-pointer font-bold min-w-[38%] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder4"
                    variant="OutlineGray900"
                  >
                    Back
                  </Button>
                  <Button
                    className="cursor-pointer font-bold min-w-[52%] sm:ml-[12px] md:ml-[16px] ml-[24px] text-[16px] text-center text-gray_900 w-[max-content]"
                    shape="RoundedBorder4"
                    variant="FillBluegray101"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[27px] p-[40px] sm:w-[100%] w-[38%]">
              <div className="flex flex-col items-end justify-start sm:px-[0] w-[100%]">
                <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between shadow-bs4 w-[100%]">
                  <Img
                    src="images/img_unsplashrlwe8f.png"
                    className="max-w-[100%] sm:w-[100%] w-[48%]"
                    alt="unsplashrlwE8f"
                  />
                  <div className="flex flex-col sm:mx-[0] pr-[12px] md:pr-[8px] sm:px-[0] py-[12px] sm:py-[6px] md:py-[8px] sm:w-[100%] w-[48%]">
                    <div className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-semibold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        ibis Styles Accra Airport
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                          <Text
                            className="flex-grow font-semibold text-gray_801"
                            variant="body2"
                          >
                            4.2
                          </Text>
                          <Img
                            src="images/img_star.svg"
                            className="flex-shrink-0 h-[10px] sm:h-[6px] md:h-[7px] max-w-[100%] w-[10px] sm:w-[5px] md:w-[6px]"
                            alt="star"
                          />
                        </div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-indigo_900 w-[auto]"
                          variant="body2"
                        >
                          (2,768)
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[10px] sm:mb-[5px] md:mb-[6px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 md:h-[11px] h-[15px] sm:h-[8px] max-w-[100%] md:w-[10px] w-[15px] sm:w-[7px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow leading-[14.00px] md:leading-[normal] sm:leading-[normal] ml-[2px] sm:mx-[0] not-italic text-gray_801"
                        as="h1"
                        variant="h1"
                      >
                        Plot 24 Airport City Area Airport City Enclave, Ghana..
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  View Hotel Details
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col justify-start sm:mb-[141px] md:mb-[182px] mb-[265px] sm:mt-[22px] md:mt-[28px] mt-[42px] md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                <Text
                  className="font-semibold leading-[32.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] mt-[4px] sm:mx-[0] text-black_900 sm:w-[100%] w-[88%]"
                  as="h4"
                  variant="h4"
                >
                  Single standard Bed and
                  <br />
                  Breakfast
                </Text>
                <List
                  className="sm:gap-[25px] md:gap-[33px] gap-[48px] grid min-h-[auto] ml-[4px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:w-[100%] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        Number of rooms
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        1
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        Maximum occupancy
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center w-[100%] h-[0.5px] bg-bluegray_101" />
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Check-In
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        variant="body1"
                      >
                        Check-Out
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        Dec 30, 2021
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Dec 31, 2021
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-white_A700 flex flex-col items-center justify-start mb-[4px] ml-[4px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:w-[100%] w-[99%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Hotel Base Fare
                    </Text>
                    <Line className="bg-bluegray_101 h-[0.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        1 Rooms x 1 night
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        ₦1,200,000
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        Discount
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        ₦0
                      </Text>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body1"
                      >
                        Total Fare
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        ₦1,200,000
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-bluegray_101 h-[0.5px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Total:
                    </Text>
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ₦1,200,000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_901 mt-[138px] sm:mt-[73px] md:mt-[94px] w-[100%]">
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

export default AdditionalInformationPage;
