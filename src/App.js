import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContacts from './components/contacts/AddContacts'
import EditContacts from './components/contacts/EditContacts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContacts} />
              <Route exact path="/contacts/edit/:id" component={EditContacts} />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
