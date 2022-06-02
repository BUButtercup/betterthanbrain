import './style.css'
import { mealCalDays } from '../../../utils/data';
import {useState, useRef, useEffect} from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from '@mui/material/Grid';
import PopMeals from '../../individual/PopMeals'
import MealCalW from '../../individual/MealCalW';



const MealPlanner = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

useEffect(() => {
    console.log('expanded', expanded)
}, [expanded])


    return (
        <DndProvider backend={HTML5Backend}>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <PopMeals handlePanelChange={handleChange} expanded={expanded}/>
            </Grid>
            <Grid item xs={9}>
                <MealCalW expanded={expanded} setExpanded={setExpanded}/>
            </Grid>
           
        </Grid>
        </DndProvider>
    )
}

export default MealPlanner