import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color:'#00CC22',
                width:'147px',
                height:'4px',
                '& .MuiSlider-thumb': {
                    height: 5,
                    width: 5,
                    backgroundColor: '#00CC22',
                    boxShadow: '0 0 0 5px #fff, 0 0 0 6px #00CC22',},
                '& .MuiSlider-rail': {
                    color:  '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
