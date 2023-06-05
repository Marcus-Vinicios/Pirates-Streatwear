import React, { useEffect, useState } from 'react';
import {
    Alert,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native';
import Header from '../components/Header';
import { db } from '../config/firebase';
import styles from '../themes/styles';

export default function EditTenis({ navigation, route }) {

    const { id } = route.params;

    const [editarTenis, setEditarTenis] = useState({
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
            if(snapshot.data() != null){
                const snapshotData = snapshot.data();
                setEditarTenis({
                    name: snapshotData.name,
                    preco: snapshotData.preco.toString(),
                    descricao: snapshotData.descricao,
                    qtd: snapshotData.qtd.toString(),
                    cores: snapshotData.cores.toString(),
                    tamanhos: snapshotData.tamanhos.toString(),
                    img: snapshotData.img,
                });
            }else{
                navigation.goBack();
            }
        })
    }, [id])

    const handleEditTenis = () => {
        //Efetuando as validações dos formulários
        if (editarTenis.nome === '') {
            Alert.alert('O campo nome é obrigatório')
            return
        }
        if (editarTenis.descricao === '') {
            Alert.alert('O campo de descrição é obrigatório')
            return
        }
        if (parseFloat(editarTenis.preco) <= 0) {
            Alert.alert('O preço deve ser um número positivo')
            return
        }
        if (parseFloat(editarTenis.qtd) <= 0) {
            Alert.alert('A quantidade deve ser um número positivo')
            return
        }

        db.collection('tenis').doc(id).set({
            name: editarTenis.name,
            preco: editarTenis.preco,
            descricao: editarTenis.descricao,
            qtd: editarTenis.qtd,
            cores: editarTenis.cores.trim().split(','),
            tamanhos: editarTenis.tamanhos.trim().split(','),
            img: editarTenis.img,
        })
        .then(() => {
            Alert.alert('Tênis salvo com sucesso!')
        })
        .catch(() => {
            Alert.alert('Erro ao editar o tenis.')
        })
        .finally(() => {
            navigation.goBack()
        })
    }

    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Home')}/>
            <ScrollView>
                <View style={styles.AddTenis.content}>
                    <View style={styles.AddTenis.container}>
                        <Text style={styles.AddTenis.form.formTitle}>Editar Tênis</Text>
                        <View style={styles.AddTenis.form}>
                            <Text style={styles.AddTenis.label}>Nome</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.name}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, name: text })} />
                            <Text style={styles.AddTenis.label}>Preço</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.preco}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, preco: text })} />
                            <Text style={styles.AddTenis.label}>Descrição</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.descricao}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, descricao: text })} />
                            <Text style={styles.AddTenis.label}>Quantidade</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.qtd}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, qtd: text })} />
                            <Text style={styles.AddTenis.label}>Imagem</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.img}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, img: text })} />
                            <Text style={styles.AddTenis.label}>Cores</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.cores}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, cores: text })} />
                            <Text style={styles.AddTenis.label}>Tamanhos</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                value={editarTenis.tamanhos}
                                onChangeText={(text) => setEditarTenis(
                                    { ...editarTenis, tamanhos: text })} />
                        </View>
                    </View>
                    <Pressable
                        onPress={handleEditTenis}
                        style={styles.AddTenis.button}>
                        <Text style={styles.AddTenis.btnText}>Salvar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}