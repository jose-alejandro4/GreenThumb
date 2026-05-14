import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Loading from './src/screens/Loading';
import CategorySelect from './src/screens/CategorySelect';
import Plants from './src/screens/Plants';
import Supplies from './src/screens/Supplies';
import Cart from './src/screens/Cart';
import PlantDetails from './src/screens/PlantDetails';
import SupplyDetails from './src/screens/SupplyDetails';
import Success from './src/screens/Success';

const Stack = createNativeStackNavigator();

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CategorySelect" component={CategorySelect} />

        <Stack.Screen name="Plants">
          {(props) => <Plants {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="Supplies">
          {(props) => <Supplies {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="Cart">
          {(props) => <Cart {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="PlantDetails" component={PlantDetails} />
        <Stack.Screen name="SupplyDetails" component={SupplyDetails} />

        <Stack.Screen name="Success">
          {(props) => <Success {...props} setCart={setCart} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}