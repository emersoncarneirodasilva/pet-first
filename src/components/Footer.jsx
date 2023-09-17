// Import Next Link
import Link from "next/link";

// Import Icons
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex items-center min-h-[263px] py-8 bg-center bg-no-repeat bg-cover bg-footer"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          {/* Logo */}
          <div className="items-center justify-center flex-1 mb-6 text-4xl text-center lg:justify-start lg:text-left text-orange">
            Pet First
          </div>

          <div className="flex-1 text-white">
            {/* Links */}
            <ul className="flex flex-col items-center mb-8 text-base font-semibold lg:flex-row gap-y-6 lg:gap-x-4">
              <li className="transition-all duration-300 hover:text-yellow hover:scale-[1.03]">
                <Link href="#services">Services</Link>
              </li>
              <li className="transition-all duration-300 hover:text-yellow hover:scale-[1.03]">
                <Link href="#about">About</Link>
              </li>
              <li className="transition-all duration-300 hover:text-yellow hover:scale-[1.03]">
                <Link href="#">Blog</Link>
              </li>
              <li className="transition-all duration-300 hover:text-yellow hover:scale-[1.03]">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start">
              <div className="mr-6">Follow</div>

              <ul className="flex gap-x-4">
                <li className="hover:translate-x-[2px] hover:translate-y-[-5px] hover:text-yellow transition-all duration-300">
                  <a href="#">
                    <BsFacebook />
                  </a>
                </li>

                <li className="hover:translate-x-[2px] hover:translate-y-[-5px] hover:text-yellow transition-all duration-300">
                  <a href="#">
                    <BsInstagram />
                  </a>
                </li>

                <li className="hover:translate-x-[2px] hover:translate-y-[-5px] hover:text-yellow transition-all duration-300">
                  <a href="#">
                    <BsTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
