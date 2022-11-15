import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const Button = ({title, onPress}) => {
    return <Pressable 
        style={({pressed}) => [styles.button, pressed && styles.pressed]}
        onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
}

export default Button;

const styles = StyleSheet.create({
    button: {
        padding: 9,
        paddingHorizontal: 16,
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

    }
})