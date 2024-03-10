import MarvelLogo from '../../assets/marvel-logo.png';

function Header() {
  return (
    <div className="w-full flex justify-center h-16">
      <img className="h-full w-40" src={MarvelLogo} alt="" />
    </div>
  );
}

export default Header;
