import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import './Assets/styles.css'

function store() {
  return (
    <div className='store'>
      <div className='storesCard'>
        <p>ENCUENTRA TU TIENDA</p>
<div className='containerSelect'>
  
<FormControl className='containerSelect-item'  fullWidth>
        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
         
        </InputLabel>
        <NativeSelect
        className='selected'
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option className='items-selected' value={10}>Antioquia</option>
          <option className='items-selected' value={20}>Cali</option>
          <option className='items-selected' value={30}>Bogota</option>
          <option className='items-selected' value={30}>Brranquilla</option>
          <option className='items-selected' value={30}>Monteria</option>
          <option className='items-selected' value={30}>Tulua</option>
          <option className='items-selected' value={30}>RioNegro</option>
          <option className='items-selected' value={30}>Cartagena</option>
        </NativeSelect>
      </FormControl>
</div>
      </div>
    </div>
  )
}

export default store
