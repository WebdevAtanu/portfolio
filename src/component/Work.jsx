import * as React from "react";
import DataObjectIcon from "@mui/icons-material/DataObject";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { Element } from "react-scroll";

function Card({ title, content, icon }) {
  return (
    <div
      className="px-4 py-12 md:w-full flex outline outline-gray-200 shadow rounded"
      data-aos="zoom-in"
    >
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-grow pl-6">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <Element name="work">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Work Experience
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Currently working as a Backend Developer at Ebits Technologies,
            where I specialize in building and maintaining scalable APIs using
            .NET Core. I collaborate closely with frontend teams, manage
            database operations, and contribute to delivering high-performance,
            production-ready web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="API Development with .NET Core"
            content="Developed and maintained RESTful APIs using .NET Core to support various web applications, ensuring high performance, scalability, and secure data handling."
            icon=<DataObjectIcon />
          />
          <Card
            title="Database Design & Management"
            content="Worked extensively with relational databases like SQL Server, creating optimized schemas, writing complex queries, and managing data migrations to maintain data integrity and performance."
            icon=<StorageIcon />
          />
          <Card
            title="Collaborating with Frontend Teams"
            content="Collaborated with frontend developers to integrate APIs smoothly, debug issues, and ensure consistent data flow between the backend and user interface for a seamless user experience."
            icon=<IntegrationInstructionsIcon />
          />
        </div>
      </div>
    </Element>
  );
}
