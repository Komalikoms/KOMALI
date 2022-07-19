
import React,{useState} from 'react';

function Filter(){
    const fruits=['Apple','Banana','Pineapple','Orange','guava'];
    const[list,setList]=useState(fruits);

    const handleSearch=(event)=>{
          
        if(event.target.value===''){
            setList(fruits);
            return;
        }

        const filteredList=fruits.filter(item=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!= -1);
        setList(filteredList);
    }
    
       

    return(
        <div>
        <div>
            Search: <input type='text' onChange={handleSearch} />
        </div> 
        { list && list.map((item,index)=>(
            <div key={index}> {item} </div>
        
        ))}
        </div>
    )
}
export default Filter;