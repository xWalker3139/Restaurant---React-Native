import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const FilterScreen = (props) => {
    const [row, setRow] = useState(false);
    const [newRow, setNewRow] = useState(false);
    return(
        <View style={styles.screen}>
            <Text style={styles.text1}>Available Filters/Restrictions</Text>
            <View style={styles.new_row}>
                <Text style={styles.text2}>Gluten-free</Text>
                <Switch value={row} onValueChange={(data) => setRow(data)} /> 
                <Text style={styles.text2}>Vegan</Text>
                <Switch value={newRow} onValueChange={(data) => setNewRow(data)} /> 
            </View>
        </View>
    );
}

FilterScreen.navigationOptions = {
    headerTitle: 'Filters',
    headerStyle: {
        backgroundColor: '#4a148c',
    },
    headerTintColor: 'white',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontSize: 24,
        marginVertical: 20,
        textAlign: 'center',
    },
    new_row: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginTop: 30,
    },
    text2: {
        fontSize: 16,
    },
});

export default FilterScreen;