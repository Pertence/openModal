import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import CityCard from './CityCard'
import CityData from '../utils/CityData'
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import { connect } from 'react-redux'
import { changeData } from '../actions/modal';
import { modals } from '../utils/Constants';
import '../styles/index.css';
import { func } from 'prop-types'

const customStyles = {
    content: {
        top: '50%',
        maxWidth: '500px',
        width: '80%',
        height: '60%',
        maxHeight: '130px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


const style = {
    area: {
        backgroundColor: 'white',
        margin: 15,
        textAlign: 'center'
    },
    title: {
        fontFamly: 'Raleway'
    },

}

Modal.setAppElement('#root');

class Datasets extends Component {
    constructor() {
        super();

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    state = {
        modalIsOpen: false
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleUpload() {
        this.closeModal();
        this.props.updateCity('Uploaded Data');
        this.props.updateStep();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.area}>
                {
                   // UNCOMMENT THIS WHEN IMPLEMENTING UPLOAD CITY FUNCTIONALITY
                   <form class ="form" id="myForm" enctype="multipart/form-data">
                       {modals.map((type, key) => (
                            <div key={key}>
                                <label htmlFor={type.id} className='input-dataset'>
                                    {type.icon}
                                    {type.type}
                                </label>
                                <input name="arquivo" type="file" id={type.id}/>
                            </div>
                        ))}
                        <button type="submit" id="upFile">Upload</button>
                </form>
                }
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Select Datasets"
                >  
                <h2>Oops!</h2>
                <h3>This Feature is not available on openModal v1.0</h3>
                    {/* <form>
                        {modals.map((type, key) => (
                            <div key={key}>
                                <label htmlFor={type.id} className='input-dataset'>
                                    {type.icon}
                                    {type.type}
                                </label>
                                <input id={type.id} type='file' />
                            </div>
                        ))}
                        <Button variant="contained" size='small' color="primary" onClick={this.handleUpload}>Upload Data</Button>
                    </form> */}
                </Modal>
                <Grid container spacing={8}>
                    {CityData.map((city, key) =>
                        <Grid key={key} item xs={12} lg={6}>
                            <CityCard city={city} updateStep={this.props.updateStep}/>
                        </Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setFolderName: (folderName) => dispatch(changeData(folderName))
})

function addEventos() {
    document.getElementById("upFile").addEventListener("submit", e=>{
        e.preventDefault();
        alert("executou");
        const endpoint = "upload.php";
        const formData = new FormData();

        formData.append("inpFile".inpFile.files[0]);
        fetch(endpoint, {
            method:"post",
            body: formData
        }).catch(console.error);
    });
}
window.addEventListener("load",addEventos);
export default withStyles(style)(connect(mapDispatchToProps)(Datasets))
