import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPECS.colors.bg,
    paddingTop: SPECS.spacing.lg + (width * 0.07),
  },
  menu: {
    flex: 1,
  },
  label: {
    fontSize: SPECS.fonts.sizes.md,
    color: "#000",
    fontFamily: "Poppins_500Medium",
  },
  activeLabel: {
    color: "#FF6A88",
    fontWeight: "600",
  },
  activeItem: {
    backgroundColor: "rgba(255,106,136,0.08)",
  },
  divider: {
    height:  Math.max(1, width * 0.002),
    backgroundColor: "#EAEAEA",
    marginHorizontal: width * 0.04,
  },
  customRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.02, 
    paddingHorizontal: width * 0.04, 
    marginBottom: width * 0.025, 
  },
  customLabel: {
    fontSize: SPECS.fonts.sizes.md,
    fontFamily: "Poppins_500Medium",
    color: "#111",
    flexShrink: 1, 
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.035, 
    flexWrap: "wrap", 
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: width * 0.035, 
    paddingVertical: width * 0.025, 
    paddingHorizontal: width * 0.035, 
    borderRadius: 50,
    flexShrink: 1, 
  },
  itemContainer: {
    marginBottom: width * 0.015, 
    paddingHorizontal: width * 0.025,
  },
  itemOuterContainer: {
    marginVertical: width * 0.012,
  },
});

export default styles;
