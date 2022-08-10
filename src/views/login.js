import { View, Text, TouchableOpacity, ImageBackground , Dimensions} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const windowsWidth = Dimensions.get('window').width
const windowsHeight = Dimensions.get('window').height
const login = () => {
  return (
    <ImageBackground style = {{height: '100%', width: '100%'}} source ={require('../image/bg.jpg')} resizeMode = 'stretch'>
        <View  style = {{height: '100%', width: '100%',}}>
            <View style = {{width: '100%', height: '20%', backgroundColor: 'red', marginTop: 0.3 * windowsHeight, alignItems: 'center', justifyContent: 'space-between'}}>
                <View style = {{width: '70%', height: 30, flexDirection: 'row',  alignItems: 'center'}}>
                    <Text style = {{color: 'white'} }>Email</Text>
                    <TextInput style = {{height: '100%', width: '70%', borderBottomColor: 'white', borderBottomWidth: 1 }}/>
                </View>
            </View>
        </View>
    </ImageBackground>
  )
}

export default login