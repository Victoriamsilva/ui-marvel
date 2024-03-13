import Loading from '@/components/loading/loading';
import { findCharacterById, findCharacterComics, findCharacterSeries } from '@/services/api/characters.service';
import { setLoading, setLoadingByKey } from '@/services/state/application/application-slice';
import { RootState } from '@/services/state/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListCards from '@/components/list-cards/list-cards';
import notifyError from '@/utils/notifyError';
import { setCharacter, setComics, setSeries } from '@/services/state/characters/characters-slice';
import { Tabs } from '@radix-ui/themes';

function CharacterDetails() {
  const { characterId } = useParams();
  const loading: { [key: string]: boolean } = useSelector((state: RootState) => state.application.loading);
  const { character, series, comics } = useSelector((state: RootState) => state.characters);
  const dispatch = useDispatch();

  async function fetchCharacter() {
    try {
      dispatch(setLoading(true));
      if (!characterId) throw new Error('Personagem não encontrado');
      const { data } = await findCharacterById(characterId);
      dispatch(setCharacter(data.results[0]));
    } catch (error: any) {
      notifyError(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function fetchCharacterComics() {
    try {
      dispatch(setLoadingByKey({ key: 'comics', value: true }));
      if (!characterId) throw new Error('Personagem não encontrado');
      const { data } = await findCharacterComics(characterId);
      dispatch(setComics(data.results));
    } catch (error: any) {
      notifyError(error);
    } finally {
      dispatch(setLoadingByKey({ key: 'comics', value: false }));
    }
  }

  async function fetchCharacterSeries() {
    try {
      dispatch(setLoadingByKey({ key: 'series', value: true }));
      if (!characterId) throw new Error('Personagem não encontrado');
      const { data } = await findCharacterSeries(characterId);
      dispatch(setSeries(data.results));
    } catch (error: any) {
      notifyError(error);
    } finally {
      dispatch(setLoadingByKey({ key: 'series', value: false }));
    }
  }

  useEffect(() => {
    Promise.all([fetchCharacter(), fetchCharacterComics(), fetchCharacterSeries()]);
  }, []);

  return (
    <>
      {!loading.default && character ? (
        <>
          <div data-testid="test-character-details" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h1 className="mb-8">{character.name}</h1>
              <p>{character.description}</p>
            </div>
            <div className="w-full">
              <img
                data-testid="test-character-image"
                className="w-full object-cover rounded shadow-lg shadow-yellow-500"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}

      <Tabs.Root className="w-full" defaultValue="comics">
        <Tabs.List className="my-8">
          <Tabs.Trigger data-testid="test-comics-tab" value="comics">
            Revistas
          </Tabs.Trigger>
          <Tabs.Trigger data-testid="test-series-tab" value="series">
            Filmes e series
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="comics">
          <ListCards loading={loading.comics} clickable={false} items={comics} />
        </Tabs.Content>
        <Tabs.Content value="series">
          <ListCards loading={loading.series} clickable={false} items={series} />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
}

export default CharacterDetails;
