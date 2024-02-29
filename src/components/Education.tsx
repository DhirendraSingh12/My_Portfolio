import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science & Engineering"
            subTitle="Sagar Institute of Research and Technology (2017 - 2021)"
            result="78.90%/100%"
            des={
              <ul className="list-disc ml-6">
                <li>Comprehensive program: Blends theory and practical skills for impactful graduates.</li>
                <li>Core focus: Mastery of computer science fundamentals, algorithms, and programming languages.</li>
                <li>Diverse curriculum: Covers software engineering, database management, and AI.</li>
                <li>Problem-solving emphasis: Develops critical thinking and innovation skills.</li>
                <li>Versatile expertise: Includes software development, system design, cybersecurity, and emerging technologies.</li>
                <li>Real-world experience: Involvement in projects and internships for industry exposure.</li>
                <li>Adaptability: Prepares for success in the evolving field through continuous learning and trend awareness.</li>
              </ul>
            }
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sri Aurobindo Integral Education & Research Centre (2015 - 2017)"
            result="70.00%/100%"
            des={
              <ul className="list-disc ml-6">
                <li>Completed 11th and 12th grade with a focus on the Science stream.</li>
                <li>Specialized in Physics, Chemistry, and Mathematics (PCM) included Computer Science as a subject of study.</li>
                <li>Developed a strong foundation in core science and mathematics principles.</li>
                <li>Acquired knowledge and skills in computer science, covering programming, algorithms, and data structures.</li>
                <li>Demonstrated the ability to balance theoretical and practical aspects of both science and computer science.</li>
                <li>Prepared for a well-rounded understanding of technology and its applications in various fields.</li>
              </ul>
            }
          />
          <ResumeCard
            title="High School Education"
            subTitle="St. Mary's Convent School (2007 - 2015)"
            result="82.16%/100%"
            des={
              <ul className="list-disc ml-6">
                <li>Completed secondary education up to class 10 with an ICSE curriculum.</li>
                <li>Studied a diverse range of subjects, including English, Mathematics, Science, Social Studies, and a second language.</li>
                <li>Developed strong language skills through the comprehensive English curriculum.</li>
                <li>Gained a solid foundation in Mathematics, covering topics like algebra, geometry, and trigonometry.</li>
                <li>Acquired knowledge in the sciences, including Physics, Chemistry, and Biology.</li>
                <li>Explored Social Studies subjects, fostering an understanding of history, geography, and civics.</li>
                <li>Participated in extracurricular activities and co-curricular events as part of a holistic education.</li>
                <li>Demonstrated proficiency in information technology through computer education.</li>
                <li>Successfully completed assessments and examinations as per the ICSE evaluation system.</li>
                
              </ul>
            }
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
};

export default Education;
