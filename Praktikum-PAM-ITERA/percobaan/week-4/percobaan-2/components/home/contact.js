import React from 'react'
import {Form, Input, Button, Checkbox} from 'antd'

const {TextArea} = Input

export default function AppContract(){
    return(
        <div id="contact" className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum blabla
                    </p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    intialValues={{remember: true}}
                >
                    <Form.Item
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your name!'
                            }
                        ]}
                    >
                    <Input placeholder="Name"/>

                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!'
                            },
                            {
                                required: true,
                                required: 'Please input your E-mail!'
                            }
                        ]}
                    >
                    <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item name="telephone">
                        <Input placeholder="telephone"/>
                    </Form.Item>
                    <Form.Item name="subject">
                        <Input placeholder="subject"/>
                    </Form.Item>
                    <Form.Item name="message">
                        <Input placeholder="message"/>
                    </Form.Item>
                    <Form.Item>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                            rules={[
                                {
                                    validator:(_, value) => value ?
                                    Promise.resolve() : Promise.reject('Should accept agreement')
                                }
                            ]}
                        >
                        <Checkbox>
                            I agree with terms and conditions.
                        </Checkbox>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit"
                        className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}