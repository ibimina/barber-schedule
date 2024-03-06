import Index from './index'
import Image from './two'
import Preference from './three'
import Payment from './four'
import Done from './five'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome6, AntDesign, Octicons, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (

            <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'none', marginBottom: 4 }, tabBarContentContainerStyle: { backgroundColor: 'none', marginBottom: 4 } }} >
                <Tab.Screen name="index" component={Index} options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FontAwesome6 name="circle-user" size={24} color="black" />

                        ) : (
                            <FontAwesome6 name="circle-user" size={24} color="black" />

                        )
                }} />
                <Tab.Screen name="two" component={Image} options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="picture" size={24} color="black" />
                        ) : (
                            <AntDesign name="picture" size={24} color="black" />
                        )
                }} />
                <Tab.Screen name="three" component={Preference} options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Octicons name="note" size={24} color="black" />
                        ) : (
                            <Octicons name="note" size={24} color="black" />
                        )
                }} />
                <Tab.Screen name="four" component={Payment} options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialIcons name="attach-money" size={24} color="black" />
                        ) : (
                            <MaterialIcons name="attach-money" size={24} color="black" />
                        )
                }} />
                <Tab.Screen name="five" component={Done} options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <Ionicons name="checkbox-outline" size={24} color="black" />
                        ) : (
                            <Ionicons name="checkbox-outline" size={24} color="black" />
                        )
                }} />
      
            </Tab.Navigator>
    );
}
