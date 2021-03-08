import React, { Suspense } from "react";
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { Loginpeople } from '../components/login/Loginpeople';
import { Preloader } from '../components/Loader/index';
import GLOBAL from '../resources/global';

function PrivateRoutes() {
    return(
        <Suspense fallback={<Preloader/>}>
            <NativeRouter>
                    <Loginpeople/>
                    <Switch>
                        <Route exact path={GLOBAL.login} render={()=><Loginpeople/>}/>
                    </Switch>
            </NativeRouter>
        </Suspense>
    );
}

export {PrivateRoutes};