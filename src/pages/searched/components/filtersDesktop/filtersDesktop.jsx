import { useContext, useState } from "react";
import { AppContext } from "../../../../context";
import {
  AllContainer,
  Container,
  ContainerItem,
  ContainerInput,
  InputItem,
  SelectItem,
} from "./stylesFiltersDesktop";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FiltersDesktop = ({ children }) => {
  const [viewInputs, setViewInputs] = useState({});
  const { countries, handleSearch, valueInput, defaultCountry } =
    useContext(AppContext);
  const style = {
    background: "transparent",
  };
  return (
    <AllContainer>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              country: viewInputs?.country ? false : true,
            })
          }
        >
          País
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.country && (
          <ContainerInput onClick={() => ""}>
            <SelectItem
              placeholder="País"
              name={"country"}
              defaultValue={defaultCountry?.country}
              onChange={(e) => {
                handleSearch(e);
              }}
              type="number"
            >
              {countries.map((item, index) => (
                <option key={index} value={item.country}>
                  {item.country}
                </option>
              ))}
            </SelectItem>
          </ContainerInput>
        )}
      </Container>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              ambientes: viewInputs?.ambientes ? false : true,
            })
          }
        >
          Ambientes
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.ambientes && (
          <ContainerInput onClick={() => ""}>
            <InputItem
              placeholder="Cantidad de ambientes"
              name={"ambientes"}
              onChange={handleSearch}
              valor={valueInput.ambientes}
              type="number"
            />
          </ContainerInput>
        )}
      </Container>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              baños: viewInputs?.baños ? false : true,
            })
          }
        >
          Baños
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.baños && (
          <ContainerInput onClick={() => ""}>
            <InputItem
              placeholder="Cantidad de baños"
              name={"baños"}
              onChange={handleSearch}
              valor={valueInput.baños}
              type="number"
            />
          </ContainerInput>
        )}
      </Container>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              precio: viewInputs?.precio ? false : true,
            })
          }
        >
          Precio
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.precio && (
          <ContainerInput onClick={() => ""}>
            <InputItem
              placeholder="precio"
              name={"precio"}
              onChange={handleSearch}
              valor={valueInput.precio}
              type="number"
            />
          </ContainerInput>
        )}
      </Container>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              habitaciones: viewInputs?.habitaciones ? false : true,
            })
          }
        >
          Habitaciones
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.habitaciones && (
          <ContainerInput onClick={() => ""}>
            <InputItem
              placeholder="Cantidad de habitaciones"
              name={"habitaciones"}
              onChange={handleSearch}
              valor={valueInput.habitaciones}
              type="number"
            />
          </ContainerInput>
        )}
      </Container>
      <Container>
        <ContainerItem
          onClick={() =>
            setViewInputs({
              ...viewInputs,
              max: viewInputs?.max ? false : true,
            })
          }
        >
          Mts2
          <MdKeyboardArrowDown style={style} />
        </ContainerItem>
        {viewInputs?.max && (
          <ContainerInput onClick={() => ""}>
            <InputItem
              placeholder="Mts2"
              name={"max"}
              onChange={handleSearch}
              valor={valueInput.max}
              type="number"
            />
          </ContainerInput>
        )}
      </Container>
      {children}
    </AllContainer>
  );
};
