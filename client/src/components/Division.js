import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Datasets from './Datasets'
import Analyses from './Analyses'
import Results from './Results'
import Typography from '@material-ui/core/Typography'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import '../styles/index.css';

const style = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    stepper: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginRight: 20,
        marginLeft: 20,
    }
})

const getSteps = () => {
    return ["Select a city", "Select an Analysis to Perform on Data:", "Collect Results"]
}

class Division extends Component {
    constructor() {
        super();
        this.updateStep = this.updateStep.bind(this);
    }

    state = {
        activeStep: 0,
        selectedCity: '',
        selectedAnalyses: ''
    }

    updateStep() {
        this.setState({ activeStep: this.state.activeStep + 1 });
    }

    render() {
        const { classes } = this.props
        const { activeStep, selectedCity, selectedAnalyses } = this.state
        const steps = getSteps()
        return (
            <div>
                <div>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label, key) => (
                            <Step key={key}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className={classes.root}>
                    <Grid container spacing={16}>
                        <Grid item sm={12} lg={4}>
                            <Typography align='center' color="textSecondary" variant="title">Available Cities: {selectedCity}</Typography>
                            <div className={activeStep === 0 ? '' : 'disableSection'}>
                                <Datasets updateStep={this.updateStep}/>
                            </div>
                        </Grid>
                        <Grid item sm={12} lg={4}>
                            <Typography align='center' color="textSecondary" variant="title">Available Analyses: {selectedAnalyses}</Typography>
                            <div className={activeStep === 1 ? '' : 'disableSection'}>
                                <Analyses updateStep={this.updateStep}/>
                            </div>
                        </Grid>
                        <Grid item sm={12} lg={4}>
                            <Typography align='center' color="textSecondary" variant="title">Available Results:</Typography>
                            <div className={activeStep === 2 ? '' : 'disableSection'}>
                                <Results activeStep={this.state.activeStep}/>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(Division)