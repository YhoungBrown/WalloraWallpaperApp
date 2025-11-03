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

export type WallpaperCardProps = {
  image: any;
  title: string;
  id: string;
  liked?: boolean;
  linkCopied? : boolean;
  onPress?: () => void;
};

export type WideButtonProps = {
   iconName?:string;
  iconColor?: string;
  buttonText: string;
  backgroundColor: string;
  borderColor?: string;
  textColor: string;
  onPress?: () => void;
};

export interface WallpaperModalProps {
  selected: WallpaperCardProps | null;
  setSelected: (item: WallpaperCardProps | null) => void;
  onSaveFavorite?: (item: WallpaperCardProps) => void;
  onSetWallpaper?: (item: WallpaperCardProps) => void;
}