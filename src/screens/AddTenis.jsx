import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';
import styles from '../themes/styles';

export default function AddTenis({ navigation}) {
    const [novoTenis, setNovoTenis] = useState({
        nome: '',
        preco: 0,
        descricao: '',
        quantidade: 0,
        vendido: false,
    })
    return (
        <View style={styles.home.container}>
            <Header onPress={() => navigation.navigate('Home')}/>
            <View style={styles.AddTenis.content}>
                <View style={styles.AddTenis.container}>
                    <Text style={styles.AddTenis.form.formTitle}>Novo Tênis</Text>
                    <View style={styles.AddTenis.form}>
                        <Text style={styles.AddTenis.label}>Nome</Text>
                        <TextInput
                            style={styles.AddTenis.input}
                            onChangeText={(text) => setNovoTenis(
                                { ...novoTenis, nome: text })} />
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
                            onChangeText={(text) => setNovoTenis(
                                { ...novoTenis, quantidade: text })} />
                    </View>
                </View>
                <Pressable novoTenis={novoTenis} onPress={() => Alert.alert('Tênis salvo com sucesso!')} style={styles.AddTenis.button}>
                    <Text style={styles.AddTenis.btnText}>salvar</Text>
                </Pressable>
            </View>
        </View>
    )
}