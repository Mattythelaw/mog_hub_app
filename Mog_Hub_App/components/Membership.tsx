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
    const [error, setError] = useState({ name: "", surname: "", email: ""});

    // Adding a function for to check if the form is empty
    function isEmpty(value: string) {
        return (
            value == null || value.trim().length === 0
        );
    }

    const handleSubmit = () => {

        const neErrors = {
            name: validateName(name),
            surname: validateName(surname),
            email: validateEmail(email),
        }
        // This will check if the fields are filled 
        if (!isEmpty(name) && !isEmpty (surname) && !isEmpty(email)) {
            setError(false);
            console.log("Form submitted suucessfully");
            console.log("Name:", name, "Surname:", surname, "Email:", email, "Interests:", interests);
        } else {
            
            // Displaying error message 
            setError(true);
        }
    };

    function validateName(value: string) {
        const text = value.trim();

        if (isEmpty(text)) return 'This field is required';

        // Only enter number into the name and surname inputs
        if (!/^[A-Za-z]+$/.test(text)) return 'Please enter with letters only';

        // Minimum of 3 characters 
        if (text.length < 3 || text.length > 15) "Must be 3 to 15 letters";

        // All rules passed
        return '';

    }

    // Validating the email
    function validateEmail(value: string) {
        const text = value.trim();
        if (isEmpty(text)) return 'Email is required';

        const atPos = text.indexOf('@');
        const dotPos = text.indexOf('.', atPos + 1);

        // Use must include an @ symbol and '.' after it
        if (atPos === -1 || dotPos === -1 ) return 'Email must include an "@" and a "."';

        // It must be at least 3 characters before the '@'
        if (atPos < 3) return 'Need at least 3 characters before the "@"';

        // Use must type at least 3 characters betweeb the "@" and the "."
        if (dotPos - atPos -1 < 3 ) return 'Need at least 3 characters between teh "@" and the "."';

        // All validation must be passed
        return '';



    }

    return (
        <SafeAreaView style={styles.bookingsContainer}>
            <ScrollView contentContainerStyle={styles.formContainer}>

                {/* This is for the name field */}
                <Text style={styles.enterTxt}>Name*</Text>

                <TextInput style={styles.formInput} value={name} 
                    onChangeText={setName}
                />
                
                {/* This is for the surname field */}
                <Text style={styles.enterTxt}>Surname*</Text>

                <TextInput style={styles.formInput} value={surname} 
                    onChangeText={setSurname}
                />

                {/* This is email field */}
                <Text style={styles.enterTxt}>Email*</Text>

                <TextInput style={styles.formInput} value={email} 
                    onChangeText={setEmail} keyboardType="email-address"
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

                {/* Adding error message for when a field is blank */}
                {error && (
                    <Text style={styles.errorTxt}>
                        Please fill in Name, Surname and Email
                    </Text>
                )}

                {/* Button to submit */}
                <Button title="Submit" onPress={handleSubmit}/>

            </ScrollView>
        </SafeAreaView>
    );
}