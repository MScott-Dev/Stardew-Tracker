import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Starfruit from "../../public/images/Starfruit.png"
import bundles from '../utils/bundles';

function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
        bundles: bundles
      },
      onError(err) {
        console.log(err);
        if (err == `ApolloError: E11000 duplicate key error collection: StardewTracker.users index: email_1 dup key: { email: "${formState.email}" }`) {
        setErrorMessage("Email already in use, please try a different one!");
      } else if (err == `ApolloError: E11000 duplicate key error collection: StardewTracker.users index: username_1 dup key: { username: "${formState.username}" }`) {
        setErrorMessage('Username is taken, please try a different one!');
      } else {
        setErrorMessage("An error happened");
      }
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  
    window.location.assign(`./getstarted`);
    } catch (error) {
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
        <section className='border-8 border-yellow-200 bg-yellow-50 h-[33rem] lg:w-[28rem] md:w-[28rem] sm:w-[28rem] w-[21rem] p-5 rounded drop-shadow-lg dark:bg-darkGray'>
        <section className='h-24 border-b-4 border-yellow-200 flex justify-center flex-wrap content-center'>
            <h2 className='text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-yellow-300 font-bold drop-shadow-lg'>Sign up!</h2>
            <img className="size-10 ml-3 animate-bounce" src={Starfruit} alt="Chicken"></img>
        </section>
        
        <form onSubmit={handleFormSubmit}>
          <section>
            <p id='error' className='text-red-600 italic underline'>{errorMessage}</p>
          </section>
            <div className="flex flex-wrap justfity-evenly content-center gap-3 h-20 mt-3">
            <div className="mb-5  w-full">
                <label className="block text-sm font-medium text-gray-600 dark:text-offWhite" htmlFor="email">Username</label>
                <input
                  className="mt-1 p-2 w-full border rounded-md shadow-lg"
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="username"
                  onChange={handleChange}
                />
            </div>
          </div>
          <div className="flex flex-wrap justfity-evenly content-center gap-3 h-20">
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
                <label className="block text-sm font-medium text-gray-600 dark:text-offWhite" htmlFor="pwd">Password <span className='italic text-gray-400'>Mininum 5</span></label>
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
          <button type="submit" className='bg-yellow-100 hover:scale-110 rounded text-black hover:border-2 hover:border-yellow-300'>Sign up</button>
        </div>
        </form>
        <Link to="/login" className='flex justify-center mt-3 text-black hover:text-green-700'>Already have an account? <span className='ml-1 underline'>Sign in here!</span></Link>
      </section>
    </div>
      );
    }

export default Signup;