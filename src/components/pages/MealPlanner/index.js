import './style.css'
import { mealCalDays } from '../../../utils/data';
import { useState, useRef, useEffect } from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Grid from '@mui/material/Grid';
import PopMeals from '../../individual/PopMeals'
import MealCalW from '../../individual/MealCalW';
import GroceryList from '../../individual/GroceryList';



const MealPlanner = () => {
    const [expanded, setExpanded] = useState(false);
    const [dayMealChoice, setDayMealChoice] = useState('')
    const [days, setDays] = useState([])
    const [searchInpt, setSearchInpt] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [dishes, setDishes] = useState([])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        console.log('searchInpt was updated', searchInpt)
    }, [searchInpt])

    useEffect(() => {
        if ((dayMealChoice !== '') && (searchInpt !== '')) {
            updateDays();
        }
    }, [dayMealChoice, searchInpt])

    const updateDays = (val) => {
        const chosenDay = dayMealChoice.split('-')[0]
        const chosenMeal = dayMealChoice.split('-')[1]
        const dayIndex = days.findIndex(d => d.name === chosenDay)
        const chosenDayObj = days[dayIndex]
        const mealIndex = chosenDayObj.mealTitles.findIndex(obj => obj.title === chosenMeal)
        const chosenMealObj = chosenDayObj.mealTitles[mealIndex]
        if ((chosenDayObj.name === chosenDay) && (chosenMealObj.title === chosenMeal)) {
            console.log('searchInpt', searchInpt)
            const newMealObj = {
                title: chosenMeal,
                dish: searchInpt
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
            setSearchInpt('')
            setDayMealChoice('')
        }
    }

    useEffect(() => {
        console.log('dishes', dishes)
    }, [dishes])

    useEffect(() => {
        console.log('days updates', days)
    }, [days])



    return (
        <DndProvider backend={HTML5Backend}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Grid item xs={12}>
                        <PopMeals
                            handlePanelChange={handleChange}
                            updateDays={updateDays}
                            dayMealChoice={dayMealChoice}
                            setSearchInpt={setSearchInpt}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <GroceryList 
                        ingredients={ingredients} 
                        setIngredients={setIngredients}/>

                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <MealCalW
                        expanded={expanded}
                        setExpanded={setExpanded}
                        dayMealChoice={dayMealChoice}
                        setDayMealChoice={setDayMealChoice}
                        updateDays={updateDays}
                        days={days}
                        setDays={setDays}
                        searchInpt={searchInpt}
                        setSearchInpt={setSearchInpt}
                        dishes={dishes}
                        setDishes={setDishes}
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                    />

                </Grid>

            </Grid>
        </DndProvider>
    )
}

export default MealPlanner