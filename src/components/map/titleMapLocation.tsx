import React from 'react';
import { observer } from 'mobx-react';
import Typography from '@mui/material/Typography';
import systemStore from '../../store/systemStore';
const TitleMapLocation: React.FC = () => {
    return (
        <div>
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                locations of your system
            </Typography>
            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h4" component="div">
                {systemStore.currentSystem.topic}
            </Typography>
        </div>)

}
export default observer(TitleMapLocation)