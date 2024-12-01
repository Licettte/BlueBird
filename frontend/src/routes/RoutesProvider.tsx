import {FC} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import {MainPage} from "../components/MainPage";
import {PageRoutes} from "./PageRoutes";
import {Signatures} from "../components/signature/Signatures";
import {ErrorPage} from "../components/error/ErrorPage";
import {CompanyTable} from "../components/company/CompanyTable";
import {Claim} from "../components/claim/Claim";
import {Cabinet} from "../components/cabinet/Cabinet";
import {ConfirmPage} from "../components/confirm-page/ConfirmPage";

export const RoutesProvider: FC = () => {

    const authorizedRouter = createBrowserRouter(
        createRoutesFromElements(
            <Route path={PageRoutes.MAIN} element={<MainPage/>}>
                <Route index element={<CompanyTable/>}/>
                <Route path={PageRoutes.SIGNATURES} element={<Signatures/>}/>
                <Route path={PageRoutes.CLAIM} element={<Claim/>}/>
                <Route path={PageRoutes.CABINET} element={<Cabinet/>}/>
                <Route path={PageRoutes.CONFIRM} element={<ConfirmPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        ));

    return <RouterProvider router={authorizedRouter}/>;
};
