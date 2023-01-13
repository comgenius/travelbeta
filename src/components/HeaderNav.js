import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
import { Img, Text, Button, Input, SelectBox, Grid, List } from "components";
const HeaderNav = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[11px] sm:p-[5px] md:p-[7px] shadow-bs1 w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1200px] md:ml-[75px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_travelbetalogo.png"
                  className="max-w-[100%] w-[13%]"
                  alt="travelbetalogo"
                />
                <div className=" hidden md_l:flex md_l:flex-row w-[55%] common-row-list">
                  <ul className="flex flex-row items-center justify-between">
                    <li>
                      <a href="#">Visa</a>
                    </li>
                    <li>
                      <a href="#">Vacation Packages</a>
                    </li>
                    <li>
                      <a href="#">Become an Affiliate</a>
                    </li>
                  </ul>

                  {/* <ul className="sm_l:flex sm_l:flex-row items-start justify-center">
                    <li className="mt-[1px] mb-[4px] ml-[128px] sm:ml-[68px] sm:my-[10px] md:ml-[88px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Visa
                      </a>
                    </li>
                    <li className="mt-[1px] ml-[32px] sm:ml-[17px] sm:my-[10px] md:ml-[22px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Vacation packages
                      </a>
                    </li>
                    <li className="mb-[4px] ml-[32px] mr-[128px] sm:mr-[68px] sm:ml-[17px] sm:my-[10px] md:mr-[88px] md:ml-[22px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-[16px] text-gray_900"
                        rel="noreferrer"
                      >
                        Become an affiliate
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="hidden md_l:flex md_l:flex-row items-center">
                  <Text
                    className="font-semibold text-gray_900 mr-2"
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
                {/* Hamburger Icon */}
                <div onClick={handleNav} className="md_l:hidden z-10">
                  <FaBars size={20} />
                </div>
                {/* Mobile Menu */}
                <div onClick={handleNav} className={nav ? 'overflow-y-hidden md_l:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                  <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                      <a href="#">Visa</a>
                    </li>
                    <li className='text-2xl py-8'>
                      <a href="#">Vacation Packages</a>
                    </li>
                    <li className='text-2xl py-8'>
                      <a href="#">Become an affiliate</a>
                    </li>
                    <li className='text-2xl py-8'>
                      <a href="#">Log in</a>
                    </li>
                    <li className='text-2xl py-8'>
                      <a href="#">Create an account</a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </header>
  )
}

export default HeaderNav