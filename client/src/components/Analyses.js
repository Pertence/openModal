import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Functions from '../utils/FuncData'
import Grid from '@material-ui/core/Grid'
import AnalysisCard from './AnalysisCard'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    },
    title: {
        fontFamly: 'Raleway'
    }
}

const Analyses = (props) => {
    const { classes } = props
    return (
        <div className={classes.area}>
            <Grid container spacing={8}>
                {Functions.map((func, key) =>
                    <Grid key={key} item xs={12} lg={6}>
                        <AnalysisCard alg={func} updateStep={props.updateStep}/>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default withStyles(style)(Analyses)