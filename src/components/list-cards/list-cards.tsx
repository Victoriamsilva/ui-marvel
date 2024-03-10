import { useNavigate } from 'react-router-dom';
import Card from '../card/card';
import Loading from '../loading/loading';

function ListCards({
  items,
  path,
  clickable = true,
  padding,
  loading,
}: {
  items: any;
  path?: string;
  clickable?: boolean;
  padding?: string;
  loading?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <>
      {!loading ? (
        <div className={'grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ' + padding}>
          {items.length ? (
            items.map((item: any) => (
              <Card
                clickable={clickable}
                onClick={() => (clickable ? navigate(`/${path}/${item.id}`) : {})}
                key={item.id}
                name={item.name || item.title}
                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                description={item.description}
              />
            ))
          ) : (
            <p>Nenhum item encontrado</p>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ListCards;
