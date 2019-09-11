import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeUberVariables } from '../../actions/modal';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

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

class Uber extends Component {

    updateVariableData() {
        this.props.updateVariable('uber');
    }

    state = {
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button type='submit' className={classes.submit} variant="contained" size='small' color="primary" onClick={() => this.updateVariableData()}>Run Algorithm</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = dispatch => ({
    updateVariable: (algorithm) => dispatch(changeUberVariables(algorithm))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Uber));