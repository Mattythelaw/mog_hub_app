import { View, Text, Image, ScrollView } from 'react-native';
import styles from './Styles';

const steps = [
    {
        number: require('../images/one.png'),
        title: 'Complete and Submit Membership form',
        description: 'Go to the membership page and complete and submit the membership form',
    },
    {
        number: require('../images/two.png'),
        title: 'Choose your Mog and Date',
        description: 'Choose your Mog from the list of availables emailed to you. Note the Mogs number',
    },
    {
        number: require('../images/three.png'),
        title: 'Collect your Mog',
        description: 'Make suitable arrangements to collect your Mog from the Mog Hub depot',
    }
]; 

 function Bookings() {
    return (

        <ScrollView style={styles.bookingsContainer}>
            {steps.map((step, index) => (
                <View key={index} style={styles.stepContainer}>

                    <Image source={step.number}
                        style={styles.stepNumber}
                        resizeMode="contain"
                    />
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepDesc}>{step.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

export default Bookings;