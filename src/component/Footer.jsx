import RecommendIcon from "@mui/icons-material/Recommend";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col gap-4">
        <a className="footer-thanks">
          <RecommendIcon />
          <span>Thanks for visiting</span>
        </a>
        <span className="inline-flex sm:ml-auto justify-center sm:justify-start gap-3">
          <a
            href="https://www.linkedin.com/in/atanu-mondal-b98707255/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/WebdevAtanu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
