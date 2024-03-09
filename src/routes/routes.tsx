import { Navigate, Route, Routes } from 'react-router-dom';
import Characters from '../pages/public/characters/characters';
import CharactersDetails from '../pages/public/character-details/characters-details';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route key="characters" path="/characters" element={<Characters />} />
      <Route key="charactersDetails" path="characters/:characterId" element={<CharactersDetails />} />
    </Routes>
  );
}

export default AppRoutes;
