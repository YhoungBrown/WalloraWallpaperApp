import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");


export const wp = (percentage: number): number => (width * percentage) / 100;
export const hp = (percentage: number): number => (height * percentage) / 100;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContent: {
    paddingHorizontal: wp(4),
  },
  ViewType: {
    marginTop: hp(-2), 
    marginBottom: hp(2), 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  ViewTypeArrangement: {
    flexDirection: 'row',
    gap: wp(2),
    marginLeft: 'auto',
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
