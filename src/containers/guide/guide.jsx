import { Container, Title, Text, ContainerSection, Button, DivButton } from "./stylesGuide"
export const Guide = ({inView, setInview}) => {
    return (
        <Container inView={inView}>   
            <div>
                <Title one>Style, display and power</Title>
                <ContainerSection>
                    <Title>Style</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem esse officiis, maiores ut
                        corrupti pariatur excepturi natus! Maxime dignissimos,
                        nobis enim impedit obcaecati quod, ducimus laboriosam at fuga recusandae incidunt.</Text>
                </ContainerSection>
                <ContainerSection>
                    <Title>Display</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem esse officiis, maiores ut
                        corrupti pariatur excepturi natus! Maxime dignissimos,
                        nobis enim impedit obcaecati quod, ducimus laboriosam at fuga recusandae incidunt.</Text>
                </ContainerSection> 
                <ContainerSection>
                    <Title>Main power</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem esse officiis, maiores ut
                        corrupti pariatur excepturi natus! Maxime dignissimos,
                        nobis enim impedit obcaecati quod, ducimus laboriosam at fuga recusandae incidunt.</Text>
                </ContainerSection>
            </div>
            <DivButton>
                <Button onClick={()=> setInview(false)}>
                Cerrar
                </Button>
            </DivButton>
        </Container>
    )
}