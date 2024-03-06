import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, View, Text, TextInput, Pressable } from "react-native";
import tw from "twrnc";
// import { Pass } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import { Link } from "expo-router";
export default function TabOneScreen() {
    const [showPassword, setShowPassword] = useState(false)
    const toggleShowPassword =()=>{
        setShowPassword(!showPassword)
    }
    return (
        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
                <ScrollView contentContainerStyle={tw`flex-1  mt-4 px-4 pb-4 justify-between`}>
                    <View style={tw``}>
                        <Text style={tw`mb-2`}>Personal Information</Text>
                        <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Fullname" />
                        <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded-md mb-4  w-full`} placeholder="Email" />
                        <View style={tw`realtive`}>
                            <TextInput secureTextEntry={!showPassword} style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Password" />
                            <MaterialCommunityIcons

                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="#aaa"
                                style={tw`absolute right-3 top-4`}
                            // style={styles.icon}
                            onPress={toggleShowPassword}
                            />
                        </View>
                      <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Phonenumber" />
                        <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Address" />
                    
                    
                    </View>
                    <Link href={`/(register)/two`} style={tw`border-2 border-[black] rounded text-center p-3`}>
                        <Text style={tw`text-center`}>Next</Text>
                    </Link>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}