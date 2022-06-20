import * as React from 'react'
import {Button, Card, CardContent, Paper, Typography} from '@mui/material'
import {useEffect} from 'react'
import Image from 'next/image'

export default function SignInWithWallet({setWalletAddress}) {

	const checkWalletIsConnected = async () => {
		//Require the ethereum property in the window
		const { ethereum } = window

		//Check if metamask is installed
		if (!ethereum) {
			alert("Make sure that you have Metamask installed.")
		} else {

			//Call the request that will return the wallet address if already log
			const accounts = await ethereum.request({method: 'eth_accounts'})

			if (accounts.length !== 0)
				setWalletAddress(accounts[0])
		}
	}


	const connectWalletHandler = async () => {
		//Require the ethereum property in the window
		const { ethereum } = window

		//Check if metamask is installed
		if (!ethereum)
			alert("Metamask seems not to be installed")
		else {
			try {
				//Call the request that will return the wallet address
				const accounts = await ethereum.request({method: 'eth_requestAccounts'})
				setWalletAddress(accounts[0])
			}
			catch(e) {
				console.log("An error occured : ", e)
			}
		}
	}

	useEffect( () => {
		checkWalletIsConnected().then()
	}, [])

	return (
	  <div style={{display: 'flex', justifyContent: 'center'}}>
		  {/*My metamask button*/}
		  <Button
			style={{display: 'flex', justifyContent: 'center', marginTop: "100px"}}
			onClick={() => connectWalletHandler()}
		  >
			  {/*My metamask image*/}
			  <Image
				alt={''}
				src={"/images/metamask.svg"}
				width={60}
				height={60}
			  />
			  <Typography
				variant="h3"
				align="center"
				sx={{ fontWeight: 600, fontSize: '1.85rem', color: "black" }}
				gutterBottom
			  >
				  Sign in with Metamask
			  </Typography>
		  </Button>
	  </div>
	)
}