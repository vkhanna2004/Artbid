import React from "react";
import { Container, LogoutBtn, Feed, Profile, Trade } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
  ];

  const navItems2 = [
    {
      name: "Home",
      slug: "/",
      active: authStatus,
    },
    {
      name: "Feed",
      slug: "/feed",
      active: authStatus,
    },
    {
      name: "Trade",
      slug: "/trade",
      active: authStatus,
    },
    {
      name: "Profile",
      slug: "/profile",
      active: authStatus,
    },
  ];

  return (
    <header className="p-3 top-0 shadow bg-slate-100 sticky w-full">
      <Container>
        <nav className="flex">
          <div className="flex justify-center items-center rounded-xl">
            <Link to="/" className="flex justify-center items-center p-2">
              <h1 className="text-2xl font-bold pl-4 text-black">ARTBID</h1>
            </Link>
          </div>
          <ul className="flex ml-auto">
            {!authStatus
              ? navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className={`inline-block px-6 py-2 text-lg duration-200 font-medium rounded-full ${
                          currentPath === item.slug
                            ? "text-white bg-teal-500"
                            : "text-black hover:text-teal-700"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )
              : navItems2.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className={`inline-block px-6 py-2 text-lg duration-200 font-medium rounded-full ${
                          currentPath === item.slug
                            ? "text-white bg-teal-500"
                            : "text-black hover:text-teal-700"
                        }`}
                      >
                        {item.name}
                      </button>
                    </li>
                  ) : null
                )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
