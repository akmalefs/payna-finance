import paynaLogo from "../../../public/logo.png";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 lg:px-0 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <img src={paynaLogo} alt="Logo Payna" width={144} height={42} />

          <ul className="lg:flex gap-x-16 hidden">
            <li>
              <a href="#" className="font-semibold text-navy tracking-minus">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-navy tracking-minus">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-navy tracking-minus">
                Showcase
              </a>
            </li>
            <li>
              <a href="#" className="text-navy tracking-minus">
                Pricing
              </a>
            </li>
          </ul>

          <Button variant="bg-[#F5F6FB]">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
