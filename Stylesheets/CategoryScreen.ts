import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;

const scale = (size: number) => (width / 375) * size;
const verticalScale = (size: number) => (height / 812) * size;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPECS.colors.bg,
  },
  contentContainer: {
    paddingHorizontal: scale(18),
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginBottom: wp(3),
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
  backarrowSection: {
    flexDirection: "row",
    gap: scale(5),
    alignItems: "center",
    marginTop: verticalScale(30),
  },
  backText: {
    fontSize: scale(13),
    fontFamily: "Poppins_400Regular",
    color: SPECS.colors.muted,
  },
  header: {
    marginBottom: verticalScale(10),
    marginTop: verticalScale(30),
  },
  heading: {
    fontSize: scale(30),
    fontFamily: "Poppins_400Regular",
    color: "#111",
  },
  

});

export default styles;
