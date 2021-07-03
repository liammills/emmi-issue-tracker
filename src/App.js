import logo from './logo.svg';
import './styles/App.css';
import IssuesList from './components/IssuesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <IssuesList />
      <Footer />
    </div>
  );
}

export default App;
