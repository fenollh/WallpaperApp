import React from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
const wallpapers1 = [
    {id: 1, src:require('../../assets/foto1.jpg'), name: 'wallpaper 1'},
    {id: 2, src:require('../../assets/foto2.png'), name: 'wallpaper 2'},
    {id: 3, src:require('../../assets/foto3.png'), name: 'wallpaper 3'},
    {id: 4, src:require('../../assets/foto4.png'), name: 'wallpaper 4'},

]
const wallpapers2 = [
    {id: 2, src:require('../../assets/foto2.png'), name: 'wallpaper 2'},
    {id: 4, src:require('../../assets/foto4.png'), name: 'wallpaper 4'}
]

const renderItem = (item, index) => {
        return(
        <View style={{margin: '5%',}}>
            <Image
                source={item.src}
                style={{
                    height: 180, width: 90, borderColor:'black', borderWidth:2
                }}
            />
        </View>
    )
}


const WallpaperList = () => {
    return(
        <View style={styles.container}>
            <FlatList
                style={{flex:1}}
                data={wallpapers1}
                numColumns={2}
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
        padding: '5%',
        flexDirection: 'row'
    }
})