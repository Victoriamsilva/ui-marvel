import { Card as CardLib } from '@radix-ui/themes';
import './card.scss';

function Card({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <CardLib size="2" style={{ minHeight: 300 }}>
      <img className="absolute inset-0 h-full w-full object-cover" src={image} alt={name} />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </CardLib>
  );
}

export default Card;
