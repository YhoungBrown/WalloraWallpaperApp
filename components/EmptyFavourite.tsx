import styles from '@/Stylesheets/emptyFavouritesStylesheet';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const EmptyFavourite = () => {

  return (
    <View style={styles.bodyContent}>
      <Image
        source={require('../assets/images/emptysaveIcon2.png')}
        style={styles.emptyImage} 
      />

      <View style={styles.bodyContainer}>
        <Text style={styles.subtitle}>
            No Saved Wallpaper
        </Text>
        <Text style={styles.bodyText}>
            start saving your favourites wallpapers to see them here
        </Text>

        <Link href='/(Drawer)/browse' asChild>
            <TouchableOpacity 
                style={styles.browseBtn}
            >
            <Text style={styles.btnText}>
                Browse Wallpapers
            </Text>
        </TouchableOpacity>
        </Link>
        
      </View>

      </View>

  );
}

export default EmptyFavourite;
