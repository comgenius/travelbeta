import React from "react";

const AdditionalInformation = () => {
  return (
    <div className="px-0 lg:px-24">
      <div className="mt-10 flex items-center justify-center space-x-8 px-6 lg:px-0">
        <div className="flex flex-col items-center font-bold">
          <div className="leading-none flex items-center justify-center Booking_w_sp__1NGoC Booking_text_10__4KSam bg-prim-default text-white rounded-lg">
            1
          </div>
          <div className="Booking_text_10__4KSam Booking_mt_1_5__FJmAi text-center">
            Room Selected
          </div>
        </div>
        <div className="flex flex-col items-center font-bold">
          <div className="leading-none flex items-center justify-center Booking_w_sp__1NGoC Booking_text_10__4KSam bg-prim-default text-white rounded-lg">
            2
          </div>
          <div className="Booking_text_10__4KSam Booking_mt_1_5__FJmAi text-center">
            Additional Information
          </div>
        </div>
        <div className="flex flex-col items-center font-normal">
          <div className="leading-none flex items-center justify-center Booking_w_sp__1NGoC Booking_text_10__4KSam rounded-lg">
            3
          </div>
          <div className="Booking_text_10__4KSam Booking_mt_1_5__FJmAi text-center">
            Payment Methods
          </div>
        </div>
        <div className="flex flex-col items-center font-normal">
          <div className="leading-none flex items-center justify-center Booking_w_sp__1NGoC Booking_text_10__4KSam rounded-lg">
            4
          </div>
          <div className="Booking_text_10__4KSam Booking_mt_1_5__FJmAi text-center">
            Booking Confirmation
          </div>
        </div>
      </div>
      <div className="w-full flex lg:grid flex-col lg:grid-cols-3 mt-10 lg:mt-16 lg:bg-light-blue">
        <div className="w-full lg:col-span-2 bg-white h-fit">
          <div className="px-6 pt-6 lg:pl-32 lg:pr-44">
            <div>
              <div className="mt-0 lg:mt-4">
                <h3 className="text-2xl text-neutral-100 font-semibold">
                  Additional Information
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  All fields are required unless otherwise state.
                </p>
              </div>
              <div
                className="py-3 px-2 mt-8 Booking_text_9__33vt_ Booking_line_height_14__2loKU lg:text-xs flex items-center space-x-2"
                style={{ background: "rgb(255, 237, 196)" }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" />
                </svg>
                <span>
                  Use all given names and surnames exactly as they appear on
                  your passport/ID to avoid complications.
                </span>
              </div>
              <div className="mt-8 divide-y divide-neutral-400">
                <div className="pb-8">
                  <div className="flex justify-between items-start">
                    <div className="w-4/5 Booking_w_308__8rjbO">
                      <p className="text-sm font-semibold text-neutral-100">
                        Guest Information{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <p className="mt-2 text-neutral-300 text-xs leading-4">
                        IMPORTANT
                      </p>
                      <p className="text-neutral-300 text-xs leading-4">
                        Guest details must be entered as it appears on the
                        passport or ID.
                      </p>
                    </div>
                    <button>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 20 20"
                        className="text-neutral-300"
                        height={24}
                        width={24}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-8 block">
                    <div className="flex items-center justify-between lg:justify-start">
                      <h4 className="text-sm text-neutral-100">
                        Guest 1 : ADULT{" "}
                        <span className="Booking_text_9__33vt_ leading-none text-neutral-300 ml-2">
                          (Primary Contact)
                        </span>
                      </h4>
                      <button
                        className="lg:ml-6 bg-tint-300 text-shade-300 rounded-lg uppercase p-1 lg:p-2 Booking_text_9__33vt_ leading-none"
                        style={{ fontSize: "0.625rem" }}
                      >
                        USE PROFILE INFO
                      </button>
                    </div>
                    <div className="w-full lg:w-full">
                      <div className="relative h-12 flex items-end mt-4">
                        <select
                          name="title"
                          className="border-b bg-transparent outline-none Booking_input__IsuIi Booking_select__3o4-S text-base text-neutral-100 pb-1 w-full"
                          required
                          style={{ borderColor: "rgb(230, 230, 230)" }}
                        >
                          <option className="px-0" value={14632}>
                            Child
                          </option>
                          <option className="px-0" value={558}>
                            Dr.
                          </option>
                          <option className="px-0" value={1671}>
                            Madame
                          </option>
                          <option className="px-0" value={74195}>
                            Mademoiselle
                          </option>
                          <option className="px-0" value={9234}>
                            Messrs.
                          </option>
                          <option className="px-0" value={15134}>
                            Miss
                          </option>
                          <option className="px-0" value={74185}>
                            Monsieur
                          </option>
                          <option className="px-0" value={147}>
                            Mr.
                          </option>
                          <option className="px-0" value={149}>
                            Mrs.
                          </option>
                          <option className="px-0" value={148}>
                            Ms.
                          </option>
                          <option className="px-0" value={1328}>
                            Sir
                          </option>
                          <option className="px-0" value={3801}>
                            Sir/Madam
                          </option>
                        </select>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 20 20"
                          className="absolute -right-1 w-7 text-neutral-300"
                          height={24}
                          width={24}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <label className="absolute left-0 bottom-1 text-base text-neutral-300 h-6">
                          Title
                        </label>
                      </div>
                      <div className="relative h-12 flex items-end mt-4">
                        <input
                          className="border-b outline-none Booking_input__IsuIi text-base text-neutral-100 pb-1 w-full"
                          type="text"
                          name="lastName"
                          required
                          defaultValue
                          style={{ borderColor: "rgb(230, 230, 230)" }}
                        />
                        <label className="absolute left-0 bottom-1 text-base text-neutral-300 h-6">
                          Surname
                        </label>
                      </div>
                      <div className="relative h-12 flex items-end mt-4">
                        <input
                          className="border-b outline-none Booking_input__IsuIi text-base text-neutral-100 pb-1 w-full"
                          type="text"
                          name="firstName"
                          required
                          defaultValue
                          style={{ borderColor: "rgb(230, 230, 230)" }}
                        />
                        <label className="absolute left-0 bottom-1 text-base text-neutral-300 h-6">
                          First Name
                        </label>
                      </div>
                      <div className="relative h-12 flex items-end mt-4">
                        <input
                          className="border-b outline-none Booking_input__IsuIi text-base text-neutral-100 pb-1 w-full"
                          type="email"
                          name="email"
                          required
                          defaultValue
                          style={{ borderColor: "rgb(230, 230, 230)" }}
                        />
                        <label className="absolute cursor-text w-full left-0 bottom-1 text-base text-neutral-300 h-6 transition-all duration-200 ease-in-out">
                          Email Address
                        </label>
                      </div>
                      <div className="relative h-12 flex items-end mt-4">
                        <input
                          className="border-b outline-none Booking_input__IsuIi text-base text-neutral-100 pb-1 w-full"
                          type="text"
                          name="phone"
                          required
                          defaultValue
                          style={{ borderColor: "rgb(230, 230, 230)" }}
                        />
                        <label className="absolute cursor-text w-full left-0 bottom-1 text-base text-neutral-300 h-6 transition-all duration-200 ease-in-out">
                          Phone Number
                        </label>
                      </div>
                      <div className="mt-6 py-1 flex items-center">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="offers"
                            className="opacity-0 absolute h-5 w-5"
                            defaultValue="Yes"
                          />
                          <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                            <svg
                              className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill="none" fillRule="evenodd">
                                <g
                                  transform="translate(-9 -11)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <label
                            htmlFor="offers"
                            className="select-none w-full flex items-center justify-between"
                          >
                            {" "}
                          </label>
                        </div>
                        <label className="text-xs leading-4 text-neutral-300">
                          Please send me travel deals and special offers
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-8">
                  <div className="flex justify-between items-start">
                    <div className="w-4/5 Booking_w_308__8rjbO">
                      <p className="text-sm font-semibold text-neutral-100">
                        Reservation Terms and Cancellation Policy
                      </p>
                      <p className="text-neutral-300 text-xs leading-4 mt-2">
                        For refundable hotels, cancellation deadline is 7 days
                        before check-in date. 50% will be chargeable as
                        cancellation fee. 7 days notice must be given for all
                        cancellation requests and amendment will only be
                        possible if same rooms are available and initial room
                        rates are still the same. For non-refundable hotels,
                        bookings are non-refundable/non-amendable once payment
                        is made, hence, no amendment or cancellation is
                        permitted.
                      </p>
                    </div>
                  </div>
                </div>
                <div />
              </div>
              <div className="lg:hidden">
                <div className="bg-white mt-10 lg:mt-16 px-6">
                  <div className="py-6 border-b border-neutral-400">
                    <h2 className="text-sm lg:text-2xl leading-none text-neutral-100 font-semibold">
                      basic shared dormitory, shared bathroom (8 bed female
                      dorm)
                    </h2>
                  </div>
                  <div className="space-y-6 py-6 pb-8 border-b border-neutral-400">
                    <div className="flex justify-between">
                      <p className="text-sm leading-none text-neutral-100">
                        Number of rooms
                      </p>
                      <p className="text-sm leading-none text-neutral-100 font-semibold">
                        1
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm leading-none text-neutral-100">
                        Maximum occupancy
                      </p>
                      <p className="text-sm leading-none text-neutral-100 font-semibold">
                        1
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-6 border-b border-neutral-400">
                    <div className="space-y-2.5">
                      <p className="text-sm leading-none text-neutral-300">
                        Check-In
                      </p>
                      <p className="text-sm leading-none text-black">
                        Jan 14 2023
                      </p>
                    </div>
                    <div className="space-y-2.5">
                      <p className="text-sm leading-none text-neutral-300">
                        Check-Out
                      </p>
                      <p className="text-sm leading-none text-black">
                        Jan 17 2023
                      </p>
                    </div>
                  </div>
                  <div className="py-6 border-b border-neutral-400">
                    <h4 className="text-sm leading-none text-neutral-100 font-semibold">
                      Hotel Base Fare
                    </h4>
                  </div>
                  <div className="space-y-6 py-6 border-b border-neutral-400">
                    <div className="flex justify-between">
                      <p className="text-sm leading-none text-neutral-100">
                        1 Room x 3 nights
                      </p>
                      <p className="text-sm leading-none text-neutral-100">
                        ₦47,817
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm leading-none text-neutral-100">
                        Discount
                      </p>
                      <p className="text-sm leading-none text-neutral-100">
                        ₦0
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm leading-none text-neutral-100">
                        Total Fare
                      </p>
                      <p className="text-sm leading-none text-neutral-100">
                        ₦47,817
                      </p>
                    </div>
                  </div>
                  <div className="py-6">
                    <div className="flex justify-between">
                      <p className="text-xl leading-none text-neutral-100 font-bold">
                        Total:
                      </p>
                      <p className="text-xl leading-none text-neutral-100 font-bold">
                        ₦47,817
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:pr-40 mt-14 mb-20">
                <div className="p-2 flex">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="n1"
                      className="opacity-0 absolute h-5 w-5"
                      defaultValue={1}
                    />
                    <div className="bg-white border-2 border-gray-500 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-blue-500">
                      <svg
                        className="fill-current hidden w-3 h-3 text-white pointer-events-none"
                        version="1.1"
                        viewBox="0 0 17 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <g
                            transform="translate(-9 -11)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          >
                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <label
                      htmlFor="n1"
                      className="select-none w-full flex items-center justify-between"
                    >
                      {" "}
                    </label>
                  </div>
                  <p className="text-xs leading-4 text-neutral-300">
                    By proceeding, I acknowledge that I have read and agree to
                    Travelbeta’s Flight booking{" "}
                    <a className="font-semibold text-prim-100" href="/terms">
                      terms &amp; conditions
                    </a>
                  </p>
                </div>
                <div className="mt-6 flex space-x-6">
                  <button className="px-6 py-4 text-base leading-none border border-neutral-100 rounded font-bold">
                    Back
                  </button>
                  <button className="px-6 py-4 text-base leading-none rounded bg-neutral-400 font-bold flex items-center space-x-4">
                    <span>Continue</span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 w-full">
          <div
            className="flex w-full items-center h-32 bg-white"
            style={{
              boxShadow: "rgba(109, 109, 109, 0.14) 0px 14px 25px -8px",
            }}
          >
            <div className="w-2/5">
              <img
                src="https://res.cloudinary.com/diapyzzws/image/upload/v1640205275/Website%20Images/0bfdb948569ff4ec3fa7d33be114b870.jpg"
                className="h-32 w-full"
              />
            </div>
            <div className="w-3/5 py-6 px-4">
              <h3 className="text-sm leading-none text-neutral-100 font-semibold">
                Hostel 639
              </h3>
              <div className="mt-1.5 flex items-center">
                <span className="text-xs text-neutral-200 font-semibold leading-none">
                  4.2
                </span>
                <span className="ml-1.5 text-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 20 20"
                    className="text-cta"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span className="text-xs leading-none text-prim-default ml-3">
                  (1)
                </span>
              </div>
              <div className="mt-4 flex items-center">
                <span className="text-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    className="text-neutral-200"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span className="Booking_text_9l__r7JTg leading-3 text-neutral-200 ml-1.5">
                  639 Harrow Road ; Kensal Green
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 lg:mt-16 px-6">
            <div className="py-6 border-b border-neutral-400">
              <h2 className="text-sm lg:text-2xl leading-none text-neutral-100 font-semibold">
                basic shared dormitory, shared bathroom (8 bed female dorm)
              </h2>
            </div>
            <div className="space-y-6 py-6 pb-8 border-b border-neutral-400">
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Number of rooms
                </p>
                <p className="text-sm leading-none text-neutral-100 font-semibold">
                  1
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Maximum occupancy
                </p>
                <p className="text-sm leading-none text-neutral-100 font-semibold">
                  1
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center py-6 border-b border-neutral-400">
              <div className="space-y-2.5">
                <p className="text-sm leading-none text-neutral-300">
                  Check-In
                </p>
                <p className="text-sm leading-none text-black">Jan 14 2023</p>
              </div>
              <div className="space-y-2.5">
                <p className="text-sm leading-none text-neutral-300">
                  Check-Out
                </p>
                <p className="text-sm leading-none text-black">Jan 17 2023</p>
              </div>
            </div>
            <div className="py-6 border-b border-neutral-400">
              <h4 className="text-sm leading-none text-neutral-100 font-semibold">
                Hotel Base Fare
              </h4>
            </div>
            <div className="space-y-6 py-6 border-b border-neutral-400">
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  1 Room x 3 nights
                </p>
                <p className="text-sm leading-none text-neutral-100">₦47,817</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Discount
                </p>
                <p className="text-sm leading-none text-neutral-100">₦0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm leading-none text-neutral-100">
                  Total Fare
                </p>
                <p className="text-sm leading-none text-neutral-100">₦47,817</p>
              </div>
            </div>
            <div className="py-6">
              <div className="flex justify-between">
                <p className="text-xl leading-none text-neutral-100 font-bold">
                  Total:
                </p>
                <p className="text-xl leading-none text-neutral-100 font-bold">
                  ₦47,817
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
