import UrlFrom from "../components/UrlFrom.jsx";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-2xl p-6 w-120">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          URL Shortner
        </h1>
        <UrlFrom />
      </div>
    </div>
  );
};

export default Home;
