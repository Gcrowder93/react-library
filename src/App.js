import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Book from './components/book/Book';
import BookDetail from './views/Books/BookDetail';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/books/:id">
            <BookDetail />
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
