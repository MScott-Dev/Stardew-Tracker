import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Starfruit from "../../public/images/Starfruit.png"

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      // Gets the user's ID freom token and use it to go to their specific community center
        const user = Auth.getProfile();
        const userID = user.data._id

      window.location.assign(`/communitycenter/${userID}`)
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return (
    <div className="flex flex-wrap justify-center content-center h-full w-screen">
        <section className='border-8 border-yellow-200 bg-yellow-50 h-[31rem] lg:w-[28rem] md:w-[28rem] sm:w-[28rem] w-[21rem] p-5 rounded drop-shadow-lg dark:bg-darkGray'>
        <section className='h-24 border-b-4 border-yellow-200 flex justify-center flex-wrap content-center'>
            <h2 className='text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-yellow-300 font-bold drop-shadow-lg'>Log in!</h2>
            <img className="size-10 ml-3 animate-bounce" src={Starfruit} alt="Chicken"></img>
        </section>
        
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-wrap justfity-evenly content-center gap-3 h-20 mt-4">
            <div className="mb-5  w-full">
                <label className="block text-sm font-medium text-gray-600 dark:text-offWhite" htmlFor="email">Email</label>
                <input
                  className="mt-1 p-2 w-full border rounded-md shadow-lg"
                  placeholder="youremail@test.com"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
            </div>
          </div>
          <div className="flex flex-wrap justfity-evenly content-center gap-3 h-20">
            <div className="mb-5  w-full">
                <label className="block text-sm font-medium text-gray-600 dark:text-offWhite" htmlFor="pwd">Password</label>
                <input
                  className="mt-1 p-2 w-full border rounded-md shadow-lg"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleChange}
                />
            </div>
          </div>
          <div className="flex justify-end my-3">
          <button type="submit" className='bg-yellow-100 hover:scale-110 rounded text-black hover:border-2 hover:border-yellow-300'>Log in</button>
        </div>
        </form>
        <Link to="/Signup" className='flex justify-center mt-10 text-black hover:text-green-700'>Don't have an account? <span className='ml-1 underline'>Sign up here!</span></Link>
      </section>
    </div>
      );
    }

export default Login;