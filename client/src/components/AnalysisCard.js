import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import classnames from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        maxWidth: '250px',
        width: '80%',
        height: '60%',
        maxHeight: '400px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const style = theme => ({
    card: {
        margin: 10,
    },
    cardSelected: {
        margin: 10,
        border: 'red',
    },
    media: {
        height: 140,
    },
    data: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        align: 'center'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
})

Modal.setAppElement('#root');

class AnalysisCard extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    state = { 
        expanded: false,
        modalIsOpen: false
    };

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentWillReceiveProps(){
        this.setState({
            modalIsOpen: false
        }, this.props.updateStep())
    }

    render() {
        const { classes, alg } = this.props;

        return (
            <Card className={classes.card}>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Select Variables">
                    {alg.variables}
                </Modal>
                <CardActionArea onClick={() => this.openModal()}>
                    <CardMedia
                        className={classes.media}
                        image={alg.cover}
                        title={alg.name}
                        alt={alg.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {alg.name}
                        </Typography>
                        <Typography component="p">
                            {alg.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div>
                        {alg.data.map((data, key) => (
                            <Button key={key} size="small" disabled>
                                {data.icon} {data.type}
                            </Button>
                        ))}
                    </div>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {alg.detailedDescription.map((data, key) => (
                            <Typography key={key} paragraph>{data}</Typography>
                        ))}
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
        algorithm: state.algorithm
})

export default withStyles(style)(connect(mapStateToProps)(AnalysisCard))