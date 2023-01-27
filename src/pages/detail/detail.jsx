import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../containers/footer/footer";
import { useParams } from "react-router-dom";
import { DetailCard } from "../../components/detailCard/detailCard";
import { Return } from "../../components/return/return";
import { AppContext } from "../../context";
import { MdShare, MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import {
  MainContainer,
  ContainerIcons,
  Copy,
  Divbutton,
  CopieA,
} from "./stylesDetail";
import { writeText } from "clipboard-polyfill";

export const Detail = () => {
  const [card, setCard] = useState({});
  const params = useParams();
  const { user, fetchUser, JWT } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = params;
  const idCard = Number(id);

  const url = window.location.href;

  const [buttonText, setButtonText] = useState("");

  function copyUrl() {
    try {
      writeText(url);
      setButtonText("Copied!");
    } catch (err) {
      alert("Error!");
      setButtonText("Error!");
    }
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/properties/${idCard}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, [idCard]);

  const viewIncludes = user?.properties_favorites.find(
    (item) => item.id === card.id
  );

  const handleDelete = () => {
    const idFavorite = viewIncludes?.Favorites?.id;
    fetch(`${process.env.REACT_APP_API_URL}/favorites/${idFavorite}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchUser(JWT?.user?.id);
      });
  };

  const handleAddFavorite = () => {
    if (!JWT?.user?.id) {
      navigate("/login");
      return;
    }
    fetch(`${process.env.REACT_APP_API_URL}/favorites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: JWT?.user?.id,
        propertyId: idCard,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        fetchUser(JWT?.user?.id);
      });
  };

  return (
    <>
      <Navbar />
      <Return linke={-1}>
        <ContainerIcons>
          <CopieA>{buttonText}</CopieA>
          <Divbutton>
            {viewIncludes ? (
              <MdFavorite
                size="20px"
                onClick={() => handleDelete()}
                style={{ background: "transparent" }}
              />
            ) : (
              <MdOutlineFavoriteBorder
                size="20px"
                onClick={() => handleAddFavorite()}
                style={{ background: "transparent" }}
              />
            )}
            <Copy type="text" value={url} readOnly={true} />
            <button className="copy-button" onClick={copyUrl}>
              <MdShare
                size="20px"
                style={{
                  background: "transparent",
                  color: "black",
                }}
              />
            </button>
          </Divbutton>
        </ContainerIcons>
      </Return>
      <MainContainer>
        <DetailCard card={card} />
      </MainContainer>
      <Footer />
    </>
  );
};
