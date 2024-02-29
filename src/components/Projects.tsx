import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="E-Commerce Platform"
            des=" Constructed a secure Java Spring Boot backend for user functions and e-commerce
            features, coupled with a React.js frontend for dynamic and secure user interactions. Implemented password hashing
            and common vulnerability protections, along with an admin panel for efficient platform management."
            src={projectTwo}
          />
          <ProjectsCard
            title="Train Reservation System"
            des=" Developed a Train Reservation System using Java, Spring, Maven, MySQL, and
            HTML5/CSS/JavaScript. User-friendly features include route search, seat availability, and booking. Designed an
            efficient admin panel, ensured secure data management, and integrated payment gateways for online bookings"
            src={projectThree}
          />
          <ProjectsCard
            title="Job Portal Website UI"
            des=" Create an engaging and user-friendly Job Portal Website UI that seamlessly connects job seekers with opportunities. 
            Prioritize intuitive navigation, a clean layout, and modern design elements to 
            enhance the overall user experience."
            src={projectOne}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
