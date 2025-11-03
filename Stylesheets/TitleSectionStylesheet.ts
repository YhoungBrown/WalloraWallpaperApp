import { SPECS } from "@/constants/Specifications";
import { Dimensions, StyleSheet } from "react-native";


const { height } = Dimensions.get("window");



const hp = (percentage: number): number => (height * percentage) / 100;




const styles = StyleSheet.create({
    titleBlock: {
        marginTop: hp(5),
        marginBottom: hp(2),
    },
    titleText: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: SPECS.fonts.sizes.lg,
        lineHeight: 36,
        color: SPECS.colors.blacktext,
    },
    subtitleText: {
        marginTop: hp(1),
        color: SPECS.colors.muted,
        fontSize: SPECS.fonts.sizes.md,
        fontFamily: "Poppins_400Regular",
    },
})

export default styles;