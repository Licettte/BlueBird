import {FC} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import {MainPage} from "../components/MainPage";
import {PageRoutes} from "./PageRoutes";
import {Signatures} from "../components/signature/Signatures";
import {ErrorPage} from "../components/error/ErrorPage";
import {CompanyTable} from "../components/company/CompanyTable";

export const RoutesProvider: FC = () => {

    const authorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path={PageRoutes.MAIN} element={<MainPage/>}>
                <Route path={PageRoutes.SIGNATURES} element={<Signatures/>}/>
                <Route path={PageRoutes.COMPANY_TABLE} element={<CompanyTable/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        ));

    return <RouterProvider router={authorizedRouter}/>;
};
