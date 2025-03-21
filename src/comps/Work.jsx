import React from 'react'
import { Briefcase, Calendar, Database, Code } from "lucide-react";
import { motion } from "framer-motion";

function Work() {

return (
    <div className="pt-5 mb-10 md:h-auto lg:h-screen" id='work'>
      <h2 className="text-3xl font-bold text-center mb-6">🚀 Work Experience</h2>
      
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-4">
          <Briefcase className="text-blue-400 w-8 h-8" />
          <h3 className="text-2xl font-semibold">Backend Developer</h3>
        </div>

        <p className="flex items-center text-gray-400 mt-2">
          <Calendar className="w-5 h-5 mr-2" />
          Ebits Technologies | [Start Date] – Present
        </p>

        <ul className="mt-4 space-y-3 text-gray-300">
          <li className="flex items-center">
            <Code className="w-5 h-5 text-green-400 mr-2" />
            Developing backend services using <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Knex.js</strong>, and <strong>.NET Core</strong>.
          </li>
          <li className="flex items-center">
            <Database className="w-5 h-5 text-yellow-400 mr-2" />
            Managing and optimizing <strong>SQL databases</strong> for performance and scalability.
          </li>
          <li className="flex items-center">
            <Code className="w-5 h-5 text-red-400 mr-2" />
            Building and integrating <strong>RESTful APIs</strong> to support frontend applications.
          </li>
          <li className="flex items-center">
            <Code className="w-5 h-5 text-purple-400 mr-2" />
            Implementing authentication, authorization, and security best practices.
          </li>
          <li className="flex items-center">
            <Code className="w-5 h-5 text-blue-400 mr-2" />
            Collaborating with teams to deliver scalable and high-performance applications.
          </li>
        </ul>
      </motion.div>
      </div>
    )
}
export default Work