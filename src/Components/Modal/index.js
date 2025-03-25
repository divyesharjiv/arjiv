import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import { isMobile } from "utility/utils";

const Modal = (props) => {
  const { isOpen, onClose, size, children, title } = props;

  const modalSize = {
    xs: "max-w-xs", // (320px)
    sm: "max-w-sm", // (384px)
    md: "max-w-md", // (448px)
    lg: "max-w-lg", // (512px)
    xl: "max-w-xl", // (576px)
    "2xl": "max-w-2xl", // (672px)
    "3xl": "max-w-3xl", // (768px)
    "4xl": "max-w-4xl", // (896px)
    "5xl": "max-w-5xl", // (1024px)
    "6xl": "max-w-6xl", // (1152px)
    "7xl": "max-w-7xl", // (1280px)
    "8xl": "max-w-[90%]", // 90% width
    "9xl": "max-w-[95%]", // 95% width
    full: "w-full h-full", // Fullscreen
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 text-primary" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`bg-white overflow-hidden ${
                modalSize[size] || "max-w-md"
              } w-full rounded-xl shadow-xl relative max-h-[90vh]"
              }`}
            >
              {/* Header with Close Button */}
              {title ? (
                <div className="sticky top-0 bg-white z-10 border-b-2 border-[#CCCCCC] sm:py-4 py-2 px-8 flex items-center justify-center rounded-t-xl">
                  <h2 className="font-poppins text-center font-semibold text-xl md:text-2xl lg:text-3xl">
                    {title}
                  </h2>
                  <button onClick={onClose} className="absolute sm:right-5 sm:top-3 right-1 top-1">
                    <IoCloseOutline size={isMobile() ? 24 : 35} />
                  </button>
                </div>
              ) : (
                <button onClick={onClose} className="absolute sm:right-5 sm:top-3 right-1 top-1">
                  <IoCloseOutline size={isMobile() ? 24 : 35} />
                </button>
              )}

              {/* Modal Body */}
              <div className="p-6 my-3 overflow-y-auto max-h-[80vh]">
                {children}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
