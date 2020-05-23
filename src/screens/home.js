import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import {WallpaperList} from './wallpaperList'
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{marginTop: '5%', fontSize: 20, fontWeight: 'bold'}}>ESTO ES TITLE</Text>
                </View>
                <View style={{flex:7, flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{flex:0.5}}/>
                        <View style={{flex:7, backgroundColor: 'blue', borderBottomRightRadius: 30, borderTopRightRadius: 30}}>
                            <View style={{flex:1}}>
                                <Ionicons name='ios-menu' size={40} style={{alignSelf: 'center', marginTop: '5%', marginRight: '10%'}}/>
                            </View>
                            <View style={{flex:1}}>
                                <Ionicons name='ios-menu' size={40} style={{alignSelf: 'center', marginRight: '10%'}}/>
                            </View>
                            <View style={{flex:5, backgroundColor: 'green'}}>
                                <Text style={{fontSize: 30}}> CATEGORIAS </Text>
                            </View>
                            <View style={{flex:1}}>
                                <Ionicons name='ios-settings' size={40} style={{alignSelf: 'center', marginTop: '15%', marginRight: '10%'}}/>
                            </View>
                        </View>
                        <View style={{flex:1}}/>
                    </View>
                    <View style={{flex: 6}}>
                        <WallpaperList/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    title:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });