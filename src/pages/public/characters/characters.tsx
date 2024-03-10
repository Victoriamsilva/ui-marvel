import { useEffect, useState } from 'react';
import { findPaginatedCharacters } from '../../../services/api/characters.service';
import Card from '../../../components/card/card';
import { ICharacter } from '../../../interfaces/character.interface';
import { Container } from '@radix-ui/themes';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, setCharactersPage } from '../../../services/state/characters/characters-slice';
import { setLoading } from '../../../services/state/application/application-slice';
import Loading from '../../../components/loading/loading';
import { RootState } from '../../../services/state/store';
import { toast } from 'react-toastify';
import Search from '@/components/search/search';

function Characters() {
  const [totalPages, setTotalPages] = useState(1);
  const charactersPage = useSelector((state: RootState) => state.characters.charactersPage);
  const loading = useSelector((state: RootState) => state.application.loading);
  const characters = useSelector((state: RootState) => state.characters.characters);

  const dispatch = useDispatch();

  async function fetchCharacters(search?: string) {
    try {
      dispatch(setLoading(true));
      const { data } = await findPaginatedCharacters({ page: charactersPage, search });
      dispatch(setCharacters(data.results as ICharacter[]));
      setTotalPages(Math.ceil(data.total / data.limit));
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  function onPageChange({ selected: page }: { selected: number }) {
    dispatch(setCharactersPage(page + 1));
    fetchCharacters();
  }

  return (
    <>
      <Container p={'8'}>
        <Search change={(e: string) => fetchCharacters(e)} initialValue="" />
        {!loading ? (
          <>
            <div className="my-8 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {characters.map((character) => (
                <Card
                  key={character.id}
                  name={character.name}
                  image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  description={character.description}
                />
              ))}
            </div>
            <ReactPaginate
              className="flex text-white"
              activeClassName="bg-black rounded-full text-white"
              pageClassName="border border-white px-2 mx-2 h-8 w-8 flex items-center justify-center"
              breakLabel="..."
              nextLabel=">"
              previousClassName="mx-2"
              nextClassName="mx-2"
              onPageChange={onPageChange}
              pageRangeDisplayed={3}
              forcePage={charactersPage - 1}
              pageCount={totalPages}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </Container>
    </>
  );
}

export default Characters;
