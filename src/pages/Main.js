import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import api from '../services/api'

function Main() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/')
            setUsers(response.data)
        }

        loadUsers()
    }, [])


    return (
        users.map(user => (
            <View>
                <Text>{user.login}</Text>
            </View>
        ))
    )
}

const styles = StyleSheet.create({

})

export default Main