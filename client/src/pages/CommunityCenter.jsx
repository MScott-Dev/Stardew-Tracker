import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'; 
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import SingleBundle from "../components/bundles";


const CommunityCenter = () => {

    const { _id: userParam } = useParams();

    const { loading, error, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { _id: userParam },
    });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

  return (
    <section className="w-screen h-screen">
      <section className='shadow-lg p-5 bg-slate-900'>
        <h1 className="text-yellow-300 font-bold flex justify-center">Community Center</h1>
      </section>
      <div className="flex flex-wrap justify-center content-center h-auto bg-amber-100">
          {loading ? (
            <div className="text-white">Loading...</div>
          ) : 
          <section className="flex flex-wrap justify-center content-center m-3">
            <SingleBundle bundles={data.me.bundles}/>
          </section>
          }
        </div>
    </section>
  );
};

export default CommunityCenter;