import Loading from '@/components/loading/loading';
import { ICharacter } from '@/interfaces/character.interface';
import { findCharacterById, findCharacterComics } from '@/services/api/characters.service';
import { setLoading, setLoadingByKey } from '@/services/state/application/application-slice';
import { RootState } from '@/services/state/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ListCards from '@/components/list-cards/list-cards';
import './characters-details.scss';

function CharactersDetails() {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<ICharacter>();
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const loading: any = useSelector((state: RootState) => state.application.loading);
  const dispatch = useDispatch();

  async function fetchCharacter() {
    try {
      dispatch(setLoading(true));
      if (!characterId) throw new Error('Character not found');
      const { data } = await findCharacterById(characterId);
      setCharacter(data.results[0]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  async function fetchCharacterComics() {
    try {
      dispatch(setLoadingByKey({ key: 'comics', value: true }));
      if (!characterId) throw new Error('Character not found');
      const { data } = await findCharacterComics(characterId);
      setComics(data.results);
      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      dispatch(setLoadingByKey({ key: 'comics', value: false }));
    }
  }

  async function fetchCharacterSeries() {
    try {
      dispatch(setLoadingByKey({ key: 'series', value: true }));
      if (!characterId) throw new Error('Character not found');
      const { data } = await findCharacterComics(characterId);
      setSeries(data.results);
    } catch (error: any) {
      toast.error(error.message);
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 !text-yellow-500 ">
            <div>
              <h1 className="mb-8 font-black text-5xl !text-yellow-500">{character.name}</h1>
              <p>{character.description}</p>
            </div>
            <div className="w-full   shadow-lg shadow-yellow-500">
              <img
                className="w-full object-cover h-full rounded shadow-md shadow-yellow-500"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              />
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}

      <h2 className="!text-yellow-400 text-2xl text-start w-full my-8">Revistas</h2>

      <ListCards loading={loading.comics} clickable={false} items={comics} />

      <h2 className="!text-yellow-400 text-2xl text-start w-full my-8">Series</h2>

      <ListCards loading={loading.series} clickable={false} items={series} />
    </>
  );
}

export default CharactersDetails;
