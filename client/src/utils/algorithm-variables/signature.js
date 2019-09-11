import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeSignatureVariables } from '../../actions/modal';
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

class Signature extends Component {
    state = {
        cluster: 4,
        unitArea: 300,
        timeVariation: 60,
        startLat: -19.940477,
        startLon: -19.911063,
        endLat: -43.960304,
        endLon: -43.917860
    }

    handleChangeCluster(evt) {
        this.setState({ cluster: evt.target.value })
    }

    handleChangeUnitArea(evt) {
        this.setState({ unitArea: evt.target.value })
    }

    handleChangeTimeVariation(evt) {
        this.setState({ timeVariation: evt.target.value })
    }

    handleChangeStartLat(evt) {
        this.setState({ startLat: evt.target.value })
    }

    handleChangeStartLon(evt) {
        this.setState({ startLon: evt.target.value })
    }

    handleChangeEndLat(evt) {
        this.setState({ endLat: evt.target.value })
    }

    handleChangeEndLon(evt) {
        this.setState({ endLon: evt.target.value })
    }


    updateVariableData() {
        this.props.updateVariable('signature', this.state)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    id="cluster"
                    label="# Clusters"
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
                    id="unitArea"
                    label="Unit Area (m)"
                    value={this.state.unitArea}
                    onChange={(e) => this.handleChangeUnitArea(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />

                <TextField
                    id="timeVariation"
                    label="Time Variation (min)"
                    value={this.state.seed}
                    onChange={(e) => this.handleChangeTimeVariation(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="startLat"
                    label="Initial Latitude (left-bottom boundary)"
                    value={this.state.iteractions}
                    placeholder="-19.940477"
                    onChange={(e) => this.handleChangeStartLat(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="startLon"
                    label="Initial Longitude (left-bottom boundary)"
                    value={this.state.iteractions}
                    placeholder="-43.960304"
                    onChange={(e) => this.handleChangeStartLon(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />

                <TextField
                    id="endLat"
                    label="End Latitude (upper-right boundary)"
                    value={this.state.iteractions}
                    placeholder="-19.911063"
                    onChange={(e) => this.handleChangeEndLat(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />

                <TextField
                    id="endLon"
                    label="End Longitude (upper-right boundary)"
                    value={this.state.iteractions}
                    placeholder="-43.917860"
                    onChange={(e) => this.handleChangeEndLon(e)}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />

                <Button type='submit' className={classes.submit} variant="contained" size='small' color="primary" onClick={() => this.updateVariableData()}>Set Variables</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = dispatch => ({
    updateVariable: (algorithm, data) => dispatch(changeSignatureVariables(algorithm, data))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Signature));