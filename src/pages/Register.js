import React from 'react';
import LogoKemenkes from '../assets/images/LogoKemenkes.png';

import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Register = (props) => {
  const { control, errors, handleSubmit } = useForm();

  const postRegister = (data) => {
    console.log(data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className=' card-register mx-auto'>
          <div className='card card-regist flex-row my-5'>
            <div className='card-body text-center'>
              <img src={LogoKemenkes} className='mb-5' alt='logo kemenkes' />
              <Form
                className='form-register'
                layout='vertical'
                onFinish={handleSubmit(postRegister)}
              >
                <h6 className='text-left font-weight-bold'>
                  Biodata Instansi dan Pribadi
                </h6>
                <Form.Item
                  label='Nama Instansi'
                  name='nama_instansi'
                  rules={[
                    {
                      required: errors.nama_instansi && true,
                      message: 'Nama instansi tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input}
                    style={errors.nama_instansi && { borderColor: 'red' }}
                    name='nama_instansi'
                    type='text'
                    placeholder='Masukkan nama instansi'
                    autoComplete='nama_instansi'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>
                <Form.Item
                  label='Nama Lengkap'
                  name='nama_lengkap'
                  rules={[
                    {
                      required: errors.nama_lengkap && true,
                      message: 'Nama lengkap tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input}
                    style={errors.nama_lengkap && { borderColor: 'red' }}
                    name='nama_lengkap'
                    type='text'
                    placeholder='Masukkan nama lengkap pengguna'
                    autoComplete='nama_lengkap'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>

                <Form.Item
                  label='Jenis Usaha'
                  name='jenis_usaha'
                  rules={[
                    {
                      required: errors.jenis_usaha && true,
                      message: 'Jenis Usaha tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input}
                    style={errors.jenis_usaha && { borderColor: 'red' }}
                    name='jenis_usaha'
                    type='text'
                    placeholder='Masukkan jenis usaha'
                    autoComplete='jenis_usaha'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>

                <Form.Item
                  label='Nomor HP / Whatsapp'
                  name='no_hp'
                  rules={[
                    {
                      required: errors.no_hp && true,
                      message: 'Nomor HP tidak sesuai atau kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input}
                    style={errors.no_hp && { borderColor: 'red' }}
                    name='no_hp'
                    type='text'
                    placeholder='Masukkan No HP pengguna'
                    autoComplete='no_hp'
                    control={control}
                    defaultValue=''
                    rules={{
                      required: true,
                      pattern: /^[0-9]*$/g,
                    }}
                  />
                </Form.Item>

                <Form.Item
                  label='Alamat'
                  name='alamat'
                  rules={[
                    {
                      required: errors.alamat && true,
                      message: 'Alamat tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input.TextArea}
                    style={errors.alamat && { borderColor: 'red' }}
                    name='alamat'
                    type='text'
                    autoSize={{ minRows: 2, maxRows: 6 }}
                    placeholder='Masukkan alamat instansi'
                    autoComplete='alamat'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>
                <Divider />
                <h6 className='text-left font-weight-bold'>Registrasi Akun</h6>
                <Form.Item
                  label='Email Instansi / Pribadi'
                  name='email'
                  rules={[
                    {
                      required: errors.email && true,
                      message: 'Email tidak boleh kosong',
                    },
                  ]}
                >
                  <Controller
                    as={Input}
                    style={errors.email && { borderColor: 'red' }}
                    name='email'
                    type='email'
                    placeholder='Masukkan email instansi'
                    autoComplete='email'
                    control={control}
                    defaultValue=''
                    rules={{ required: true }}
                  />
                </Form.Item>

                <Form.Item
                  label='Password'
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

                <Form.Item
                  label='Konfirmasi Password'
                  name='password2nd'
                  rules={[
                    {
                      required: errors.password && true,
                      message: 'Konfirmasi Password tidak sesuai',
                    },
                  ]}
                  validateStatus={errors.password && 'error'}
                >
                  <Controller
                    as={Input.Password}
                    style={errors.password2nd && { borderColor: 'red' }}
                    name='password2nd'
                    type='password'
                    placeholder='Masukkan ulang password anda'
                    control={control}
                    defaultValue=''
                    rules={{
                      required: true,
                      validate: (value) =>
                        value === control.getValues('password'),
                    }}
                  />
                </Form.Item>
                <Button
                  className='btn btn-register-login text-uppercase'
                  htmlType='submit'
                >
                  Register
                </Button>
                <Link
                  to='/login'
                  className=' d-block justify-content-center mt-3'
                >
                  <ArrowLeftOutlined /> Back to login page
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
