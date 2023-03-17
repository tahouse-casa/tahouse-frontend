import { BiImageAdd } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import {
  ContainerAddIMage,
  Phrase,
  ContainerStep1,
  ContainerImages,
  ButtonDeleteImg,
  Img,
} from "../stylesStepsAdmin";
export const StepONe = ({ images, setImages }) => {
  const handleSelectImages = (files) => {
    if (files.length > 3) {
      let onlythreeLengthImages = {};
      for (let index = 0; index < 3; index++) {
        onlythreeLengthImages = {
          ...onlythreeLengthImages,
          [index]: files[index],
        };
      }
      setImages(onlythreeLengthImages);
      return;
    }
    setImages({ ...files });
  };

  const handleDeleteImage = (indexItem) => {
    const newImages = Object.values(images).filter(
      (item, index) => index !== indexItem
    );
    setImages(newImages);
  };

  return (
    <ContainerStep1>
      <ContainerAddIMage>
        <input
          type="file"
          style={{ display: "none" }}
          id="upload-image"
          multiple
          onChange={(e) => handleSelectImages(e.target.files)}
          encType="multipart/form-data"
        />
        <Phrase htmlFor="upload-image">
          CARGAR IMÁGENES
          <BiImageAdd size="25px" />
        </Phrase>
      </ContainerAddIMage>
      <ContainerImages>
        {images["0"] &&
          Object.values(images).map((item, index) => (
            <div style={{ position: "relative" }} key={`${index}${item?.name}`}>
              <ButtonDeleteImg onClick={() => handleDeleteImage(index)}>
                <MdCancel
                  size="25px"
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                />
              </ButtonDeleteImg>
              <Img src={URL.createObjectURL(item)} alt="" />
            </div>
          ))}
      </ContainerImages>
    </ContainerStep1>
  );
};
