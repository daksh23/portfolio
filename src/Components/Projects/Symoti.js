import React from 'react'
import {Stack} from '@mui/material'
import { data } from '../Constant/data'

const Symoti = () => {
  return (
    <Stack direction="column" spacing={1} className="SymotiCard">
        <h2>{data.heading.Projects.Symoti}<span className='GreenDot'>{data.textIcon.greenDot}</span></h2>
        <img
                src="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/Symoti.png?alt=media&token=eb48553e-9805-41ba-9732-cbcd7e011edd"
                alt="CompanyNGames"
                width="auto"
                height="200px"/>
    </Stack>
  )
}

export default Symoti