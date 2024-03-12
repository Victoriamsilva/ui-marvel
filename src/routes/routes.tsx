import { Navigate, Route, Routes } from 'react-router-dom';
import Characters from '../pages/public/characters/characters';
import CharacterDetails from '../pages/public/character-details/character-details';
import NotFound from '@/pages/public/not-found/not-found';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="*" element={<NotFound />} />
      <Route key="characters" path="/characters" element={<Characters />} />
      <Route key="charactersDetails" path="characters/:characterId" element={<CharacterDetails />} />
    </Routes>
  );
}

export default AppRoutes;
