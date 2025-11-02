import CategoryCard from '@/components/CategoryCard';
import CategoryCardList from '@/components/CategoryCardList';
import Header from '@/components/Header';
import Title from '@/components/TitleSection';
import { CATEGORIES, SPECS } from '@/constants/Specifications';
import styles, { hp, wp } from '@/Stylesheets/BrowseCategoryStylesheet';
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BrowseCategoryScreen() {
  const insets = useSafeAreaInsets();

  const [isGrid, setIsGrid] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.center, { flex: 1, backgroundColor: SPECS.colors.bg }]}>
        <ActivityIndicator size="large" color="#FF6A88" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: SPECS.colors.bg }}>
      <Header />

      <View style={styles.bodyContent}>
        <Title
          titleText="Browse Categories"
          titleSubtext="Explore our curated collection of stunning wallpapers"
        />

        <View style={styles.ViewType}>
          <View style={styles.ViewTypeArrangement}>
            <TouchableOpacity onPress={() => setIsGrid(true)}>
              <Ionicons
                name="grid-outline"
                size={wp(5.5)}
                color={isGrid ? '#FF6A88' : SPECS.colors.muted}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsGrid(false)}>
              <FontAwesome6
                name="list-ul"
                size={wp(5.5)}
                color={!isGrid ? '#FF6A88' : SPECS.colors.muted}
              />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + hp(32), paddingTop: hp(2) }}
          renderItem={({ item, index }) =>
            isGrid ? (
              <CategoryCard
                index={index}
                title={item.title}
                subtitle={item.subtitle}
                count={item.count}
                image={item.image}
                onPress={() => {
                  router.push({
                    pathname: '/category',
                    params: { name: item.title },
                  });
                }}
              />
            ) : (
              <CategoryCardList
                index={index}
                title={item.title}
                subtitle={item.subtitle}
                count={item.count}
                image={item.image}
                onPress={() => {
                  router.push({
                    pathname: '/category',
                    params: { name: item.title },
                  });
                }}
              />
            )
          }
        />
      </View>
    </View>
  );
}
