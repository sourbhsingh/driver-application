import { navbarProps } from './interface';

function Navbar(props: navbarProps) {
  const { greetingHeader, userPicPlaceholder } = props;
  return (
    <nav className='flex justify-between items-center'>
      <p className='text-2xl lg:text-4xl'>{`${greetingHeader} Esteban`}</p>
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
            <a>Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
