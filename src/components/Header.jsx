//  Import Next Image
import Image from "next/image";

// Import Next Link
import Link from "next/link";

// Import Logo
import Logo from "../../public/img/header/logo.svg";

const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container relative flex flex-col items-center justify-between h-full mx-auto lg:flex-row gap-y-6">
        {/* Logo */}
        <Link href="#">
          <Image src={Logo} alt="Logo" />
        </Link>

        {/* Nav */}
        <nav className="flex text-xl gap-x-4 lg:gap-x-12">
          <Link
            href="#services"
            className="transition-all duration-300 hover:text-orange hover:scale-[1.03]"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="transition-all duration-300 hover:text-orange hover:scale-[1.03]"
          >
            About
          </Link>
          <Link
            href="#"
            className="transition-all duration-300 hover:text-orange hover:scale-[1.03]"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="transition-all duration-300 hover:text-orange hover:scale-[1.03]"
          >
            Contact
          </Link>
        </nav>

        {/* Button */}
        <button className="transition-all duration-300 btn btn-primary lg:btn-outline hover:scale-[1.015]">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
