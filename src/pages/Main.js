import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'
import api from '../services/api'

function Main({navigation}) {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/')
            setUsers(response.data)
        }

        loadUsers()
    }, [])


    return (
        <ScrollView >
            <View style={styles.mainScreen}>
                {users.map(user => (
                    <TouchableOpacity style={styles.userBox} onPress={() => {
                        navigation.navigate('Profile', {username: user.login})
                    }}>
                        <Image style={styles.avatar} source={{uri: user.avatar_url}}></Image>
                        <Text style={styles.login}>{user.login}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    userBox: {
        borderRadius: 5,
        margin: 10,
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: 200,
        backgroundColor: '#3B5998'
    },
    login: {
        marginLeft: 10,
        color: '#fff'
    },
    mainScreen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 15,
        marginLeft: 10,
        height: 35,
        width: 35
    }
})

export default Main