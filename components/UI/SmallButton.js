import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const SmallButton = ({title, onPress}) => {
    return <Pressable 
        style={({pressed}) => [styles.smallButton, pressed && styles.pressed]}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
}

export default SmallButton;

const styles = StyleSheet.create({
    smallButton: {
        padding: 7,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary500,
        borderRadius: 5
    },
    pressed: {
        backgroundColor: colors.primary700,
    },
    title: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 12,
    }
})