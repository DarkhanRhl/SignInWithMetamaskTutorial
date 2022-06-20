import * as React from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useEffect} from 'react'

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
	  <div>
		  <Card>
			  <CardContent sx={{padding: '44px', alignItems: "center", justifyContent: 'center'}}>
				  <Typography
					variant="h3"
					align="center"
					sx={{ fontWeight: 600, fontSize: '1.85rem' }}
					gutterBottom
				  >
					Sign in with the Starton portal
				  </Typography>

				  {/*My metamask button*/}
				  <Button
					sx={{marginTop: "30px", width: "500px"}}
					onClick={() => connectWalletHandler()}
				  >
					  {/*My metamask image*/}
					  <img
						alt={''}
						src={"images/metamask.svg"}
						width={60}
						height={60}
					  />
					  <Typography
						variant="h5"
						align="center"
						style={{marginLeft: "30px", color: "black"}}
						gutterBottom
					  >
					  	Metamask
					  </Typography>

				  </Button>
			  </CardContent>
		  </Card>
	  </div>
	)
}