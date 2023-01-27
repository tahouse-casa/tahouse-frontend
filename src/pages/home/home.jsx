import { useContext, useState } from "react";
import { Navbar } from "../../components/navbar/navbar";
import { Searcher } from "../../components/searcher/searcher";
import { Carrousel } from "../../containers/carrousel/carrousel";
import { ShoppingGuide } from "../../containers/shoppingGuide/shoppingGuide";
import { Footer } from "../../containers/footer/footer";
import { Promotion } from "../../components/promotion/Promotion";
import { AppContext } from "../../context";
import { LogoComponent } from "../../components/logo/logo";
import { useEffect } from "react";
//css
import {
  Container,
  Title,
  Containerfeatured,
  ContainerSearcher,
} from "./stylesHome";

export const Home = () => {
  const { data } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const featuredProperties = data?.slice(0, 5);

  return (
    <Container>
      {!isMobile ? null : <LogoComponent />}
      <Navbar />
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
      <Footer />
    </Container>
  );
};
