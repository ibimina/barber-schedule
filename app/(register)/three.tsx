import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
// import { Pass } from '@expo/vector-icons';
import { useState } from "react";
import { Link } from "expo-router";
export default function TabThreeScreen() {


    return (
        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
                <ScrollView contentContainerStyle={tw`flex-1 justify-between mt-4 px-4 pb-4`}>
                    <View>
                        <Text style={tw`text-center font-bold  text-[16px] mb-8`}>Preference & Availability</Text>
                        <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Fullname" />
                        <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded-md mb-4  w-full`} placeholder="Email" />

                    </View>
                    <Link href={`/(register)/four`} style={tw`border-2 border-[black] rounded text-center p-3`}>
                        <Text style={tw`text-center`}>Next</Text>
                    </Link>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}