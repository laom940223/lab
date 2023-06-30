import { Button, Checkbox, Col, Form, Input, Row } from "antd"
import { LoginCredentials, useAuth } from "../context/auth-context"
import { Navigate, useLocation } from "react-router-dom"



export const Login = ()=>{


    const auth = useAuth()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"

    const onFinish = (values: LoginCredentials) => {
        
        auth.logIn(values)


        };

        
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        };
    

    if(auth.user) return <Navigate to={from} />

    return (

        <>
    <Row justify={"center"} align={"middle"} style={{height:"100vh"}}>
        <Col span={24} style={{display:"flex",alignItems:"center", justifyContent:"center"}} >

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Email"
                name="email"
                


                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </Col>
    </Row>
    </>
    )
}