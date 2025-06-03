import { Button, PasswordInput, Stack, TextInput } from '@mantine/core';
import { Link } from 'react-router';
import { paths } from '../../config/paths';

export const LoginForm = () => {
  return (
    <form>
      <Stack>
        <TextInput />
        <PasswordInput />
        <Button>Войти</Button>
        <Button
          variant="outline"
          color="grey.0"
          component={Link}
          to={paths.auth.register.getHref()}
        >
          Создать аккаунт
        </Button>
      </Stack>
    </form>
  );
};
