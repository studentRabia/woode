import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";



const ContactForm = () => {
  return (
    <section className="bg-white py-16 px-[20%]">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 text-center mb-8">
          For more information about our products & services, please feel free
          to drop us <br /> an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-2xl text-black mr-6"><IoLocationSharp />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-gray-500">
                  236 5th SE Avenue, New <br /> York NY10000, United <br /> States
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl text-black mr-6"><FaPhoneAlt />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-500">Mobile: +1(84) 546-6789</p>
                <p className="text-gray-500">Hotline: +1(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-2xl text-black mr-6"><GoClockFill />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Working Time</h3>
                <p className="text-gray-500">Monday–Friday: 9:00 –<br /> 22:00</p>
                <p className="text-gray-500">Saturday–Sunday: 9:00 –<br /> 21:00</p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className=" p-6 rounded-lg ">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-6"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-6"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-6"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-6"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I'd like to ask about"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-44 bg-[#029FAE] text-white font-medium py-3 rounded-md hover:bg-indigo-600 transition mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
