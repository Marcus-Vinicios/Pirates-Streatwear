import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { auth } from '../config/firebase'
import themes from '../themes'
import styles from '../themes/styles'

export default function Signup() {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [validar, setValidar] = useState('')
    const [efetuandoCadastro, setEfetuandoCadastro] = useState(false)

    function handleSignup() {
        //Efetuando as validações básicas do form
        if (email === '' || senha === '') {
            Alert.alert('Informe um email e senha para efetuar o login')
            return
        }
        if (senha.length < 6) {
            Alert.alert('A senha deve ter no mínimo 6 caracteres')
            return
        }
        if (senha != validar) {
            Alert.alert('Senha Incorreta')
            return
        }
        //Iremos cadastrar no Firebase
        setEfetuandoCadastro(true)
        auth.createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
                Alert.alert('Aviso',
                    'Usuário criado com sucesso! Efetue o login')
                navigation.navigate('Login')
            })
            .catch((error) => {
                Alert.alert('Erro',
                    `Erro ao criar o novo usuário: ${error.message}`)
            })
            .finally(() => {
                setEfetuandoCadastro(false)
            })
    }

    return (
        <View style={{
            flex: 1,
            paddingTop: insets.top,
            backgroundColor: themes.colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View style={styles.login.container}>
                <Text style={styles.login.titulo}>Cadastro</Text>

                <View style={styles.login.form}>

                    <Text style={styles.login.label}>Email</Text>
                    <TextInput
                        placeholder="Informe um email"
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

                    <Text style={styles.login.label}>Confirme sua senha</Text>
                    <TextInput
                        placeholder='Confirme sua senha'
                        style={styles.login.input}
                        value={validar}
                        onChangeText={setValidar}
                        secureTextEntry />
                    {efetuandoCadastro &&
                        <ActivityIndicator
                            size="large"
                            color={themes.colors.utility.danger} />
                    }
                    <TouchableOpacity style={styles.login.button}
                        onPress={handleSignup}>
                        <Text style={styles.login.button.ButtonText}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <Text>
                            Já é um usuário? Efetue o login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}