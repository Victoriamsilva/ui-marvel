import { useNavigate } from 'react-router-dom';
import Card from '../card/card';
import Loading from '../loading/loading';
import NoResultsImage from '../../assets/no-results.svg';
import { IDefault } from '@/interfaces/default.interface';
import FeedbackMessage from '../feedback-message/feedback-message';

function ListCards({
  items = [],
  path,
  clickable = true,
  padding,
  loading = false,
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
        return (
          <p data-testid="test-feedback" className="!text-white text-xl text-center">
            Nenhum resultado encontrado
          </p>
        );
      case 'textAndImage':
        return <FeedbackMessage message="Nenhum resultado encontrado" image={NoResultsImage} />;
    }
  };

  return (
    <>
      {!loading ? (
        <>
          {items.length > 0 ? (
            <div
              data-testid="test-list-cards"
              className={'grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ' + padding}
            >
              {items.map((item: IDefault) => (
                <Card
                  clickable={clickable}
                  onClick={() => (clickable ? navigate(`/${path}/${item.id}`) : {})}
                  key={item.id}
                  name={item.name || item.title || ''}
                  image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  description={item.description}
                />
              ))}
            </div>
          ) : (
            <Feedback />
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ListCards;
