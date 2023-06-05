import { Feather, MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from '@rneui/base';
import { Card } from '@rneui/themed';
import { split } from 'lodash';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Header from '../components/Header';
import { db } from '../config/firebase';
import styles from '../themes/styles';

export default function Home({ navigation }) {
    const [data, setData] = useState([])
    useEffect(() => {
        db.collection('tenis').onSnapshot((snapshot) => {
            const snapshotData = snapshot.docs.map(doc => {
                let docData = doc.data() != null ? doc.data() : {}
                return {
                    id: doc.id,
                    ...docData
                }
            })
            setData(snapshotData)
        })
    }, [])

    const handleDeleteTenis = (id) => {
        db.collection('tenis').doc(id).delete()
        .then(() => {
            Alert.alert('Tênis deletado com sucesso!')
        })
        .catch(() => {
            Alert.alert('Erro ao deletar o tenis.')
        })
    }
    
    const [selectedIndex, setIndex] = useState(0);

    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Login')} />
            <View style={styles.home.content}>
                <ScrollView>
                    {data.map((t, i) => {
                        const img = t.img ? t.img : "https://cdn-icons-png.flaticon.com/512/2589/2589903.png";
                        return (
                            <MotiView
                                style={{
                                    width: Dimensions.get("window").width,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }} 
                                key={i}
                                from={{
                                    transform: [{ translateX: -Dimensions.get("window").width }],
                                }}
                                animate={{
                                    transform: [{ translateX: 0 }],
                                }}
                                transition={{type: 'timing', duration: 300 * (i + 1)}}
                            >
                                <Card>
                                    <TouchableOpacity
                                        onPress={() => handleDeleteTenis(t.id)}>
                                        <MaterialIcons
                                            name="delete-outline"
                                            size={24} color="black" />
                                    </TouchableOpacity>
                                    <Card.Title>{t.name}</Card.Title>
                                    <Card.Divider />
                                    <Pressable style={styles.home.editBtn}
                                        onPress={() => navigation.navigate('EditarTenis', { id: t.id })}>
                                        <Feather name="edit" size={24} color="black" />
                                    </Pressable>
                                    <View style={card.user}>
                                        <Image
                                            style={card.image}
                                            resizeMode="cover"
                                            source={{ uri: img }}
                                        />
                                    </View>
                                    <View>
                                        <Text style={card.txt}>
                                            Preço: R$ {t.preco.toFixed(2).replace('.', ',')}
                                        </Text>
                                        <Text style={card.txt}>
                                            Descrição: {t.descricao}
                                        </Text >
                                        <Text style={card.txt}>
                                            Quantidade: {t.qtd}
                                        </Text>
                                        <Text style={card.txt}>
                                            Cores: {split(t.cores)}
                                        </Text>
                                        <Text style={card.txt}>
                                            Tamanhos: {split(t.tamanhos)}
                                        </Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <CheckBox
                                            disabled={true}
                                            checked={t.qtd > 0}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            title={'Disponivel'}
                                        />
                                        <CheckBox
                                            disabled={true}
                                            checked={t.qtd <= 0}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            title={'Indisponível'}
                                        />
                                    </View>
                                </Card >
                            </MotiView>

                        );
                    })}
                </ScrollView>
            </View >
            <View style={styles.home.menu}>
                <TouchableOpacity style={styles.home.menu.button}
                    onPress={() => navigation.navigate('NovoTenis')}>
                    <Text style={styles.home.menu.btnTxt}>Novo Tênis</Text>
                </TouchableOpacity>
            </View>
        </View >
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
        padding: 10,
    },
    image: {
        width: '55%',
        height: 100,
    },
    txt: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});