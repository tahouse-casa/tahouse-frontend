import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Searcher } from "../../components/searcher/searcher";
import { Carrousel } from "../../containers/carrousel/carrousel";
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide";
import { Footer } from "../../containers/footer/footer";
import { Promotion } from "../../components/promotion/Promotion";
import { LogoComponent } from "../../components/logo/logo";
import { Loader } from "../../components/loader/loader";
//css
import {
  Container,
  Title,
  Containerfeatured,
  ContainerSearcher,
} from "./stylesHome";

export const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/featured`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFeaturedProperties(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!loading ? (
        <Container>
          <LogoComponent />
          <ContainerSearcher>
            <Title aling={"center"}>Encuentra el hogar de tus sueños</Title>
            <Searcher />
          </ContainerSearcher>
          <Containerfeatured>
            <Title alingLeft>Destacados</Title>
            <Carrousel data={featuredProperties} />
          </Containerfeatured>
          <Promotion />
          <ShoppingGuide />
          <Navbar />
          <Footer />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
