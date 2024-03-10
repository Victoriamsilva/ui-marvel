import { TextField } from '@radix-ui/themes';
import Icon from '../icon/icon';
import { useDebounce } from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

function Search({ change, initialValue }: { change: (event: string) => void; initialValue: string }) {
  const [value, setValue] = useState(initialValue as string);
  const search = useDebounce(value, 1000);

  useEffect(() => {
    change(search);
  }, [search]);
  return (
    <TextField.Root variant="classic" size="3" className="w-full !text-white ">
      <TextField.Slot className="">
        <Icon name="Search" />
      </TextField.Slot>
      <TextField.Input
        value={value}
        onChange={(event: any) => setValue(event.target.value)}
        className=" rounded"
        placeholder="Pesquise por um personagem"
      />
    </TextField.Root>
  );
}

export default Search;
