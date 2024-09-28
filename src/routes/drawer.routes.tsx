import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes';
import Settings from '../screens/Settings'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
         backgroundColor: 'black',
         width: 240,
        },
         drawerActiveTintColor: 'white',
         drawerInactiveTintColor: 'gray',
      }}
    >
     <Drawer.Screen
       name="home"
       component={TabRoutes}
       options={{
        drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
	drawerLabel: "inicio",
	drawerLabelStyle: { color: 'white' },
	headerStyle: {
        backgroundColor: 'black',
      },
        headerTintColor: 'white',
       }}
     />

     <Drawer.Screen
       name="settings"
       component={Settings}
       options={{
         drawerIcon: ({ color, size }) => <Feather name="settings" color={color} size={size}/>,
         drawerLabel: "configuracões",
         headerStyle: { backgroundColor: 'black', },
        headerTintColor: 'white',
       }}
     />
    </Drawer.Navigator>
  )
}
