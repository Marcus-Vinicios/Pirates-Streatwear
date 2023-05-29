import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import styles from '../themes/styles';

export default function Home({ navigation, props }) {
    const [tenis, setTenis] = useState([
        {
            nome: props.novoTenis.nome,
            preco: props.novoTenis.preco,
            descricao: props.novoTenis.descricao,
            quantidade: props.novoTenis.quantidade,
            vendido: false,
        }
    ])
    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Login')} />
            <View id='content' style={styles.home.content}>

            </View>
            <View id='menu' style={styles.home.menu}>
                <TouchableOpacity style={styles.home.menu.button}
                    onPress={() => navigation.navigate('NovoTenis')}>
                    <Text style={styles.home.menu.btnTxt}>Novo Tênis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu.button}
                    onPress={() => navigation.navigate('EditarTenis')}>
                    <Text style={styles.home.menu.btnTxt}>Editar Tênis</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}