import { Input, Container, Title, ErrorSpan } from "./stylesSelect.js";

export const InputComponent = ({
  handleSearch,
  placeholder,
  nameInput,
  errorInput,
  setErrorIput,
  type,
  validate = "integer",
  valor,
  noLabel,
  intoPlaceholder,
  message,
}) => {
  const verifyInputs = (verify, nameInput, e) => {
    if (e.target.value === "") {
      setErrorIput({ ...errorInput, [nameInput]: null });
      handleSearch(e);
    } else if (verify === "integer") {
      const includesValue = e.target.value.includes(".");
      if (includesValue) {
        setErrorIput({
          ...errorInput,
          [nameInput]: `error: el número de ${placeholder} debe de ser un entero`,
        });
      } else {
        setErrorIput({ ...errorInput, [nameInput]: null });
        handleSearch(e);
      }
    } else if (verify === "decimal") {
      const includesValue = e.target.value.includes(".");
      if (!includesValue) {
        setErrorIput({
          ...errorInput,
          [nameInput]: `error: el número de ${placeholder} debe de ser un decimal`,
        });
      } else {
        setErrorIput({ ...errorInput, [nameInput]: null });
        handleSearch(e);
      }
    } else {
      setErrorIput({ ...errorInput, [nameInput]: null });
      handleSearch(e);
    }
  };
  return (
    <Container>
      <Title>{placeholder}</Title>
      <div>
        <Input
          name={nameInput}
          type={noLabel ? "text" : type || "number"}
          onChange={(e) => verifyInputs(validate, nameInput, e)}
          placeholder={intoPlaceholder || ""}
          value={valor}
          error={errorInput[`${nameInput}`] ? true : false}
        />
        {errorInput && errorInput[`${nameInput}`] && (
          <ErrorSpan>
            {message || `El campo ${placeholder} no puede estar vacio`}
          </ErrorSpan>
        )}
      </div>
    </Container>
  );
};
