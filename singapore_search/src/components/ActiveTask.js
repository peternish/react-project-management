import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export default function ActiveTask() {
    // const [text, setText] = React.useState['grhgdfhdfh'];
    const text = 'No Project';

    const [started, setStarted] = React.useState(false);
    const [time, setTime] = React.useState(0);

    const hour = parseInt(time/3600);
    const minute = parseInt((time % 3600)/60);
    const second = parseInt((time % 3600)%60);


    const start = () => {
        setStarted(true);
    }
    const stop = () => {
        setStarted(false);
    }

    React.useEffect(() => {
        if(started)
            setTimeout(() => setTime(time + 1), 1000);
      });

    return(
        <Box className='container row mt-3' sx={{boxSizing: 'border-box'}}>
            <Button secondary id="myproject" label="myproject" className='col-6'>{text}</Button>
            <div className='col-3'>
            <Button id='start' label='start' variant='contained' className='mx-3 float-right' onClick={start}>Start</Button>
            <Button sx={{bgcolor: 'red'}} id='stop' label='stop' variant='contained' className='mx-3 float-left' onClick={stop}>Stop</Button>          
            </div>
            <TextField className='col-3' value={hour+':'+ minute+':'+second}></TextField>
        </Box>
    );
    
}