import { useEffect } from 'react';
import { findPaginatedCharacters } from '../../../services/api/characters.service';
import { ICharacter } from '../../../interfaces/character.interface';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, setPagination } from '../../../services/state/characters/characters-slice';
import { setLoading } from '../../../services/state/application/application-slice';
import { RootState } from '../../../services/state/store';
import Search from '@/components/search/search';
import ListCards from '@/components/list-cards/list-cards';
import notifyError from '@/utils/notifyError';

function Characters() {
  const pagination = useSelector((state: RootState) => state.characters.pagination);
  const loading = useSelector((state: RootState) => state.application.loading.default);
  const characters = useSelector((state: RootState) => state.characters.characters);
  const dispatch = useDispatch();

  async function fetchCharacters(search?: string) {
    try {
      dispatch(setLoading(true));
      const { data } = await findPaginatedCharacters({ page: pagination.page, search });
      dispatch(setCharacters(data.results as ICharacter[]));
      dispatch(setPagination({ totalPages: Math.ceil(data.total / data.limit) }));
    } catch (error: any) {
      notifyError(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [pagination.page]);

  function onPageChange({ selected: page }: { selected: number }) {
    dispatch(setPagination({ page: page + 1 }));
  }

  return (
    <>
      <Search change={(e: string) => fetchCharacters(e)} initialValue={null} />
      <ListCards feedBackMessage="textAndImage" loading={loading} items={characters} path="characters" padding="py-8" />
      {!loading && pagination.totalPages > 1 ? (
        <ReactPaginate
          className="flex text-yellow-500"
          activeLinkClassName="rounded-full"
          pageLinkClassName="border border-yellow-500 px-2 mx-2 h-8 w-8 flex items-center justify-center"
          breakLabel="..."
          nextLabel=">"
          previousClassName="mx-2"
          nextClassName="mx-2"
          onPageChange={onPageChange}
          pageRangeDisplayed={3}
          forcePage={pagination.page - 1}
          pageCount={pagination.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      ) : null}
    </>
  );
}

export default Characters;
