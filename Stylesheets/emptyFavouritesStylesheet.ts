import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");


const wp = (percentage: number) => (width * percentage) / 100;
const scale = (size: number) => (width / 375) * size; 
const verticalScale = (size: number) => (height / 812) * size; 


const styles = StyleSheet.create({
  bodyContent: {
    alignItems: 'center',
  },
  emptyImage: {
    width: wp(70),  
    height: wp(70), 
    resizeMode: 'contain',
    marginTop: verticalScale(-50),
  },
  bodyContainer: {
    marginTop: verticalScale(-50),
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: scale(18),
    textAlign: 'center',
  },
  bodyText: {
    fontFamily: "Poppins_400Regular",
    fontSize: scale(12),
    marginTop: verticalScale(5),
    color: SPECS.colors.muted,
    textAlign: 'center',
  },
  browseBtn: {
    backgroundColor: '#ffa500',
    paddingVertical: verticalScale(12),
    paddingHorizontal: wp(10),
    marginTop: verticalScale(15),
    borderRadius: scale(18),
    alignItems: 'center', 
  },
  btnText: {
    color: SPECS.colors.whitetext,
    fontSize: scale(14),
    fontFamily: "Poppins_600SemiBold",
    textAlign: 'center',
  }
});

export default styles;
