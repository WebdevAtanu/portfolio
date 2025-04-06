import RecommendIcon from "@mui/icons-material/Recommend";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="container border-t border-gray-200 px-4 mx-auto">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-500">
            <RecommendIcon />
            <p>Thanks for visiting!</p>
          </a>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="text-blue-500 cursor-pointer"
              href="https://www.linkedin.com/in/atanu-mondal-b98707255/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className="ml-3 text-blue-500 cursor-pointer"
              href="https://github.com/WebdevAtanu"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
