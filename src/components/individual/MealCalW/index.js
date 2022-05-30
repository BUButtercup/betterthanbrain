import './style.css'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import PanToolIcon from '@mui/icons-material/PanTool';
import { mealCalDays } from '../../../utils/data';
import { useState, useEffect } from 'react'

const MealCalW = ({handleOpen}) => {
    const [days, setDays] = useState([])

    useEffect(() => {
        setDays(mealCalDays)
    }, [])


    return (
        <Container>
            <h2>This Week's Meal Plan</h2>
            <p id='meal-week-p'>Either search your recipe database (click on the magnifying glass), or drag and drop one of your favorites!</p>
            <Paper id='meal-week'>
                {days.map(day =>
                    <div className='meal-cal' key={day.id}>
                        <h5>{day.name}</h5>
                        <div className='meal-box'>
                            <p>Breakfast</p>
                            <div className='meal-box-inpt'>
                                <PanToolIcon fontSize='small'/>
                                <p>or</p>
                                <SearchIcon fontSize='small'
                                onClick={()=>handleOpen()}
                                />
                            </div>
                        </div>
                        <div className='meal-box'>
                            <p>Lunch</p>
                            <div className='meal-box-inpt'>
                                <PanToolIcon fontSize='small'/>
                                <p>or</p>
                                <SearchIcon fontSize='small'/>
                            </div>
                        </div>
                        <div className='meal-box'>
                            <p>Dinner</p>
                            <div className='meal-box-inpt'>
                                <PanToolIcon fontSize='small'/>
                                <p>or</p>
                                <SearchIcon fontSize='small'/>
                            </div>
                        </div>
                        <div className='meal-box'>
                            <p>Snack</p>
                            <div className='meal-box-inpt'>
                                <PanToolIcon  fontSize='small'/>
                                <p>or</p>
                                <SearchIcon fontSize='small'/>
                            </div>
                        </div>
                    </div>
                )}
            </Paper>
        </Container>
    )
}

export default MealCalW