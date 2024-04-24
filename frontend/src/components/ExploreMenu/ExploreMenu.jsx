import './ExporeMenu.css'
import { menu_list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
function ExploreMenu({category, setCategory}) {


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='expore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea voluptatibus quisquam reprehenderit voluptatum maiores, velit dolorum. Aspernatur sunt sit id numquam rerum? Ipsum doloremque ducimus, debitis quibusdam quis quod commodi.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?'active':""} src={item.menu_image} alt="item_img" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
