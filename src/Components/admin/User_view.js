import React, { useEffect,useState } from 'react'
import { getUsers} from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';

function User_view() {
  const { users } = useSelector(state => state.getusersdata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch,users]);  
  
  
   
     //const [userdata, setuserdata] = useState({});
      //setuserdata(users)
      //console.log(userdata);
    const deluser = async(_id) => {
      try {
        const data  = await fetch(`/deluser/${_id}`, {
        method : 'DELETE',
        Headers : {
          'content-type' : "application/json"
        }
        
      }
      
      );
      const res = await data.json(); 
      //loaddata();
      if(data){

      }
      
    
      
    }catch (error){
        console.log("error hai deluser me" + error);
    }

   }

   
    

    let c = 0 ;
        // delete function
        

    return (
        <>
                <div className="container">
                <div className="row my-5">
        
        
                <table class="table my-5 ">
  <thead className= "bg-dark text-white ">
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">  </th>
    </tr>
  </thead>  
  <tbody>
    
    {  
    users.map((e) => {
        return (

      <tr>
        
      <th scope="row">{c++}</th>
      <td>{e.fname}</td>
      <td>{e.email}</td>
      <td>{e.mobile}</td>
      <td>
      
       <button className='btn btn-transparent' onClick={()=> deluser(e._id)}>
         <DeleteIcon/>
        </button>

  <i data-fa-symbol="edit" class="fas fa-pencil fa-fw"></i>
  </td>
      </tr>
                    
        )
            })}
        </tbody> 
        </table>
                </div>
                </div>
        </>
    );
}

export default User_view