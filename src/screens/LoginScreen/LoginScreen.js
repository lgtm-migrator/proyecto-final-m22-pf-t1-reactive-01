import React, {useState} from 'react';
<<<<<<< HEAD
import {Text, View} from 'react-native';
=======
import {Text, View, TouchableOpacity} from 'react-native';
>>>>>>> 19dbe9ca1790a621a88db23df9da5c3bd084d7a1
import Button from '../../components/Button/CustomButton';
import Layout from '../../layout/Layout';
import {styles} from './styles';
import SocialButton from '../../components/Button/SocialButton';
import Input from '../../components/Inputs/Input';
import Logo from '../../assets/svg/logo.svg';
<<<<<<< HEAD
import * as Yup from 'yup';
import {useFormik} from 'formik';
=======
>>>>>>> 19dbe9ca1790a621a88db23df9da5c3bd084d7a1

const LoginScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: true,
    onSubmit: formvalue => {
      alert('WORK');
    },
  });
  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo width={150} height={150} />
        </View>
        <View style={styles.body}>
          <Input
            type="email"
            title="Email"
            error={formik.errors.email}
            value={formik.values.email}
            onChangeText={text => formik.setFieldValue('email', text)}
          />
          <Input
            type="password"
            title="Password"
            error={formik.errors.password}
            value={formik.values.password}
            onChangeText={text => formik.setFieldValue('password', text)}
          />
          <Text
            style={styles.forPass}
            onPress={() => navigation.navigate('ResetPassword')}>
            Forgot your password??
<          </Text>
        </View>

        <View style={styles.socialContainer}>
          <SocialButton type="facebook" size={62} />
          <SocialButton type="google" size={60} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={'Login'} onPress={formik.handleSubmit} />
          <Text style={styles.signup}>Sign Up with email</Text>
        </View>
      </View>
    </Layout>
  );
};

export default LoginScreen;

function initialValues() {
  return {email: '', password: ''};
}
function validationSchema() {
  return {
    email: Yup.string().email().required('Email required or invalid'),
    password: Yup.string().required('Password requierd'),
  };
}
