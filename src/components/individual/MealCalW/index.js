import './style.css'
import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
// import PanToolIcon from '@mui/icons-material/PanTool';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
import MealSearchModal from '../../individual/MealSearchModal';
import { mealCalDays } from '../../../utils/data';
import { useState, useEffect } from 'react'

const MealCalW = ({ setExpanded, expanded, updateDays, dayMealChoice, setDayMealChoice, days, setDays, searchInpt, setSearchInpt, dishes, setDishes, ingredients, setIngredients }) => {


    const [open, setOpen] = useState(false);

    // const [mealChoices, setMealChoices] = useState([])
    // const [mealId, setMealId] = useState('')

    const openPanel = (day, meal) => {
        if (searchInpt==='') {
            setDayMealChoice(day + '-' + meal)
            const targetMeal = meal;
            if ((targetMeal === 'Breakfast') && (expanded === 'panel1')) {
                setExpanded(false)
            } else if ((targetMeal === 'Lunch') && (expanded === 'panel2')) {
                setExpanded(false)
            } else if ((targetMeal === 'Dinner') && (expanded === 'panel3')) {
                setExpanded(false)
            } else if ((targetMeal === 'Snack') && (expanded === 'panel4')) {
                setExpanded(false)
            } else if (targetMeal === 'Breakfast') {
                setExpanded('panel1')
            } else if (targetMeal === 'Lunch') {
                setExpanded('panel2')
            } else if (targetMeal === 'Dinner') {
                setExpanded('panel3')
            } else if (targetMeal === 'Snack') {
                setExpanded('panel4')
            } else { return }
        } else {
            setDayMealChoice(day+'-'+meal);
            updateDays();
        }
    }

    const handleOpen = (day, meal) => {
        console.log('the id:', day + '-' + meal)
        setDayMealChoice(day + '-' + meal)
        setOpen(true)
    };

    // const updateDays = (val) => {
    //     const chosenDay = dayMealChoice.split('-')[0]
    //     const chosenMeal = dayMealChoice.split('-')[1]
    //     const dayIndex = days.findIndex(d => d.name === chosenDay)
    //     const chosenDayObj = days[dayIndex]
    //     const mealIndex = chosenDayObj.mealTitles.findIndex(obj => obj.title === chosenMeal)
    //     const chosenMealObj = chosenDayObj.mealTitles[mealIndex]
    //     if ((chosenDayObj.name === chosenDay) && (chosenMealObj.title === chosenMeal)) {
    //         const newMealObj = {
    //             title: chosenMeal,
    //             dish: searchInpt
    //         }
    //         const newMealArr = chosenDayObj.mealTitles.map(item => {
    //             if (item === chosenMealObj) {
    //                 return newMealObj
    //             } else {
    //                 return item
    //             }
    //         })
    //         console.log('newmealarray', newMealArr)
    //         const newDay = {
    //             ...chosenDayObj,
    //             mealTitles: newMealArr
    //         }
    //         const newDays = days.map(d => {
    //             if (d.name === chosenDay) {
    //                 return newDay
    //             } else {
    //                 return d
    //             }
    //         })
    //         console.log('newDays', newDays)
    //         setDays(newDays)
    //     }
    // }

    const removeDish = (day, meal) => {
        console.log('day & meal', day)
        const chosenDay = day
        const chosenMeal = meal
        const dayIndex = days.findIndex(d => d.name === chosenDay)
        const chosenDayObj = days[dayIndex]
        const mealIndex = chosenDayObj.mealTitles.findIndex(obj => obj.title === chosenMeal)
        const chosenMealObj = chosenDayObj.mealTitles[mealIndex]
        if ((chosenDayObj.name === chosenDay) && (chosenMealObj.title === chosenMeal)) {
            const newMealObj = {
                title: chosenMeal
            }
            const newMealArr = chosenDayObj.mealTitles.map(item => {
                if (item === chosenMealObj) {
                    return newMealObj
                } else {
                    return item
                }
            })
            console.log('newmealarray', newMealArr)
            const newDay = {
                ...chosenDayObj,
                mealTitles: newMealArr
            }
            const newDays = days.map(d => {
                if (d.name === chosenDay) {
                    return newDay
                } else {
                    return d
                }
            })
            console.log('newDays', newDays)
            setDays(newDays)
        }
    }

    const handleClose = () => {
        setOpen(false)
        console.log('daymealchoice', dayMealChoice)
        console.log('days', days)
        console.log('searchInpt', searchInpt)
        updateDays()

    };



    useEffect(() => {
        setDays(mealCalDays)

    }, [])

    // useEffect(() => {
    //     console.log('days', days)
    // }, [days])


    return (
        <Grid container id='meal-cal-box' columns={{ xs: 9, md: 9 }}>
            <Grid item>
                <h1>This Week's Meal Plan</h1>
                <p id='meal-week-p'>Either search your recipe database (click on the magnifying glass), or choose one of your favorites (click the plus, then choose from the list)!</p>
                <Paper id='meal-week'>
                    {days.map(day =>
                        <Grid item xs={12} className='meal-cal' style={{ display: 'flex', flexDirection: 'column', margin: '0.5rem' }} key={day.name}>
                            <h1 className='day-name'>{day.name}</h1>
                            {day.mealTitles.map((title) =>
                                <>
                                    <h2>{title.title}</h2>
                                    {
                                        title.dish ? <p className='meal-box-inpt'

                                        >
                                            {title.dish}
                                            <ClearIcon
                                                onClick={() => removeDish(day.name, title.title)}
                                                style={{ cursor: 'pointer' }}
                                            // id={`${day.name}-${title.title}-clear`}
                                            />
                                        </p> :
                                            <div className='meal-box-inpt'>
                                                <Tooltip title='Click to open favorites'>
                                                    <AddCircleOutlineIcon fontSize='large'
                                                        onClick={() => openPanel(day.name, title.title)}
                                                        id={`${day.name}-${title.title}-hand`}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                </Tooltip>
                                                <p>or</p>
                                                <Tooltip title='Click to search'>
                                                    <SearchIcon fontSize='large'
                                                        onClick={() => handleOpen(day.name, title.title)}
                                                        // id={}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                </Tooltip>
                                            </div>
                                    }
                                </>
                            )}
                        </Grid>
                    )}
                </Paper>
            </Grid>
            <MealSearchModal 
            day={dayMealChoice} 
            open={open} 
            close={handleClose} 
            setSearchInpt={setSearchInpt} 
            searchInpt={searchInpt} 
            dishes={dishes} 
            setDishes={setDishes}
            ingredients={ingredients}
            setIngredients={setIngredients}
            />
            
        </Grid>
    )
}

export default MealCalW