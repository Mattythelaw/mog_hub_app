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
    const [interest, setInterest ] = useState('Sports');

    // Adding the useState variable for validation errors
    const [error, setError] = useState(false);

    // Adding a function for to check if the form is empty
    function isEmpty(value: string) {
        return (
            value == null || value.trim().length === 0
        );
    }

    const handleSubmit = () => {
        // This will check if the fields are filled 

    }

return (
    <SafeAreaView style={styles.bookingsContainer}>
        <ScrollView contentContainerStyle={styles.formContainer}>

            {/* This is for the name field */}
            <Text style={styles.enterTxt}>Name*</Text>

            <TextInput styles={styles.formInput} value={name} 
                onChangeText={setName}
            />
            
            {/* This is for the surname field */}
            <Text style={styles.enterTxt}>Surname*</Text>

            <TextInput styles={styles.formInput} value={surname} 
                onChangeText={setSurname}
            />

            {/* This is email field */}
            <Text style={styles.enterTxt}>Email*</Text>

            <TextInput styles={styles.formInput} value={email} 
                onChangeText={setEmail} keyboardType="email-addres"
                autoCapitalize='none'
            />

            {/* Interests radio buttons */}
            <Text style={styles.enterTxt}>Interests</Text>
            <RadioButton.Group onValueChange={(value: string) => setInterest(value)}
                value={interest}
            >
            
                {interests.map((item) => (
                    <View key={item} style={styles.interestRow}>
                        <RadioButton.Android value={item} color="orange" />
                        <Text>{item}</Text>
                    </View>
                ))}
            </RadioButton.Group>

        </ScrollView>
    </SafeAreaView>
)