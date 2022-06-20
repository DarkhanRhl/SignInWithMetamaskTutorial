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
      <Paper sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
      }}>
        <Grid container>
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
              alt="logo Light"
              src="/images/logo-mono-left-shadow.png"
              width={600}
            />
            <Typography variant="h3" sx={{fontSize: '2.3em'}}>
              Unleash Web 3.0
            </Typography>
          </Box>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={6} sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
          }}>
            {!wallet ?
              <SignInWithWallet setWalletAddress={setWalletAddress} />
              : <Logged address={wallet}/>
            }
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
