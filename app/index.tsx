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

export default function HomeScreen() {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
       
        <KeyboardAvoidingView
            style={tw`flex-1`}
            enabled
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw``}>
                <ScrollView style={tw``}>
                    <View style={tw``}>
                        <View style={tw`h-[480px] relative`}>
                            <Image
                                style={tw`h-full`}
                                source={ImagesAssets.barber}
                                // placeholder={blurhash}
                                contentFit="cover"
                                transition={1000}
                            />
                        </View>

                        <View style={tw`bg-transparent -top-[100px]`}>
                            <Image
                                style={tw`h-12 w-12 mx-auto mb-4`}
                                source={ImagesAssets.logo}
                                contentFit="cover"
                                transition={1000}
                            />
                            <View style={tw`mb-4 bg-transparent`}>
                                <Text style={tw`font-bold text-center text-3xl`}>Book your haircut</Text>
                                <Text style={tw`font-bold text-center text-3xl`}>in seconds</Text>
                            </View>
                            <Text style={tw`text-gray-400 text-center `}>Schedule your next haircut within a few seconds. Easily reserve and manage your appointments.</Text>
                            <View style={tw`px-2 mt-15`}>
                                <Link style={tw`text-gray-200 bg-black mb-2 rounded text-center p-3 w-full`} href={`/login`}>Login</Link>
                            
                             
                                    <Link href={`/(register)`} style={tw`border-2 border-[black] rounded text-center p-3`}>Register</Link>
                              
                            </View>
                        </View>
                       
                    </View>
                </ScrollView>
            
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
