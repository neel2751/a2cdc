"use client";
import { getNavLink } from "@/actions/contactAction";
import React, { useCallback, useEffect, useState } from "react";
import NavForm from "../NavForm";
import toast, { Toaster } from "react-hot-toast";

const NavTable = () => {
  const [navLink, setNavLink] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [initialValue, setIsInitialValue] = useState(null);
  const fetchNavLink = useCallback(async () => {
    try {
      const response = await getNavLink();
      if (response.status === 500) {
        return toast.error(response.message);
      }
      setIsInitialValue(null);
      setNavLink(response);
    } catch (error) {
      toast.error("Somthing went wrong");
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsInitialValue(null);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsInitialValue(null);
    setIsOpen(false);
    fetchNavLink();
  };

  const handleEdit = (link) => {
    setIsOpen(true);
    setIsInitialValue(link);
  };

  useEffect(() => {
    fetchNavLink();
  }, []);

  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden  ">
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    Navigation
                  </h2>
                  <p className="text-sm text-gray-600 ">
                    Add links, edit and more.
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50     "
                      href="#"
                    >
                      View all
                    </a>

                    <button
                      onClick={handleOpen}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      type="button"
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add link
                    </button>
                  </div>
                </div>
              </div>
              <NavNewTable navLink={navLink} handleEdit={handleEdit} />
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                <div>
                  <p className="text-sm text-gray-600 ">
                    <span className="font-semibold text-gray-800 ">
                      {navLink?.length}
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50     "
                    >
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50     "
                    >
                      Next
                      <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        initialValue={initialValue}
        handleClose={handleClose}
      />
      <Toaster />
    </div>
  );
};

export default NavTable;

const Table = ({ isOpen, initialValue, handleClose }) => {
  return (
    <>
      <div
        id="hs-modal-upgrade-to-pro"
        className={`${
          isOpen ? "block bg-black/50" : "hidden bg-transparent"
        } size-full fixed start-0 top-0 z-[80] overflow-x-hidden overflow-y-auto`}
      >
        <div
          className={`${
            isOpen ? "mt-52 opacity-100 duration-500" : "mt-0 opacity-0"
          } ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto relative`}
        >
          <div className="absolute top-2 end-2">
            <button
              onClick={() => handleClose()}
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="sr-only">Close</span>
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm pointer-events-auto">
            <div className="p-4 sm:p-7">
              <div>
                <div className="text-center">
                  <h3
                    id="hs-modal-upgrade-to-pro-label"
                    className="block text-xl sm:text-2xl font-semibold"
                  >
                    Add Navigation Link
                  </h3>
                  <div className="max-w-sm mx-auto">
                    <p className="mt-2 text-sm text-gray-600">
                      Add a new navigation link to your website.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <NavForm
                    initialValue={initialValue}
                    handleClose={handleClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavNewTable = ({ navLink, handleEdit }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-gray-50 ">
        <tr>
          {["id", "name", "link", "isactive", "date", "actions"].map(
            (item, i) => (
              <th key={i} scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                    {item}
                  </span>
                </div>
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 ">
        {navLink &&
          navLink?.map((item, i) => (
            <tr>
              <td className="size-px whitespace-nowrap px-6 py-3">
                <button
                  type="button"
                  className="flex items-center gap-x-2 text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={`${
                      item.navName.toLowerCase() === "dashboard"
                        ? "black"
                        : "none"
                    }`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-sm text-gray-800"> {i + 1}</span>
                </button>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className="ps-6 lg:ps-3 pe-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <div className="grow">
                      <span className="block text-sm font-semibold text-gray-800 ">
                        {item.navName}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="block text-sm font-semibold text-gray-800 ">
                    /{item.navLink}
                  </span>
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                  {item.isActive === 1 ? (
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full  ">
                      <svg
                        className="size-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                      Active
                    </span>
                  ) : (
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full  ">
                      <svg
                        className="size-2.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                      Inactive
                    </span>
                  )}
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="text-sm text-gray-500 ">
                    {item.created_at.toLocaleDateString("en-GB", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </td>

              {item.navName.toLowerCase() === "dashboard" ? (
                ""
              ) : (
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5 gap-2 flex divide-x divide-neutral-400 items-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium "
                    >
                      Edit
                    </button>
                    <button className="inline-flex items-center gap-x-1 text-sm text-rose-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium px-1.5">
                      Delete
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
