import styles from '@/Stylesheets/CustomDrawerComponentStylesheet';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomDrawer(props: any) {
  const { state, navigation, descriptors } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { title, drawerLabel } = descriptors[route.key].options;

        
        const iconMap: Record<string, string> = {
          index: 'home-outline',
          browse: 'grid-outline',
          favourites: 'heart-outline',
          settings: 'settings-outline',
        };

        const iconName = iconMap[route.name] || 'ellipse-outline';

        return (
          <View key={route.key}style={styles.itemOuterContainer}>
            <View style={styles.itemContainer}>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate(route.name)}
                    activeOpacity={0.5}
                    style={[
                    styles.item,
                    isFocused && styles.activeItem,
                    ]}
                >
                    <Ionicons
                        name={iconName as any}
                        size={22}
                        color={isFocused ? '#FF6A88' : '#111'}
                    />
                        <Text style={[
                            styles.label, isFocused && styles.activeLabel]}
                        >
                            {drawerLabel ?? title ?? route.name}
                        </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />
          </View>
        );
      })}
    </DrawerContentScrollView>
  );
}
