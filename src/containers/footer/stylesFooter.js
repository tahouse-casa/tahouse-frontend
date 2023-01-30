import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  background-color: #ebeaea;
  padding-bottom: 1rem;
  margin: 0 auto;
  padding: 40px 0;
`;
