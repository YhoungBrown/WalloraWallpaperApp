export const SPECS = {
  spacing: { xs: 8, sm: 12, md: 16, lg: 24 },
  radius: { md: 16, lg: 20 },
  colors: {
    blacktext: '#000000',
    whitetext: '#ffffff',
    muted: '#7A7A7A',
    bg: '#FFFFFF',
    gradientTitle:['#FF6A88', '#FF9A8B'] ,
    chipBg: 'rgba(255,255,255,0.12)',
  },
  fonts: {
    family: 'Poppins',
    sizes: { sm: 13, md: 16, lg: 28, xl: 34 },
  },
};

export const CATEGORIES = [
  {
    id: 'nature',
    title: 'Nature',
    subtitle: 'Mountains, Forest and Landscapes',
    count: 3,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'abstract',
    title: 'Abstract',
    subtitle: 'Modern Geometric and artistic designs',
    count: 4,
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'city',
    title: 'Cityscapes',
    subtitle: 'Urban photos & skylines',
    count: 5,
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'food',
    title: 'Food',
    subtitle: 'Delicious dishes, drinks, and ingredients',
    count: 7,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'technology',
    title: 'Technology',
    subtitle: 'Gadgets, innovation, and futuristic concepts',
    count: 5,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'people',
    title: 'People',
    subtitle: 'Portraits and human moments',
    count: 4,
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'travel',
    title: 'Travel',
    subtitle: 'Beautiful destinations around the world',
    count: 8,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'space',
    title: 'Space',
    subtitle: 'Stars, galaxies, and cosmic beauty',
    count: 3,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    subtitle: 'Design, structures, and buildings',
    count: 6,
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'fashion',
    title: 'Fashion',
    subtitle: 'Style, clothing, and trends',
    count: 5,
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'sports',
    title: 'Sports',
    subtitle: 'Athletics, fitness, and motion',
    count: 4,
    image: 'https://th.bing.com/th/id/OIP.aYgNIVDOVHbA3CcmnwgMZQHaE8?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
  {
    id: 'ocean',
    title: 'Ocean',
    subtitle: 'Beaches, waves, and marine life',
    count: 3,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'vintage',
    title: 'Vintage',
    subtitle: 'Classic, retro, and nostalgic vibes',
    count: 2,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'minimal',
    title: 'Minimalism',
    subtitle: 'Clean lines, simplicity, and focus',
    count: 4,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=60',
  },
  {
    id: 'animals',
    title: 'Animals',
    subtitle: 'Wildlife, pets, and creatures of the earth',
    count: 6,
    image: 'https://th.bing.com/th/id/OIP.iCcpkvsTETnpysSqnVFHXgHaFk?w=218&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
];

//'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60'

export const NATURE = [
  {
    id: '1',
    title: 'Nature',
    image: require('../assets/images/nature.jpeg'),
    liked: false
  },
   { 
    id: '2', 
    title: 'Nature ', 
    image: require('../assets/images/beautifel.jpg'), 
    liked: true 
  },
  { 
    id: '3', 
    title: 'Nature', 
    image: require('../assets/images/nature.jpeg'), 
    liked: false 
  },
  { 
    id: '4', 
    title: 'Nature', 
    image: require('../assets/images/park.jpg'), 
    liked: false 
  }
];

export const ABSTRACT = [
  {
    id: '1',
    title: 'Abstract',
    image: require('../assets/images/abstracts.jpg'),
     liked: false
  },
  {
  id: '2',
  title: 'Abstract',
  image: require('../assets/images/abstract2.jpg'),
  liked: true,
},
{
  id: '3',
  title: 'Abstract',
  image: require('../assets/images/abstract2.jpg'),
  liked: false
},
{
  id: '4',
  title: 'Abstract',
  image: require('../assets/images/abstracts.jpg'),
  liked: false
},
];

export const CITY = [
  {
    id: '1',
    title: 'Cityscapes',
    image: require('../assets/images/city1.jpeg'),
    liked: false
  },
  {
  id: '2',
  title: 'City',
  image: require('../assets/images/city2.jpg'),
  liked: true
},
{
  id: '3',
  title: 'City',
  image: require('../assets/images/city3.jpeg'),
  liked: false
},
{
  id: '4',
  title: 'City',
  image: require('../assets/images/city2.jpg'),
  liked: false
},
]