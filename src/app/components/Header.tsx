import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Header() {
  return (
    <>
      <div className="bg-[#252B42]">
        <div className="max-w-[1400px] mx-auto px-[50px] text-white flex justify-between items-center h-[60px]">
          <div className="flex gap-[20px]">
            <div className="flex gap-[10px]">
              <i className="bi bi-telephone"></i>
              <p>(225) 555-0118</p>
            </div>

            <div className="flex gap-[10px]">
              <i className="bi bi-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex gap-[5px]">
            <p>Follow Us :</p>
            <div className="flex gap-[10px]">
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF]">
        <div className="max-w-[1400px] mx-auto px-[50px] flex gap-[70px] h-[60px] items-center">
          <div>
            <h1 className="font-bold text-[24px]">Bandage</h1>
          </div>
          <div className="flex justify-between w-[100%]">
            <div className="links flex gap-[15px] items-center">
              <Link href="/">Home</Link>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5px-3 py-2 ">
                    Shop
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 size-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="./Pricing-page/page"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Products
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="./Team/page"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        License
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
              <Link href="./About-us/page">About</Link>
              <Link href="/">Blog</Link>
              <Link href="./ContactUs/page">Contact</Link>
              <Link href="./Pricing-page/page">Pages</Link>
            </div>
            <div className="flex gap-[20px] text-[#23A6F0] items-center">
              <div className="font-bold">
                <Link href="./login/page">Login /</Link>
                <Link href="./register/page"> Register</Link>
              </div>
              <div className="flex gap-[10px]">
                <button>
                  <i className="bi bi-search"></i>
                </button>
                <button className="flex gap-[5px]">
                  <i className="bi bi-cart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
                <button className="flex gap-[5px]">
                  <i className="bi bi-heart"></i>
                  <p className="m-0 p-0 font-normal">1</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}