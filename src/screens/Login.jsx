import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'
import React, { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { auth } from '../config/firebase'
import themes from '../themes'
import styles from '../themes/styles'

export default function Login() {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleLogin() {
        //Efetuando as validações básicas do form
        if (email === '' || senha === '') {
            Alert.alert('Informe um email e senha para efetuar o login')
            return
        }
        if (senha.length < 6) {
            Alert.alert('A senha deve ter no mínimo 6 caracteres')
            return
        }
        auth.signInWithEmailAndPassword(email, senha)
            .then(() => {
                navigation.navigate('Home')
            })
            .catch((error) => {
                Alert.alert('Erro',
                    `Erro ao efetuar o login: ${error.message}`)
            })
    }

    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                backgroundColor: themes.colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <MotiView
                style={styles.login.container}
                from={{
                    transform: [{ scale: 0 }],
                }}
                animate={{
                    transform: [{ scale: 1 }],
                }}
                transition={{type: 'timing', duration: 200}}
            >
                <Text style={styles.login.titulo}>Login</Text>

                <View style={styles.login.form}>
                    
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
            </MotiView>
        </View>
    )
}