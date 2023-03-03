import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { ContainerAddIMage, Phrase, ContainerIMage } from "../stylesStepsAdmin";

export const StepONe = () => {
  const [images, setImages] = useState("");

  const sendArchives = () => {
    const f = new FormData();

    for (let index = 0; index < images.length; index++) {
      f.append("Downloads", images[index]);
    }
    return f;
  };
  return (
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
          enctype="multipart/form-data"
        />
        <Phrase htmlFor="upload-image">CARGAR IMÁGENES </Phrase>
        <BiImageAdd size="25px" onClick={() => console.log(sendArchives())} />
      </ContainerAddIMage>
    </ContainerIMage>
  );
};
