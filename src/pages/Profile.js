import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text, Image } from 'react-native'
import api from '../services/api'

function Profile({ navigation }) {
    const [userInfo, setUserInfo] = useState([])
    const userLogin = navigation.getParam('username')

    useEffect(() => {
        async function loadUserInfo() {
            const response = await api.get(`/${userLogin}`)
            setUserInfo(response.data)
        }

        loadUserInfo()
    }, [])

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Image style={styles.avatar} source={{ uri: userInfo.avatar_url }}></Image>
                <Text style={styles.login}>{userInfo.login}</Text>
            </View>
            <Text style={styles.infoHeader}>User Info:</Text>
            <Text style={styles.info}>Name: {userInfo.name}</Text>
            <Text style={styles.info}>Bio: {userInfo.bio}</Text>
            <Text style={styles.info}>Location: {userInfo.name}</Text>
            <Text style={styles.info}>Blog: {userInfo.blog}</Text>
            <Text style={styles.info}>Followers: {userInfo.followers}</Text>
            <Text style={styles.info}>Public Repositories: {userInfo.public_repos}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#3B5998'
    },
    login: {
        fontSize: 25,
        marginLeft: 50,
        color: '#FFF',
        fontWeight: 'bold'
    },
    avatar: {
        borderRadius: 50,
        height: 100,
        width: 100
    },
    header: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    info: {
        marginTop: 10,
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    },
    infoHeader: {
        color: '#AAA',
        fontSize: 24
    }
})

export default Profile