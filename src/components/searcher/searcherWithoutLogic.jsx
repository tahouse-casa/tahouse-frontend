import { Container, SearchButton, Input } from "./stylesSearcher";
import { BsSearch } from "react-icons/bs";

export const SearcherWithoutLogic = ({
  inputValue,
  searchData,
  onlyButton,
  placeholder,
  nameInput,
  handleSearch,
  onClickButtonSearch,
  viewAll,
}) => {
  return (
    <Container onlyButton={onlyButton} viewAll={viewAll}>
      {!onlyButton && (
        <BsSearch
          size={"15px"}
          style={{ margin: "0 12px", backgroundColor: "#fff" }}
          onClick={() => onClickButtonSearch()}
        />
      )}
      {viewAll && (
        <Input
          type="text"
          placeholder={placeholder}
          name={nameInput}
          value={inputValue}
          onChange={(e) => handleSearch(e)}
          onlyButton={onlyButton}
          v
        />
      )}
      {viewAll && (
        <SearchButton onClick={() => searchData()}>Buscar</SearchButton>
      )}
    </Container>
  );
};
