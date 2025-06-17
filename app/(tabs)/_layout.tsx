import { icons } from '@/constants'
import { Tabs } from 'expo-router'
import { Image, ImageSourcePropType, Text, View } from 'react-native'

const TabIcon = ({icon,color,name,focused}:{
    icon: ImageSourcePropType,
    color:string,
    name:string,
    focused:boolean
})=>{
    return (
        
    <View className='items-center justify-center gap-1 px-1 min-w-[60px]'>
            <Image source={icon} resizeMode="contain" tintColor={color} className='w-5 h-5'/>
            <Text className={`${focused ? 'font-psemibold text-[#FF9C01]':'font-pregular text-[#cdcde0]'} text-xs `} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#fdfdfd',
        tabBarInactiveTintColor:'#cdcde0',
        tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:89,
            paddingTop:5,
        },
        tabBarItemStyle:{
            width: 'auto',
      minWidth: 80,
        }
    }}>
      <Tabs.Screen name="home" options={{
        title:"Home",
        headerShown:false,
        tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
            />
        )
      }}/>
      <Tabs.Screen name="bookmark" options={{
        title:"BookMark",
        headerShown:false,
        tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name="BookMark"
            />
        )
      }}/>
      <Tabs.Screen name="create" options={{
        title:"Create",
        headerShown:false,
        tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Create"
            />
        )
      }}/>
      <Tabs.Screen name="profile" options={{
        title:"Profile",
        headerShown:false,
        tabBarIcon:({color,focused}) =>(
            <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name="Profile"
            />
        )
      }}/>
    </Tabs>
  )
}

export default TabsLayout
