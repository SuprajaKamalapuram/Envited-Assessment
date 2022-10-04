import React, { Component } from 'react'
import {ReactComponent as MovieNight} from '../assets/images/image1.svg';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled('div')({
    'height': '192px',
    'padding': '306px 160px 484px 168px',
    'fontWeight': '700',
    'fontSize': '64px',
    'color': '#240D57',
    'textAlign':'right'
})

const Item1 = styled('div')({
    'color' :'#8456EC'
})

const Image = styled('div')({
    'padding' : '100px 200px 106px 170px'
})

const Text = styled('div')({
     'fontFamily':'Hevetica',
     'fontSize':'24px',
     'lineHeight':'28px',
     'textAlign':'right',
     'color':'#4F4F4F',
     'fontWeight':'300',
     'width':'450px',
     'height':'56px'
})

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        
        <Stack direction="row">
        <Image><MovieNight /></Image>  

        <div>   

        <Stack direction="column">    
        <Item>Imagine if<br/> <Item1>Snapchat</Item1> had events
        <Text>Easily host and share events with your friends<br/> across any social media.</Text>
        <a href='/create'><button 
        style={{width:'320px',height:'55px',backgroundColor:'#E87BF8',borderRadius:'10px',color:'#fff'}}>
            🎉 Create my event
        </button> </a>
        </Item>

        
        </Stack>
        </div>
        
        </Stack>

        
        

      </div>
    )
  }
}
