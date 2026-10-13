import { View, Text, Image, ScrollView } from 'react-native';
import styles from './Styles';

// Image of pet with their name 
const pets = [
    { name: 'Whispers', image: require('../images/cat1.png')},
    { name: 'Orange', image: require('../images/cat2png')},
    { name: 'Charcy', image: require('../images/cat3.png')},
    { name: 'Sweety', image: require('../images/dog1.png')},
    { name: 'Hulk', image: require('../images/dog2.png')},
    { name: 'Eyewitness', image: require('../images/dog3.png')},

];

function GalleryScreen() {
    return (
        <ScrollView style={styles.bookingsContainer}>
            {pets.map((pet, index) => (
                <View key={index} style={styles.galleryItem}>
                    <Image source={pet.image} style={styles.galleryImage} 
                        resizeMode="cover"
                    />
                    <Text style={styles.galleryName}>{pet.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

export default GalleryScreen;