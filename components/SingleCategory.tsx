import styles from '@/Stylesheets/SingleCategoryStylesheet';
import { WallpaperCardProps } from '@/type';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SingleCategory = ({ image, title, id, liked = false, onPress }: WallpaperCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{`${title} ${id}`}</Text>
        <Text style={styles.subtitle}>{title}</Text> 
      </View>
      <View style={styles.likedIconPosioning}>
        {liked ? (
          <View style={styles.heartContainerActive}>
            <Ionicons name="heart" size={18} color="#FF6A88" />
          </View>
        ) : (
          <View style={styles.heartContainerInactive}>
            <Ionicons name="heart-outline" size={18} color="#fff" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SingleCategory;
