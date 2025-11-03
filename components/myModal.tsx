import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { Animated, Easing, Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import WideSaveButton from '@/components/wideSaveButton';
import styles from '@/Stylesheets/myModalStylesheet';
import { WallpaperModalProps } from '@/type';



const WallpaperModal = ({
  selected,
  setSelected,
  onSaveFavorite,
  onSetWallpaper,
}: WallpaperModalProps) => {
    
  const toastAnim = useRef(new Animated.Value(0));

  const fadeInOutToast = () => {
    if (!selected) return;
    setSelected({ ...selected, linkCopied: true });

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
          setSelected({ ...selected, linkCopied: false });
        });
      }, 2000);
    });
  };

  if (!selected) return null;

  return (
    <Modal visible={!!selected} transparent animationType="fade" onRequestClose={() => setSelected(null)}>
      <View style={styles.modalContainer}>
        <Pressable style={styles.backdrop} onPress={() => setSelected(null)} />

        <View style={styles.modalBox}>
          {selected.linkCopied && (
            <Animated.View style={[styles.toast, { opacity: toastAnim.current }]}>
              <Octicons name="link" size={16} color="#a06e02ff"  />
              <Text style={styles.toastText}>Link Copied</Text>
            </Animated.View>
          )}

          <TouchableOpacity onPress={() => setSelected(null)} style={styles.closeBtn}>
            <Ionicons name="close-circle-outline" size={20} color="#ffa500" />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image source={selected.image} style={styles.modalImage} resizeMode="cover" />
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
            <View style={styles.modalDetails}>
              <Text style={styles.modalTitle}>Preview</Text>

              <Text style={styles.nameLabel}>Name</Text>
              <Text style={styles.modalSubTitle}>{selected.title}</Text>

              <Text style={styles.nameLabel}>Tags</Text>
              <View style={styles.tagRow}>
                <View style={styles.tag}><Text style={styles.tagText}>Nature</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Ambience</Text></View>
                <View style={styles.tag}><Text style={styles.tagText}>Flowers</Text></View>
              </View>

              <Text style={styles.descLabel}>Description</Text>
              <View style={styles.descContainer}>
                <Text style={styles.descText}>
                  Discover the pure beauty of “{selected.title}” your gateway to freshness.
                  Add this unique collection to elevate your senses and transform your screen into
                  the symphony of nature.
                </Text>
                <LinearGradient colors={['transparent', '#fff']} style={styles.textFade} pointerEvents="none" />
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={styles.iconBtn}
                  onPress={async () => {
                    await Clipboard.setStringAsync('https://example.com/' + selected.title);
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
                borderColor="#9999999f"
                onPress={() => onSaveFavorite && selected && onSaveFavorite(selected)}
              />

              <WideSaveButton
                iconName="image-outline"
                iconColor="#fff"
                buttonText="Set as Wallpaper"
                backgroundColor="#ffa500"
                borderColor="#ffa500"
                textColor="#fff"
                onPress={() => onSetWallpaper && selected && onSetWallpaper(selected)}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default WallpaperModal;
