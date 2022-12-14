import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/UI/Button";
import colors from "../constants/colors";

const Participant = ({ navigation }) => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [participants, setParticipants] = useState(['']);

    const nameFieldHandler = (index) => {
        return (enteredText) => {
            participants[index] = enteredText;
            setParticipants([...participants]);
        }
    }

    const addBtnHandler = () => {
        setParticipants([...participants, ''])
    }

    const removeFieldHandler = (i) => {
        return () => {
            if (participants.length > 1) {
                participants.splice(i, 1)
                setParticipants([...participants])
            }
        }
    }

    const nextButtonHandler = () => {
        navigation.navigate('Bill');
    }

    return (
        <View style={styles.container}>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>DESCRIPTION</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    placeholder="Description"
                    value={description}
                />
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title}>DATE</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setDate}
                    placeholder="yyyy-mm-dd"
                    value={date}
                />
            </View>
            <Text style={styles.title}>ADD PARTICIPANT</Text>
            {participants.map((name, index) => {
                return (
                    <View style={styles.participantContainer}
                        key={index} >
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            onChangeText={nameFieldHandler(index)}
                            value={name}
                        />
                        <Button title={'X'} onPress={removeFieldHandler(index)} />
                    </View>
                )
            }
            )}

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title={'Add'} onPress={addBtnHandler} />
                </View>
                <View style={styles.button}>
                    <Button title={'Next'} onPress={nextButtonHandler} />
                </View>
            </View>
        </View>
    );
}

export default Participant;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        marginTop: 20,
        flex: 1,
    },
    descriptionContainer: {
        marginBottom: 24,
    },
    title: {
        fontWeight: '700',
        color: colors.primaryText,
        marginBottom: 12,
        fontSize: 18,
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
    participantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 4,
    }
});