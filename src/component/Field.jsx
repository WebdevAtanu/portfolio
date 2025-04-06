import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import logo from "../assets/logo.png";

function Cards({ title, image, content }) {
  return (
    <Card className="w-full">
      <h2 className="mb-2 text-lg p-2">{title}</h2>
      <CardMedia component="img" className="h-1/2" image={image} alt="image" />
      <CardContent>
        <p className="text-gray-600">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}

function Field() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My Playground
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            I work as a backend developer specializing in .NET Core at Ebits
            Technologies. My role involves building and maintaining APIs,
            managing databases, and ensuring scalable and secure backend systems
            that power web applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards
            image={logo}
            title="Frontend (React & Modern UI)"
            content="Skilled in building responsive and dynamic web interfaces using React.js, JavaScript, and Tailwind CSS. I focus on creating clean, user-friendly UIs with optimized performance and seamless user experiences."
          />
          <Cards
            image={logo}
            title="Backend (.NET Core & Node.js)"
            content="Experienced in building robust and scalable backend systems using .NET Core and Node.js. Skilled in creating RESTful APIs, handling database operations with SQL and NoSQL databases, and ensuring secure, high-performance server-side logic."
          />
          <Cards
            image={logo}
            title="Database Management (SQL & NoSQL)"
            content="Proficient in working with relational databases like SQL Server and PostgreSQL, as well as NoSQL databases like MongoDB. Skilled in writing optimized queries, designing efficient schemas, and managing data operations securely and effectively."
          />
        </div>
      </div>
    </section>
  );
}

export default Field;
