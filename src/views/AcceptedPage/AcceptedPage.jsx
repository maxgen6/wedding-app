import React, {useState} from "react";
import {Form, Input, Checkbox, Button, Spin} from "antd";

import {validateCountChildren} from "../../utils/validators";
import './AcceptedPage.scss';
import axios from "axios";
import {Loader, Message} from "../../components";

const baseURL = process.env.REACT_APP_BASE_URL;

const AcceptedPage = () => {
  const [isPartner, setIsPartner] = useState(false);
  const [isChildes, setIsChildes] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  const handlerChangePartnerData = () => setIsPartner(prev => !prev);
  const handlerChangeChildData = () => setIsChildes(prev => !prev);

  const onFinish = (value) => {
    const {guest_data, children_data, partner_data} = value

    let sum = 1;
    if (partner_data) {
      sum += 1;
    }

    if (children_data) {
      sum += +children_data;
    }

    const data = {
      guest_data,
      children_data,
      partner_data,
      sum: sum || 1,
    }

    sendData(data);
  }

  const sendData = async (value) => {
    setShowLoader(true);
    try {
      await axios.post(`https://cors-anywhere.herokuapp.com/${baseURL}/send`,
        value, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        });
    } catch (e) {
      console.error(e)
    } finally {
      setSendSuccess(true);
      setTimeout(() => {
        setSendSuccess(false);
      }, 4000);
      setShowLoader(false);
      setIsPartner(false);
      setIsChildes(false);
    }
  }

  return (
    <div className="accept-page">
      <h1>Подтвердите присутствие заполнив форму!</h1>
      {
        sendSuccess && <Message type="success" text="Спасибо за подтверждение, ждем вас на мероприятии!" />
      }

      {
        showLoader
        ? <Loader />
        : (
            <Form onFinish={onFinish}>
              <Form.Item
                label="Ваше имя и фамилия"
                name="guest_data"
                rules={[{ required: true, message: 'Пожалуйста введите ваше имя и фамилию!' }]}
              >
                <Input placeholder="Ваше имя и фамилия" />
              </Form.Item>

              <div className="checkboxes__wrapper">
                <Checkbox
                  className={'custom__checkbox'}
                  onClick={handlerChangePartnerData}
                >Буду с парой</Checkbox>
                <Checkbox
                  className={'custom__checkbox'}
                  onClick={handlerChangeChildData}
                >Буду с детьми</Checkbox>
              </div>

              {
                isPartner && (
                  <Form.Item
                    label="Имя и фамилия второй половинки"
                    name="partner_data"
                    rules={[{ required: true, message: 'Пожалуйста введите имя и фамилию второй половинки!' }]}
                  >
                    <Input placeholder="Имя и фамилия второй половинки" />
                  </Form.Item>
                )
              }

              {
                isChildes && (
                  <Form.Item
                    label="Введите пожалуйста количество детей"
                    name="children_data"
                    rules={[{ required: true, message: 'Пожалуйста введите количество детей!' }]}
                  >
                    <Input
                      type="number"
                      placehodler="Введите пожалуйста количество детей"
                      onInput={validateCountChildren}
                    />
                  </Form.Item>
                )
              }

              <Form.Item>
                <Button htmlType="submit" className="submit__button">Отправить форму!</Button>
              </Form.Item>


            </Form>
          )
      }
    </div>
  )
};

export default AcceptedPage;