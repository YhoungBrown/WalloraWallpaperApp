export interface CategoryCardProps {
  title: string;
  subtitle: string;
  count: number;
  image: string;
  index: number;
  onPress?: () => void;
};