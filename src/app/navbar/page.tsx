'use client'

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';  // Import icons
import Topnav from '../topnav/page';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="">
          <Topnav />
            <div className="container px-6 py-3 mx-auto md:flex">
                 
                {/* Mobile menu button */}
                <div className="flex lg:hidden bg-white">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                        aria-label="toggle menu"
                    >
                        {!isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            
            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
                    isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                }`}
            ><h1 className='inline-flex text-3xl pl-10 font-bold'>SHOP.CO</h1>
                <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0 text-black bg-white">
                    
                    <Link
                        href="/about"
                        className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-black hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                About <ChevronDownIcon className="w-5 h-5 inline-flex" />
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </Link>
                    <Link
                        href="#"
                        className="px-2.5 py-2 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
                    >
                        Shop
                    </Link>
                    <Link
                        href="#"
                        className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-black hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
                    >
                        Contact
                    </Link>
                    <Link
                        href="#"
                        className="px-2.5 py-2 transition-colors duration-300 transform rounded-lg text-black hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
                    >
                        Contact
                    </Link>
                </div>

                <div className="relative mt-4 md:mt-0 mr-14">
                    <input
                        type="text"
                        className=" rounded-3xl w-[577px] py-2 pl-10 pr-4 text-black bg-white border focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orange-500"
                        placeholder="Search for Product"
                        style={{ height: '48px' }}
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <CiSearch className='w-6 h-6 text-black' />
                    </span>
                </div>

                {/* Icons on the right */}
                <div className="flex items-center space-x-6">
                    <Link href="#" className="text-black hover:text-gray-600">
                        <FaShoppingCart className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-black hover:text-gray-600">
                        <FaUserAlt className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
