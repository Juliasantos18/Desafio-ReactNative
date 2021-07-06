import * as React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import style from '../cadastro/style';

const Cadastro = () => {
    const [nome, setNome] = React.useState('Nome');
    const [descricao, setDescricao] = React.useState('Descrição');
    const [preco, setPreco] = React.useState('Preço');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={style.botao}>
                    <Text
                        style={style.texto}>
                        Cadastro
                    </Text>

                    <TextInput
                        style={style.input}
                        onChangeText={nome => setNome(nome)}
                        value={nome}
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={descricao => setDescricao(descricao)}
                        value={descricao}
                    />
                    <TextInput
                        style={style.input}
                        onChangeText={preco => setPreco(preco)}
                        value={preco}
                    />
                </View>
                <TouchableHighlight
                    style={style.button}
                    onPress={() => alert('Pressed!')}>
                    <Text style={{ color: '#fcfcfc' }}>Cadastrar</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
};

export default Cadastro;