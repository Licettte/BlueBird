import {Outlet} from 'react-router-dom';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Top, Bottom, Content, Container} from "./styles";

export const MainPage = () => {
    return (
        <Container justify="space-between" dir='column' gap={20}>
            <Top>
                <Header/>
            </Top>
            <Content>
                <Outlet/>
            </Content>

            <Bottom>
                <Footer/>
            </Bottom>
        </Container>
    );
};
