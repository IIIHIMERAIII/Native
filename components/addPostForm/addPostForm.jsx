import {
    StyleSheet,
    TextInput,
    SafeAreaView,
} from 'react-native';

export const AddPostForm = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <TextInput style={styles.input} placeholder='Name'></TextInput>
            <TextInput style={styles.input} placeholder='Location'></TextInput>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 35,
        marginTop: 60,
        gap: 16,
    },
    input: {
        backgroundColor: 'transparent',
        padding: 16,
        height: 50,
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1,
    }
});