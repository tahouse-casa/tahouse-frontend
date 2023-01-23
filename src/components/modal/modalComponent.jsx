import {
  ContainerModal,
  SecondContainer,
  ThirdContainer,
  TextModal,
  ButtonContinue,
} from "./stylesModal";
import { Link } from "react-router-dom";
export const ModalComponent = ({
  children,
  title,
  paragraph,
  paragraphButton,
  linke,
  handleModal,
  handleSecond,
  paragraphSecondButton,
  buttons,
}) => {
  const largeParagraph = paragraph.length > 50 ? true : false;
  return (
    <ContainerModal second>
      <SecondContainer>
        <ThirdContainer>
          {children}
          <TextModal isTitle>{title}</TextModal>
          <TextModal largeParagraph={largeParagraph}>{paragraph}</TextModal>
          {buttons && (
            <ButtonContinue onClick={() => handleSecond()}>
              {paragraphSecondButton}
            </ButtonContinue>
          )}
          {!linke && (
            <ButtonContinue buttons={buttons} onClick={() => handleModal()}>
              {paragraphButton}
            </ButtonContinue>
          )}
          {linke && (
            <Link to={linke}>
              <ButtonContinue onClick={() => handleModal()}>
                {paragraphButton}
              </ButtonContinue>
            </Link>
          )}
        </ThirdContainer>
      </SecondContainer>
    </ContainerModal>
  );
};
