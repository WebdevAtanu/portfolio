import { Calendar, Database, Code } from "lucide-react";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

function Work() {
  return (
    <div className="pt-5 mb-10 md:h-auto lg:h-screen" id="work">
  <div className="flex gap-2 items-center text-2xl mb-6 text-indigo-600">
    <p id="bolder"> Work Experience</p>
    <MdWork />
  </div>

  <motion.div
    className="p-6 rounded-lg bg-gray-900 border border-indigo-600"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <h3 className="text-2xl font-semibold">Backend Developer</h3>
    </div>

    <p className="flex items-center text-gray-400 mt-2">
      <Calendar className="w-5 h-5 mr-2" />
      Ebits Technologies | Feb, 2025 – Present
    </p>

    <ul className="mt-4 space-y-3 text-gray-300">
      {[
        {
          icon: <Code className="w-5 h-5 text-green-400" />,
          text: "Developing backend services using",
          skills: ["Node.js", "Express.js", "Knex.js", ".NET Core"],
        },
        {
          icon: <Code className="w-5 h-5 text-blue-400" />,
          text: "Building dynamic and responsive user interfaces with",
          skills: ["React", "HTML", "CSS"],
        },
        {
          icon: <Database className="w-5 h-5 text-yellow-400" />,
          text: "Managing and optimizing databases including",
          skills: ["MongoDB", "MySQL", "MSSQL"],
        },
        {
          icon: <Code className="w-5 h-5 text-red-400" />,
          text: "Building and integrating",
          skills: ["RESTful APIs"],
        },
        {
          icon: <Code className="w-5 h-5 text-purple-400" />,
          text: "Implementing authentication, authorization, and security best practices.",
        },
        {
          icon: <Code className="w-5 h-5 text-blue-400" />,
          text: "Collaborating with teams to deliver scalable and high-performance applications.",
        },
      ].map((item, index) => (
        <li key={index} className="flex items-start sm:items-center gap-2 sm:gap-3 flex-wrap">
          {item.icon}
          <span>
            {item.text}{" "}
            {item.skills && (
              <span className="font-bold">
                {item.skills.map((skill, i) => (
                  <span key={i} className="mx-1">
                    {skill}
                    {i < item.skills.length - 1 && ","}
                  </span>
                ))}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
</div>

  );
}
export default Work;
