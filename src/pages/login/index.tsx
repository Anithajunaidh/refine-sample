import { AuthPage } from "@refinedev/antd";
import { demoCredentials } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: demoCredentials,
      }}
    />
  );
};
