import { Flex, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
    return (
        <Flex
            width='100vw'
            height='100vh'
            alignItems='center'
            justifyContent='center'
        >
            <Flex
                as='form'
                width='100%'
                maxWidth={360}
                background='gray.800'
                padding={8} // 2rem ou 32px
                borderRadius={8} // 8px
                flexDirection='column'
            >
                <Stack spacing={4}>
                    <Input name='email' label='E-mail' type='email' />
                    <Input name='password' label='Senha' type='password' />
                </Stack>

                <Button type='submit' marginTop={6} colorScheme='pink' size='lg' >Entrar</Button>

            </Flex>
        </Flex>
    )
}
