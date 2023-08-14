import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MyTaskForm from './components/MyTaskForm.js';
import SearchProjectForm from './components/SearchProjectForm';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Tasks" value="1" />
            <Tab label="Search Projects" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><MyTaskForm /></TabPanel>
        <TabPanel value="2"><SearchProjectForm /></TabPanel>
      </TabContext>
    </Box>
  );
}
