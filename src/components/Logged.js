import * as React from 'react'
import {Card, CardContent, Typography} from '@mui/material'

export default function SignInWithWallet({address}) {

	return (
	  <div>
		  <Card>
			  <CardContent sx={{padding: '44px', alignItems: "center", justifyContent: 'center'}}>
				  <Typography
					variant="h3"
					align="center"
					sx={{ fontWeight: 600}}
					gutterBottom
				  >
					You are successfully logged !
				  </Typography>
				  <Typography
					variant="h5"
					align="center"
					sx={{ fontWeight: 500, marginTop: "50px"}}
				  >
					  Your address is {address}
				  </Typography>
				  <Typography
					variant="h5"
					sx={{marginTop: "50px"}}
					align="center"
					gutterBottom
				  >
					  To logout go to metamask, click on three points on top right corner, connected sites
					  and disconnect.
				  </Typography>
			  </CardContent>
		  </Card>
	  </div>
	)
}