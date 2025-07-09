import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useVariants } from "../contexts/VariantsContext";
import SectionHeader from "../components/ui/SectionHeader";

export default function About() {
  const { container: containerVariants, item: itemVariants } = useVariants();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-neutral-950 dark:to-cyan-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          refProp={ref}
          isInView={isInView}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          h1txt="About"
          h1highlight="Me"
          para=""
        />
        {/* Grid container for cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Who I Am card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <div className="bg-white dark:bg-white/7 dark:border dark:border-gray-700 p-8 sm:p-10 rounded-4xl shadow-md">
              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6"
              >
                Who I Am
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
              >
                I'm a B.Tech Computer Science student at Bharati Vidyapeeth College of Engineering, Kolhapur, focused on solving real-world problems through full-stack development. I build scalable and user-friendly web applications using React.js, Node.js, MongoDB, and Express.


              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
              >
                I’ve led my team in Smart India Hackathon 2024, contributed to open-source via GSSoC, and built projects like MediQ and CleanZone. These experiences have sharpened my leadership, problem-solving, and technical skills.
              </motion.p>
               <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                Beyond tech, I served as a Fundraising Intern at Muskurahat Foundation, where I contributed to meaningful social impact and strengthened my communication and outreach skills.
              </motion.p>
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium px-3 py-1 rounded-lg">
                  5+ Projects
                </span>
                <span className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 font-medium px-3 py-1 rounded-lg">
                
                </span>
                <span className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium px-3 py-1 rounded-lg">
                  2 Years Coding
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Education & Experience card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
          >
            <div className="bg-white dark:bg-white/7 dark:border dark:border-gray-700 p-8 sm:p-10 rounded-4xl shadow-md">
              <motion.h3
                variants={itemVariants}
                className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-6"
              >
                Education & Experience
              </motion.h3>

              <motion.div variants={containerVariants} className="space-y-8">
                {[
                  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "Bharati Vidyapeeth's College of Engineering, Kolhapur",
    period: "Nov 2022 – Present",
  },
                  {
    title: "Deloitte Virtual Internship",
    institution: "Forage – Software Engineering Program",
    period: "June 2025",
  },
                 {
    title: "Smart India Hackathon 2024",
    institution: "Team Leader",
    period: "Aug 2024",
  },
  {
    title: "GirlScript Summer of Code (GSSoC)",
    institution: "Open Source Contributor",
    period: "Oct 2024 – Nov 2024",
  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-10 border-l-2 border-blue-200 dark:border-blue-600"
                  >
                    <div className="absolute -left-2 top-1 w-4 h-4 rounded-full bg-blue-600"></div>
                    <p className="font-medium text-gray-800 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.period}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
