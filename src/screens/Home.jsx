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
    const [loadedData,setLoadedData] = useState(false);
    useEffect(() => {
        setLoadedData(false);
        db.collection('tenis').onSnapshot((snapshot) => {
            const snapshotData = snapshot.docs.map(doc => {
                let docData = doc.data() != null ? doc.data() : {}
                return {
                    id: doc.id,
                    ...docData
                }
            })
            setData(snapshotData)
            setLoadedData(true);
        })
    }, [])

    const handleDeleteTenis = (id) => {
        Alert.alert(
            "EXCLUIR",
            "Você tem certeza que quer excluir este item?",
            [
                {
                  text: "Sim",
                  onPress: () => {
                    db.collection('tenis').doc(id).delete()
                    .then(() => {
                        Alert.alert('Tênis deletado com sucesso!')
                    })
                    .catch(() => {
                        Alert.alert('Erro ao deletar o tenis.')
                    })
                  },
                },
                {
                  text: "Não",
                },
            ]
        )
    }
    
    const [selectedIndex, setIndex] = useState(0);

    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Login')} />
            <View style={styles.home.content}>
                <ScrollView>
                    {(loadedData && data.length <= 0) &&
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            marginTop: 10,
                            backgroundColor: '#f6ff8c',
                            padding: 30,
                            borderRadius: 20,
                            color: 'black'
                        }}>
                            <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}
                            >Não há nenhum produto cadastrado até o momento.</Text>
                        </View>
                    }
                    {data.map((t, i) => {
                        const img = t.img ? t.img : "https://cdn-icons-png.flaticon.com/512/2589/2589903.png";
                        let tamanhos;
                        if (t.tamanhos <= '') {
                            tamanhos = 'Único';
                        } else {
                            tamanhos = t.tamanhos;
                        }
                        
                        return (
                            <MotiView
                                style={{
                                    width: Dimensions.get("window").width,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    justifyContent: 'center'
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
                                            size={24} color="red" />
                                    </TouchableOpacity>
                                    <Card.Title>{t.name}</Card.Title>
                                    <Card.Divider />
                                    <Pressable style={styles.home.editBtn}
                                        onPress={() => navigation.navigate('EditarTenis', { id: t.id })}>
                                        <Feather name="edit" size={24} color="black" />
                                    </Pressable>
                                    <View style={[card.user, t.qtd === 0 ? {opacity: 0.3} : 0]}>
                                        <Image
                                            style={[card.image]}
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
                                            Tamanhos: {split(tamanhos)}
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