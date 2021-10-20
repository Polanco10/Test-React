import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect(props) {
    const [insuranceState, setInsuranceState] = React.useState('');

    const handleChange = (event) => {
        setInsuranceState(event.target.value);
        props.sendValue(event.target.value)

    };
    const options = [
        { value: 58, label: 'Seguro Vida Activa' },
        { value: 59, label: 'Seguro Viaje Protegido' }]

    const select = {
        background: '#FFFFFF',
        border: '1px solid #DDE3ED',
        boxSizing: 'border-box',
        borderRadius: '4px',
        '&:focus': {
            background: '#FFFFFF',
            border: '2px solid #1F61F7',
            boxSizing: 'border-box',
            borderRadius: '4px'
        }
    }
    const label = {
        fontFamily: 'Poppins',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '16px',
        color: '#AFBACC',
        '&:focus': {
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '16px',
            color: '#1F61F7'
        }
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth >
                <InputLabel sx={label} id="demo-simple-select-label">Seguro</InputLabel>
                <Select sx={select}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={insuranceState}
                    label="Seguro"
                    onChange={handleChange}
                >
                    {options.map(({ value, label }, index) => <MenuItem key={value} value={value}>{label}</MenuItem>)}


                </Select>
            </FormControl>
        </Box>
    );
}
export default BasicSelect;