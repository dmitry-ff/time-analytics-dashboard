import { AuthLayout } from '../../../components/auth-layout';
import { RegisterForm } from '../../../features/components/register-form';

const RegisterRoute = () => {
  return (
    <AuthLayout title="Логин">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterRoute;
