import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const style = theme => ({
    card: {
        margin: 10,
    },
    media: {
        height: 140,
    },
})

class ResultCard extends Component {

    render() {
        const { classes, type } = this.props;
        console.log(type)
        return (
            <div>
                {type === undefined ? ''
                    :
                    <Card className={classes.card}>
                        <CardActionArea href={`/results/${type.id}`} download>
                            <CardHeader
                                title={`${type.name}`}
                            />
                            <CardMedia
                                className={classes.media}
                                image={type.cover}
                            />
                        </CardActionArea>
                    </Card>
                }
            </div>
        )
    }
}

export default withStyles(style)(ResultCard)