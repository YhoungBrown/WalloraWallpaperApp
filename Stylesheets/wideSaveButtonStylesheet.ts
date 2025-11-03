import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 812) * size;

const styles = StyleSheet.create({
  saveBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    borderRadius: scale(12),
    borderWidth: scale(1.2), 
    marginTop: verticalScale(8),
  },
  saveBtnText: {
    fontFamily: "Poppins_600SemiBold",
    marginLeft: scale(6),
    fontSize: scale(14),
  },
});

export default styles;
