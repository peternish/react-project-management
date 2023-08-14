import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function MyTaskForm() {
  const [age, setAge] = React.useState('');
  const [text, setText] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  }

  return (
    <Box sx={{ minWidth: 120}} className='fade show'>

    <label>Search Active Project</label>
      <FormControl fullWidth className='mt-3'>
        <TextField
          labelId="search_project"
          id="input_search"
          value={text}
          label="Search Project"
          onChange={handleText}
        >
        </TextField>
      </FormControl>

    <label className='mt-3'>Select User:</label>
      <FormControl fullWidth className='mt-3'>
        <InputLabel id="select_user_id">Select User</InputLabel>
        <Select
          labelId="select_user_id"
          id="select_user"
          value={age}
          label="Select User"
          onChange={handleChange}
        >
            <MenuItem value={1}>Pat goodyer</MenuItem>
            <MenuItem value={2}>Chelsea kennerly</MenuItem>
        </Select>
      </FormControl>

    </Box>

    
  );
}
