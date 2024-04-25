import { useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import './Add.css'
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
function Add({url}) {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        
        const response = await axios.post(`${url}/api/food/add`, formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }

    const onChangerHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data, [name]:value}))
    }

   

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-image-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img className='add-img-upload' src={image?URL.createObjectURL(image) : assets.upload_area} alt="" />    
                </label>    
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product name</p>
                <input onChange={onChangerHandler} value={data.name} type="text" name="name" placeholder='Type Here' id="" />
            </div>
            <div className="add-product-description flex-col">
                <p>Product description</p>
                <textarea onChange={onChangerHandler} value={data.description} name="description" placeholder='Write content here' rows="6" required></textarea>
            </div>
            <div className="add-category-price ">
                <div className="add-category flex-col">
                    <p>Product category</p>
                    <select onChange={onChangerHandler} value={data.category} name="category" >
                        <option value="Salad">Salad</option>
                        <option value="Rolss">Rolss</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodle">Noodle</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product price</p>
                    <input onChange={onChangerHandler} value={data.price} type="number" name="price" placeholder='R$20' id="" />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
      
  )
}

export default Add
