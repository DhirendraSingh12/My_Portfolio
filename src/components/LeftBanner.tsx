import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaYoutube, FaLinkedinIn, FaReact, FaJava } from "react-icons/fa";
import { SiApachemaven, SiSpringboot } from "react-icons/si";
import { FadeIn } from "./FadeIn";
import { BsGithub } from "react-icons/bs";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Java Backend Developer.", "Full Stack Java Developer.", "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal"></h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Dhirendra Kumar Singh</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Associate Software Engineer with 2 years of experience at Torry Harris Business Solutions. Skilled in Java programming and Microsoft technologies.
        Strong problem-solving and analytical abilities.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiApachemaven />
            </span>
            <span className="bannerIcon">
              <FaReact/>
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
