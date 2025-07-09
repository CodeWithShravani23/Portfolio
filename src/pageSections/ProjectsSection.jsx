import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../components/ProjectsCard";
import { useVariants } from "../contexts/VariantsContext";
import SectionHeader from "../components/ui/SectionHeader";

export default function Projects() {
  const { container: containerVariants, item: itemVariants } = useVariants();

  const projects = [
    {
  title: "MediQ – Emergency Medical QR Record App",
  description:
    "A MERN stack application that stores essential medical data securely and generates a QR code for quick access during emergencies. Designed to assist first responders and improve patient safety.",
  tech: "React.js, Node.js, Express.js, MongoDB, QR API, JWT",
  github: "https://github.com/CodeWithShravani23/MediQ", // Replace if different
},
{
  title: "Connect.dev – Real-Time Developer Networking Platform",
  description:
    "A real-time social platform for developers to connect, chat, and collaborate. Integrated swipe-based matching, personalized feeds, and real-time chat using WebSockets. Reduced chat latency by 70% with Socket.io and optimized responsiveness for 95%+ devices.",
  tech: "MongoDB, Express.js, React.js, Node.js, Socket.io, Tailwind CSS",
  github: "https://github.com/CodeWithShravani23/Connect.dev", // Update if needed
}
,
{
  title: "FlixGenie – Movie Discovery Platform",
  description:
    "An entertainment web app that helps users discover trending movies with genre filters and intelligent recommendations powered by OpenAI API. Uses TMDb for real-time movie data.",
  tech: "React.js, Tailwind CSS, TMDb API, OpenAI API",
  github: "https://github.com/CodeWithShravani23/FlixGenie",
},
{
  title: "FoodVilla – Restaurant UI",
  description:
    "A modern and responsive frontend for a restaurant app with Redux-based state management, unit testing using Jest, and reusable UI components.",
  tech: "React.js, Tailwind CSS, Redux Toolkit, Jest",
  github: "https://github.com/CodeWithShravani23/FoodVilla",
},
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing projects, skills, and contact information.",
      tech: "React, Vite, Tailwind CSS, Framer Motion",
      github: "#",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-blue-50 dark:bg-cyan-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          refProp={ref}
          isInView={isInView}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          h1txt="My"
          h1highlight="Projects"
          para="Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
