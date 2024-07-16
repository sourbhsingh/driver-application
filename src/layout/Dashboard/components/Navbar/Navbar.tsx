import { useEffect, useState } from 'react';
import { navbarProps } from './interface';
import { useNavigate } from 'react-router-dom';

function Navbar(props: navbarProps) {
  const { greetingHeader, userPicPlaceholder } = props;
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate(); // Hook to get the navigation function

  useEffect(() => {
    // Fetch logged-in user data from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUsername(user.username); // Assuming username exists in drivers.json
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Clear localStorage or any other session data
    localStorage.removeItem('loggedInUser');
    // Navigate to the login screen
    navigate('/');
  };

  return (
    <nav className='flex justify-between items-center'>
      <p className='text-4xl lg:text-4xl'>{`${greetingHeader} ${username}`}</p>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} role='button' className='btn m-1 btn-circle'>
          <img
            src={userPicPlaceholder}
            alt='User picture'
            className='w-full h-full rounded-full'
          />
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <a onClick={handleLogout}>Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
