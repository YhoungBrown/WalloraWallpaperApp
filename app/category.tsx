import { Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import WallpaperModal from '@/components/myModal';
import { ABSTRACT, CITYSCAPES, NATURE, SavedWallpaper } from '@/constants/Specifications';
import styles from '@/Stylesheets/CategoryScreen';
import { WallpaperCardProps } from '@/type';
import SingleCategory from '../components/SingleCategory';

const Categories = () => {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const categoryName = name?.toUpperCase() || 'NATURE';
  const inset = useSafeAreaInsets();
  const router = useRouter();

  const [selected, setSelected] = useState<WallpaperCardProps | null>(null);
  const toastAnim = useRef(new Animated.Value(0));

  const categoryMap: Record<string, any> = { NATURE, ABSTRACT, CITYSCAPES };
  const data = categoryMap[categoryName] || NATURE;

  const fadeInOutToast = () => {
    setSelected((prev: any) => ({ ...prev, linkCopied: true }));
    Animated.timing(toastAnim.current, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(toastAnim.current, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.ease,
        }).start(() => {
          setSelected((prev: any) => ({ ...prev, linkCopied: false }));
        });
      }, 2000);
    });
  };


  const saveAsFaveTask = () => {
  if (!selected) return; 

  
  const alreadySaved = SavedWallpaper.some(item => item.id && item.title === selected.id && selected.title);

  if(alreadySaved)
    return alert('Wallpaper already exist in Favourites')

  if (!alreadySaved) {
    SavedWallpaper.push({ ...selected, liked: true });
  }

   router.push("/(Drawer)/favourites");
}

  return (
    <View style={{ paddingTop: inset.top, paddingBottom: inset.bottom, ...styles.container }}>
      
      <View style={styles.headerRow}>
        <View style={styles.logoRow}>
          <View style={styles.logoMark}>
            <MaskedView
              maskElement={
                <Text style={[styles.logoText, { backgroundColor: 'transparent' }]}>W</Text>
              }
            >
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF9A8B', '#FF6A88']}>
                <Text style={[styles.logoText, { opacity: 0 }]}>W</Text>
              </LinearGradient>
            </MaskedView>
          </View>
          <Text style={styles.appName}>Wallpaper Studio</Text>
        </View>
      </View>

   
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.backarrowSection} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
          <Text style={styles.backText}>Back to Categories</Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.heading}>{name}</Text>
        </View>

        
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SingleCategory
              id={item.id}
              image={item.image}
              title={item.title}
              liked={item.liked}
              onPress={() => setSelected(item)}
            />
          )}
        />


        <WallpaperModal
          selected={selected}
          setSelected={setSelected}
          onSaveFavorite={saveAsFaveTask}
          onSetWallpaper={(item) => alert('Wallpaper set successfully')}
        />
      </View>
    </View>
  );
};

export default Categories;
