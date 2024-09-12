"use client";
import React from "react";
import { Form } from "../component/FormField/FormField";
import { addNavLink, editNavLink } from "@/actions/contactAction";
import toast, { Toaster } from "react-hot-toast";

const NavForm = ({ initialValue, handleClose }) => {
  const onFormSubmit = async (data) => {
    try {
      if (!initialValue) {
        const response = await addNavLink(data);
        if (response.error) return toast.error(response.error);
        toast.success("Link added successfully");
        handleClose();
      } else {
        const response = await editNavLink(data);
        toast.success("this is test");
        if (response.error) return toast.error(response.error);
        toast.success("Link updated successfully");
        handleClose();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Form
        fields={fields}
        initialValue={initialValue}
        onSubmit={onFormSubmit}
      />
      <Toaster />
    </>
  );
};

export default NavForm;
export const fields = [
  {
    name: "navName",
    labelText: "Link Name",
    placeholder: "Enter the Link Name",
    type: "text",
    validationOptions: {
      required: "Please enter the Link Name",
    },
  },

  // Add more fields as needed
];
