import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import { registerProps } from './interface'; // Ensure interface matches your data structure

function Register(props: registerProps) {
  const {
    registerLogo, registerLogoAltText, registerHeader, registerSlogan,
    registerEyeIconOff, registerEyeIconOn, 
    registerPasswordPlaceholder, registerButtonText, registerHidePasswordAltText,
    registerShowPasswordAltText
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await fetch('http://localhost:5174/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 200) {
        navigate('/dashboard'); // Adjust path as needed
      } else if (response.status === 409) {
        setErrorMessage('Email is already registered');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="w-[375px] md:w-full px-6 md:flex md:justify-center md:gap-8 xl:gap-20">
        <div className="flex justify-center md:items-center my-10 md:my-0">
          <img
            src={registerLogo}
            alt={registerLogoAltText}
            loading="lazy"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto "
          />
        </div>
        <div className="mb-4">
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl lg:max-w-lg xl:max-w-2xl font-bold my-3 md:mb-6 ">
            {registerHeader}
          </h1>
          <p className="font-extralight text-xl md:text-2xl max-w-[270px] md:max-w-[375px] ">
            {registerSlogan}
          </p>
          <form className="space-y-4 my-5" onSubmit={handleRegistration}>
            <div className="form-control">
              <label className="input input-bordered input-lg flex items-center gap-2">
                <input
                  type="text"
                  className="grow md:text-2xl"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered input-lg flex items-center gap-2">
                <input
                  type="email"
                  className="grow md:text-2xl"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label className="input input-bordered input-lg flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow md:text-2xl"
                  placeholder={registerPasswordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <img
                  src={showPassword ? registerEyeIconOff : registerEyeIconOn}
                  alt={showPassword ? registerHidePasswordAltText : registerShowPasswordAltText}
                  className="w-6 h-6 cursor-pointer"
                  onClick={toggleShowPassword}
                />
              </label>
            </div>
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <button type="submit" className="btn btn-lg btn-block btn-primary md:text-2xl">
              {registerButtonText}
            </button>
          </form>
          <div className="text-center mt-4">
            Already have an account? <Link to="/">Back to Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
