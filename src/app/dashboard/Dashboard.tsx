import React from 'react'
import OverviewInfo from '../../components/overviewInfo/OverviewInfo'
import classes from './Dashboard.module.css'

interface Props {
    
}

const Dashboard = (props: Props) => {
    return (
        <div className={classes.dashboard}>
            
            <OverviewInfo />
        </div>
    )
}

export default Dashboard
