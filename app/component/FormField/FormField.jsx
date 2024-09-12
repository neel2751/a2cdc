import React, { useState, useId, useEffect } from "react";
import UseFormFields from "@/app/lib/useFormField";
import { filterProps } from "framer-motion";
import { useSelector } from "react-redux";
import { Controller, useController } from "react-hook-form";

export const TextFormInput = React.forwardRef(function TextFormInput(
  {
    labelText,
    cls,
    type,
    placeholder,
    value,
    disabled,
    errorMsg,
    inputMode,
    helperText,
    ...prop
  },
  ref
) {
  return (
    <div>
      {labelText && (
        <label
          htmlFor={labelText}
          className="inline-block text-sm font-medium mb-1 ms-1 text-neutral-700"
        >
          {labelText}
        </label>
      )}
      <div className="flex flex-col">
        <input
          {...prop}
          // id={formid}
          id={labelText}
          ref={ref}
          type={type}
          className={`py-3 px-4 block w-full border text-neutral-800 border-gray-200 rounded-lg text-sm focus:ring-cyan-600 focus:ring-2 disabled:opacity-50 disabled:pointer-events-none outline-none
          ${cls}`}
          placeholder={placeholder}
          value={value && value}
          autoComplete="off"
          inputMode={inputMode}
          disabled={disabled}
        />
        <p className="mt-1.5 text-[12px] text-stone-500">{helperText}</p>
        {errorMsg && (
          <p className="text-red-600 text-sm mt-1 ml-2" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  );
});
export const Textarea = React.forwardRef(function TextArea(
  { rows = 6, labelText, helperText, placeholder, errorMsg, ...props },
  ref
) {
  return (
    <>
      {labelText && (
        <label
          htmlFor={labelText}
          className="inline-block text-sm font-medium mb-1 ms-1 text-neutral-700"
        >
          {labelText}
        </label>
      )}
      <div className="flex flex-col">
        <textarea
          id={labelText}
          ref={ref}
          {...props}
          className="py-3 px-4 block w-full border text-black border-gray-300 rounded-lg text-sm focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none"
          rows={rows}
          placeholder={placeholder}
          aria-describedby="hs-textarea-helper-text"
        />
        <p className="text-xs text-gray-500 mt-2" id="hs-textarea-helper-text">
          {helperText}
        </p>
        {errorMsg && (
          <p className="text-red-600 text-sm mt-1 ml-2" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </>
  );
});
export const Select = React.forwardRef(function Select(
  { label, cls, options, errorMsg, placeholder, currentValue, ...props },
  ref
) {
  const id = useId();
  return (
    <React.Fragment>
      {label && (
        <label
          htmlFor={id}
          className="inline-block text-sm font-medium text-gray-800 mb-2"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col">
        <select
          aria-invalid={false} /* Change to true if invalid */
          {...props}
          ref={ref}
          id={id}
          defaultValue={currentValue}
          className={`py-3 px-4 w-full border border-gray-200 hover:cursor-pointer text-black rounded-lg text-sm placeholder:text-transparent focus:border-cyan-500 focus:ring-cyan-500 disabled:opacity-50 disabled:pointer-events-none ${cls}`}
        >
          {!currentValue && (
            <option value="" hidden>
              {placeholder || "Please Select Type"}
            </option>
          )}
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errorMsg && (
          <p className="text-red-600 text-sm mt-1 ml-2" role="alert">
            {errorMsg}
          </p>
        )}
      </div>
    </React.Fragment>
  );
});

export const ImageHandle = React.forwardRef(function ImageHandle(
  { cls, control, setValue, value, name, ...prop },
  ref
) {
  const [preview, setPreview] = useState("");
  // Update the preview when the value changes
  useEffect(() => {
    if (value instanceof FileList && value.length > 0) {
      // Create an object URL for the first file in the FileList
      const file = value[0];
      const fileURL = URL.createObjectURL(file);
      setPreview(fileURL);
    } else if (typeof value === "string" && value) {
      // If value is a URL string, use it for the preview
      const imageUrl = value.startsWith("/") ? value : `/${value}`;
      setPreview(imageUrl); // Assuming the value is a relative path
      setValue(name, imageUrl, { shouldValidate: true });
    } else {
      // Fallback to a default image if there's no valid value
      setPreview("/images/CDC_Logo.svg");
    }
  }, [value]);

  // Handle image selection and preview update
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue(name, e.target.files, { shouldValidate: true });

    // Create a preview for the newly selected file
    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);
    // Update the input value to pass the file to the parent component if needed
    // if (prop.onChange) {
    //   prop.onChange(e); // Let the parent handle the new file
    // }
  };

  return (
    <>
      <div
        className={`${cls} max-w-max cursor-pointer border rounded-full relative`}
      >
        <label htmlFor="img">
          <img
            src={preview}
            className="size-20 rounded-full"
            alt="Preview Image"
          />
        </label>
        <input
          ref={ref}
          id="img"
          {...prop}
          type="file"
          name={name}
          accept="image/*"
          className="sr-only"
          onChange={handleImageChange}
        />
      </div>
    </>
  );
});

export const Form = ({ fields, initialValue, onSubmit }) => {
  const { handleSubmit, fieldProps, errors, control, getValues, setValue } =
    UseFormFields(fields, initialValue);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
        <div className="grid-cols-2 grid gap-3">
          {fields.map((item, i, fields) => (
            <div
              key={i}
              className={`${
                i === fields.length - 1
                  ? "col-span-2"
                  : `col-span-${item.size} md:col-span-${item.size} lg:col
                -span-${item.size} xl:col-span-${item.size}`
              }`}
            >
              {item.type === "textarea" && (
                <Textarea
                  {...fieldProps[item.name]}
                  cls={`${errors[item.name] ? "border-red-500" : ""}`}
                  rows={3}
                  helperText={item.helperText}
                  labelText={item.labelText}
                  placeholder={item.placeholder}
                  errorMsg={errors[item.name] && errors[item.name].message}
                />
              )}
              {item.formType === "image" && (
                <Controller
                  control={control}
                  name={item.name}
                  render={({ field }) => (
                    <ImageHandle
                      // control={control}
                      setValue={setValue}
                      value={getValues(item.name)}
                      // {...fieldProps[item.name]}
                      {...field}
                      name={item.name}
                      labelText={item.labelText}
                      type={item.type}
                      cls={`${errors[item.name] ? "border-rose-500" : ""}`}
                      placeholder={item.placeholder}
                      errorMsg={errors[item.name] && errors[item.name].message}
                    />
                  )}
                />
              )}
              {item.type === "select" && (
                <Select
                  cls={`${errors[item.name] ? "border-red-500" : ""}`}
                  {...fieldProps[item.name]}
                  options={item.options}
                  label={item.labelText}
                  errorMsg={errors[item.name] && errors[item.name].message}
                />
              )}
              {item.formType === "input" && (
                <TextFormInput
                  {...fieldProps[item.name]}
                  labelText={item.labelText}
                  type={item.type}
                  cls={`${errors[item.name] ? "border-rose-500" : ""}`}
                  placeholder={item.placeholder}
                  errorMsg={errors[item.name] && errors[item.name].message}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-x-2">
        <button
          type="submit"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};
