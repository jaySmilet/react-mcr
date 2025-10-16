import { useNavigate } from "react-router-dom";
import { allLinks } from "../static-data";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-6 h-screen mt-6">
      <div className="flex flex-col">
        <ul className="w-[400px]">
          {allLinks.map((link) => (
            <li
              key={link.path}
              className="cursor-pointer text-blue-600 hover:underline block mb-2"
              onClick={() => navigate(`${link.path}`)}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
