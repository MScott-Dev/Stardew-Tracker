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
    console.log(data);
    
    
        // data.me.bundles.forEach(bundle => {
        // console.log(bundle);
        // const name = bundle.name

    
    

  return (
    <section className="w-screen h-screen">
      <div className="flex flex-wrap justify-center content-center">
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