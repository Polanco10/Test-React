import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MediaCard(props) {
    const base = {
        width: '328px',
        height: '272px',
        background: '#FFFFFF',
        border: '1px solid #DDE3ED',
        borderRadius: '8px'
    }
    const title = {
        width: '216px',
        height: '24px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '24px',
        letterSpacing: '-0.2px',
        color: '#060B25'
    }
    const paragraph = {
        // width: '51px',
        height: '24px',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '-0.2px',
        color: '#58606E'
    }
    const image = {
        width: '328px',
        height: '192px'
    }
    const label = {
        width: '52px',
        height: '20px',
        background: '#1F61F7',
        borderRadius: '4px'
    }
    const labeltxt = {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '-0.2px',
        color: '#F5F7FA'
    }

    return (
        <Card >
            <Typography sx={{ ...label, ...labeltxt, marginLeft: '5px', marginTop: '10rem', position: 'absolute' }}>
                ${props.price}
            </Typography>
            <CardMedia
                sx={image}
                alt="base"
                image={props.image}
            />

            <CardContent sx={{ ...base, padding: '0', ':last-child': { padding: '0' } }}>
                <Typography sx={{ ...title, paddingLeft: '5px' }}>
                    {props.name}
                </Typography>
                <Typography sx={{ ...paragraph, paddingLeft: '5px' }}>
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
export default MediaCard;