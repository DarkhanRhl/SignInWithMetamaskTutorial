import * as React from 'react'
import styles from '../styles/Home.module.css'
import {Box, Grid, Paper, Typography} from '@mui/material'
import SignInWithWallet from '../components/SignInWithWallet'
import Logged from "../components/Logged"
import {useState} from 'react'

export default function Home() {

  const [wallet, setWallet] = useState(null)

  const setWalletAddress = (value) => {
    setWallet(value)
  }

  return (
    <div className={styles.container}>
      <div style={{display: "flex", justifyContent: "center", marginTop: "100px", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
          {/*The image in the public folder*/}
          <img
            style={{ display: 'inline-block' }}
            alt="logo black"
            src="/images/logo_monochrome_black.svg"
            width={600}
          />
        </div>
        <Typography variant="h3" sx={{fontSize: '2.3em', marginTop: "15px", display: "flex", justifyContent: "center"}}>
          Unleash Web 3.0
        </Typography>
        {!wallet ?
          <SignInWithWallet setWalletAddress={setWalletAddress} />
          : <Logged address={wallet}/>
        }
        <div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
          <div>
            <Typography variant="h5" sx={{fontSize: '2.8em', marginTop: "15px"}}>
              Join us on <a target="_blank" href={"https://discord.starton.io"} style={{color: "white", background: "black"}}>Discord</a>
            </Typography>
            <Typography variant="h5" sx={{fontSize: '2.8em', marginTop: "15px"}}>
              Discover our <a target="_blank" href={"https://starton.io"} style={{color: "white", background: "black"}}>website</a>
            </Typography>
            <Typography variant="h5" sx={{fontSize: '2.8em', marginTop: "15px"}}>
              Start building <a target="_blank" href={"https://app.starton.io"} style={{color: "white", background: "black"}}>web3</a>
            </Typography>
          </div>
        </div>

      </div>
    </div>
  )
}
