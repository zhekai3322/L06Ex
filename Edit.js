import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { FRUITS, images } from './Data';
import RNPickerSelect from 'react-native-picker-select';

const Edit = ({ route, navigation }) => {
    const { fruit } = route.params;
    const [name, setName] = useState(fruit.name);
    const [category, setCategory] = useState(fruit.category);
    const [id, setId] = useState(fruit.id);

    const saveFruit = () => {
        console.log(`Update fruit with id ${id}: ${name} (${category})`);
        navigation.goBack();
    };

    const deleteFruit = () => {
        Alert.alert(
            'Delete Fruit',
            'Are you sure you want to delete this fruit?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        navigation.navigate('Home', { deletedFruitId: id });
                    },
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    console.log('This alert was dismissed by tapping outside of it.'),
            },
        );
    };

    const categories = Object.keys(FRUITS).map((category) => ({
        label: category,
        value: category,
    }));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Fruit</Text>
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
            <Image source={images[id]} style={styles.image} />
            <View style={styles.buttonContainer}>
                <Button title="Save" onPress={saveFruit} />
                <Button title="Delete" onPress={deleteFruit} color="#ff0000" />
            </View>
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
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    buttonContainer: {
        justifyContent: 'space-between',
    },
});

export default Edit;
