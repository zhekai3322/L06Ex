import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { FRUIT_LIST, FRUITS, images } from './Data';

const FruitItem = ({ fruit, navigation }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Edit', { fruit })}>
        <Text style={styles.name}>{fruit.name}</Text>
        <Image source={images[fruit.id]} style={styles.image} />
    </TouchableOpacity>
);

const FruitList = ({ category, navigation }) => (
    <View style={[styles.section, { backgroundColor: FRUITS[category].color }]}>
        <Text style={styles.header}>{FRUITS[category].icon} {category}</Text>
        <FlatList
            data={FRUIT_LIST[category]}
            renderItem={({ item }) => <FruitItem fruit={item} navigation={navigation} />}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
);

const deleteFruit = (id) => {
    console.log(`Delete fruit with id ${id}`);
};

const styles = StyleSheet.create({
    section: {
        marginBottom: 20,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
    },
    name: {
        fontSize: 18,
        color: '#FFFFFF',
    },
    image: {
        width: 80,
        height: 80,
    },
    deleteButton: {
        backgroundColor: '#ff0000',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default FruitList;
