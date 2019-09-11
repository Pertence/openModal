import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changePTSVariables } from '../../actions/modal';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    submit: {
        margin: 'auto',
        marginTop: 50
    }
});

class PTS extends Component {
    state = {
        cluster: 1,
        seed: 1,
        iteractions: 100
    }

    handleChangeCluster(evt) {
        this.setState({ cluster: evt.target.value })
    }

    handleChangeSeed(evt) {
        this.setState({ seed: evt.target.value })
    }

    handleChangeIteractions(evt) {
        this.setState({ iteractions: evt.target.value })
    }

    updateVariableData() {
        this.props.updateVariable('pts', this.state)
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="cluster"
                    label="Clusters (k)"
                    value={this.state.cluster}
                    onChange={(e) => this.handleChangeCluster(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="seed"
                    label="Seed"
                    value={this.state.seed}
                    onChange={(e) => this.handleChangeSeed(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="cluster"
                    label="Iteractions"
                    value={this.state.iteractions}
                    placeholder="1"
                    onChange={(e) => this.handleChangeIteractions(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <Button type='submit' className={classes.submit} variant="contained" size='small' color="primary" onClick={() => this.updateVariableData()}>Set Variables</Button>
            </form>
        )
    }
}

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = dispatch => ({
    updateVariable: (algorithm, data) => dispatch(changePTSVariables(algorithm, data))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PTS))