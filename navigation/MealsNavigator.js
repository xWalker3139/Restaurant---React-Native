import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'; 

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import FilterScreen from '../screens/FiltersScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
});

const FavNavigator = createStackNavigator({
    Favourites: FavouriteScreen,
    MealDetail: MealDetailScreen,
});

const Filters = createStackNavigator({
    Filters: FilterScreen,
});

const TabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color='orange' />
                )
            }
        }
    },
    Filters: {
        screen: Filters,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-repeat-outline" size={25} color='orange' />
                )
            }
        }
    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name="ios-star" size={25} color='orange' />
                )
            }
        }
    },
}

const MealsFavTabNavigator = Platform.OS === 'android' ? createBottomTabNavigator(TabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
}) : createMaterialBottomTabNavigator(TabScreenConfig, {
    tabBarOptions: {
        activeTintColor: 'purple',
    }
})


export default createAppContainer(MealsFavTabNavigator);