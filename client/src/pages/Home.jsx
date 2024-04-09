import Chicken from "../../public/images/Brown_Chicken.png"
import { Link } from 'react-router-dom';

const Home = () => {



  return (
    <section className="background w-screen h-screen content-center">
      <section className="flex justify-center">
          <h1 className="text-yellow-300 font-bold">Stardew Tracker</h1>
          <img className="size-8 ml-3 animate-bounce" src={Chicken} alt="Chicken"></img>
      </section>
      <section className="flex justify-center m-4">
        <section>
          <h2 className="text-slate-500 italic underline">Track Your Community Center Bundles!</h2>
        </section>
      </section>
      <section className="flex justify-evenly">
        <section className="flex gap-5">
          <Link to="/signup" className="bg-yellow-100 hover:scale-110 p-3 rounded text-black">Sign up! </Link>
          <h2 className="flex content-center flex-wrap text-yellow-200 font-bold">or</h2>
          <Link to="/login" className="bg-yellow-100 hover:scale-110 p-3 rounded text-black">Log in!</Link>
        </section>
      </section>
    </section>
  );
};

export default Home;
