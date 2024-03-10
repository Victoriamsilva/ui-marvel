import { Card as CardLib } from '@radix-ui/themes';
import './card.scss';

function Card({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <CardLib size="2" style={{ minHeight: 300 }}>
      <img
        data-testid="test-card-image"
        className="absolute inset-0 h-full w-full object-cover"
        src={image}
        alt={name}
      />
      <div className="content">
        <h2 data-testid="test-card-name">{name}</h2>
        <p data-testid="test-card-description">{description}</p>
      </div>
    </CardLib>
  );
}

export default Card;
