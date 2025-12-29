import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import { s, vs } from "react-native-size-matters";
import TitleText from "../components/CustomTexts/TitleText";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SmallText from "../components/CustomTexts/SmallText";
import SubTitleText from "../components/CustomTexts/SubTitleText";
import SocialMediaCircle from "../components/SocialMediaCircle";
import SocialMediaButton from "../components/SocialMediaButton";
import { Resolver, useForm } from "react-hook-form"
import * as yup from "yup"
import { InferType } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/MainStack";

export type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const LoginScreen = () => {
 const {name, params, path} = useRoute()
const navigation = useNavigation<NavigationProp>();
const {
  control,
  handleSubmit,
  formState: { errors },
} = useForm<LoginFormValues>({
  defaultValues: {
    email: "",
    password: "",
  },
  resolver: yupResolver(loginSchema) as Resolver<LoginFormValues>,
});
 
  
  const onSubmit = (data: LoginFormValues) => {
    // console.log(data);
    navigation.navigate("dashboard", {...data});
  };

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View>
          <TitleText fontWeight="700" textColor="#000000">
            Welcome
          </TitleText>
          <TitleText fontWeight="700" textColor="#000000">
            Back!
          </TitleText>
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            placeHolder="Username or Email"
            iconName={"user"}
            keyboardType="email-address"
            inputError={errors.email}
            control={control}
            name="email"
          />
          <View style={styles.forgetPassword}>
            <CustomInput
              isPassword
              placeHolder="Password"
              iconName={"lock"}
              inputError={errors.password}
              control={control}
              name="password"
            />
            <SmallText
              children="Forgot Password?"
              textColor="#F83758"
              handleOnPress={() => navigation.navigate("forgetPassword")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              bgColor="#F83758"
              buttonText="Login"
              buttonFn={handleSubmit(onSubmit)}
            />
          </View>
        </View>
        <View style={styles.lastSection}>
          <SmallText children="- OR Continue with -" textColor="#575757" />
          <View style={styles.socialIconsFlex}>
            <SocialMediaButton
              borderColor="#F83758"
              iconColor="#000"
              iconName={"google"}
              backgroundColor="#FCF3F6"
            />
            <SocialMediaButton
              borderColor="#F83758"
              iconColor="#000"
              iconName={"apple"}
              backgroundColor="#FCF3F6"
            />
            <SocialMediaButton
              borderColor="#F83758"
              backgroundColor="#FCF3F6"
              iconName={"facebook"}
            />
          </View>
          <View style={styles.textFlex}>
            <SubTitleText textColor="#575757">Create an account</SubTitleText>
            <SubTitleText
              textColor="#F83758"
              textDecoration="underline"
              handleOnPress={() => navigation.navigate("signup")}
            >
              Sign Up
            </SubTitleText>
          </View>
        </View>
      </View>
    </CustomSafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    paddingTop: vs(19),
    paddingHorizontal: s(20),
    gap: vs(40),
  },
  forgetPassword: {
    alignItems: "flex-end",
    gap: vs(7),
  },
  inputContainer: {
    gap: vs(25),
  },
  buttonContainer: {
    height: vs(45),
    width: "100%",
  },
  lastSection: {
    marginTop: vs(20),
    width: "100%",
    alignItems: "center",
    gap: vs(15),
  },
  textFlex: {
    flexDirection: "row",
    gap: s(5),
  },
  socialIconsFlex: {
    flexDirection: "row",
    gap: s(10),
    marginBottom: vs(10),
  },
});


export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export type LoginFormValues = InferType<typeof loginSchema>;