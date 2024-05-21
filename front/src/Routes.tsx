import { BrowserRouter as Router, Route, Routes as BrowserRoutes } from 'react-router-dom';
import App from './App';
import LoginPage from './Login';

const Routes = () => (
    <Router>
        <BrowserRoutes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<App />} />
        </BrowserRoutes>
    </Router>
);

export default Routes;