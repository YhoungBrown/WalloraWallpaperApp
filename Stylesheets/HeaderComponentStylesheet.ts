import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");


const wp = (percentage: number): number => (width * percentage) / 100;
const hp = (percentage: number): number => (height * percentage) / 100;



const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: SPECS.colors.bg,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    elevation: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#00000010",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoMark: {
    width: wp(9), 
    height: wp(9),
    borderRadius: SPECS.radius.md - 4,
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp(2.5),
    marginBottom: wp(3)
  },
  logoMarkInner: {
    width: wp(7),
    height: wp(7),
    borderRadius: SPECS.radius.md - 8,
  },
  logoText: {
    fontSize: RFValue(30, 680), 
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  appName: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: SPECS.fonts.sizes.sm + 2,
    color: SPECS.colors.blacktext,
  },
  menuIcon: {
    padding: wp(1.5), 
  },
});

export default styles;
