import React, { useEffect, useRef } from "react";
import { Typography, Form, Input, Button, message } from 'antd';
import { useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined, GoogleOutlined } from "@ant-design/icons";
// import { PrimaryButton } from '../UI/Buttons/sButtons.js';
import { Block } from '../UI/Contents/sContents.js';

const LoginForm = () => {
  const history = useHistory();
  const user = useRef();
  const pass = useRef();
  const loadingStatus = false;
  const errorStatus = "";
  const currentToken = "";

  useEffect(() => {
    if (errorStatus) {
      message.error("errorStatus");
    }
  }, [errorStatus]);
  const handleLogin = () => {
    console.log({
      user: user?.current?.input?.value,
      pass: pass?.current?.input?.value,
    });
    history.push("/#/Reservations");
  };

  return (
    <Block
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Block
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="90vw"
        maxWidth="27rem"
      >
        <img style={{ width: "6rem" }} src="https://i.imgur.com/RFJPfyp.png" />
        <Block py="0.3rem">
          <Typography.Text>RESERVAS</Typography.Text>
        </Block>
        <Block py="1.4rem">
          <Typography.Text strong>INGRESAR</Typography.Text>
        </Block>
        <Block>
          <Form onFinish={handleLogin} layout="vertical">
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Ingrese un correo válido",
                },
                {
                  required: true,
                  message: "Es necesario un correo",
                },
              ]}
            >
              <Input
                ref={user}
                prefix={<UserOutlined />}
                placeholder="Correo institucional"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese su constraseña",
                },
                {
                  min: 4,
                  message: "minimo 4 caracteres",
                },
              ]}
            >
              <Input.Password
                ref={pass}
                prefix={<LockOutlined />}
                placeholder="Contraseña"
              />
            </Form.Item>
            <Form.Item>
              {/* <PrimaryButton type="danger" htmlType="submit">
                {loadingStatus ? "Loading " : "Ingresar"}
              </PrimaryButton> */}
            </Form.Item>
          </Form>
          <Block
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Block borderBottom="solid 1px #000" flex={0.4}>
              <span />
            </Block>
            <Block p=".4rem" borderRadius="50%" border="solid 1px #000">
              <span />
            </Block>
            <Block borderBottom="solid 1px #000" flex={0.4}>
              <span />
            </Block>
          </Block>
          <Block my="1rem">
            <Button
              icon={<GoogleOutlined />}
              style={{ width: "100%" }}
              type="default"
              htmlType="submit"
            >
              Ingresar con Google
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default LoginForm;
