import React, { useState, useRef, useEffect } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import PhoneInput from "react-phone-number-input";

import { demand } from "utility/api";
import { callApi } from "utility/axios";
import { ErrorMsg } from "Pages/ContactUs";

import toast from "react-hot-toast";
import "react-phone-number-input/style.css";

const inputClass =
    "w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-border h-11 text-sm md:text-md md:text-[16px] appearance-none rounded-none bg-white";
  const inputErrorClass =
    "w-full px-3 py-2.5 border border-red-500 focus:outline-none focus:ring-1 focus:ring-border h-11 text-sm md:text-md md:text-[16px] appearance-none rounded-none";

const CustomPhoneInput = ({ field, form, ...props }) => {
  return (
    <PhoneInput
      {...field}
      {...props}
      defaultCountry="US"
      onChange={(value) => form.setFieldValue(field.name, value)}
      className={inputClass}
    />
  );
};

const AutoResizeTextarea = ({ field, form, ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [field.value]);

  return (
    <textarea
      {...field}
      {...props}
      ref={textareaRef}
      className="w-full px-3 py-2.5 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-border min-h-[130px] resize-none"
      onInput={(e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }}
    />
  );
};

const requiredString = (fieldName) =>
  Yup.string().required(`${fieldName} is required`);

const requiredNumber = (fieldName) =>
  Yup.number().required(`${fieldName} is required`).min(0, "Must be positive");

const OrderFormSchema = Yup.object().shape({
  shape: requiredString("Shape"),
  fromCarat: requiredNumber("From Carat"),
  toCarat: requiredNumber("To Carat"),
  fromColor: requiredString("From Color"),
  toColor: requiredString("To Color"),
  fromClarity: requiredString("From Clarity"),
  toClarity: requiredString("To Clarity"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobileNumber: requiredString("Mobile number"),
});

const CustomizationOrder = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e, setFieldValue) => {
    const selectedFile = e.target.files[0];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        e.target.value = null;
      } else {
        setFile(selectedFile);
        setFieldValue("file", selectedFile);
      }
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    if (file) formData.append("file", file);
    try {
      const [err, data] = await callApi({ ...demand, payload: formData });
      if (!err && data?.code === "OK") {
        toast.success(data?.message || "Request submitted successfully!");
        resetForm();
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
        setTimeout(() => (window.location.href = "/customization"), 2000);
      } else {
        toast.error(data?.message || "Request failed please try again!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white">
      <Formik
        initialValues={{
          shape: "",
          email: "",
          fromCarat: "",
          toCarat: "",
          fromColor: "",
          toColor: "",
          fromClarity: "",
          toClarity: "",
          fromLength: "",
          toLength: "",
          fromWidth: "",
          toWidth: "",
          fromHeight: "",
          toHeight: "",
          mobileNumber: "",
          fromFluo: "",
          toFluo: "",
          message: "",
          fromRatio: "",
          toRatio: "",
          fromRange: "",
          toRange: "",
          timeLimit: "",
        }}
        validationSchema={OrderFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldValue, isSubmitting }) => (
          <Form className="w-full">
            <div className="">
              {/* Shape Selection and File Upload */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="shape"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Select Shape *
                  </label>
                  <Field
                    as="select"
                    name="shape"
                    className={
                      errors.shape && touched.shape
                        ? inputErrorClass
                        : inputClass
                    }
                  >
                    {SHAPES.map((shape, index) => (
                      <option value={shape[0]} key={index}>
                        {shape[1]}
                      </option>
                    ))}
                  </Field>
                  <ErrorMsg name="shape" />
                </div>

                <div>
                  <label
                    htmlFor="file"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Upload file / image
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    ref={fileInputRef}
                    onChange={(e) => handleFileChange(e, setFieldValue)}
                    className={`h-[auto!important] ${inputClass} cursor-pointer file:mr-4 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100`}
                    accept=".png, .jpg, .jpeg, .pdf, image/*, application/pdf"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Only Image / PDF is Acceptable *
                  </p>
                </div>
              </div>

              {/* Carat and Color */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="fromCarat"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Carat *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        type="number"
                        name="fromCarat"
                        placeholder="From Carat"
                        min="0"
                        className={
                          errors.fromCarat && touched.fromCarat
                            ? inputErrorClass
                            : inputClass
                        }
                      />
                      <ErrorMsg name="fromCarat" />
                    </div>
                    <div>
                      <Field
                        type="number"
                        name="toCarat"
                        placeholder="To Carat"
                        min="0"
                        className={
                          errors.toCarat && touched.toCarat
                            ? inputErrorClass
                            : inputClass
                        }
                      />
                      <ErrorMsg name="toCarat" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fromColor"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Color *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        as="select"
                        name="fromColor"
                        className={
                          errors.fromColor && touched.fromColor
                            ? inputErrorClass
                            : inputClass
                        }
                      >
                        {COLORS_FROM.map((color, index) => (
                          <option value={color[0]} key={index}>
                            {color[1]}
                          </option>
                        ))}
                      </Field>
                      <ErrorMsg name="fromColor" />
                    </div>
                    <div>
                      <Field
                        as="select"
                        name="toColor"
                        className={
                          errors.toColor && touched.toColor
                            ? inputErrorClass
                            : inputClass
                        }
                      >
                        {COLORS_TO.map((color, index) => (
                          <option value={color[0]} key={index}>
                            {color[1]}
                          </option>
                        ))}
                      </Field>
                      <ErrorMsg name="toColor" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Clarity and Length */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="fromClarity"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Clarity *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Field
                        as="select"
                        name="fromClarity"
                        className={
                          errors.fromClarity && touched.fromClarity
                            ? inputErrorClass
                            : inputClass
                        }
                      >
                        {CLARITIES_FROM.map((clarity, index) => (
                          <option value={clarity[0]} key={index}>
                            {clarity[1]}
                          </option>
                        ))}
                      </Field>
                      <ErrorMsg name="fromClarity" />
                    </div>
                    <div>
                      <Field
                        as="select"
                        name="toClarity"
                        className={
                          errors.toClarity && touched.toClarity
                            ? inputErrorClass
                            : inputClass
                        }
                      >
                        {CLARITIES_TO.map((clarity, index) => (
                          <option value={clarity[0]} key={index}>
                            {clarity[1]}
                          </option>
                        ))}
                      </Field>
                      <ErrorMsg name="toClarity" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fromLength"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Length
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      type="number"
                      name="fromLength"
                      placeholder="From Length"
                      min="0"
                      className={inputClass}
                    />
                    <Field
                      type="number"
                      name="toLength"
                      placeholder="To Length"
                      min="0"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Width and Height */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="fromWidth"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Width
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      type="number"
                      name="fromWidth"
                      placeholder="From Width"
                      min="0"
                      className={inputClass}
                    />
                    <Field
                      type="number"
                      name="toWidth"
                      placeholder="To Width"
                      min="0"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fromHeight"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Height
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      type="number"
                      name="fromHeight"
                      placeholder="From Height"
                      min="0"
                      className={inputClass}
                    />
                    <Field
                      type="number"
                      name="toHeight"
                      placeholder="To Height"
                      min="0"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Ratio and Fluorescence */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="fromRatio"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Ratio
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      type="number"
                      name="fromRatio"
                      placeholder="From Ratio"
                      min="0"
                      className={inputClass}
                    />
                    <Field
                      type="number"
                      name="toRatio"
                      placeholder="To Ratio"
                      min="0"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="fromFluo"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Fluorescence
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field as="select" name="fromFluo" className={inputClass}>
                      {FLS_FROM.map((fl, index) => (
                        <option value={fl[0]} key={index}>
                          {fl[1]}
                        </option>
                      ))}
                    </Field>
                    <Field as="select" name="toFluo" className={inputClass}>
                      {FLS_TO.map((fl, index) => (
                        <option value={fl[0]} key={index}>
                          {fl[1]}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Budget Range and Time Limit */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                <div>
                  <label
                    htmlFor="fromRange"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Budget Range
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <Field
                      type="number"
                      name="fromRange"
                      placeholder="From Range"
                      min="0"
                      className={inputClass}
                    />
                    <Field
                      type="number"
                      name="toRange"
                      placeholder="To Range"
                      min="0"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="timeLimit"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Time Limit
                  </label>
                  <Field
                    type="number"
                    name="timeLimit"
                    placeholder="In How Many Days You Need"
                    min="1"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:gap-6 gap-2 md:grid-cols-2">
                <div>
                  <div className="mb-3">
                    <label
                      htmlFor="mobileNumber"
                      className="block mb-1 text-md font-medium text-gray-700"
                    >
                      Mobile No *
                    </label>
                    <Field
                      name="mobileNumber"
                      component={CustomPhoneInput}
                      className={
                        errors.mobileNumber && touched.mobileNumber
                          ? inputErrorClass
                          : inputClass
                      }
                    />
                    <ErrorMsg name="mobileNumber" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-md font-medium text-gray-700"
                    >
                      Email ID *
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={
                        errors.email && touched.email
                          ? inputErrorClass
                          : inputClass
                      }
                    />
                    <ErrorMsg name="email" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-md font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <Field
                    name="message"
                    component={AutoResizeTextarea}
                    placeholder="Write Your Message"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    We Provide Only Loose Diamonds *
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4 bg-gray-100">
              <button
                className={`bg-primary text-white px-4 p-2 rounded-md sm:w-36 w-full flex items-center justify-center uppercase ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-2 text-offwhite animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomizationOrder;

// Data constants
const COLORS_FROM = [
  ["", "From Color"],
  ["D", "D"],
  ["E", "E"],
  ["F", "F"],
  ["G", "G"],
  ["H", "H"],
  ["I", "I"],
  ["J", "J"],
  ["K", "K"],
  ["L", "L"],
  ["M", "M"],
  ["N", "N"],
  ["O-P", "O-P"],
  ["Q-R", "Q-R"],
  ["S-T", "S-T"],
  ["U-V", "U-V"],
  ["W-X", "W-X"],
  ["Y-Z", "Y-Z"],
  ["FANCY", "FANCY"],
  ["L-FANCY", "L-FANCY"],
  ["I-FANCY", "I-FANCY"],
  ["D-FANCY", "D-FANCY"],
  ["V-FANCY", "V-FANCY"],
  ["LB", "LB"],
];

const COLORS_TO = [
  ["", "To Color"],
  ["D", "D"],
  ["E", "E"],
  ["F", "F"],
  ["G", "G"],
  ["H", "H"],
  ["I", "I"],
  ["J", "J"],
  ["K", "K"],
  ["L", "L"],
  ["M", "M"],
  ["N", "N"],
  ["O-P", "O-P"],
  ["Q-R", "Q-R"],
  ["S-T", "S-T"],
  ["U-V", "U-V"],
  ["W-X", "W-X"],
  ["Y-Z", "Y-Z"],
  ["FANCY", "FANCY"],
  ["L-FANCY", "L-FANCY"],
  ["I-FANCY", "I-FANCY"],
  ["D-FANCY", "D-FANCY"],
  ["V-FANCY", "V-FANCY"],
  ["LB", "LB"],
];

const CLARITIES_FROM = [
  ["", "From Clarity"],
  ["FL", "FL"],
  ["IF", "IF"],
  ["VVS1", "VVS1"],
  ["VVS2", "VVS2"],
  ["VS1", "VS1"],
  ["VS2", "VS2"],
  ["SI1", "SI1"],
  ["SI2", "SI2"],
  ["SI3", "SI3"],
  ["I1", "I1"],
  ["I2", "I2"],
  ["I3", "I3"],
  ["I4", "I4"],
];

const CLARITIES_TO = [
  ["", "To Clarity"],
  ["FL", "FL"],
  ["IF", "IF"],
  ["VVS1", "VVS1"],
  ["VVS2", "VVS2"],
  ["VS1", "VS1"],
  ["VS2", "VS2"],
  ["SI1", "SI1"],
  ["SI2", "SI2"],
  ["SI3", "SI3"],
  ["I1", "I1"],
  ["I2", "I2"],
  ["I3", "I3"],
  ["I4", "I4"],
];

const FLS_FROM = [
  ["", "From Fluorescence"],
  ["NONE", "NONE"],
  ["FAINT", "FAINT"],
  ["MEDIUM", "MEDIUM"],
  ["STRONG", "STRONG"],
  ["VERY STG", "VERY STG"],
];

const FLS_TO = [
  ["", "To Fluorescence"],
  ["NONE", "NONE"],
  ["FAINT", "FAINT"],
  ["MEDIUM", "MEDIUM"],
  ["STRONG", "STRONG"],
  ["VERY STG", "VERY STG"],
];

const SHAPES = [
  ["", "Select Shape"],
  ["round", "Round"],
  ["pear", "Pear"],
  ["oval", "Oval"],
  ["heart", "Heart"],
  ["marquise", "Marquise"],
  ["princess", "Princess"],
  ["emerald", "Emerald"],
  ["radiant", "Radiant"],
  ["triangle", "Triangle"],
  ["kite", "Kite"],
  ["hexagon", "Hexagon"],
  ["cushion", "Cushion"],
  ["baguette", "Baguette"],
  ["bullet", "Bullet"],
  ["oldMiner", "Old Miner"],
  ["oldEuropean", "Old European"],
  ["other", "Other"],
];
