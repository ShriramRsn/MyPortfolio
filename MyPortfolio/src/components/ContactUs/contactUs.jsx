import React from "react";
import { useTheme } from "../../common/themeContext"; 

const ContactUs = () => {
  const { theme } = useTheme();

  const textColor = theme === "light" ? "text-gray-800" : "text-gray-200";
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-800";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";
  const inputBg = theme === "light" ? "bg-gray-100" : "bg-gray-700";

  return (
    <section className="flex justify-center items-center py-12 px-4">
      <div className={`w-full max-w-lg p-8 ${bgColor} rounded-lg shadow-lg`}>
        <h2 className={`text-3xl font-bold text-center mb-6 ${textColor}`}>
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className={`block text-sm font-medium ${textColor}`}>
              Your email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full ${inputBg} placeholder-gray-400 text-sm ${borderColor} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className={`block text-sm font-medium ${textColor}`}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className={`w-full ${inputBg} placeholder-gray-400 text-sm ${borderColor} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="What is this about?"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className={`block text-sm font-medium ${textColor}`}>
              Your message
            </label>
            <textarea
              id="message"
              rows="5"
              className={`w-full ${inputBg} placeholder-gray-400 text-sm ${borderColor} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Leave your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
