import React from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
const wallpapers = [
    {id: 1, src:require('../../assets/JPEG_20200518_215654.jpg'), name: 'wallpaper 1'},
    {id: 2, src:require('../../assets/Sin título 2.png'), name: 'wallpaper 2'},
    {id: 3, src:require('../../assets/Sin título 3.png'), name: 'wallpaper 3'},
    {id: 4, src:require('../../assets/6D158F8E-8F36-409E-BA60-EA8D2632069C.png'), name: 'wallpaper 4'}
]

const renderItem = (item, index) => {
        return(
        <View>
            <Image
                source={item.src}
                style={{height: 180, width: 90}}
            />
        </View>
    )
}


const WallpaperList = () => {
    return(
        <View style={styles.container}>
            <FlatList
                data={wallpapers}
                renderItem={({item, index}) => renderItem(item,index)}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export {WallpaperList}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        padding: '5%',
    }
})