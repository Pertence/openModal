import React from 'react'
import TrainIcon from '@material-ui/icons/Train'
import MetroIcon from '@material-ui/icons/Subway'
import BusIcon from '@material-ui/icons/DirectionsBus'
import TramIcon from '@material-ui/icons/Tram'
import BikeIcon from '@material-ui/icons/DirectionsBike'
import PhoneIcon from '@material-ui/icons/PhonelinkRing'
import GridIcon from '@material-ui/icons/GridOn'
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare'
import FormatShapes from '@material-ui/icons/FormatShapes';

export const BUS = {
    type: 'Bus',
    id: 'bus',
    icon: <BusIcon />
}

export const TRAIN = {
    type: 'Train',
    id: 'train',
    icon: <TrainIcon />
}

export const TRAM = {
    type: 'Tram',
    id: 'tram',
    icon: <TramIcon />
}

export const BIKE = {
    type: 'Bike',
    id: 'bike',
    icon: <BikeIcon />
}

export const METRO = {
    type: 'Metro',
    id: 'metro',
    icon: <MetroIcon />
}

export const MOBILE = {
    type: 'Mobile Activity',
    id: 'mobileActivity',
    icon: <PhoneIcon />
}

export const GRID_ON = {
    type: 'Grid Available',
    id: 'grid',
    icon: <GridIcon />
}

export const UBER_MOVEMENT = {
    type: 'Uber Movement City Data',
    id: 'uberData',
    icon: <MobileScreenShareIcon/>
}

export const UBER_SHAPE = {
    type: 'Uber Movement City Shape',
    id: 'uberShape',
    icon: <FormatShapes />
}

export const modals = [BUS, TRAIN, TRAM, METRO, BIKE, MOBILE, UBER_MOVEMENT, UBER_SHAPE ,GRID_ON];