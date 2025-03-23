import { motion } from "framer-motion";
import { FaPenAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
    <div className="flex items-center mb-6 font-bold gap-3 text-2xl text-indigo-600">
          <p id="bolder">Summary</p>
          <FaPenAlt />
        </div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-6 bg-gray-900 border border-indigo-600 rounded-lg"
    >
      {/* Summary Section */}
      <div>
        <p className="text-gray-300 leading-relaxed">
          Passionate and detail-oriented backend developer with expertise in .NET Core, Node.js, Express.js, and database management.  
          Experienced in building scalable APIs, optimizing SQL queries, and implementing security best practices.  
          Expanding knowledge in Next.js for SSR, AWS for cloud computing, and modern JavaScript techniques.  
          Committed to delivering efficient, secure, and user-centric solutions in a rapidly evolving tech landscape.
        </p>
      </div>

      <hr className="mt-6 mb-3 border-gray-700" />

      {/* Footer Links */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">Thanks for visiting!</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/atanu-mondal-b98707255/" target="_blank" className="hover:text-indigo-600 transition">
            <BsLinkedin className="text-xl" />
          </a>
          <a href="https://github.com/WebdevAtanu" target="_blank" className="hover:text-indigo-600 transition">
            <BsGithub className="text-xl" />
          </a>
        </div>
      </div>
    </motion.div>
    </>
  );
}

export default Footer;
