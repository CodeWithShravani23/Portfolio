import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useVariants } from "../contexts/VariantsContext";
import SkillsCard from "../components/SkillsCard.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";

export default function Skills() {
  const { container: containerVariants, item: itemVariants } = useVariants();

  const skills = [
  {
    category: "Languages",
    items: "JavaScript, java, C#, Python, SQL",
  },
  {
    category: "Web Technologies",
    items: "HTML5, CSS3, React.js, Node.js, Express.js, REST API, JWT",
  },
  {
    category: "Databases",
    items: "MongoDB, Firebase, MySQL",
  },
  {
    category: "Frameworks & Tools",
    items: "Redux Toolkit, Tailwind CSS, Git, GitHub, Postman, Vercel, VS Code",
  },
  {
    category: "Others",
    items: "Responsive UI Design, API Integration, Firebase Auth, Deployment",
  },

    { category: "AI Tools", items: "ChatGPT, Claude, DeepSeek" },
   
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 bg-white bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-cyan-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          refProp={ref}
          isInView={isInView}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          h1txt="Technical"
          h1highlight="Skills"
          para="I've worked with a variety of technologies in the web development
            world."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              {...skill}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
