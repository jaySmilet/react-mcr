import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 py-4 bg-black flex align-items-center gap-6 text-white">
      <h2 className="text-xl font-bold">React MCR</h2>
      <div className="flex align-items-center gap-1"></div>
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="cursor-pointer">About</div>
      <div className="cursor-pointer">Contact</div>
    </div>
  );
};

export default Navbar;
