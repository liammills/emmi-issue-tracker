import './styles/App.css';
import IssuesList from './components/IssuesList';
import AddIssueForm from './components/AddIssueForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {

  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact component={IssuesList} path="/" />
            <Route component={AddIssueForm} path="/add-issue" />
          </Switch>
          <Footer />
        </div>
      </Router>
      
    </div>
  );
}

export default Home;