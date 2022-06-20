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
      <div style={{marginTop: "20%"}}>
        <Grid container sx={{display: 'flex', alignItems: "center"}}>
          <Box
            component={Grid}
            item
            md={5}
            lg={5}
            xl={6}
            display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
            sx={{marginTop: '1em', textAlign: 'center'}}
          >
            {/*The image in the public folder*/}
            <img
              style={{ display: 'inline-block' }}
              alt="logo black"
              src="/images/logo_monochrome_black.svg"
              width={600}
            />
            <Typography variant="h3" sx={{fontSize: '2.3em', marginTop: "15px"}}>
              Unleash Web 3.0
            </Typography>
          </Box>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={6} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {!wallet ?
              <SignInWithWallet setWalletAddress={setWalletAddress} />
              : <Logged address={wallet}/>
            }
          </Grid>
        </Grid>
        <div style={{display: "flex", justifyContent: "center", marginTop: "200px"}}>
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
