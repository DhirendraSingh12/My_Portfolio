import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Torry Harris Business Solutions - (2021 - 2023)"
            result="Bengaluru"
            des={
              <ul className="list-disc ml-6">
                <li>Achieved an 80% reduction in system outage times and a 75% decrease in troubleshooting time, enhancing overall system reliability.</li>
                <li>Conducted in-depth root-cause analysis on critical incidents, leading to the implementation of effective fixes.</li>
                <li>Executed workarounds for failed jobs and successfully reran them, ensuring uninterrupted workflow.</li>
                <li>Proactively raised changes, service requests, and incidents as required, contributing to efficient issue resolution.</li>
                <li>Consistently conducted comprehensive health checks of the application, ensuring optimal performance.</li>
                <li>Successfully managed and sent files to downstream after the completion of the ETL (Extract, Transform, Load) process.</li>
                <li>Offered valuable support for Java-based applications, enabling seamless operations.</li>
              </ul>
            }
          />
    
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
