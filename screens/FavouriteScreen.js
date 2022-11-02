import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FavouriteScreen = (props) => {
    return(
        <View>
            <Text>Favourite Screen!</Text>
        </View>
    );
}

FavouriteScreen.navigationOptions = {
    headerTitle: 'Your Favourites',
    headerStyle: {
        backgroundColor: '#4a148c',
    },
    headerTintColor: 'white',
};

const styles = StyleSheet.create({});

export default FavouriteScreen;