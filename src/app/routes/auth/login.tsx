import { AuthLayout } from '../../../components/auth-layout';
import { LoginForm } from '../../../features/components/login-form';

const LoginRoute = () => {
  return (
    <AuthLayout title="Логин">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginRoute;
