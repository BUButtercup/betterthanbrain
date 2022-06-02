import { useState, useEffect } from 'react'
import './style.css'
import { breakfasts, lunches, dinners, snacks } from '../../../utils/data.js'
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PopDish from '../PopDish';

const PopMeals = ({handlePanelChange, expanded}) => {

    const [breakfastItems, setBreakfastItems] = useState([])
    const [lunchItems, setLunchItems] = useState([])
    const [dinnerItems, setDinnerItems] = useState([])
    const [snackItems, setSnackItems] = useState([])

    useEffect(() => {
        setBreakfastItems(breakfasts)
        setLunchItems(lunches)
        setDinnerItems(dinners)
        setSnackItems(snacks)
    }, [])



    return (
        <Container className='pop-meals' maxWidth='md'>
            <h2>Popular Meal Choices</h2>
            <Accordion expanded={expanded === 'panel1'} onChange={handlePanelChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Breakfast
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Your favorite breakfast recipes</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid container spacing={2}>
                            {breakfastItems.length ? breakfastItems.map(item =>
                            (
                            // <Grid item key={item.id}>
                            //     <Button variant="contained">{item.item}</Button>
                            // </Grid>
                            <PopDish dish={item.item} id={item.id}/>
                            )) : <h3>You haven't chosen any breakfast favorites</h3>
                            }
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handlePanelChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Lunch</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Your favorite lunch recipes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid container spacing={2}>
                            {lunchItems.length ? lunchItems.map(item =>
                            (
                            // <Grid item key={item.id}>
                            //     <Button variant="contained">{item.item}</Button>
                            // </Grid>
                            <PopDish dish={item.item} id={item.id}/>
                            )) : <h3>You haven't chosen any lunch favorites</h3>
                            }
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handlePanelChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Dinner
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Your favorite dinner recipes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid container spacing={2}>
                            {dinnerItems.length ? dinnerItems.map(item =>
                            (
                            // <Grid item key={item.id}>
                            //     <Button variant="contained">{item.item}</Button>
                            // </Grid>
                            <PopDish dish={item.item} id={item.id}/>
                            )) : <h3>You haven't chosen any dinner favorites</h3>
                            }
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handlePanelChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Snacks</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Your favorite snacks
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid container spacing={2}>
                            {snackItems.length ? snackItems.map(item =>
                            (
                            // <Grid item key={item.id}>
                            //     <Button variant="contained">{item.item}</Button>
                            // </Grid>
                              <PopDish dish={item.item} id={item.id}/>
                            )) : <h3>You haven't chosen any snack favorites</h3>
                            }
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    )
}

export default PopMeals