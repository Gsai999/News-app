import { createStackNavigator } from "@react-navigation/stack";

import React from "react";

import Home from "../Screen/Home";
import Readnews from "../Screen/Readnews";

const Stack = createStackNavigator();


function Homenavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='read-news' component={Readnews} />

    </Stack.Navigator>

  )
}

export default Homenavigator