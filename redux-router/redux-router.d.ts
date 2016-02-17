// Type definitions for redux-router v1.0.0
// Project: https://github.com/rackt/redux-router
// Definitions by: Stepan Mikhaylyuk <http://github.com/stepancar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../react-router/react-router.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare namespace __ReduxRouter {

    import React = __React;
    import H = HistoryModule;
    /**
    * A component that renders a React Router app using router state from a Redux store.
    */
    export class ReduxRouter extends React.Component<any, any> { }
    /**
    * A Redux store enhancer that adds router state to the store.
    */
    export var reduxReactRouter: any;

    export function isActive(pathname: H.Pathname, query?: H.Query, indexOnly?: boolean): boolean;
    /**
    * A reducer that keeps track of Router state.
    */
    export function routerStateReducer(state: any, action: any): any;

    export interface ReduxRouterAction {
        type: string,
        payload: any
    }

    export function routerDidChange(state: any): ReduxRouterAction;
    export function initRoutes(routes: any): ReduxRouterAction;
    export function replaceRoutes(routes: any): ReduxRouterAction;
    export function historyAPI(method: any): (...args: any[]) => ReduxRouterAction;
}

declare module "redux-router/lib/routerStateReducer" {
    export default __ReduxRouter.routerStateReducer;
}

declare module "redux-router/lib/ReduxRouter" {
    import Router from "react-router";
    export default Router;
}

declare module "redux-router/lib/client" {
    export default __ReduxRouter.reduxReactRouter;
}

declare module "redux-router/lib/isActive" {
    export default __ReduxRouter.isActive;
}

declare module "redux-router/lib/actionCreators" {
    export const routerDidChange: typeof __ReduxRouter.routerDidChange;
    export const initRoutes: typeof __ReduxRouter.initRoutes;
    export const replaceRoutes: typeof __ReduxRouter.replaceRoutes;
    export const historyAPI: typeof __ReduxRouter.historyAPI;
    export const pushState: __ReduxRouter.historyAPI;
    export const push: __ReduxRouter.historyAPI;
    export const replaceState: __ReduxRouter.historyAPI;
    export const replace: __ReduxRouter.historyAPI;
    export const setState: __ReduxRouter.historyAPI;
    export const go: __ReduxRouter.historyAPI;
    export const goBack: __ReduxRouter.historyAPI;
    export const goForward: __ReduxRouter.historyAPI;
}

declare module "redux-router" {

    import routerStateReducer from "redux-router/lib/routerStateReducer";
    import ReduxRouter from "redux-router/lib/ReduxRouter";
    import reduxReactRouter from "redux-router/lib/client";
    import isActive from "redux-router/lib/isActive";

    import {
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
    } from "redux-router/lib/actionCreators";

    export {
    routerStateReducer,
    ReduxRouter,
    reduxReactRouter,
    isActive,
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
    }
}
