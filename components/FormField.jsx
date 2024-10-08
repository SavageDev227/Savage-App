import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { React, useState} from "react";
import { Ionicons } from "expo-vector-icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="flex flex-row items-center w-full h-16 px-4 bg-gray rounded-2xl border-2 border-primary2 focus:border-secondary">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "ios-eye" : "ios-eye-off"} className="text-neutral-400" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
