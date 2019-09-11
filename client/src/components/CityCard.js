import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import classnames from 'classnames';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { changeData } from '../actions/modal';
import CardMedia from '@material-ui/core/CardMedia';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

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

class CityCard extends Component {
    state = { expanded: false };

    selectDataset = (name, id) => {
        this.props.updateStep();
        this.props.setFolderName(id);
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, city } = this.props;

        return (
            <Card className={classes.card}>
                <CardActionArea onClick={() => this.selectDataset(city.name, city.id)}>
                    <CardMedia
                        className={classes.media}
                        image={city.cover}
                        title={city.name}
                        alt={city.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {city.name}
                        </Typography>
                        <Typography component="p">
                            {city.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div>
                        {city.data.map((data, key) => (
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
                        {city.detailedDescription.map((data, key) => (
                            <Typography key={key} paragraph>{data}</Typography>
                        ))}
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {return{}}

const mapDispatchToProps = dispatch => ({
    setFolderName: (folderName) => dispatch(changeData(folderName))
})

export default withStyles(style)(connect(mapStateToProps,mapDispatchToProps)(CityCard))