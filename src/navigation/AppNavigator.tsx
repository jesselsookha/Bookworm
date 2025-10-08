import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EnterBookScreen from '../screens/EnterBookScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ClassificationScreen from '../screens/ClassificationScreen';

export type RootStackParamList = {
  Home: undefined;
  EnterBook: undefined;
  History: undefined;
  Classification: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigator() {
   return(   
      <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="EnterBook" component={EnterBookScreen} />
         <Stack.Screen name="History" component={HistoryScreen} />
         <Stack.Screen name="Classification" component={ClassificationScreen} />
      </Stack.Navigator>
   );
}

export default AppNavigator;
