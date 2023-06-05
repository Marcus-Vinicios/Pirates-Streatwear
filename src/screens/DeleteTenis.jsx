import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from '../components/Header';
import { db } from '../config/firebase';
import styles from '../themes/styles';

const DeleteTenis = ({ navigation, route }) => {
    const { id } = route.params;

    const [deleteTenis, setDeleteTenis] = useState({
        name: '',
        preco: 0,
        descricao: '',
        qtd: 0,
        cores: '',
        tamanhos: '',
        img: '',
    })

    useEffect(() => {
        db.collection('tenis').doc(id).onSnapshot((snapshot) => {
            if (snapshot.data() != null) {
                const snapshotData = snapshot.data();
                setDeleteTenis({
                    name: snapshotData.name,
                    preco: snapshotData.preco.toString(),
                    descricao: snapshotData.descricao,
                    qtd: snapshotData.qtd.toString(),
                    cores: snapshotData.cores.toString(),
                    tamanhos: snapshotData.tamanhos.toString(),
                    img: snapshotData.img,
                });
            } else {
                navigation.goBack();
            }
        })
    }, [id])

    const handleDeleteTenis = () => {
        db.collection('tenis').doc(id).delete()
            .then(() => {
                Alert.alert('Tênis deletado com sucesso!')
            })
            .catch(() => {
                Alert.alert('Erro ao deletar o tenis.')
            })
            .finally(() => {
                navigation.goBack('Home')
            })
        console.log('Teste')
    }

    const img = img ? img : "https://cdn-icons-png.flaticon.com/512/2589/2589903.png";

    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Home')} />
            <ScrollView>
                <View style={{}}>
                    <View style={{padding: 15}}>
                        <Card>
                            <Card.Title>{deleteTenis.name}</Card.Title>
                            <Card.Divider />
                            <View style={card.user}>
                                <Image
                                    style={card.image}
                                    resizeMode="cover"
                                    source={{ uri: img }}
                                />
                            </View>
                            <View>
                                <Text style={card.txt}>
                                    Preço: {deleteTenis.preco}
                                </Text>
                                <Text style={card.txt}>
                                    Descrição: {deleteTenis.descricao}
                                </Text >
                                <Text style={card.txt}>
                                    Quantidade: {deleteTenis.qtd}
                                </Text>
                                <Text style={card.txt}>
                                    Cores: {deleteTenis.cores}
                                </Text>
                                <Text style={card.txt}>
                                    Tamanhos: {deleteTenis.tamanhos}
                                </Text>
                            </View>
                        </Card >
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Pressable
                            onPress={handleDeleteTenis}
                            style={styles.AddTenis.button}>
                            <Text style={styles.AddTenis.btnText}>Deletar</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const card = StyleSheet.create({
    container: {
        flex: 1,

    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '52%',
        height: 100,
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});
export default DeleteTenis