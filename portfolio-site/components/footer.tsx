import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = () => {
  const icon = (
    <FontAwesomeIcon
      icon={faLinkedin}
      className="h-8 w-8 text-slate-600 hover:text-sky-900"
    />
  );
  return (
    <div className="text-center border-t border-slate-700 p-4">
      <div>Designed and built by Atrijo</div>
      <Link
        className="flex justify-center"
        href="https://www.linkedin.com/in/atrijo/"
      >
        {icon}
      </Link>
    </div>
  );
};

export default Footer;
