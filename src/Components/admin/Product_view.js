import React, { useEffect } from 'react'
import { getProducts} from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const Product_view = () => {
    const { products } = useSelector(state => state.getproductsdata);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])
    const loaddata = () => {
      dispatch(getProducts());
    }
    
    const delproduct = async(_id) => {
      JSON.stringify(_id)
      try {
        const data  = await fetch(`/delproduct/${_id}`, {
        method : 'DELETE',
        Headers : {
          'content-type' : "application/json"
        }
      });
       loaddata()
      
    }catch (error){
        console.log("error hai delproduct me" + error);
    }

   }

    let c = 0;

    return (
   <>
   <div className="container">
      <div className="row my-5">


      <table class="table my-5 ">
<thead className= "bg-dark text-white my-5">
<tr>
<th scope="col">#</th>
<th scope="col">id</th>
<th scope="col">title</th>
<th scope="col">cost</th>
<th scope="col"></th>

</tr>
</thead>
<tbody>

{  
products.map((e) => {
return (

<tr>

<th scope="row">{++c}</th>
<td>{e.id}</td>
<td>{e.title.shortTitle}</td>
<td>{e.price.cost}</td>
<td>{e._id}</td>

<td >
<button  className='btn btn-transparent' onClick= {delproduct}>

<DeleteIcon />
</button>


{/* <NavLink to = {`/editproducts/${e._id}`}>
<EditIcon />
</NavLink> */}

</td>
</tr>
          
)
  })}
</tbody> 
</table>
      </div>
      </div>
  </>
  
  )
}

export default Product_view