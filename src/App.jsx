import { Switch, Route, Link } from 'react-router-dom';

import { Header, Container } from './styles/Page';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WorksPage from './pages/WorksPage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import MenuBar from './components/MenuBar';

export default function App() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to="/">STUDIO XX</Link>
        </h1>
        <MenuBar />
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/works/:id" component={WorksPage} />
        <Route exact path="/works" component={WorksPage} />
        <Route path="/shop/items/:id" component={ShopPage} />
        <Route path="/shop/items/" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
