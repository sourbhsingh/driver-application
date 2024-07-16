import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginProps } from './interface';
import driversData from '../../../drivers.json'; // Importing drivers.json data

function Login(props: loginProps) {
  const {
    loginLogo,
    loginLogoAltText,
    loginHeader,
    loginSlogan,
    loginEyeIconOff,
    loginEyeIconOn,
    loginUsernamePlaceholder,
    loginPasswordPlaceholder,
    loginButtonText,
    loginHidePasswordAltText,
    loginShowPasswordAltText,
  } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Find user in drivers.json
    const user = driversData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log('Login successful for:', username);

      // Store user data in localStorage or sessionStorage for session management
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // Navigate to Dashboard with user data
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='h-screen grid place-items-center'>
      <div className='w-[375px] md:w-full px-6 md:flex md:justify-center md:gap-8 xl:gap-20'>
        <div className='flex justify-center md:items-center my-10 md:my-0'>
          <img
            src={loginLogo}
            alt={loginLogoAltText}
            loading='lazy'
            className='w-full max-w-xs md:max-w-md lg:max-w-lg h-auto '
          />
        </div>
        <div className='mb-4'>
          <h1 className='text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold my-3 md:mb-6 '>
            {loginHeader}
          </h1>
          <p className='font-extralight text-xl md:text-2xl max-w-[270px] md:max-w-[375px] '>
            {loginSlogan}
          </p>
          <form className='space-y-4 my-5' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='input input-bordered input-lg flex items-center gap-2'>
                <input
                  type='text'
                  className='grow md:text-2xl'
                  placeholder={loginUsernamePlaceholder}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className='form-control'>
              <label className='input input-bordered input-lg flex items-center gap-2'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='grow md:text-2xl'
                  placeholder={loginPasswordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={showPassword ? loginEyeIconOff : loginEyeIconOn}
                  alt={showPassword ? loginHidePasswordAltText : loginShowPasswordAltText}
                  className='w-6 h-6 cursor-pointer'
                  onClick={toggleShowPassword}
                />
              </label>
            </div>

            <button className='btn btn-lg btn-block btn-primary md:text-2xl '>
              {loginButtonText}
            </button>

            {error && <p className='text-red-500 mt-2'>{error}</p>}

            <p className='mt-4 text-center'>
              Don't have an account?{' '}
              <Link to='/register' className='text-blue-600 hover:underline'>
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
