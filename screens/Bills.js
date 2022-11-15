import { StyleSheet, Text, View, ScrollView } from "react-native";
import BillSummary from "../components/BillSummary";
import Button from "../components/UI/Button";

import colors from "../constants/colors";


const dummy_data = [
    {
        id: 1,
        description: 'Spesial Sambal',
        date: '2022-11-14',
        amount: 251000,
    },
    {
        id: 2,
        description: 'Ropang Yuk',
        date: '2022-11-14',
        amount: 125000,
    },
    {
        id: 3,
        description: 'Lung Kee',
        date: '2022-11-14',
        amount: 90000,
    },
]

const Bills = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Text style={styles.pageTitle}>ALL BILLS</Text>
                <Button title={'Add New'}/>
            </View>
            <ScrollView style={styles.scrollContainer}>
            {dummy_data.map(data => <BillSummary key={data.id} description={data.description} date={data.date} amount={data.amount} />)}
            </ScrollView>
        </View>)
};

export default Bills;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        flex: 1,
    },
    upperContainer: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    pageTitle: {
        fontWeight: '900',
        fontSize: 20,
        color: colors.primaryText
    },
    scrollContainer: {
        // flex: 1,
        // marginBottom: 20,
    }
});