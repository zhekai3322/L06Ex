import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FRUITS } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [id] = useState(Date.now());

    const saveFruit = () => {
        if (!name || !category) {
            Alert.alert('Error', 'Please enter both name and category');
            return;
        }

        const newFruit = { id, name, category };
        navigation.navigate('Home', { newFruit });
        console.log(`Add fruit with id ${id}: ${name} (${category})`);
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
