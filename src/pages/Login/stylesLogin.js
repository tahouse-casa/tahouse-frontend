import styled from "styled-components";
import { Link } from "react-router-dom";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 12px;
`;
export const Title = styled.h1`
  letter-spacing: -1px;
  font-family: "Roboto";
  font-size: 20px;
  color: rgba(0, 0, 0, 0.87);
  margin: 65px auto 0;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const SecondTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  opacity: 60%;
  margin: 4px 0 28px;
  font-family: "Roboto";
  color: rgba(0, 0, 0, 0.87);
  margin: 0 auto;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const Input = styled.input`
  padding: 14px 8px;
  border-radius: 20px;
  opacity: 90%;
  border: 1px solid #b6b6b6;
  margin-bottom: 10px;
  background-color: white;
`;
export const Button = styled.button`
  padding: 14px 12px;
  border-radius: 20px;
  border: 1px solid #b6b6b6;
  margin-bottom: 15px;
  cursor: pointer;
  margin-top: 1.5rem;
  background: #dfdfdf;
  color: black;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;
export const Paragraph = styled.p`
  text-align: center;
  opacity: 80%;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const RegisterButton = styled(Link)`
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
  margin-top: 3rem;
  margin-bottom: 2rem;
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
  top: 24px;
  padding: 5px 6px 5px 6px;
`;
export const Google = styled.img`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 20px 0px 0px 20px;
  position: absolute;
  width: 45px;
  height: 45px;
  left: 0px;
  bottom: 15px;
  padding: 5px 6px 5px 6px;
`;
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const ContainerLeter = styled.div`
  display: flex;
  justify-content: center;
`;
