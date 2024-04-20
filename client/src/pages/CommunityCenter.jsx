import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'; 
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import SingleBundle from "../components/bundles";
import Auth from '../utils/auth';

const CommunityCenter = () => {


  // use the id from params to get the user
    const { _id: userParam } = useParams();
    const URLid = useParams();
    const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { _id: userParam },
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    if (data.me._id !== URLid.userID) {
      window.location.assign('./WrongTurn');
    } else {
      console.log('Your farm my dude');
    }

    
  return (
    <section className="w-screen h-screen">
      <section className='shadow-lg p-5 bg-slate-900'>
        <h1 className="text-yellow-300 font-bold flex justify-center text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Community Center</h1>
        <p className='flex justify-end mr-3 text-slate-500 text-sm'>All images credited to Stardew Valley Wiki!</p>
        <p className='flex justify-end mr-3 text-slate-500 text-sm'>Check it out below!</p>
        <a className='flex justify-end mr-3 text-slate-500 cursor-pointer text-sm'>https://stardewvalleywiki.com/Stardew_Valley_Wiki</a>
        <section className='flex justify-end m-3'>
          <button href="/" onClick={() => Auth.logout()} className='bg-yellow-100 hover:scale-110 rounded text-black hover:border-2 hover:border-yellow-300'>Logout</button>
        </section>
      </section>
      <div className="flex flex-wrap justify-center content-center bg-amber-100">
          {loading ? (
            <div className="text-white">Loading...</div>
          ) : 
          <section className="flex flex-wrap justify-center content-center m-3">
            <SingleBundle bundles={data.me.bundles} donatedItems={data.me.donatedItems} id={data.me._id}/>
          </section>
          }
        </div>
    </section>
  );
};

export default CommunityCenter;