import Card from "@mui/material/Card";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiAppwrite } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Element } from "react-scroll";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Skills(props) {
  return (
    <Card
      variant="outlined"
      data-aos="fade-up"
      data-aos-anchor-placement="center-top"
    >
      <div className="p-2">
        <div className="flex justify-between mb-2">
          <p className="text-lg">{props.text}</p>
          <props.logo className={`${props.class} text-lg`} />
        </div>
        <LinearProgressWithLabel value={props.value} />
      </div>
    </Card>
  );
}
function Skill() {
  return (
    <Element name="skill">
      <section className="pt-5 mb-10 lg:h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                My Skills
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Skilled in building full-stack web applications with a strong
              focus on backend development using .NET Core and Node.js.
              Experienced in creating dynamic UIs with React and Tailwind CSS.
              Proficient in managing both SQL and NoSQL databases, ensuring
              secure, scalable, and efficient systems.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 rounded-2xl gap-4">
            <Skills
              logo={RiJavascriptFill}
              text="Javascript"
              class="text-yellow-500"
              value="70"
            />
            <Skills
              logo={FaReact}
              text="React.js"
              class="text-blue-600"
              value="80"
            />
            <Skills
              logo={RiTailwindCssFill}
              text="TailwindCSS"
              class="text-sky-500"
              value="90"
            />
            <Skills
              logo={FaNodeJs}
              text="Node.js"
              class="text-green-700"
              value="65"
            />
            <Skills
              logo={SiExpress}
              text="Express"
              class="text-xl"
              value="75"
            />
            <Skills
              logo={DiMongodb}
              text="MongoDB"
              class="text-green-500"
              value="60"
            />
            <Skills
              logo={SiMysql}
              text="Mysql"
              class="text-blue-500"
              value="55"
            />
            <Skills
              logo={SiAppwrite}
              text="Appwrite"
              class="text-pink-600"
              value="60"
            />
            <Skills logo={RiNextjsFill} text="Next.js" class="" value="50" />
            <Skills
              logo={AiOutlineDotNet}
              text=".NET Core"
              class="text-violet-800"
              value="30"
            />
          </div>
        </div>
      </section>
    </Element>
  );
}
export default Skill;
