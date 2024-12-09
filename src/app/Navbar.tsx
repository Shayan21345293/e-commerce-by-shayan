'use client'
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#FBEBB5]">
      {/* Navbar Container */}
      <div className="container mx-auto px-4 md:px-10 h-[100px] flex items-center justify-between">
        
        {/* Centered Links - Desktop */}
        <nav className="hidden md:flex space-x-10 items-center mx-auto">
          <Link href="/" className="text-black font-medium text-lg hover:underline">
            Home
          </Link>
          <Link href="/shop" className="text-black font-medium text-lg hover:underline">
            Shop
          </Link>
          <Link href="/about" className="text-black font-medium text-lg hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-black font-medium text-lg hover:underline">
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {menuOpen ? (
              <Image
                src="/close.png" // Close icon for the menu
                alt="Close Menu"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/menus.png" // Hamburger icon for the menu
                alt="Open Menu"
                width={30}
                height={30}
              />
            )}
          </button>
        </div>

        {/* Right-aligned Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/account">
            <Image src="/user.png" alt="User Profile" height={24} width={24} />
          </Link>
          <Link href="/blogs">
            <Image src="/mg.png" alt="Messages" height={24} width={24} />
          </Link>
          <Link href="/checkout">
            <Image src="/love.png" alt="Favorites" height={24} width={24} />
          </Link>
          <Link href="/cart">
            <Image src="/sc.png" alt="Shopping Cart" height={24} width={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FBEBB5] py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-black font-medium text-lg">
              Home
            </Link>
            <Link href="/shop" className="text-black font-medium text-lg">
              Shop
            </Link>
            <Link href="/about" className="text-black font-medium text-lg">
              About
            </Link>
            <Link href="/contact" className="text-black font-medium text-lg">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center items-center space-x-6 mt-4">
            <Link href="/account">
              <Image src="/user.png" alt="User Profile" height={24} width={24} />
            </Link>
            <Link href="/blogs">
              <Image src="/mg.png" alt="Messages" height={24} width={24} />
            </Link>
            <Link href="/checkout">
              <Image src="/love.png" alt="Favorites" height={24} width={24} />
            </Link>
            <Link href="/cart">
              <Image src="/sc.png" alt="Shopping Cart" height={24} width={24} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
