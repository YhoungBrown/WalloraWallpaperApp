import EmptyFavourite from '@/components/EmptyFavourite';
import Header from '@/components/Header';
import SingleCategory from '@/components/SingleCategory';
import Title from '@/components/TitleSection';
import { SavedWallpaper } from '@/constants/Specifications';
import styles from '@/Stylesheets/FavouritesStylesheet';
import React from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Favourites = () => {
  const inset = useSafeAreaInsets();
  const { height } = Dimensions.get('window');

  return (
    <View 
      style={{
        flex: 1, 
        paddingTop: inset.top, 
        paddingBottom: inset.bottom,
      }}
    >
      <Header />

      <View style={styles.container}> 
        <Title 
          titleText="Saved Wallpapers"
          titleSubtext="Your saved wallpapers collection"
        />

        {SavedWallpaper.length > 0 ? (
          <FlatList
            data={SavedWallpaper}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: height * 0.05, 
            }}
            renderItem={({ item }) => (
              <SingleCategory
                id={item.id}
                image={item.image}
                title={item.title}
                liked={item.liked}
              />
            )}
          />
        ) : (
          <EmptyFavourite />
        )}
      </View>
    </View>
  );
};

export default Favourites;
