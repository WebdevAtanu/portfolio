import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";

function Do() {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  function Card({ image, title, desc }) {
    return (
      <motion.div variants={childVariant}>
        <div className="card bg-[#091327] border border-indigo-600 w-full h-full flex flex-col justify-between px-6 py-6 rounded-lg">
          <div className="flex flex-col items-center gap-4">
            <figure>
              <img src={image} alt={title} className="w-16 h-16 rounded-full" />
            </figure>
            <div className="text-center text-white">
              <h2 className="mb-3 text-xl font-semibold">{title}</h2>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="pt-5 mb-10 lg:h-screen" id="do">
      <div className="flex items-center gap-3 text-2xl font-bold mb-6 text-indigo-600">
        <p id="bolder">Working Field</p>
        <BsPersonWorkspace />
      </div>
      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card
          image="pics/logo.png"
          title="Front-End"
          desc="Experienced in React.js, creating modern, responsive, and dynamic user interfaces."
        />
        <Card
          image="pics/logo.png"
          title="Back-End"
          desc="Building scalable backend services with Node.js, Express.js, and .NET Core."
        />
        <Card
          image="pics/logo.png"
          title="Database"
          desc="Managing and optimizing SQL and NoSQL databases for high performance."
        />
        <Card
          image="pics/logo.png"
          title="API Development"
          desc="Developing secure and efficient RESTful APIs with authentication and authorization."
        />
      </motion.div>
    </div>
  );
}

export default Do;
