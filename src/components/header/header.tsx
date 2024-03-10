import { useNavigate } from 'react-router-dom';
import MarvelLogo from '../../assets/marvel-logo.png';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center h-16">
      <img onClick={() => navigate('characters')} className="h-full w-40 cursor-pointer" src={MarvelLogo} alt="" />
    </div>
  );
}

export default Header;
