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

const BASE_URL = "https://drive.google.com/uc?id=";

export const StepONe = ({ images, setImages, data, setData }) => {
  const handleSelectImages = (files) => {
    const freeSpaceForUploadImages = 3 - data.urlImage.length;
    if (files.length > 3) {
      let onlythreeLengthImages = {};
      for (let index = 0; index < freeSpaceForUploadImages; index++) {
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

  const handleDeleteUrlImage = (indexItem) => {
    const newImages = data.urlImage.filter(
      (item, index) => index !== indexItem
    );
    setData({ ...data, urlImage: newImages });
  };

  const handleUrlImage = (image) => {
    if (typeof image === "string") {
      return BASE_URL + image;
    }
    return URL.createObjectURL(image);
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
        {data?.urlImage.map((item, index) => (
          <div style={{ position: "relative" }} key={`${index}${item}`}>
            <ButtonDeleteImg onClick={() => handleDeleteUrlImage(index)}>
              <MdCancel
                size="25px"
                style={{
                  background: "#fff",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </ButtonDeleteImg>
            <Img src={handleUrlImage(item)} alt="" />
          </div>
        ))}
        {data?.urlImage?.length !== 3 &&
          images["0"] &&
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
              <Img src={handleUrlImage(item)} alt="" />
            </div>
          ))}
      </ContainerImages>
    </ContainerStep1>
  );
};
