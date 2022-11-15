import { View, Text, StyleSheet } from "react-native";
import SmallButton from "./UI/SmallButton";

const BillItem = () => {
    return (
        <>
            <View style={styles.upperSection}>
                <Text style={styles.title}>Terong Goreng</Text>
                <View style={styles.buttonContainer}>
                    <SmallButton title={'Edit'} />
                    <SmallButton title={'Delete'} />
                </View>
            </View>
            <View style={styles.midSection}>
                <View style={styles.allocationItem}>
                    <Text>Cicool</Text>
                    <Text>IDR 2,500</Text>
                </View>
                <View style={styles.allocationItem}>
                    <Text>Bean</Text>
                    <Text>IDR 2,500</Text>
                </View>
            </View>
            <View style={styles.lowerSection}>
                <Text style={styles.totalPrice}>IDR 5,000</Text>
            </View>
        </>
    );
};

export default BillItem;

const styles = StyleSheet.create({
    upperSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        flex: 3,
        fontSize: 18,
        fontWeight: '700',
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    midSection: {
        borderTopColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        paddingVertical: 14,
        marginVertical: 8,
    },
    allocationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    lowerSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: '500',
    }
});