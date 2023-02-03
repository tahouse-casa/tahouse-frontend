import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../containers/footer/footer";
import { useParams } from "react-router-dom";
import { DetailCard } from "../../components/detailCard/detailCard";
import { Return } from "../../components/return/return";
import { AppContext } from "../../context";
import { Loader } from "../../components/loader/loader";
import {
  MdShare,
  MdOutlineFavoriteBorder,
  MdFavorite,
  MdCheckCircle,
} from "react-icons/md";
import {
  MainContainer,
  ContainerIcons,
  Copy,
  Divbutton,
  ContainerReturn,
} from "./stylesDetail";
import { writeText } from "clipboard-polyfill";

export const Detail = () => {
  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(true);
  const [copyshow, setCopyshow] = useState(false);
  const [textCopied, setTextCopied] = useState(false);
  const params = useParams();
  const { user, fetchUser, JWT } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = params;
  const idCard = Number(id);

  const url = window.location.href;

  const copyUrl = () => {
    try {
      writeText(url);
      setTextCopied(true);
      setTimeout(() => {
        setTextCopied(false);
      }, [1500]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URL}/properties/${idCard}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setLoading(false);
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
      {!loading ? (
        <div>
          <Navbar />
          <ContainerReturn>
            <Return linke={-1}>
              <ContainerIcons>
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
                  {copyshow && (
                    <div style={{ display: "flex" }}>
                      <Copy type="text" value={url} readOnly={true} show />
                      <button
                        style={{
                          background: "#373e47",
                          color: "#fff",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        onClick={() => copyUrl()}
                      >
                        {textCopied ? (
                          <MdCheckCircle
                            size={"16px"}
                            style={{
                              fill: "#39b508",
                              background: "transparent",
                            }}
                          />
                        ) : (
                          "Copiar"
                        )}
                      </button>
                    </div>
                  )}
                  <button onClick={() => setCopyshow((prev) => !prev)}>
                    <MdShare
                      size="20px"
                      style={{ background: "transparent", cursor: "pointer" }}
                    />
                  </button>
                </Divbutton>
              </ContainerIcons>
            </Return>
          </ContainerReturn>
          <MainContainer>
            <DetailCard
              card={card}
              viewIncludes={viewIncludes}
              handleDelete={handleDelete}
              handleAddFavorite={handleAddFavorite}
            />
          </MainContainer>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
