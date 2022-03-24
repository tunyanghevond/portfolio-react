import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const icons = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/ghevond-tunyan-6bb64518a",
    text: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/tunyanghevond",
    text: <FaGithub />,
  },
  {
    id: 3,
    url: "mailto:tunyan.ghevond@gmail.com",
    text: <FiMail />,
  },
];
const tempLinks = icons.map((icon) => {
  return (
    <li key={icon.id}>
      <a href={icon.url} className="social-icon">
        {icon.text}
      </a>
    </li>
  );
});

const Icons = ({ styleClass }) => {
  return <ul className={`${styleClass ? styleClass : ""}`}>{tempLinks}</ul>;
};
export default Icons;
