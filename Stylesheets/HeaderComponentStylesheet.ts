import { SPECS } from "@/constants/Specifications";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: SPECS.colors.bg,
        padding: SPECS.spacing.sm,
        elevation: 1,
        borderBottomWidth: 5,
        borderBottomColor: '#0000'
    },
    logoRow: { 
        flexDirection: 'row', 
        alignItems: 'center',
    },
    logoMark: {
        width: 36,
        height: 36,
        borderRadius: SPECS.spacing.md - 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
       
    },
    logoMarkInner: {
        width: 28,
        height: 28,
        borderRadius: 8,
    },
    logoText: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    appName: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: SPECS.fonts.sizes.sm + 2,
        color: SPECS.colors.blacktext,
    },
    menuIcon: {
        padding: SPECS.spacing.xs - 2,
    },
})

export default styles;