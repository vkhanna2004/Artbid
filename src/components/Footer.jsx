import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10  border border-t-2 bg-slate-100 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4 ">
        <div className="-m-4 flex flex-wrap">
          <div className="w-full p-4 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Profile
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Licensing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    to="/"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-black border-0 rounded my-4" />
      <div className="text-center">
        <p className="text-sm text-black">
          &copy; Developed by Vishakha Khanna and Jatin Newar.
        </p>
      </div>
    </section>
  );
}

export default Footer;
