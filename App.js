import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BillForm from './screens/BillForm';
import Bills from './screens/Bills';
import Participant from './screens/Participant';
import SplitBill from './screens/SplitBill';

export default function App() {
  return (
    <View style={styles.container}>
      <Bills />
      {/* <Participant /> */}
      {/* <SplitBill /> */}
      {/* <BillForm /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    marginTop: 60,
  },
});
