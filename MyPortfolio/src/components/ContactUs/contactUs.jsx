import React, { useState } from "react";
import { useTheme } from "../../common/themeContext";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const ContactUs = () => {
  const [alert, setAlert] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setAlert(null);

    const formData = new FormData(event.target);
    formData.append("access_key", "f8f4555c-ac14-49ef-a554-8ed938c62225");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setAlert(
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            Your message has been sent successfully!
          </Alert>
        );
      } else {
        setAlert(
          <Alert severity="error">Oops! Something went wrong. Try again.</Alert>
        );
      }
    } catch (error) {
      setAlert(
        <Alert severity="error">Network error. Please try again later.</Alert>
      );
    }
  };

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

        {alert && <div className="mb-4">{alert}</div>}

        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium ${textColor}`}
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className={`w-full ${inputBg} placeholder-gray-400 text-sm ${borderColor} border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="name@gmail.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium ${textColor}`}
            >
              Your message
            </label>
            <textarea
              name="message"
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
