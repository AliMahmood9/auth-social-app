import Button from "../../components/button";

import {
  Container,
  Input,
  OrSeparator,
  SocialLoginContainer,
  SocialButton,
} from "./styled";

function Home() {
  return (
    <Container>
      <h2>Log in to Upwork</h2>
      <Input
        type="text"
        placeholder="Username or Email"
        //   value={username}
        //   onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="primary">Continue</Button>

      <OrSeparator>or</OrSeparator>

      <SocialLoginContainer>
        <SocialButton
          type="secondary"
          //   onClick={() => handleSocialLogin("Google")}
        >
          {/* <Icon src="path/to/google-icon.png" alt="Google" /> */}
          Continue with Google
        </SocialButton>

        <SocialButton
          type="secondary"
          // onClick={() => handleSocialLogin("Apple")}
        >
          {/* <Icon src="path/to/apple-icon.png" alt="Apple" /> */}
          Continue with Apple
        </SocialButton>
      </SocialLoginContainer>
    </Container>
  );
}

export default Home;
