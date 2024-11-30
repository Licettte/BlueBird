import {Outlet} from 'react-router-dom';
import {Gap} from "@alfalab/core-components/gap";
import {Row} from "@alfalab/core-components/grid/row";
import {Header} from "./layout/header/Header";

export const MainPage = () => {
    return (
        <div>
            <Gap size={16} direction={'vertical'}/>
            <Header/>
            <Gap size={16} direction={'vertical'}/>
            <Row>
            </Row>
            <Outlet/>
        </div>
    );
};
