import { useNavigate } from 'react-router-dom';
import MarvelLogo from '../../assets/marvel-logo.png';

function Header() {
  const navigate = useNavigate();
  return (
    <div data-testid="test-header" className="w-full flex justify-center h-12 xs:h-16">
      <img
        data-testid="test-header-logo"
        onClick={() => navigate('characters')}
        className="h-full w-38 xs:w-40 cursor-pointer"
        src={MarvelLogo}
        alt="logo marvel"
      />
    </div>
  );
}

export default Header;
