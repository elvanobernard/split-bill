import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import colors from "../constants/colors";

const dummy_data = ['Cicool', 'Chadto', 'Elvano', 'Kogan', 'Coach', ];

const getAllocationFields = (data) => {
    const allocationFields = [];
    const limit = Math.floor(data.length / 2);
    for(let i = 0; i < limit; i ++){
        const result = (
            <View style={styles.allocContainer}>
                <View style={styles.allocField}>
                    <TextInput 
                    style={styles.allocInput}
                    keyboardType='numeric'
                    maxLength={2}
                    />
                    <Text style={styles.allocLabel}>{data[i * 2]}</Text>
                </View>
                <View style={styles.allocField}>
                    <TextInput 
                    style={styles.allocInput}
                    keyboardType='numeric'
                    maxLength={2}
                    />
                    <Text style={styles.allocLabel}>{data[(i * 2) + 1]}</Text>
                </View>
            </View>
        );
        allocationFields.push(result);
    } 
    if(data.length % 2 == 1){
        allocationFields.push(
            <View style={styles.allocContainer}>
                <View style={styles.allocField}>
                    <TextInput 
                    style={styles.allocInput}
                    keyboardType='numeric'
                    maxLength={2}
                    />
                    <Text style={styles.allocLabel}>{data[data.length - 1]}</Text>
                </View>
                <View style={styles.allocField}>
                </View>
            </View>
        )
    };
    return allocationFields;
}

const BillForm = () => {


    return (
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>BILL ITEM</Text>
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>DESCRIPTION</Text>
                    <TextInput 
                        style={styles.input}
                        // onChangeText={descriptionFieldHandler}
                        placeholder="Description"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>AMOUNT</Text>
                    <TextInput 
                        style={styles.input}
                        keyboardType='numeric'
                        // onChangeText={descriptionFieldHandler}
                        placeholder="Amount"
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>ALLOCATION</Text>
                    {getAllocationFields(dummy_data)}
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" />
                    </View>
                    <View style={styles.button}>
                        <Button title="FINISH" />
                    </View>
                </View>
            </View>
        </>
    )
}

export default BillForm;



const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        minHeight: '75%',
        flex: 1,
    },
    titleContainer: {
        marginBottom: 24,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.primaryText,
        fontWeight: '900',
    },
    
    fieldLabel: {
        fontWeight: '700',
        color: colors.primaryText,
        marginBottom: 12,
        fontSize: 18,
    },
    fieldContainer: {
        marginBottom: 24,
    },
    input: {
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        paddingHorizontal: 16,
        fontSize: 16,
        minWidth: '80%',
    },
    footer: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        elevation: 4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginHorizontal: 5,
    },
    allocContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    allocField: {
        flexDirection: 'row',
        flex: 1,
        maxWidth: '50%',
        overflow: 'hidden',
    },
    allocInput: {
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        paddingHorizontal: 8,
        fontSize: 12,
        textAlign: 'center',
        marginRight: 16,
    },
});