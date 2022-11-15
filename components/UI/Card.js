import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        // borderColor: colors.primaryText,
        // borderWidth: 1,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2,},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        marginBottom: 16,
    }
});