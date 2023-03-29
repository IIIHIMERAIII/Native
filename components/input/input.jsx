import { StyleSheet, TextInput } from "react-native";

export const Input = ({ placeholder, onChangeText, value }) => {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor= '#BDBDBD'
            />
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        backgroundColor:'#E8E8E8',
        borderRadius:8,
        padding:16,
        height: 50,
        color: 'black',
        fontSize: 16,
        lineHeight: 18,
    }
});
