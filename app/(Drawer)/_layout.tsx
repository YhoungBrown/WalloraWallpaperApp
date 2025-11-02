import CustomDrawer from '@/components/CustomDrawer';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerType: 'front',
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerStyle: {
          width: '70%',
          backgroundColor: '#fff',
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="browse"
        options={{
          drawerLabel: 'Browse',
          title: 'Browse',
        }}
      />
      <Drawer.Screen
        name="favourites"
        options={{
          drawerLabel: 'Favourites',
          title: 'Favourites',
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
        }}
      />
    </Drawer>
  );
}
