import React, { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import Header from '../components/Header';
import styles from '../themes/styles';

export default function EditTenis({ navigation,  }) {
    const [editarTenis, seteEditarTenis] = useState({
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
                    <Text style={styles.AddTenis.form.formTitle}>Editar Tênis</Text>
                    <View style={styles.login.form}>
                        <Text style={styles.login.label}>Nome</Text>
                        <TextInput
                            style={styles.login.input}
                            onChangeText={(text) => seteEditarTenis(
                                { ...editarTenis, nome: text })} />
                        <Text style={styles.login.label}>Preço</Text>
                        <TextInput
                            style={styles.login.input}
                            onChangeText={(text) => seteEditarTenis(
                                { ...editarTenis, preco: text })} />
                        <Text style={styles.login.label}>Descrição</Text>
                        <TextInput
                            style={styles.login.input}
                            onChangeText={(text) => seteEditarTenis(
                                { ...editarTenis, descricao: text })} />
                        <Text style={styles.login.label}>Quantidade</Text>
                        <TextInput
                            style={styles.login.input}
                            onChangeText={(text) => seteEditarTenis(
                                { ...editarTenis, quantidade: text })} />
                    </View>
                </View>
                <Pressable onPress={() => Alert.alert('Alterações salvas com sucesso!')} style={styles.AddTenis.button}>
                    <Text style={styles.AddTenis.btnText}>alterar</Text>
                </Pressable>
            </View>
        </View>
    )
}