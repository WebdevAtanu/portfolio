import * as React from "react";
import { styled } from "@mui/material/styles";
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

function ProjectCard({ title, tech, image, content, description, live, git }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-full">
      <CardHeader title={title} subheader={tech} />
      <CardMedia component="img" height="170" image={image} alt="cover" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href={live} target="_blank">
          <IconButton aria-label="live">
            <GitHubIcon />
          </IconButton>
        </a>
        <a href={git} target="_blank">
          <IconButton aria-label="github">
            <OpenInNewIcon />
          </IconButton>
        </a>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default function Project() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Personal Projects
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          I’ve worked on a variety of web development projects that showcase
          both frontend and backend skills. These include dynamic React-based
          interfaces, RESTful APIs using Node.js, and fully functional
          applications with integrated database systems. My projects reflect
          practical implementations of clean architecture, responsive design,
          and real-world problem solving.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProjectCard
          title="Shopper"
          image="site/shopper/home.jpeg"
          live="https://shopper-ecommerce.onrender.com/"
          git="https://github.com/WebdevAtanu/shopper-ecommerce"
          content="MERN Stack Shopping App with ShadCN UI"
          description="Built a full-featured shopping application using the MERN stack (MongoDB, Express.js, React, Node.js) with a sleek and accessible UI powered by ShadCN. The app includes seamless user authentication, efficient CRUD operations, and real-time updates for product and cart management. Designed with performance and user experience in mind, ensuring smooth navigation and responsive interactions across devices."
          tech="MERN stack, ShadCN UI"
        />

        <ProjectCard
          title="Techdown Blog"
          image="site/blog/home.jpeg"
          live="https://blog-appwrite-pi.vercel.app/"
          git="https://github.com/WebdevAtanu/blog-appwrite"
          content="Dynamic Blog Platform with React & Appwrite"
          description="Developed a responsive and feature-rich blog platform using React and DaisyUI for a clean, modern UI. Integrated Appwrite to handle user authentication, database operations, and real-time data updates. The application allows users to sign up, log in, create posts, and see content updates instantly without refreshing the page—demonstrating full-stack functionality and real-time interaction."
          tech="React.js with Appwrite"
        />
      </div>
    </div>
  );
}
