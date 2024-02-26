import React from "react";

export default function ContactForm() {
  return (
    <div className="contact-img flex items-start justify-end ">
      <div className="bg-transparent  p-4 rounded-md shadow-md border border-black w-[400px] ml-10 mt-14 mr-14">
        <h2 className="text-lg font-semibold mb-2">Contact Form</h2>
        <form>
          {/* First Name */}
          <div className="mb-2">
            <label
              htmlFor="firstname"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-2">
            <label
              htmlFor="lastname"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div className="mb-2">
            <label
              htmlFor="msg"
              className="block text-gray-600 text-sm font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="msg"
              name="msg"
              rows={2}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mb-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
