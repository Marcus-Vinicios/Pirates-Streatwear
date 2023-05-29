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
// import { auth } from '../../config/firebase'
import themes from '../themes'
import styles from '../themes/styles'

export default function Signup() {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [efetuandoCadastro, setEfetuandoCadastro] = useState(false)

    function handleSignup() {
        //Efetuando as validações básicas do form
        if (email === '' || senha === '') {
            Alert.alert('Atenção⚠',
                'Informe um email e senha para efetuar o login')
            return
        }
        if (senha.length < 6) {
            Alert.alert('Atenção⚠',
                'A senha deve ter no mínimo 6 caracteres')
            return
        }
        //Iremos cadastrar no Firebase
        setEfetuandoCadastro(true)
        Alert.alert('Aviso',
            'Usuário criado com sucesso! Efetue o login')
        navigation.navigate('Login')
        // createUserWithEmailAndPassword(auth, email, senha)
        //     .then((userCredential) => {
        //         const user = userCredential.user
        //         console.log(user)
        //         Alert.alert('Aviso',
        //             'Usuário criado com sucesso! Efetue o login')
        //         navigation.navigate('Login')
        //     })
        //     .catch((error) => {
        //         Alert.alert('Erro',
        //             `Erro ao criar o novo usuário: ${error.message}`)
        //     })
        setEfetuandoCadastro(false)
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
                <Text style={styles.login.titulo}>Cadastro</Text>

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
                    {efetuandoCadastro &&
                        <ActivityIndicator
                            size="large"
                            color={styles.login.colors.utility.danger} />
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