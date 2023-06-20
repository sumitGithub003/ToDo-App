import DeleteIcon from '@mui/icons-material/Delete';
 const ToDolist = (props) => {
    
  return(
    <>
    <div className='todo_style'>
    <span  onClick = {()=>{props.onSelect(props.id)}}>
    <DeleteIcon /> 
    </span>
    
    <li> {props.text} </li>
    </div>
    </>
  )
}


export default  ToDolist;

