import { Container, ContainerLink, Title } from "./stylesReturn";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

export const Return = ({
  linke,
  title = false,
  children,
  viewTitle,
  handleReturn,
}) => {
  return (
    <Container>
      <ContainerLink>
        {!handleReturn && (
          <Link to={linke}>
            <BsArrowLeftShort size="32px" fill="#000" />
          </Link>
        )}
        {handleReturn && (
          <BsArrowLeftShort
            size="32px"
            fill="#000"
            onClick={() => handleReturn()}
          />
        )}
        {title && viewTitle && <Title>{title}</Title>}
      </ContainerLink>
      {children}
    </Container>
  );
};
