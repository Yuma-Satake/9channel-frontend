import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Logo from "./assets/logo.png"
import { Flare, FlashOff } from '@mui/icons-material'
import { red } from '@mui/material/colors'
import { bottomNavigationActionClasses } from '@mui/material'
import { Stack } from "@mui/material"

const threds = [
  {
    thredId: 1,
    title: "タイトル1",

  },
  {
    thredId: 2,
    title: "タイトル2",

  },
  {
    thredId: 3,
    title: "タイトル3",

  },
  {
    thredId: 4,
    title: "タイトル4",

  },
  {
    thredId: 5,
    title: "タイトル5",

  },

]

function App() {

  return (
    <>
      <div>
        <img src={Logo}/>
      </div>
      
      <div style={{
        color: "blue",
        alignItems:"center",
      
      }}>
      <h2>本日のおすすめ</h2>
      </div>
      
      <div style={{
        padding: 20,
        margin: 5, 
        border: "2px solid #0000ff",
        alignItems:"center",
        borderBottom: "1px solid #0000ff",
      }}> 
        {
          threds.map((thred) => {
            return (
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
              
            >
            <img style={{
              aspectRatio: "1/1",
              width: "120px",
              height:"auto",
              objectFit: "cover",
            }} src={Logo} />
              <p>{thred.title}</p>
            </Stack>)
          }
          )
        }
    </div>
    </>
  )
}

export default App
