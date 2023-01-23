import { BiImageAdd } from "react-icons/bi";
import { ContainerAddIMage, Phrase, ContainerIMage } from "../stylesStepsAdmin";

export const StepONe = () => {
  return (
    <ContainerIMage>
      <ContainerAddIMage>
        <Phrase>CARGAR IMÁGENES </Phrase>
        <BiImageAdd size="25px" />
      </ContainerAddIMage>
    </ContainerIMage>
  );
};
