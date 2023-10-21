import './App.css';
import Button from './components/button';
import Textfield from './components/input';


function App() {
  return (
    <div className="App">
      <Button variant="contained" label="Test" />
      <Button variant="outlined" label="Test" />
      <Button variant="default" label="Test" />
      <Textfield variant='filled' label='filled' />
      <Textfield variant='standard' label='standard'/>
      <Textfield variant='default'  label='outlined'/>
    </div>
  );
}

export default App;
