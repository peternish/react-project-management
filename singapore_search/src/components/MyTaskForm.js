import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function MyTaskForm() {
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');

  const searchproject = (value) => {
    axios.get(`https://hook.us1.make.com/co30ww4huxaypuove4ee1q2cyw3bc2l3/${value}`)
      .then((response) => {
        // Handle the response data
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  React.useEffect(() => {
    setText(() => searchproject(name));
  }, [name])

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    setText(e.target.value);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
        <label>Select Project Manager:</label>
        <FormControl fullWidth className='mt-3'>
            <InputLabel id="1">Project Manager</InputLabel>
            <Select
                labelId="1"
                id="11"
                value={name}
                label="Project Manager"
                onChange={handleChange}
            >
                <MenuItem value={1}>Bruno Ajmer</MenuItem>
                <MenuItem value={2}>Sam Rahal</MenuItem>
                <MenuItem value={3}>Celine Dalapo</MenuItem>
                <MenuItem value={4}>Jassel Dungo</MenuItem>
                <MenuItem value={5}>James Goodsell</MenuItem>
                <MenuItem value={6}>Princess Leah Lopez</MenuItem>
                <MenuItem value={7}>Chelsea Kennerley</MenuItem>
                <MenuItem value={8}>Tim Goodsell</MenuItem>
                <MenuItem value={9}>Roleanne Dionisio-Japa</MenuItem>
            </Select>
        </FormControl>

        <label className='mt-3'>Search Active Project</label>
        <FormControl fullWidth className='mt-3'>
            <Select
            labelId="searchproject"
            id="searchmyproject"
            value={text}
            label="Search Project"
            onChange={handleSearch}
            >
            </Select>
        </FormControl>

    </Box>
  );
}
