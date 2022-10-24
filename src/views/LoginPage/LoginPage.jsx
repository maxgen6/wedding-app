import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Button, Form, Input} from "antd";

import './LoginPage.scss';
import {validateCountChildren} from "../../utils/validators";
import {userData} from "../../utils/userData";
import {setToken} from "../../utils/localStorage";
import {Loader, Message} from "../../components";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false)
  const [userInfo, setUserInfo] = useState(null);

  const onFinish = (value) => {
    setIsError(false);
    const hasData = userData.find(item => item.number === value.phone)
    if (hasData) {
      setToken('user_token');
      setUserInfo(hasData);
      setTimeout(() => {
        setUserInfo(null);
        navigate('/invited');
      }, 3000)
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 7000);
    }
  }

  return (
    <div className="login">
      {
        isError && <Message type="error" text="Вашего номера нет в базе, свяжитесь с администрацией +375333212132" />
      }

      {
        userInfo && (
          <>
            <Message type="success" text={`Приветствуем вас, семья ${userInfo?.family}!`} />
            <Loader />
          </>
        )
      }

      <h1>Войдите в приложение!</h1>

      <Form onFinish={onFinish}>
        <Form.Item
          label="Введите ваш мобильный номер в формате +375..."
          name="phone"
          rules={[{ required: true, message: 'Пожалуйста введите ваш мобильный номер!' }]}
        >
          <Input placeholder="Введите ваш мобильный номер" onInput={validateCountChildren} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="submit__button">Войти</Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default LoginPage;