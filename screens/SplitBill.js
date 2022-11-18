import { View, StyleSheet, Text, ScrollView } from "react-native";
import BillItem from "../components/BillItem";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import colors from "../constants/colors";

const SplitBill = ({ navigation }) => {

    const addBtnHandler = () => {
        navigation.navigate('Bill Item');
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>SPESIAL SAMBAL</Text>
                    <Text style={styles.date}>November 14, 2022</Text>
                </View>
                <ScrollView>
                    <Card><BillItem /></Card>
                    <Card><BillItem /></Card>
                    <Card><BillItem /></Card>
                </ScrollView>

            </View>
            <View style={styles.footer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.grandTotal}>Total: IDR 251,000</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addBtnHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="FINISH" />
                    </View>
                </View>
            </View>
        </>
    );
}

export default SplitBill;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 20,
        minHeight: '75%',
        flex: 1,
    },
    titleContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.primary500,
        fontWeight: '900',
    },
    date: {
        fontSize: 16,
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        elevation: 4,
    },
    totalContainer: {
        // flex: ,
    },
    grandTotal: {
        fontWeight: '700',
        fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginHorizontal: 5,
    }
});