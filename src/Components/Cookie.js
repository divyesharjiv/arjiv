import React, { useState, useEffect } from "react";
import { BiCookie } from "react-icons/bi";
import Button from "Components/Button";

const Cookie = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!document.cookie.includes("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  const setCookie = (name, value, days) => {
    document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${
      days * 86400
    }; path=/`;
  };

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 365);
    setVisible(false);
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "false", 7);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="bg-offwhite shadow-2xl sm:p-5 p-3 rounded-xl fixed bottom-3 left-3 max-w-sm z-[9999] text-primary max-w-md mr-3">
          <h3 className="mb-3 flex items-center sm:text-2xl text-xl font-bold font-poppins">
            <BiCookie className="mr-2" size={30} /> Cookie Consent
          </h3>
          <p className="sm:text-md text-sm text-gray-600 sm:leading-relaxed">
            At Arjiv Exports, we are committed to protecting your privacy and
            providing you with a personalized experience. By clicking{" "}
            <strong>"Accept"</strong>, you agree Arjiv Exports can store cookies
            on your device and disclose information in accordance with our
            Cookie Policy.
          </p>
          <div className="flex justify-end mt-2 gap-1.5">
            <Button size="sm" onClick={handleAccept}>
              Accept
            </Button>
            <Button size="sm" onClick={handleDecline}>
              Decline
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookie;
