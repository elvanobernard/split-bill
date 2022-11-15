import { View, StyleSheet, Text, Pressable } from "react-native";
import colors from "../constants/colors";

const BillSummary = ({description, amount, date}) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{color: colors.primary700}}>
                <View style={styles.innerContainer}>
                    <View>
                        <Text style={styles.textMain}>
                            {description}
                        </Text>
                        <Text style={styles.text}>
                            {date}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.textMain}>{amount}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default BillSummary;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary500,
        marginBottom:10,
        borderRadius: 10,
        overflow: "hidden",
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 16,
    },
    textMain: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 16
    },
    text: {
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 14,
    },
});