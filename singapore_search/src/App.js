import './App.css';
import LabTabs from './TabPanel.js' 
import ActiveTask from './components/ActiveTask';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='container mt-5'>
    <LabTabs />
    <ActiveTask />
    <Button variant='contained' className='mt-3'>Submit</Button>
    </div>
  );

  
}

export default App;
