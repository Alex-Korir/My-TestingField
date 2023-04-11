import React from 'react'
import { Grid, Box } from '@mui/material'
import Sidebar from './Sidebar'
import SearchFunctionality from './SearchFunctionality'

function Content() {
  return (
    <Grid container my={3} >
        <Grid >
            <Box><Sidebar/></Box>
        </Grid>
        <Grid >
            <Box><SearchFunctionality/></Box>
        </Grid>
        <Grid >
            <Box><Sidebar/></Box>
        </Grid>
    </Grid>
  )
}

export default Content