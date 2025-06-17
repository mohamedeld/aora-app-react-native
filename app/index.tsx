import { Link } from 'expo-router'
import { StatusBar, Text, View } from 'react-native'

const App = () => {
  return (
    <View className='flex-1 items-center flex justify-center font-pblack'>
      <Text>HomePage</Text>
      <Link href="/(tabs)/bookmark">Book mark</Link>
      <StatusBar barStyle={"default"} />
    </View>
  )
}

export default App
