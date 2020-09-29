import React, {useEffect, useState} from 'react'
import { View, Text, Image } from 'react-native'
import api from '../services/api'

function Profile({navigation}) {
    const [userInfo, setUserInfo] = useState([])
    const userLogin = navigation.getParam('username')

    useEffect(() => {
        async function loadUserInfo() {
            const response = await api.get(`/${userLogin}`)
            setUserInfo(response.data)
        }

        loadUserInfo()
    }, [])

    return(
        <View style={styles.screen}>
            <Text>{userInfo.login}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Profile