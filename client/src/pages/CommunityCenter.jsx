import Chicken from "../assets/images/Brown_Chicken.png"

const communityCenter = () => {



  return (
    <section className="background w-screen h-screen content-center">
      <section className="flex justify-center">
          <h1 className="text-yellow-300 font-bold">Community Center</h1>
          <img className="size-8 ml-3 animate-bounce" src={Chicken} alt="Chicken"></img>
      </section>
    </section>
  );
};

export default communityCenter;