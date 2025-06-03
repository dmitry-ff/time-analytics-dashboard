import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { Link } from 'react-router';
import { paths } from '../../config/paths';

export const RegisterForm = () => {
  return (
    <form>
      <Stack>
        <TextInput label="Фамилия" />
        <TextInput label="Имя" />
        <TextInput label="Отчество" />
        <TextInput label="Email" />

        <PasswordInput label="Пароль" />
        <PasswordInput label="Повторите пароль" />
        <Button>Зарегестрироваться</Button>
      </Stack>
    </form>
  );
};
