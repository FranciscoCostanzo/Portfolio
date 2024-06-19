import Instagram from "../../public/assets/logos/Instagram.svg";
import Linkedin from "../../public/assets/logos/Linkedin.svg";
import Mail from "../../public/assets/logos/Mail.svg";
import Github from "../../public/assets/logos/Github.svg";
import Yo from "../../public/assets/yo.jpg";

const enlacesContacto = [
  {
    href: "https://www.instagram.com/tuusuario",
    icon: Instagram.src,
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/tuusuario",
    icon: Linkedin.src,
    alt: "LinkedIn",
  },
  {
    href: "mailto:tuemail@example.com",
    icon: Mail.src,
    alt: "Correo Electrónico",
  },
  {
    href: "https://github.com/tuusuario",
    icon: Github.src,
    alt: "GitHub",
  },
];

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header