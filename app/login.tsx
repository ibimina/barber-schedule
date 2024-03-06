import React from "react";
import tw from "twrnc";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    TextInput,
    TouchableWithoutFeedback,
} from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { Text, View } from "@/components/Themed";
import { ImagesAssets } from "@/assets";
// import { ImageButton, Text } from '@/components/';

export default function LoginScreen() {
    const [isLoading, setIsLoading] = React.useState(false);

    return (

        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`flex-1`}>
                <ScrollView contentContainerStyle={tw`flex-1 bg-pink-700 `}>

                    <View style={tw` flex-1 items-center justify-between w-full`}>
                        <View style={tw`mt-30 w-full px-4`}>
                            <View style={tw`mb-4 bg-transparent`}>
                                <Image
                                    style={tw `h-12 w-12 mx-auto mb-4`}
                                    source={ImagesAssets.logo}
                                    contentFit="cover"
                                    transition={1000}
                                />
                                <Text style={tw`font-bold text-center text-3xl w-full`}>Welcome Back</Text>
                            </View>
                            <View style={tw`px-2 mt-15`}>
                                <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded-md mb-4  w-full`} placeholder="Name or Phone" />
                                <TextInput style={tw`px-3 py-3 border-2 border-[#dddddd] text-[#888888] rounded mb-2  w-full`} placeholder="Enter your password" />
                                <Link style={tw`text-right mb-6`} href={`/forgotpassword`}>Forgot password?</Link>
                                <Pressable>
                                    <Text style={tw`text-gray-200 bg-black mb-2 rounded text-center p-3 w-full`}>Login</Text>
                                </Pressable>
                            </View>
                        </View>
                    <Text style={tw`text-center mb-4`}>Don't have an account? <Link style={tw`font-bold`} href={`/(register)/`}> Register now</Link></Text>
                    </View>
                </ScrollView>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
