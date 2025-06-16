import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View className='flex-1 items-center flex justify-center'>
      <Text>HomePage</Text>
      <Link href={"/profile"}>Profile</Link>
    </View>
  )
}

export default HomePage
