import NavBar from './components/NavBar';
import PayForm from './components/PayForm';
import PayList from './components/PayList';
import PaymentContextMain from './contexts/PayContext';

function App() {
  return (
    <div className="App">
      <PaymentContextMain>
        <NavBar />
        <PayList />
        <PayForm />
      </PaymentContextMain>     
    </div>
  );
}

export default App;
