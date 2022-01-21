import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './pages/Home';
import ToDo from './pages/ToDo';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component = { Home }  path="/" exact />
                <Route component = { ToDo }  path="/ToDo" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;