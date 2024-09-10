"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";

export default function Header() {
  const pathname = usePathname();

  const MenuItems = [
    {
      label: "Home",
      url: "/",
    },
    // {
    //   label: "Blog",
    //   url: "/blog",
    // },
  ];

  return (
    <header className="header bg-white">
      <div className="container">
        <div className="header__content flex justify-between items-center">
          <h2 className="text-primary">
            <Link href={"/"}>Arjun.</Link>
          </h2>
          <ul className="header__menu flex justify-end items-center gap-8">
            {MenuItems.map((item, index) => {
              return (
                <li key={item.label + index.toString()} className={item.url === pathname ? "active" : ""}>
                  <Link href={item.url}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
