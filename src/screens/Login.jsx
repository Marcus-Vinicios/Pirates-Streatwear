import React, { useState } from 'react'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import themes from '../themes'
import styles from '../themes/styles'

// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth } from '../../config/firebase'

export default function Login() {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [efetuandoLogin, setEfetuandoLogin] = useState(false)

    function handleLogin() {
        //Efetuando as validações básicas do form
        if (email === '' || senha === '' || userName === '') {
            Alert.alert('Atenção!',
                'Informe um nome de usuário, email e senha para efetuar o login')
            return
        }
        if (senha.length < 6) {
            Alert.alert('Atenção!',
                'A senha deve ter no mínimo 6 caracteres')
            return
        }
        if (userName.includes()) {
            Alert.alert('Atenção!',
                'O nome de usuário não pode conter caracteres especiais')
            return
        }
        setEfetuandoLogin(true)
            if (email != ''){
                console.log(userName)
                console.log(email)
                console.log(senha)
                Alert.alert('Login efetuado com sucesso!')
                navigation.navigate('Home')
            }
            else {
                Alert.alert('Erro',
                    `Erro ao efetuar o login: ${error.message}`)
            }
        // signInWithEmailAndPassword(auth, email, senha)
        //     .then((userCredential) => {
        //         const user = userCredential.user
        //         console.log(user)
        //         navigation.navigate('Home')
        //     })
        //     .catch((error) => {
        //         Alert.alert('Erro',
        //             `Erro ao efetuar o login: ${error.message}`)
        //     })
        setEfetuandoLogin(false)
    }

    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            backgroundColor: themes.colors.neutral.background,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.login.container}>
                <Text style={styles.login.titulo}>Login</Text>

                <View style={styles.login.form}>
                <Text style={styles.login.label}>Username</Text>
                    <TextInput
                        placeholder="Digite seu nome de usuário"
                        style={styles.login.input}
                        value={userName}
                        onChangeText={setUserName} />
                    
                    <Text style={styles.login.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        style={styles.login.input}
                        value={email}
                        onChangeText={setEmail}
                        autoCompleteType="email" />

                    <Text style={styles.login.label}>Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha'
                        style={styles.login.input}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry />

                    <TouchableOpacity style={styles.login.button}
                        onPress={handleLogin}>
                        <Text style={styles.login.button.ButtonText}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>
                        <Text>
                            Ainda não é usuário? Registre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}