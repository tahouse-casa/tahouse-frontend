import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: 70px;
`;
export const Input = styled.input`
  padding: 14px 8px;
  border-radius: 20px;
  opacity: 90%;
  border: 1px solid #b6b6b6;
  margin-bottom: 10px;
  background-color: white;
  @media (min-width: 992px) {
    width: 448px;
    height: 56px;
    margin: 0 auto;
    margin-bottom: 38px;
  }
`;
export const RegisteredMsg = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  font-size: 16px;
  color: green;
  margin-bottom: 36px;
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15px;
  color: #535353;
  margin: 0 auto;
`;
export const ShowPassword = styled.button`
  width: 10px;
  position: absolute;
  right: 15px;
  top: 55px;
  z-index: 9;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (min-width: 992px) {
    top: 100px;
    right: 20px;
  }
`;
export const PasswordRepeat = styled.button`
  width: 10px;
  position: absolute;
  right: 15px;
  top: 110px;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (min-width: 992px) {
    top: 195px;
    right: 20px;
    z-index: 10;
  }
`;

export const Button = styled.button`
  padding: 14px 12px;
  border: 1px solid #b6b6b6;
  margin-bottom: 15px;
  cursor: pointer;
  position: relative;
  margin-top: 0.5rem;
  background: #dfdfdf;
  color: black;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  @media (min-width: 992px) {
    width: 448px;
    height: 48px;
    margin: 0 auto;
    margin-bottom: 38px;
  }
`;
export const Paragraph = styled.p`
  text-align: center;
  opacity: 80%;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 36px;
  margin-top: -5px;
`;
export const RegisterButton = styled.a`
  color: #000;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  position: relative;
  @media (min-width: 992px) {
    width: 1/2;
    margin: 70px auto auto auto;
  }
`;
export const ErrorStyle = styled.span`
  text-align: center;
  background-color: #c61f1f;
  padding: 5px 10px;
  color: white;
  margin: 5px 0 10px;
  border-radius: 10px;
`;
export const Facebook = styled.img`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 20px 0px 0px 20px;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 0px;
  top: -1px;
  padding: 5px 6px 5px 6px;
  @media (min-width: 768px) {
    top: 0px;
    right: 105px;
  }
  @media (min-width: 992px) {
    top: 0px;
    right: 402px;
  }
`;
export const Google = styled.img`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 20px 0px 0px 20px;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 0px;
  bottom: 0px;
  padding: 5px 6px 5px 6px;
  @media (min-width: 768px) {
    top: 0px;
    right: 105px;
  }
  @media (min-width: 992px) {
    top: 0px;
    right: 402px;
  }
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
