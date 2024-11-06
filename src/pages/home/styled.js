import styled from "styled-components";
import Button from "../../components/button";

export const Form = styled.form`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const OrSeparator = styled.div`
  margin: 1rem 0;
  font-size: 14px;
  color: #666;
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
    margin: 0 0.5rem;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SocialButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 15px 24px;
  border: 2px;
  border-radius: 10px;
`;

export const SocialContinueButton = styled(SocialButton)`
  background-color: rgb(16, 138, 0);
  color: #fff;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
