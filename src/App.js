import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Book from './components/book/Book';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/" component={Home} />
          <Route path="/books/:title" render={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
