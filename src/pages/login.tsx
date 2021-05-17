import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Heading,
  Image,
  Text,
  Link as ChakraLink,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Checkbox,
  Icon,
  Spinner,
  useToast
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import api from '../config/api';
import { useAuth } from '../contexts/auth';
import { LOGIN } from '../graphql/mutations/auth';
import { VALIDATE } from '../graphql/queries/auth';

const Login = () => {
  const router = useRouter();
  const { signed, login } = useAuth();
  const dispatch = () => null;
  const toast = useToast();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const loginResponse = await api.request(LOGIN, {
        email,
        password
      });

      const validateResponse = await api.request(
        VALIDATE,
        {},
        { authorization: `Bearer ${loginResponse.login}` }
      );

      login(validateResponse.validate, loginResponse.login);

      setLoading(false);
    } catch (err) {
      toast({
        title: 'Ops, aconteceu um problema!',
        description: err.response.errors[0].extensions.response.body.error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      setLoading(false);
    }
  };

  useEffect(() => {
    if (signed) {
      router.push('/');
    }
  }, [signed]);

  if (signed) {
    return <span>Carregando...</span>;
  }

  return (
    <Flex as="main" height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" width="24rem" paddingX="1rem">
        <Image
          src="/jobbing.svg"
          alt="Logo Jobbing"
          width="7rem"
          marginBottom="1.5rem"
        />
        <Heading as="h1">Entre na sua conta</Heading>
        <Text fontSize="md" marginBottom="2rem">
          ou{' '}
          <Link href="#">
            <ChakraLink color="pink.500">crie uma nova</ChakraLink>
          </Link>
        </Text>
        <FormControl marginBottom="1.5rem">
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="Digite seu e-mail"
            focusBorderColor="pink.400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl marginBottom="1.5rem">
          <FormLabel>Senha</FormLabel>
          <InputGroup>
            <Input
              pr="7rem"
              type={show ? 'text' : 'password'}
              placeholder="Digite sua senha"
              focusBorderColor="pink.400"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <InputRightElement>
              <Icon
                as={show ? FiEyeOff : FiEye}
                onClick={() => setShow(!show)}
                cursor="pointer"
                color="gray.300"
                transition="0.15s ease-in-out"
                _hover={{ color: 'gray.400' }}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom="1.5rem"
        >
          <Checkbox colorScheme="pink" defaultIsChecked>
            Lembrar
          </Checkbox>
          <Link href="#">
            <ChakraLink color="pink.500">Esqueceu a senha?</ChakraLink>
          </Link>
        </Flex>
        <Flex justifyContent="flex-end">
          <Button colorScheme="pink" width="100%" onClick={handleSubmit}>
            {loading ? <Spinner color="white" size="sm" /> : 'Entrar'}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
