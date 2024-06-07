"use client";

import Link from "next/link";
export default function Navbar({ children }: any) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">
            NoLogo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">home page</Link>
            </li>
            <li>
              <Link href="/products">products</Link>
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
