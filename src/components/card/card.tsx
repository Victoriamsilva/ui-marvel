import { Card as CardLib, Inset } from '@radix-ui/themes';
import './card.scss';

function Card({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <CardLib size="2" style={{ maxWidth: 240, maxHeight: 300 }}>
      <Inset side="all">
        <img src={image} alt={name} />
        <div className="content">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Inset>
    </CardLib>
  );
}

export default Card;
