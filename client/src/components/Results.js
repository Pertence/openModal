import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import ResultCard from '../components/ResultCard'
import resultType from '../utils/ResultsType'

const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center',
    },
    title: {
        fontFamly: 'Raleway'
    }
}


class Results extends Component {
    state = {
        ready: false,
        results: []
    }

    applyAlgorithm() {
        this.callAPI()
            .then((files) => {
                this.setState({
                    ready: true,
                    results: files
                })
            })
            .catch((err) => console.log(err));
    }

    callAPI = async () => {
        const { data, algorithm, variables } = this.props;
        const response = await fetch(`/${algorithm}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: data,
                algorithm: algorithm,
                variables: variables
            })
        })

        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body.files;
    }

    componentDidUpdate() {
        if (this.props.activeStep === 2 && this.state.ready === false) {
            this.applyAlgorithm();
        } else console.log('Waiting for parameters');
    }

    render() {
        const { classes } = this.props
        const { results } = this.state
        return (
            <div className={classes.area}>
                {results.length === 0 ? <p>Running Algorithms. This may take a while...</p> : ''}
                <Grid container spacing={8}>
                    {results.map((result, key) => (
                        <Grid key={key} item xs={12} lg={6}>
                            <ResultCard type={resultType.filter((current) => current.id === result)[0]}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
    algorithm: state.algorithm,
    variables: state.variables
})

export default withStyles(style)(connect(mapStateToProps)(Results))