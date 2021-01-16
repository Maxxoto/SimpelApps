import React from 'react';

import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Input, Button, Form } from 'antd';

import LogoKemenkes from '../assets/images/LogoKemenkes.png';
const Login = (props) => {
  const { control, errors, handleSubmit } = useForm();

  // Logic login
  const getLogin = (data) => {
    console.log(data);
    // props.login(data);
  };

  // Pesan validasi

  return (
    <div className='container'>
      <div className='row'>
        <div className=' card-login mx-auto'>
          <div className='card card-signin flex-row my-5'>
            <div className='card-body text-center'>
              <img src={LogoKemenkes} className='mb-5' alt='Logo Kemenkes' />
              <Form className='form-signin' onFinish={handleSubmit(getLogin)}>
                <Form.Item
                  name='email'
                  rules={[
                    {
                      required: errors.email && true,
                      message: 'Email tidak boleh kosong',
                    },
                  ]}
                  initialValue=''
                >
                  <Controller
                    as={Input}
                    name='email'
                    type='email'
                    placeholder='Masukkan email anda'
                    autoComplete='email'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: errors.password && true,
                      message: 'Password tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input.Password}
                    style={errors.password && { borderColor: 'red' }}
                    name='password'
                    type='password'
                    placeholder='Masukkan password anda'
                    autoComplete='current-password'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>
                <Button
                  className='btn btn-register-login text-uppercase'
                  htmlType='submit'
                >
                  Login
                </Button>
                <Link to='#' className=' d-block justify-content-center mt-3'>
                  Register
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
