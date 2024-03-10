import { TextField } from '@radix-ui/themes';
import Icon from '../icon/icon';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

function Search({ change, initialValue }: { change: (event: string) => void; initialValue: string }) {
  const [value, setValue] = useState(initialValue as string);
  const search = useDebounce(value, 500);

  useEffect(() => {
    change(search);
  }, [search]);
  return (
    <TextField.Root data-testid="test-search" variant="classic" size="3" className="w-full">
      <TextField.Slot className="">
        <Icon name="Search" />
      </TextField.Slot>
      <TextField.Input
        data-testid="test-search-input"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        className=" rounded"
        placeholder="Pesquise por um personagem"
      />
    </TextField.Root>
  );
}

export default Search;
