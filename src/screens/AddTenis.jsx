import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';
import { db } from '../config/firebase';
import styles from '../themes/styles';

export default function AddTenis({ navigation }) {
    const [novoTenis, setNovoTenis] = useState({
        name: '',
        preco: 0,
        descricao: '',
        qtd: 0,
        cores: '',
        tamanhos: '',
        img: '',
    })

    const handleAddTenis = async () => {
        //Efetuando as validações dos formulários
        if (novoTenis.nome === '') {
            Alert.alert('O campo nome é obrigatório')
            return
        }
        if (novoTenis.descricao === '') {
            Alert.alert('O campo de descrição é obrigatório')
            return
        }
        if (parseFloat(novoTenis.preco) <= 0) {
            Alert.alert('O preço deve ser um número positivo')
            return
        }
        if (parseFloat(novoTenis.qtd) <= 0) {
            Alert.alert('A quantidade deve ser um número positivo')
            return
        }

        db.collection('tenis').add({
            name: novoTenis.name,
            preco: novoTenis.preco,
            descricao: novoTenis.descricao,
            qtd: novoTenis.qtd,
            cores: novoTenis.cores.trim().split(','),
            tamanhos: novoTenis.tamanhos.trim().split(','),
            img: novoTenis.img,
        })
        .then(() => {
            Alert.alert('Tênis salvo com sucesso!')
        })
        .catch(() => {
            Alert.alert('Erro ao salvar o tenis.')
        })
        .finally(() => {
            navigation.goBack()
        })
    }

    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Home')} />
            <ScrollView>
                <View style={styles.AddTenis.content}>
                    <View style={styles.AddTenis.container}>
                        <Text style={styles.AddTenis.form.formTitle}>Novo Tênis</Text>
                        <View style={styles.AddTenis.form}>
                            <Text style={styles.AddTenis.label}>Nome</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, name: text })} />
                            <Text style={styles.AddTenis.label}>Preço</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, preco: text })} />
                            <Text style={styles.AddTenis.label}>Descrição</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, descricao: text })} />
                            <Text style={styles.AddTenis.label}>Quantidade</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                keyboardType='numeric'
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, qtd: text })} />
                            <Text style={styles.AddTenis.label}>Imagem</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, img: text })} />
                            <Text style={styles.AddTenis.label}>Cores</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, cores: text })} />
                            <Text style={styles.AddTenis.label}>Tamanhos</Text>
                            <TextInput
                                style={styles.AddTenis.input}
                                onChangeText={(text) => setNovoTenis(
                                    { ...novoTenis, tamanhos: text })} />
                        </View>
                    </View>
                    <Pressable
                        onPress={handleAddTenis}
                        style={styles.AddTenis.button}>
                        <Text style={styles.AddTenis.btnText}>Salvar</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}