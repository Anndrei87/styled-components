import React from 'react'

import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements'

const Singnin= () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>V-Bank</Icon>
                    <FormContent >
                        <Form action="#">
                            <FormH1>Sing in to your account</FormH1>
                            <FormLabel htmlFor='for'> Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text >Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Singnin
