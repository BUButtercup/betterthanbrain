import './style.css'
import {useState} from 'react'
import Grid from '@mui/material/Grid';
import PopMeals from '../../individual/PopMeals'
import MealCalW from '../../individual/MealCalW';
import MealSearchModal from '../../individual/MealSearchModal';


const MealPlanner = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <PopMeals />
            </Grid>
            <Grid item xs={9}>
                <MealCalW handleOpen={handleOpen}/>
            </Grid>
            <MealSearchModal open={open} close={handleClose}/>
        </Grid>
    )
}

export default MealPlanner