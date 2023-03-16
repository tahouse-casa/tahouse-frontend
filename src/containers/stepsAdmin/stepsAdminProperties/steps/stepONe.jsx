import { useState, useContext } from "react";
import { BiImageAdd } from "react-icons/bi";
import { ContainerAddIMage, Phrase, ContainerIMage } from "../stylesStepsAdmin";
import { AppContext } from "../../../../context";
export const StepONe = () => {
  const [images, setImages] = useState("");

  const { JWT } = useContext(AppContext);
  const TOKEN = JWT.token;

  const sendArchives = async () => {
    const f = new FormData();

    for (let index = 0; index < images.length; index++) {
      f.append("file", images[index]);
    }

    fetch(`${process.env.REACT_APP_API_URL}/properties/uploadFile`, {
      method: "POST",
      headers: {
        //"Content-Type": "multipart/form-data",
        authorization: `Bearer ${TOKEN}`,
      },
      body: f,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <ContainerIMage>
        <ContainerAddIMage>
          <input
            type="file"
            style={{ display: "none" }}
            id="upload-image"
            multiple
            onChange={(e) => {
              //console.log(e.target.files);
              setImages(e.target.files);
            }}
            encType="multipart/form-data"
          />
          <Phrase htmlFor="upload-image">CARGAR IMÁGENES </Phrase>
          <BiImageAdd size="25px" />
        </ContainerAddIMage>
      </ContainerIMage>
      <button onClick={() => sendArchives()}>enviar</button>
    </>
  );
};
