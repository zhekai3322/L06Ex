import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FRUITS } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [id] = useState(Math.floor(Math.random() * 1000));

    const saveFruit = () => {
        console.log(`Add fruit with id ${id}: ${name} (${category})`);
        navigation.goBack();
    };

    const categories = Object.keys(FRUITS).map((category) => ({
        label: category,
        value: category,
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Fruit</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Fruit Name"
            />
            <RNPickerSelect
                style={{
                    inputAndroid: styles.picker,
                    inputIOS: styles.picker,
                }}
                placeholder={{
                    label: 'Select Category',
                    value: '',
                }}
                value={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                items={categories}
            />
            <Button title="Save" onPress={saveFruit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    picker: {
        width: '100%',
        marginBottom: 20,
        padding: 10,
    },
});

export default Add;
