import { SPECS } from "@/constants/Specifications";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: SPECS.colors.bg,
    },
    scroll: {
        paddingHorizontal: SPECS.spacing.md,
        paddingBottom: SPECS.spacing.lg,
    },
    center: { 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    titleBlock: {
        marginTop: SPECS.spacing.lg + 10,
        marginBottom: SPECS.spacing.md,
    },
    titleText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: SPECS.fonts.sizes.lg,
        lineHeight: 36,
    },
    subtitleText: {
        marginTop: SPECS.spacing.sm,
        color: SPECS.colors.muted,
        fontSize: SPECS.fonts.sizes.md,
        fontFamily: 'Poppins_400Regular',
    },
    sectionHeader: {
        marginTop: SPECS.spacing.lg,
        marginBottom: SPECS.spacing.sm,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 18,
        color: SPECS.colors.blacktext,
    },
    seeAll: {
        fontFamily: 'Poppins_400Regular',
        color: SPECS.colors.muted,
        fontSize: SPECS.fonts.sizes.sm + 1,
    },
    list: {
        marginTop: 6,
    },
})

export default styles