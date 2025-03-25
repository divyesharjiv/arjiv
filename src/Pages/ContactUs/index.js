import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { callApi } from "utility/axios";
import { contactUs } from "utility/api";
import { updateMetaTags } from "utility/utils";
import Button from "Components/Button";
import { ARJIV_INFO_EMAIL_URL, CALL_URL } from "Common";
import { Link } from "react-router-dom";

export const ErrorMsg = ({ name }) => (
  <ErrorMessage
    name={name}
    component="p"
    className="text-red-500 text-xs mt-1 tracking-wider font-[monospace]"
  />
);

const Contactus = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Contact Us - Get in Touch with Arjiv Exports",
      description:
        "Contact Arjiv Exports for inquiries about our diamond products and services.",
      keywords:
        "contact Arjiv Exports, diamond inquiries, customer support, diamond services",
      canonical: "https://www.arjivexports.com/contact_us",
    });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const request = {
      ...contactUs,
      payload: values,
    };

    await toast.promise(callApi(request), {
      loading: "Sending your message...",
      success: (data) => {
        resetForm();
        return data?.message || "Message sent successfully!";
      },
      error: "Failed to send the message. Please try again.",
    });
  };

  return (
    <section className="main-content bg-primary text-offwhite">
      <div className="container mx-auto py-12 max-w-[1140px]">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-left md:text-2xl text-lg pb-3 border-b-2  text-[#F5F5F5] uppercase w-full tracking-wider ">
              Contact Form
            </h2>

            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form className="space-y-3 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <label className="block font-medium mb-1">Name *</label>
                      <Field
                        type="text"
                        name="name"
                        className={`w-full px-3 py-2 border focus:outline-none text-primary text-md ${
                          errors.name && touched.name
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Full Name"
                      />
                      <ErrorMsg name="name" />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Email *</label>
                      <Field
                        type="email"
                        name="email"
                        className={`w-full px-3 py-2 border focus:outline-none text-primary text-md ${
                          errors.email && touched.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="your@email.com"
                      />
                      <ErrorMsg name="email" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Subject *</label>
                    <Field
                      type="text"
                      name="subject"
                      className={`w-full px-3 py-2 border focus:outline-none text-primary text-md ${
                        errors.subject && touched.subject
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Subject"
                    />
                    <ErrorMsg name="subject" />
                  </div>

                  <div>
                    <label className="block font-medium mb-1">Message *</label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="4"
                      className={`w-full px-3 py-2 border focus:outline-none text-primary text-md resize-none ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Write your message here"
                    />
                    <ErrorMsg name="message" />
                  </div>

                  <Button
                    outline
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 w-full"
                  >
                    {isSubmitting ? "Sending..." : "Send Your Message"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>

          <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
            <h2 className="text-left md:text-2xl text-lg pb-3 border-b-2 text-[#F5F5F5] uppercase w-full tracking-wider">
              Contact Info
            </h2>

            <div className="mt-4 space-y-6 text-gray-300">
              <div>
                <h3 className="uppercase sm:text-xl text-md mb-1">Email Us</h3>
                <p className="text-sm sm:text-md">
                  Email your issues and suggestions for the following <br />
                  Email Address:{" "}
                  <Link
                    to={ARJIV_INFO_EMAIL_URL}
                    className="underline text-blue-400"
                  >
                    info@arjiv.com
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="uppercase sm:text-xl text-md mb-1">Call Us</h3>
                <p className="text-sm sm:text-md">
                  From Monday to Friday, 10:00 AM - 8:00 PM, <br />
                  Call Us at:{" "}
                  <Link to={CALL_URL} className="underline text-blue-400">
                    +91 98983 00984
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="uppercase sm:text-xl text-md mb-1">
                  Head Office
                </h3>
                <p className="text-sm sm:text-md">
                  Address: CC-7085, Bharat Diamond Bourse, BKC, Bandra East,
                  Mumbai, Maharashtra, 400051 - INDIA.
                </p>
              </div>

              <div>
                <h3 className="uppercase sm:text-xl text-md mb-1">
                  Manufacturing Unit Office
                </h3>
                <p className="text-sm sm:text-md">
                  Address: CS NO 3074, Survey NO 412-1 Block NO. 1C, Opp
                  Reshamvala Reyon, Vastadevadi Road Katargam, Surat, Gujarat,
                  395004 - INDIA.
                </p>
              </div>

              <div>
                <h3 className="uppercase sm:text-xl text-md mb-1">
                  We Have Great Support
                </h3>
                <p className="text-sm sm:text-md">
                  We provide the best quality of products to you. We are always
                  here to help our lovely customers. We ship our products
                  anywhere with more security.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-7 gap-6 text-center mt-8 lg:px-0 px-4">
          <div>
            <h2 className="mb-2 uppercase lg:text-3xl text-2xl tracking-wide">
              Manufacturing Unit (Surat)
            </h2>
            <iframe
              title="Manufacturing Unit (Surat)"
              className="w-full h-80 md:h-96 shadow-2xl shadow-black"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4450.730021808638!2d72.83393947587598!3d21.214596981368583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff77461f8c1%3A0x976e1d8c296af3d1!2sArjiv%20Exports!5e1!3m2!1sen!2sin!4v1736333170337!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h2 className="mb-2 uppercase lg:text-3xl text-2xl tracking-wide">
              Head Office (Mumbai)
            </h2>
            <iframe
              title="Head Office (Mumbai)"
              className="w-full h-80 md:h-96 shadow-2xl shadow-black"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.384978439379!2d72.8641597!3d19.065523799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e8a1f99d19%3A0x9058e81c33e92c9e!2sArjiv%20Exports!5e1!3m2!1sen!2sin!4v1736333100104!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
