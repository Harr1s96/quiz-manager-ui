import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Register from './pages/register';
import Login from './pages/login';
import Main from './pages/main';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/app" component={Main} />
                    <Route path="/">
                        <Redirect to="/register" />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
