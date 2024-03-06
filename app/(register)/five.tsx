import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
// import { Pass } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import { Link } from "expo-router";
export default function TabFourScreen() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
                <ScrollView contentContainerStyle={tw`flex-1 justify-between mt-4 px-4 pb-4`}>
                    <View>
                        <Text style={tw`text-center font-bold  text-[16px] mb-8`}>Almost there</Text>
                        <Text style={tw`mb-6`}>You are one step away from completing the registeration. to wrap this up, you can agree to our Terms & Conditions. </Text>
                        <Text style={tw`mb-6`}> We publish the Company name Terms & Conditions so that you know what to expect as you use our services.</Text>
                        <Text>By checking the box below, you agree to these terms.</Text>
                    </View>
                    <Link href={`/(register)/five`} style={tw`border-2 border-[black] rounded text-center p-3`}>
                        <Text style={tw`text-center`}>Next</Text>
                    </Link>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}