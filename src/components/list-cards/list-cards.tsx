import { useNavigate } from 'react-router-dom';
import Card from '../card/card';
import Loading from '../loading/loading';
import NoResultsImage from '../../assets/no-results.svg';
import { IDefault } from '@/interfaces/default.interface';

function ListCards({
  items = [],
  path,
  clickable = true,
  padding,
  loading,
  feedBackMessage = 'onlyText',
}: {
  items?: IDefault[];
  path?: string;
  clickable?: boolean;
  padding?: string;
  loading?: boolean;
  feedBackMessage?: 'onlyText' | 'textAndImage';
}) {
  const navigate = useNavigate();

  const Feedback = () => {
    switch (feedBackMessage) {
      case 'onlyText':
        return <p>Nenhum resultado encontrado</p>;
      case 'textAndImage':
        return (
          <div className="flex flex-col items-center">
            <p>Nenhum resultado encontrado</p>
            <img src={NoResultsImage} alt="Nenhum resultado encontrado" />
          </div>
        );
      default:
        return <p>Nenhum resultado encontrado</p>;
    }
  };

  return (
    <>
      {!loading ? (
        <div className={'grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ' + padding}>
          {items.length ? (
            items.map((item: IDefault) => (
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
            <Feedback />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ListCards;
