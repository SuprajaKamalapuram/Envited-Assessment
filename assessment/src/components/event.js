import React, { Component } from 'react'
import Stack from '@mui/material/Stack';
import { ReactComponent as Birthday } from '../assets/images/birthday.svg';
import {styled} from '@mui/material/styles';
import { ReactComponent as Date } from '../assets/images/date.svg';
import { ReactComponent as Location } from '../assets/images/location.svg';

const Image = styled('div')({
    'padding' : '184px 240px 751px 240px'
})

const Item = styled('div')({
    'padding' : '194px 199px 298px 240px',
    'width' : '333px',
    'height' :'37px',
    'fontSize' :'48px',
    'fontWeight' : '700'
})

const Text = styled('div')({
    'color': '#828282',
    'fontSize': '18px',
    'fontWeight':'400',
    'fontFamily': 'Helvetica'
})

export default class event extends Component {
  render() {
    return (
      <div>
        <Stack direction="row" spacing={2}>
            <div>
              <Stack direction="column">   
                 <Item>
                    Birthday Bash
                    <Text>Hosted by Elysia</Text>
                    <br/>
                    <div><Date /></div>
                    <div><Location /></div>
                 </Item>
                 
              </Stack>
            </div>
            <Image><Birthday/></Image>

     
        </Stack>
        
      </div>
    )
  }
}
