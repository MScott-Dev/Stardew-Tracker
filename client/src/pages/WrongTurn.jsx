import Chicken from "../../public/images/Brown_Chicken.png"
import Auth from "../utils/auth";


const WrongTurn = () => {
  // Gets the user's ID freom token and use it to go to their specific community center
  const user = Auth.getProfile();
  const userID = user.data._id
  
    


    const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    
    window.location.assign(`/communitycenter/${userID}`)
  };

  return (
    <section className="background w-screen h-screen content-center">
      <section className="flex justify-center">
        <h1 className="text-yellow-300 m-3 font-bold flex justify-center text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Sorry, you cannot visit other people's community center.</h1>
      </section>
      <section className="flex justify-center m-4">
        <section className="flex">
          <button onClick={handleFormSubmit} type="submit" className='bg-yellow-100 hover:scale-110 rounded text-black hover:border-2 hover:border-yellow-300'>Return home</button>
          <img className="size-8 ml-3 animate-bounce" src={Chicken} alt="Chicken"></img>
        </section>
      </section>
    </section>
  );
};

export default WrongTurn;