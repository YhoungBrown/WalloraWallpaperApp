import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");


const wp = (percentage: number): number => (width * percentage) / 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(4),
    },
   
})

export default styles;