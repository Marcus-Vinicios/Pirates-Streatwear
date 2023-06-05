import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AddTenis from '../screens/AddTenis';
import DeleteTenis from '../screens/DeleteTenis';
import EditTenis from '../screens/EditTenis';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createNativeStackNavigator()
function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login} />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} />
            <Stack.Screen
                name="NovoTenis"
                options={{ headerShown: false }}
                component={AddTenis} />
            <Stack.Screen
                name="EditarTenis"
                options={{ headerShown: false }}
                component={EditTenis} />
            <Stack.Screen
                name="DeleteTenis"
                options={{ headerShown: false }}
                component={DeleteTenis} />
            <Stack.Screen
                name="Signup"
                options={{ headerShown: false }}
                component={Signup} />

        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
}