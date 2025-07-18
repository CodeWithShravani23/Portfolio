import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const resumePdf = "resume.pdf";

export default function ContactInfo({ itemVariants }) {
  const contactItems = [
    { icon: HiOutlineMail, label: "Email", value: "meetpatilshravani23@gmail.com", href: "mailto:meetpatilshravani23@gmail.com" },
    { icon: HiOutlinePhone, label: "Phone", value: "+91 9021631789", href: "tel:+9021631789" },
    { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/shravani-patil-23askdp", href: "https://www.linkedin.com/in/shravani-patil-23askdp/" },
    { icon: FaGithub, label: "GitHub", value: "github.com/CodeWithShravani23", href: "https://github.com/CodeWithShravani23" }
  ];

  return (
    <motion.div variants={itemVariants} className="bg-white dark:bg-white/10 dark:border dark:border-gray-600 backdrop-blur-xl rounded-2xl shadow-xl p-8 space-y-6">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Info</h3>
      <ul className="space-y-4">
        {contactItems.map((item, i) => (
          <li key={i} className="flex items-center space-x-4">
            <item.icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</h4>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-blue-600 dark:text-cyan-300 hover:underline"
              >
                {item.value}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <motion.a
        href={resumePdf}
        download="Shravani_Patil_Resume.pdf"
        variants={itemVariants}
        className="inline-flex items-center space-x-2 bg-blue-600 dark:bg-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
      >
        <FaFileDownload />
        <span>Download Resume</span>
      </motion.a>
    </motion.div>
  );
}
