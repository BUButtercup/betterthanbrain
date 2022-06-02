import './style.css'
import {ItemTypes} from '../../../utils/Dnd/Constants'
import { useDrag } from 'react-dnd'

const PopDish = ({id, dish}) => {
    const [{isDragging}, drag] = useDrag(()=>({
        type: ItemTypes.POPDISH,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

  return (
    <div 
    key={id} 
    className='pop-dish'
    ref={drag}
    style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
    }}
    >{dish}</div>
  )
}

export default PopDish