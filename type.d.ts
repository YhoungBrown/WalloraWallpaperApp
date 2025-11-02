export interface CategoryCardProps {
  title: string;
  subtitle: string;
  count: number;
  image: string;
  index: number;
  onPress?: () => void;
};

export type DrawerParamList = {
  index: undefined;
  browse: undefined;
  favourites: undefined;
  settings: undefined;
};

export type TitleTextProps = {
  titleText: string;
  titleSubtext: string;
}