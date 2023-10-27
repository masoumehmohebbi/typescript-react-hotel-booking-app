// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import { HeadingLine } from '../components/HeadingLine';
import { useAuth } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('user');
  const { logIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) logIn(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);
  return (
    <section className="my-16">
      <HeadingLine id="nearbyhotels" title="login form" marginTop="mt-16" />
      <form
        onSubmit={handleSubmit}
        action="#"
        className="flex flex-col gap-y-5 p-2 w-11/12 md:w-1/2 mx-auto"
      >
        <div className="flex flex-col gap-y-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn py-2 flex items-center justify-center text-lg">
          Login
        </button>
      </form>
    </section>
  );
}

export default LogIn;
