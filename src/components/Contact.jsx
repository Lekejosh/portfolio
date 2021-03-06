import React from "react";
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen flex justify-center items-center p-4 bg-[#0a192f]"
    >
      <form
        action="https://getform.io/f/8c7fff91-c0fd-46f7-afd0-6a149653422f"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an{" "}
            <a
              className="text-bold border-b-4 border-pink-600"
              href="mailto:lekejosh6wf@gmail.com"
            >
              EMAIL
            </a>{" "}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name" required
        />
        <input
          className="my-4 py-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email" required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message" required
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
