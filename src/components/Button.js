import * as React from 'react';
import Button from '@mui/material/Button';



function BasicButton(props) {
    const stylebtn = {
        display: 'flex',
        flexDirection: 'row',
        padding: '8px 32px',
        width: '113px',
        height: '48px',
        background: '#1F61F7',
        boxShadow: '0px 10px 16px rgba(18, 25, 84, 0.07)',
        borderRadius: '1000px',
    }
    const styletxt = {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '32px',
        textAlign: 'center',
        color: '#FFFFFF'
    }
    return (<Button onClick={props.onClick} sx={{ ...stylebtn, ...styletxt }} variant="contained">{props.name}</Button>);
}
export default BasicButton;