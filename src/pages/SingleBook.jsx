import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function SingleBook() {
    const [singleBook, setSingleBook] = useState()
    const {id} = useParams()
    useEffect(()=>{
        const singlebook = async()=>{
          const res = await axios.get(`http://localhost:5050/api/product/singleproduct/${id}`);
          setSingleBook(res.data.data)
        }
        singlebook()
    
      },[])

      console.log(singleBook);
      
    
    
    

  return (
    <div>
        <p>{singleBook?.bookname} </p>
        <img src={singleBook?.productImage} />
 {id}
    </div>
  )
}

export default SingleBook