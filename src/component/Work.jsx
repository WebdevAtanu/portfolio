import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Work() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Work Experience
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Currently working as a Backend Developer at Ebits Technologies, where
          I specialize in building and maintaining scalable APIs using .NET
          Core. I collaborate closely with frontend teams, manage database
          operations, and contribute to delivering high-performance,
          production-ready web applications.
        </p>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            API Development
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            .NET Core and Node.js
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Developed and maintained RESTful APIs using .NET Core to support
            various web applications, ensuring high performance, scalability,
            and secure data handling.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Database Design & Management
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            MSSQL, MySQL and MongoDB
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Worked extensively with relational databases like SQL Server,
            creating optimized schemas, writing complex queries, and managing
            data migrations to maintain data integrity and performance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            Collaborating with Frontend Teams
          </Typography>
          <Typography component="span" sx={{ color: "text.secondary" }}>
            API Integration
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Collaborated with frontend developers to integrate APIs smoothly,
            debug issues, and ensure consistent data flow between the backend
            and user interface for a seamless user experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
