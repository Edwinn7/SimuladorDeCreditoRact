import {StyleSheet, Text, View,Image } from 'react-native';
import { myStyle } from '../assets/styles/MyStyles';
export default function Header(props){
    return(
        <View style={myStyle.ViewHeader}>
            {/* <Text>Banner</Text> */}
            <Image
                source={require(`../assets/images/${props.src}`)}
                style={{width:'100%', height:'100%'}}
            />
        </View>
    )
}
