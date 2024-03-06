import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { Link } from "expo-router";
export default function TabTwoScreen() {
    const [image, setImage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result?.assets[0].uri);
        }
    };
    return (
        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
                <ScrollView contentContainerStyle={tw`flex-1 justify-between mt-4 px-4 pb-4`}>
                    <View>
                        <Text style={tw`text-center font-bold  text-[16px]`}>Upload your picture</Text>
                        <Pressable onPress={pickImage} style={tw`flex mt-8 bg-[#DDDDDD] rounded item-center justify-center p-2 flex-row gap-2`}>
                            <Text>choose a file</Text>
                            <Ionicons name="add-circle" size={24} color="black" />
                        </Pressable>
                    </View>
                    <Link href={`/(register)/three`} style={tw`border-2 border-[black] rounded text-center p-3`}>
                        <Text style={tw`text-center`}>Next</Text>
                    </Link>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}