import { BigInput, Container, Title, ErrorSpan } from "./stylesSelect.js";

export const BigInputComponent = ({
  handleSearch,
  placeholder,
  nameInput,
  errorInput,
  setErrorInput,
  valor,
  noLabel,
  intoPlaceholder,
  message,
}) => {
  const veryfyInputs = (e) => {
    setErrorInput({ ...errorInput, [nameInput]: null });
    handleSearch(e);
  };
  return (
    <Container>
      {!noLabel && <Title>{placeholder}</Title>}
      <div>
        <BigInput
          name={nameInput}
          type="text"
          onChange={(e) => veryfyInputs(e)}
          placeholder={intoPlaceholder || ""}
          value={valor}
          error={errorInput[`${nameInput}`] ? true : false}
        />
        {errorInput && errorInput[`${nameInput}`] && (
          <ErrorSpan>{message || ""}</ErrorSpan>
        )}
      </div>
    </Container>
  );
};
