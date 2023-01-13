import React from "react";
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";

const FooterNav = () => {
  return (
    <div className="bg-prim-100 bg-gray_901">
      <div className="custom-container flex flex-col lg:flex-row justify-between items-start py-24 lg:py-28">
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-start space-x-20 lg:space-x-0 px-11 lg:px-0">
          <div className="w-1/2 lg:w-1/3">
            <p className="text-prim-light-200 text-base leading-none font-bold">
              Services
            </p>
            <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
              <li>
                <a
                  className="text-prim-light-200 text-base leading-none"
                  href="/?tab=flights"
                >
                  Flights
                </a>
              </li>
              <li>
                <a
                  className="text-prim-light-200 text-base leading-none"
                  href="/?tab=hotels"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  className="text-prim-light-200 text-base leading-none"
                  href="/visa"
                >
                  Visa
                </a>
              </li>
              <li>
                <a
                  className="text-prim-light-200 text-base leading-none"
                  href="/deals"
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  className="text-prim-light-200 text-base leading-none"
                  href="/packages"
                >
                  Packages
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2 lg:w-2/3 grid grid-cols-1 lg:grid-cols-2">
            <div>
              <p className="text-prim-light-200 text-base leading-none font-bold">
                Account
              </p>
              <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
                <li>
                  <a
                    className="text-prim-light-200 text-base leading-none"
                    href="/user/login"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    className="text-prim-light-200 text-base leading-none"
                    href="/affiliate"
                  >
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-14 lg:mt-0">
              <p className="text-prim-light-200 text-base leading-none font-bold">
                Travelbeta
              </p>
              <ul className="flex flex-col space-y-8 lg:space-y-3 mt-8 lg:mt-4">
                <li>
                  <a
                    className="text-prim-light-200 text-base leading-none"
                    href="/about"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="text-prim-light-200 text-base leading-none"
                    href="/contact"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    className="text-prim-light-200 text-base leading-none"
                    href="/feedback"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6 flex justify-start lg:justify-end lg:items-center mt-14 lg:mt-0 lg:ml-24 px-11 lg:px-0">
          <div className="flex flex-col items-start lg:items-end">
            <div className="flex items-center space-x-3.5">
              <a target="_blank" href="https://www.facebook.com/travelbeta">
                
              </a>
              <a target="_blank" href="https://www.instagram.com/travelbeta">
                
              </a>
              <a target="_blank" href="https://www.twitter.com/travelbeta">
                
              </a>
            </div>
            <div className="mt-12 lg:mt-10 flex items-center space-x-3.5">
              
            </div>
            <p className="w-36 lg:w-full text-sm text-prim-light-200 mt-2">
              © 2023 Travelbeta All Rights Reserved.
            </p>
            <p className="w-40 lg:w-full text-sm flex flex-col lg:flex-row">
              <a className="text-prim-light-200 lg:pl-2" href="/terms">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    /* <footer className="bg-gray_901 sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
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
    </footer> */
  );
};

export default FooterNav;
