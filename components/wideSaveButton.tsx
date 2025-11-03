import { WideButtonProps } from "@/type";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../Stylesheets/wideSaveButtonStylesheet";



const WideButton = ({ iconName, iconColor, buttonText, backgroundColor, borderColor, textColor, onPress,} : WideButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.saveBtn,
        { backgroundColor, borderColor },
      ]}
      onPress={onPress}
    >
      {iconName ? (
        <Ionicons
          name={iconName as keyof typeof Ionicons.glyphMap}
          size={18}
          color={iconColor}
          style={{ marginRight: 6 }}
        />
      ) : null}

      <Text style={[styles.saveBtnText, { color: textColor }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default WideButton;
