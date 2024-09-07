import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {createtask} from '../actions/task';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
  const user = localStorage.getItem('user');
  const [formData, setFormData] = useState({ name: '', status: '', description: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!user) {
    return (
      <Paper>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own tasks
        </Typography>
      </Paper>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createtask(formData, navigate));
    console.log(taskData);
  }
  const clear = () => setFormData({ name: '', status: '', description: '' });
  return (
    <Paper style={{ padding: '10px' }}>
      <form autoCapitalize='off' noValidate onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography variant='h6'>Creating a Task</Typography>
        <br />
        <TextField name='name' color="primary" variant='filled' label='Task Name' fullWidth value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <br />
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" fullWidth>Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status}
              label="Status"
              fullWidth
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <MenuItem value='InProgress'>InProgress</MenuItem>
              <MenuItem value='Done'>Done</MenuItem>
              <MenuItem value='Backlog'>Backlog</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <br />
        <TextField name='description' color="primary" variant='filled' label='Description' fullWidth multiline rows={4} value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <br />
        <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Create</Button>
        <Button variant='contained' color='warning' size='large' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default TaskForm
