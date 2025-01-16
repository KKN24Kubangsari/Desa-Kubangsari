import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';

const navMenus = [
  {
    name: 'Tentang',
    link: '#tentang',
  },
  {
    name: 'Visi dan Misi',
    link: '#visi-misi',
  },
  {
    name: 'Struktur Organisasi',
    link: '#struktur-organisasi',
  },
  {
    name: 'Galeri',
    link: '#galeri',
  },
  {
    name: 'Potensi',
    link: '#potensi',
  },
  {
    name: 'Wilayah',
    link: '#wilayah',
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <>
      <header
        className={`${
          isSticky ? 'sticky bg-secondaryBg shadow-lg' : 'absolute'
        } top-0 right-0 left-0 z-10 transition duration-300`}>
        <nav>
          <div className='container flex justify-between items-center gap-8 py-6 px-6 md:px-6 lg:px-[7rem]'>
            <h1 className='font-barlow font-extrabold italic text-slate text-2xl text-primary'>
              <a className='text-nowrap' href='#hero'>
                Desa Kubangsari
              </a>
            </h1>
            {/* nav menu */}
            <div className='hidden lg:block'>
              <ul
                className={`flex items-center gap-6 font-inter font-bold ${
                  isSticky ? 'text-blackText' : 'text-whiteText'
                }`}>
                {navMenus.map((menu) => (
                  <li key={menu.name}>
                    <a
                      className='text-nowrap hover:text-primary'
                      href={menu.link}>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* hamburger menu */}
            <div className='block lg:hidden'>
              <div className='cursor-pointer text-primary'>
                {!showMenu ? (
                  <BiMenu className='text-4xl' onClick={toggleMenu} />
                ) : (
                  <BiX className='text-4xl' onClick={toggleMenu} />
                )}
              </div>
              {showMenu && (
                <div className='fixed z-10 bg-secondaryBg left-0 top-20 right-0 py-6 px-3 rounded-b-lg shadow-md'>
                  <ul
                    className='flex items-center justify-center flex-col gap-4 font-inter font-bold text-blackText w-full
                  '>
                    {navMenus.map((menu) => (
                      <li className='w-full text-center' key={menu.name}>
                        <a className=' hover:text-primary' href={menu.link}>
                          {menu.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
