import './style.css'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const GroceryList = ({ingredients, setIngredients}) => {
  return (
    <Container className='pop-meals' maxWidth='md'>
    <h2>Grocery List</h2>
    <Paper id='meal-week'>
        {ingredients.length ? ingredients.map(ing=><div>{ing.name}</div>) : <h2>No items yet</h2>}
    </Paper>
    </Container>
  )
}

export default GroceryList