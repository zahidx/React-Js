import './App.css';
import Hello from './component/hello';
import Baby from './component/baby';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <Hello name="sakib" ></Hello>
      {/* <Baby></Baby> */}
      <Hello name="Sani" ></Hello>
      <Hello name="Hamim" ></Hello>

      <Baby name="class 1" > </Baby>
      <Baby name="class 2" > </Baby>
      <Baby name="class 3" > </Baby>


    </div>
  );
}

export default App;
