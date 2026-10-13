import { View, Text, ScrollView } from 'react-native';
import styles from './Styles';

const options = [
    {
        title: 'Full Time',
        description: 'If you are retired and able to come into Mog Hub full-time please contact us. We really need dedicated volunteer to assist',
    },
    {
        title: 'Part Time',
        description: 'Even if you camn only come in certain days of the week for certain days of the week for certain hours - we would be only too grateful for your generous donation of time',
    },
    {
        title: 'Occasional',
        description: 'If you can volunteer ocassionally we can add you to our roster',
    }
    
]

function VolunteerScreen() {
    return (
        <ScrollView style={styles.bookingsContainer}>
            {options.map((option, index) => (
                <View key={index} style={styles.stepContainer}>
                    <Text style={styles.stepTitle}>{option.title}</Text>
                    <Text style={styles.stepDesc}>{option.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

export default VolunteerScreen;