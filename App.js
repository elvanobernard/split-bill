import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillForm from './screens/BillForm';
import Bills from './screens/Bills';
import Participant from './screens/Participant';
import SplitBill from './screens/SplitBill';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Bills} />
          <Stack.Screen name='Add Detail' component={Participant} />
          <Stack.Screen name='Bill' component={SplitBill} />
          <Stack.Screen name='Bill Item' component={BillForm} />
        </Stack.Navigator>
        {/* <Bills /> */}
        {/* <Participant /> */}
        {/* <SplitBill /> */}
        {/* <BillForm /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // marginTop:,
  },
});
