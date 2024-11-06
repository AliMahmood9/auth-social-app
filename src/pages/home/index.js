import { useState } from "react";
import authService from "../../services/authService";

import {
  Container,
  Input,
  OrSeparator,
  SocialLoginContainer,
  SocialButton,
  SocialContinueButton,
  Form,
} from "./styled";
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth";

function Home() {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    authService
      .login(username)
      .then(() => {})
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <Container>
      <h2>Log in</h2>
      <Form>
        <Input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SocialContinueButton onClick={handleLogin} type="primary">
          Continue
        </SocialContinueButton>
      </Form>

      <OrSeparator>or</OrSeparator>

      <SocialLoginContainer>
        <GoogleAuth />
        <SocialButton type="secondary">Continue with Apple</SocialButton>
      </SocialLoginContainer>
    </Container>
  );
}

export default Home;
