import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../styles/index.css'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const Navigation = (props) =>
  <div className={props.classes.root}>
    <AppBar position="static" color='primary'>
      <Toolbar>
        <Typography variant="title" color="inherit" className={props.classes.grow}>
          <Link to='/' className='link-menu'>
            OpenModal
            </Link>
        </Typography>
        {/* <Button color="inherit">
          <Link to='/geodata' className='link-menu'>
            openGeoData
            </Link>
        </Button>
        <Button color="inherit">
          <Link to='/project' className='link-menu'>
            The Project
          </Link>
        </Button> */}
        <Button color="inherit">
          <Link to='/docs' className='link-menu'>
            Docs
          </Link>
        </Button>
        <Button color="inherit">
          <Link to='/contribute' className='link-menu'>
            Contribute
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>


export default withStyles(styles)(Navigation)