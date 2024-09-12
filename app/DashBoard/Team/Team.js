"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Form } from "@/app/component/FormField/FormField";
import {
  addTeam,
  deleteTeamData,
  updateTeam,
  updateTeamStatus,
} from "@/actions/teamAction";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminTeamData,
  setEditItem,
  setReset,
} from "@/app/Store/slices/team";
import Image from "next/image";
export const fields = [
  {
    name: "image",
    labelText: "Image",
    placeholder: "Upload Image",
    type: "file",
    size: 2,
    // size: true,
    formType: "image",
    validationOptions: {
      required: "Please upload the image",
    },
  },
  {
    name: "firstName",
    labelText: "First Name",
    placeholder: "Jhon",
    type: "text",
    formType: "input",
    validationOptions: {
      required: "Please enter the first name",
    },
  },
  {
    name: "lastName",
    labelText: "Last Name",
    placeholder: "Doe",
    type: "text",
    formType: "input",
    validationOptions: {
      required: "Please enter the last name",
    },
  },
  {
    name: "designation",
    labelText: "Designation",
    placeholder: "Web Designer",
    type: "text",
    formType: "input",
    validationOptions: {
      required: "Please enter the Designation",
    },
  },
  {
    name: "department",
    labelText: "Department",
    placeholder: "LeaderShip",
    type: "select",
    options: [
      "LeaderShip",
      "Architectural",
      "Project Management",
      "Interior",
      "Office Admin",
      "Business & Marketing",
      "Electric",
    ],
    validationOptions: {
      required: "Please select the Department",
    },
  },

  {
    name: "bio",
    labelText: "Bio",
    // size: 2,
    placeholder: "tell me about the current team member",
    type: "textarea",
  },
  // Add more fields as needed
];
const Team = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSelector((state) => state.getTeams);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    dispatch(fetchAdminTeamData());
  };
  const handleStatus = async (item, type) => {
    // we have to add alert to ok or cancel
    const confirm = window.confirm(
      `Are you sure you want to ${
        type === "Delete" ? "Delete" : "Update Status"
      } ${item.firstName} team member?`
    );
    if (confirm) {
      if (type === "Status") {
        const response = await updateTeamStatus(item);
        if (response.status === 200) {
          toast.success("Status Changed");
          dispatch(fetchAdminTeamData());
        }
      } else {
        const response = await deleteTeamData(item);
        if (response.status === 200) {
          toast.success("Team Member Deleted");
          dispatch(fetchAdminTeamData());
        }
      }
    }
  };
  const initialValue = useSelector((state) => state.getTeams.currentEditItem);
  const handleEdit = (item) => {
    setIsOpen(true);
    dispatch(setEditItem(item));
  };
  useEffect(() => {
    dispatch(fetchAdminTeamData());
  }, [dispatch, initialValue]);

  return (
    <>
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden  ">
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 ">
                      Website Team
                    </h2>
                    <p className="text-sm text-gray-600 ">
                      Add Team Memeber, edit and more.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={handleOpen}
                      className="py-2 h-9 px-3 inline-flex flex-shrink-0 items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
                      Add Team Member
                    </button>
                  </div>
                </div>
                <Table
                  navLink={data}
                  handleEdit={handleEdit}
                  handleStatus={handleStatus}
                />
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">
                  <div>
                    <p className="text-sm text-gray-600 ">
                      <span className="font-semibold text-gray-800 ">
                        {data?.length || 0}
                      </span>{" "}
                      results
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
      <TeamForm
        fields={fields}
        isOpen={isOpen}
        handleClose={handleClose}
        initialValue={initialValue}
      />
    </>
  );
};

export default Team;

const Table = ({ navLink, handleEdit, handleStatus }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="bg-gray-50 ">
        <tr>
          {[
            "id",
            "name",
            "image",
            "Designaiton",
            "department",
            "isactive",
            "date",
            "actions",
          ].map((item, i) => (
            <th key={i} scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                  {item}
                </span>
              </div>
            </th>
          ))}
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
                    fill="none"
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
                      <span className="block text-sm font-bold text-gray-800 truncate">
                        {item.firstName + " " + item.lastName}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h-px w-72 whitespace-nowrap">
                <div className="px-6 py-3">
                  <span className="block text-sm font-semibold text-gray-800 ">
                    <Image
                      src={`/${item.image}`}
                      alt={item.firstName + item.lastName}
                      width={20}
                      height={20}
                      className="size-10 rounded-full"
                    />
                  </span>
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className="px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <div className="grow">
                      <span className="block text-sm font-bold text-gray-800 w-44 truncate">
                        {item.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className=" px-6 py-3">
                  <div className="flex items-center gap-x-3">
                    <div className="grow">
                      <span className="block text-sm font-extrabold text-gray-800 ">
                        {item.department}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div
                  onClick={() => handleStatus(item, "Status")}
                  className="px-6 py-3 cursor-pointer"
                >
                  {item.status === 1 ? (
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-bold bg-teal-100 text-teal-800 rounded-full  ">
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
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-bold bg-red-100 text-red-800 rounded-full  ">
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
                  <span className="text-sm text-gray-500 font-semibold">
                    {item.created_at.toLocaleDateString("en-GB", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </td>
              <td className="size-px whitespace-nowrap">
                <div className="px-6 py-1.5 gap-2 flex divide-x divide-neutral-400 items-center">
                  <button
                    onClick={() => handleEdit(item)}
                    className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleStatus(item, "Delete")}
                    className="inline-flex items-center gap-x-1 text-sm text-rose-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium px-1.5"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const TeamForm = ({ isOpen, fields, initialValue, handleClose }) => {
  const onSubmit = async (data) => {
    const fomdata = new FormData();
    fomdata.append("image", data.image[0]);
    // only plain object is allow to server we have to create a only plain object
    const plainObject = {
      fName: data.firstName,
      lName: data.lastName,
      designation: data.designation,
      department: data.department,
      bio: data.bio,
      image: fomdata,
    };
    if (initialValue) {
      const res = await updateTeam(plainObject, initialValue);
      if (res.status === 200) {
        handleClose();
        toast.success("Team member updated successfully");
      }
    } else {
      const response = await addTeam(plainObject);
      if (response.status === 200) {
        handleClose();
        toast.success("Team Member Added Successfully");
      } else {
        toast.error("Failed to Add Team Member");
      }
    }
  };
  return (
    <div
      id="hs-modal-upgrade-to-pro"
      className={`${
        isOpen ? "block bg-black/50" : "hidden bg-transparent"
      } size-full fixed start-0 top-0 z-[80] overflow-x-hidden overflow-y-auto`}
    >
      <div
        className={`${
          isOpen ? "mt-10 opacity-100 duration-500" : "mt-0 opacity-0"
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
                  Add Team Memeber
                </h3>
                <div className="max-w-sm mx-auto">
                  <p className="mt-2 text-sm text-gray-600">
                    Add a new Team Member for website.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Form
                  onSubmit={onSubmit}
                  fields={fields}
                  initialValue={initialValue}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
