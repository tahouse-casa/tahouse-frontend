import { BiImageAdd } from "react-icons/bi";
import { ContainerAddIMage, Phrase} from "../stylesStepsAdmin"


export const StepONe = () => {
    return (
        <ContainerAddIMage>
            <Phrase>CARGAR IMÁGENES </Phrase>
            <BiImageAdd size="30px"/>
        </ContainerAddIMage>
    )
}