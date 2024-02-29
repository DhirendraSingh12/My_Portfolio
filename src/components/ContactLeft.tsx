import { FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Dhirendra Kumar Singh</h3>
        <p className="text-lg font-normal text-gray-400">
          Java Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Associate Software Engineer with 2 years of experience at Torry Harris Business Solutions. 
        Skilled in Java programming and Microsoft technologies.
        Strong problem-solving and analytical abilities.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9348317688</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dhirendrasingh9348@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.youtube.com/@_javadeveloper" target="_blank">
            <span className="bannerIcon">
              <FaYoutube />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/dhirendrakusingh/"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://github.com/DhirendraSingh12" target="_blank">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
