import { useState } from "react";
import { Container, Img, Title, ContainerItem } from "./stylesAdminItem";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { MdOutlineWarning } from "react-icons/md";
import { ModalComponent } from "../modal/modalComponent";

export const AdminItem = ({ data, handleDelete, handleEdit }) => {
  const [view, setView] = useState(false);
  const { country, id } = data;

  return (
    <>
      <Container>
        <ContainerItem>
          <Img />
          <Title>{country}</Title>
        </ContainerItem>
        <div>
          <MdModeEdit
            size="18px"
            style={{ background: "transparent", marginRight: "30px" }}
            onClick={() => handleEdit()}
          />
          <MdDelete
            size="18px"
            style={{ background: "transparent", marginRight: "20px" }}
            onClick={() => setView(true)}
          />
        </div>
      </Container>
      {view && (
        <ModalComponent
          title="¡Cuidado!"
          paragraph="Estás a punto de eliminar este país de forma permanente.
                            ¿Estás seguro de querer hacerlo?"
          buttons
          paragraphButton="ELIMINAR"
          handleModal={() => handleDelete(id)}
          paragraphSecondButton="CANCELAR"
          handleSecond={() => setView(false)}
        >
          <MdOutlineWarning size="20px" style={{ background: "transparent" }} />
        </ModalComponent>
      )}
    </>
  );
};
