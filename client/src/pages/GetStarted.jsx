import Chicken from "../assets/images/Brown_Chicken.png";
import {QUERY_ME} from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from "../utils/auth";

const GetStarted = () => {
  const user = Auth.getProfile();
  console.log(user.data._id);
    


    const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    
    console.log("click!");
  };

  return (
    <section className="background w-screen h-screen content-center">
        <h1 className="text-yellow-300 font-bold flex justify-center">Welcome!</h1>
      <section className="flex justify-center">
          <h1 className="text-yellow-300 font-bold">Start tracking now!</h1>
          <img className="size-8 ml-3 animate-bounce" src={Chicken} alt="Chicken"></img>
      </section>
      <section className="flex justify-center m-4">
        <section>
          <button onClick={handleFormSubmit} type="submit" className='bg-yellow-100 hover:scale-110 rounded text-black hover:border-2 hover:border-yellow-300'>Get Started</button>
        </section>
      </section>
    </section>
  );
};

export default GetStarted;
