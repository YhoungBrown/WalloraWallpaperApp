import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import WideSaveButton from '@/components/wideSaveButton';
import { ABSTRACT, CITY, NATURE, SavedWallpaper } from '@/constants/Specifications';
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

  const categoryMap: Record<string, any> = { NATURE, ABSTRACT, CITY };
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

        
        <Modal visible={!!selected} transparent animationType="fade" onRequestClose={() => setSelected(null)}>
          <View style={styles.modalContainer}>
            <Pressable style={styles.backdrop} onPress={() => setSelected(null)} />

            <View style={styles.modalBox}>
              
              {selected?.linkCopied && (
                <Animated.View style={[styles.toast, { opacity: toastAnim.current }]}>
                  <Ionicons name="link-outline" size={16} color="#000" />
                  <Text style={styles.toastText}>Link Copied</Text>
                </Animated.View>
              )}

              <TouchableOpacity onPress={() => setSelected(null)} style={styles.closeBtn}>
                <Ionicons name="close-circle-outline" size={20} color="#ffa500" />
              </TouchableOpacity>

              {selected && (
                <View style={styles.imageContainer}>
                  <Image source={selected.image} style={styles.modalImage} resizeMode="cover" />
                </View>
              )}

              <ScrollView
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
              >
              <View style={styles.modalDetails}>
                <Text style={styles.modalTitle}>Preview</Text>
                <Text style={styles.nameLabel}>Name</Text>
                <Text style={styles.modalSubTitle}>{selected?.title} {selected?.id}</Text>

                
                <Text style={styles.nameLabel}>Tags</Text>
                <View style={styles.tagRow}>
                  <View style={styles.tag}><Text style={styles.tagText}>Nature</Text></View>
                  <View style={styles.tag}><Text style={styles.tagText}>Ambience</Text></View>
                  <View style={styles.tag}><Text style={styles.tagText}>Flowers</Text></View>
                </View>

                <Text style={styles.descLabel}>Description</Text>
                <View style={styles.descContainer}>
                  <Text style={styles.descText}>
                    Discover the pure beauty of “{selected?.title}” your gateway to freshness.
                    Add this unique collection to elevate your senses and transform your screen into
                    the symphony of nature.
                  </Text>

                  <LinearGradient
                    colors={['transparent', '#fff']} 
                    style={styles.textFade}
                    pointerEvents="none" 
                    />
                </View>
                
                <View style={styles.actionRow}>
                  <TouchableOpacity
                    style={styles.iconBtn}
                    onPress={async () => {
                      await Clipboard.setStringAsync('https://example.com/' + selected?.title);
                      fadeInOutToast();
                    }}
                  >
                    <Ionicons name="share-outline" size={22} color="#111" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconBtn}>
                    <MaterialCommunityIcons name="arrow-collapse" size={22} color="#111" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconBtn}>
                    <Ionicons name="settings-outline" size={22} color="#111" />
                  </TouchableOpacity>
                </View>

                
                <WideSaveButton
                  iconName="heart-outline"
                  iconColor="#000"
                  buttonText="Save to Favorites"
                  backgroundColor="#f0f0f0"
                  textColor="#000"
                  borderColor='#9999999f'
                  onPress={saveAsFaveTask}
                />

                <WideSaveButton
                  iconName="image-outline"
                  iconColor="#fff"
                  buttonText="Set as Wallpaper"
                  backgroundColor="#ffa500"
                  borderColor='#ffa500'
                  textColor="#fff"
                  onPress={() => alert('Wallpaper set successfully')}
                />
                
              </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Categories;
