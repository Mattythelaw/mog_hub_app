import { View, Text, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import styles from './Styles';

// Added the constants for list of interests
const interests = ['Sports', 'Movies', 'Books', 'Travel', 'Fitness', 'Arts'];


export default function Membership() {
    // Adding state varibles for the form fields
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [interest, setInterest ] = useState('');

    // Adding the useState variable for validation errors
    const [error, setError] = useState(false);

    // Adding a function for to check if the form is empty
    function isEmpty(value: string) {
        return (
            value == null || value.trim().length === 0
        );
    }
}

return (
    <SafeAreaView style={styles.bookingsContainer}>
        <ScrollView></ScrollView>
    </SafeAreaView>
)