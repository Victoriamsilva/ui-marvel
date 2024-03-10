import { icons } from 'lucide-react';

function Icon({ name, color, size }: { name: string; color?: string; size?: string }) {
  const LucideIcon = icons[name as keyof typeof icons];

  return <LucideIcon data-testid="test-icon" color={color} size={size} />;
}

export default Icon;
