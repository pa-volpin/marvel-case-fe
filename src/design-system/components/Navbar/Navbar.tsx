import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';
import history from '../../../state/History';
import { clearState } from '../../../modules/auth/state/actions';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  {
    path: '/',
    label: 'Characters',
  },
  {
    path: '/comics',
    label: 'Comics',
  },
  {
    path: '/series',
    label: 'Series',
  },
  {
    path: '/events',
    label: 'Events',
  },
  {
    path: '/profile',
    label: 'Profile',
  }
];

const subLinks = [
  {
    path: '/favoritescharacters',
    label: 'Favorites Characters',
  },
  {
    path: '/favoritescomics',
    label: 'Favorites Comics',
  },
  {
    path: '/favoritesseries',
    label: 'Favorites Series',
  },
  {
    path: '/favoritesevents',
    label: 'Favorites Events',
  },
];

const Navbar: React.FC<RouteComponentProps> = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setMenuStatus((prev) => !prev);
  };

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const handleDropdownConditional = () => {
    if (document.documentElement.clientWidth > 768) handleDropdown();
  };

  const { location: { pathname } } = props;
  const path = pathname;

  const dispatch = useDispatch();
  const clearAuthState = useCallback(() => dispatch(clearState()), []);

  const logout = () => {
    clearAuthState();
    localStorage.removeItem('tokenMarvel');
    history.push('/');
  }


  window.addEventListener('resize', () => {
    setMenuStatus(false)
    setDropdown(false)
  })

  return (
    <nav className="bg-primary text-white md:px-2 w-screen flex justify-center">
      <div className="md:max-w-6xl w-full md:flex">
        <button
          onClick={ () => handleMenu() }
          type="button"
          className={`focus:outline-none flex items-center space-x-2 p-2 ${menuStatus && 'justify-center w-full'} `}
        >
          <FaBars size={30} className={`text-white md:hidden ${menuStatus && 'hidden'}`} />
          <FaTimes size={40} className={`text-white md:hidden ${!menuStatus && 'hidden'}`} />
          <p className={`text-3xl md:text-2xl flex ${menuStatus && 'hidden'}`}>MARVEL</p>
        </button>
        <div
          className={ `${menuStatus ? '' : 'hidden'} w-full bg-primary
            md:bg-transparent absolute z-10 h-full md:relative md:flex
            md:justify-end md:px-2 border-t border-white md:border-none items-center` }
        >
          { links.map((link, index) => (
            <Link
              key={ index }
              to={ link.path }
              className={ `${ path === link.path ? 'bg-secondary' : ''}
                text-xl text-center p-5 block hover:bg-white hover:text-primary` }
            >
              { link.label }
            </Link>
          ))}
          <div className="flex flex-col space-y-2"
            onMouseEnter={() => handleDropdownConditional()}
            onMouseLeave={() => handleDropdownConditional()}
          >
            <button
              className={ `${ path.includes('favorites') ? 'bg-secondary' : ''}
                text-xl text-center p-5 hover:bg-white hover:text-primary hidden md:block` }
            >
              Favorites
            </button>
            <div 
            className={`${!dropdown && 'md:hidden'} flex flex-col space-y-2 md:absolute md:top-10 bg-primary p-2 rounded-md`}>
            { subLinks.map((link, index) => (
              <Link
                key={ index }
                to={ link.path }
                onClick={() => handleDropdown()}
                className={ ` ${ path === link.path ? 'bg-secondary' : ''}
                  text-xl text-center p-5 block hover:bg-white hover:text-primary` }
              >
                { link.label }
              </Link>
            ))}
            </div>
          </div>
          <button
            type="button"
            onClick={ () => logout() }
            className="w-full md:max-w-min text-xl text-center p-5 block hover:bg-white hover:text-primary"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
