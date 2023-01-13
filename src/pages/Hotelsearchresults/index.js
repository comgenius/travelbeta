import React from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";
import HeaderNav from "components/HeaderNav";
import AddressNav from "components/AddressNav";
import FooterNav from "components/FooterNav";

const HotelsearchresultsPage = () => {
  return (
    <>
      <div className="bg-gray_50 flex flex-col font-metropolis items-center justify-start mx-[auto] pt-[1px] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <HeaderNav/>
          <div className="flex flex-col w-[100%]">
            <AddressNav/>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1200px] md:ml-[82px] ml-[auto] mr-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] outline outline-[0.5px] outline-bluegray_100 sm:px-[0] sm:w-[100%] w-[28%]">
                <div className="bg-blue_50 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Filter
                  </Text>
                  <Text
                    className="font-bold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Clear all
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                  <div className="flex flex-col justify-start mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Hotel Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="flex md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                      type="text"
                      name="Frame2363"
                      placeholder="Enter hotel name"
                      suffix={
                        <Img
                          src="images/img_search.svg"
                          className="ml-[35px] mr-[4px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Budget per night
                      </Text>
                      <SelectBox
                        className="font-normal sm:mx-[0] not-italic text-[16px] text-indigo_900 sm:w-[100%] w-[32%]"
                        placeholderClassName="text-indigo_900"
                        name="Frame1374"
                        placeholder="Clear"
                        isSearchable={false}
                        isMulti={false}
                      ></SelectBox>
                    </div>
                    <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Img
                        src="images/img_group1350.svg"
                        className="max-w-[100%] w-[100%]"
                        alt="Group1350"
                      />
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ₦0
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          ₦x
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Hotel class
                      </Text>
                      <SelectBox
                        className="font-normal sm:mx-[0] not-italic text-[16px] text-indigo_900 sm:w-[100%] w-[32%]"
                        placeholderClassName="text-indigo_900"
                        name="Frame1374 One"
                        placeholder="Clear"
                        isSearchable={false}
                        isMulti={false}
                      ></SelectBox>
                    </div>
                    <div className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="checkmark"
                        />
                        <Img
                          src="images/img_frame2365.svg"
                          className="max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[100%] w-[60%]"
                          alt="Frame2365"
                        />
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <Img
                          src="images/img_file.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="file"
                        />
                        <Img
                          src="images/img_ticket.svg"
                          className="max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[100%] w-[70%]"
                          alt="ticket"
                        />
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <Img
                          src="images/img_file.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="file One"
                        />
                        <Img
                          src="images/img_frame2365_24X96.svg"
                          className="max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[100%] w-[75%]"
                          alt="Frame2365 One"
                        />
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                        <Img
                          src="images/img_file.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="file Two"
                        />
                        <Img
                          src="images/img_frame2365_amber_A200.svg"
                          className="max-w-[100%] sm:w-[100%] w-[79%]"
                          alt="Frame2365 Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mb-[3px] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Facilities
                    </Text>
                    <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]">
                      <Grid className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                        <div className="bg-white_A700 border border-indigo_900 border-solid flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_signal.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="signal"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_900 w-[auto]"
                            variant="body1"
                          >
                            Free Wi-FI
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_notification.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="notification"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Free breakfast
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_question.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="question"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Free parking
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_minimize.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="minimize"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Air conditioned
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_filter.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="filter One"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Bar/Lounge
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_file_24X24.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="file Three"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Swimming pool
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_airplane.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="airplane"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Restaurant
                          </Text>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-start p-[12px] sm:p-[6px] md:p-[8px] rounded-radius4 w-[100%]">
                          <Img
                            src="images/img_minimize_24X24.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="minimize One"
                          />
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_801 w-[auto]"
                            variant="body1"
                          >
                            Fitness Centre
                          </Text>
                        </div>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start md:ml-[22px] ml-[32px] sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 max-w-[100%] w-[21%]"
                    alt="sort"
                  />
                  <Text
                    className="flex-grow font-semibold sm:ml-[3px] md:ml-[4px] ml-[6px] mt-[1px] text-indigo_900"
                    as="h5"
                    variant="h5"
                  >
                    Sort by
                  </Text>
                </div>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal One"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question One"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] shadow-bs sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly shadow-bs w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG One"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts One"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD One"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] shadow-bs sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] shadow-bs w-[100%]">
                        <div className="flex flex-col justify-start shadow-bs w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] shadow-bs2 sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801 text-shadow-ts"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star One"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 text-shadow-ts w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location One"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801 text-shadow-ts"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 shadow-bs sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Two"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 shadow-bs w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 shadow-bs sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 shadow-bs sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 shadow-bs w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 shadow-bs sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 shadow-bs sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Two"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 shadow-bs w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb One"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400 text-shadow-ts"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] shadow-bs sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[96%]">
                        <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[81%]">
                          <Text
                            className="font-semibold text-gray_900 text-shadow-ts w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            ₦39,936
                          </Text>
                          <Text
                            className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 text-shadow-ts w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Per night & room
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] shadow-bs w-[100%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                        variant="OutlineWhiteA70002"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] shadow-bs sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly shadow-bs w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Two"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Two"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Two"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] shadow-bs sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] shadow-bs w-[100%]">
                        <div className="flex flex-col justify-start shadow-bs w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] shadow-bs sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Two"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Two"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Three"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Three"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Two"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Three"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Three"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Three"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Three"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Three"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Four"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Four"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Three"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Four"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Four"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Four"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Four"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Four"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Five"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Five"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Four"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Five"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Five"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Five"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Five"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Five"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Six"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Six"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Five"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                  <div className="hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly outline outline-[0.5px] outline-bluegray_100 hover:shadow-bs w-[100%]">
                    <div className="bg-bluegray_900 flex flex-col items-center sm:mx-[0] md:pt-[147px] sm:pt-[15px] pt-[215px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                        <Img
                          src="images/img_unsplashe9npwg.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashE9NPWG Six"
                        />
                        <Img
                          src="images/img_unsplashgtnfts.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplashGtnFts Six"
                        />
                        <Img
                          src="images/img_unsplasha0bgod.png"
                          className="max-w-[100%] w-[33%]"
                          alt="unsplasha0BGOD Six"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] sm:w-[100%] w-[42%]">
                      <div className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <div className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ibis Styles Accra Airport
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                              <Text
                                className="flex-grow font-semibold text-gray_801"
                                as="h6"
                                variant="h6"
                              >
                                4.2
                              </Text>
                              <Img
                                src="images/img_star.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="star Six"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[11px] ml-[16px] sm:ml-[8px] not-italic text-indigo_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              (2,768)
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                          <Img
                            src="images/img_location.svg"
                            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="location Six"
                          />
                          <Text
                            className="flex-grow font-normal leading-[16.00px] md:leading-[normal] sm:leading-[normal] ml-[4px] sm:mx-[0] not-italic text-gray_801"
                            variant="body2"
                          >
                            Plot 24 Airport City Area Airport
                            <br />
                            City Enclave, Ghana..
                          </Text>
                        </div>
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[92%]">
                              <Img
                                src="images/img_signal_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="signal Seven"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free Wi-FI
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_filter_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="filter Eight"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Bar/Lounge
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[95%]">
                              <Img
                                src="images/img_airplane_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="airplane Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Restaurant
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[97%]">
                              <Img
                                src="images/img_notification_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="notification Seven"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free breakfast
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_minimize_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize Eight"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Air conditioned
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[96%]">
                              <Img
                                src="images/img_minimize_1.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="minimize One Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Fitness Centre
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start md:ml-[5px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius221 sm:w-[100%] w-[87%]">
                              <Img
                                src="images/img_question_12X12.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="question Seven"
                              />
                              <Text
                                className="flex-grow ml-[4px] not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Free parking
                              </Text>
                            </div>
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[4px] md:mt-[5px] mt-[8px] rounded-radius221 w-[100%]">
                              <Img
                                src="images/img_lightbulb.svg"
                                className="flex-shrink-0 h-[12px] sm:h-[7px] md:h-[9px] max-w-[100%] w-[12px] sm:w-[6px] md:w-[8px]"
                                alt="lightbulb Six"
                              />
                              <Text
                                className="flex-grow not-italic text-bluegray_400"
                                as="h1"
                                variant="h1"
                              >
                                Swimming pool
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_50 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[37px] sm:w-[100%] w-[30%]">
                      <div className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
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
                        className="cursor-pointer font-bold min-w-[96%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder4"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Button
              className="capitalize cursor-pointer font-semibold min-w-[59%] sm:ml-[257px] md:ml-[332px] ml-[483px] mt-[131px] sm:mt-[69px] md:mt-[90px] text-[12px] text-center text-indigo_900 w-[max-content]"
              variant="FillWhiteA700"
            >
              Load more results
            </Button>
            <FooterNav/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelsearchresultsPage;
