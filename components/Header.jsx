"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { logOutUser } from "../actions/logOutUser";

const Header = () => {
  const session = useSession();

  const logOut = async () => {
    await logOutUser();
    signOut({ callbackUrl: "/" });
  };

  return (
    <header className=" bg-primaryOrange px-10 sticky top-0 flex items-center justify-between text-primaryGrey z-20">
      <Link href="/" className="flex items-center gap-2.5 text-extrabold text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
          />
        </svg>
        Tickets
      </Link>

      <div className="flex gap-5 items-center">
        {session?.data != null ? (
          <>
            <Link href="/" onClick={logOut}>
              Log Out
            </Link>
            <Link href="/profile" aria-label="profile" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hover:text-secondaryBlack"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className=" text-bold text-lg cursor-pointer hover:text-secondaryBlack"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className=" text-bold text-lg cursor-pointer hover:text-secondaryBlack"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
