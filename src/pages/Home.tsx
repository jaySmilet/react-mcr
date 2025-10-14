import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col gap-6 h-screen">
      <div className="flex flex-col">
        <ul>
          <li>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 cursor-pointer rounded"
              onClick={() => navigate("/accordion")}
            >
              Accordion
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
