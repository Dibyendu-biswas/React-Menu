import React from 'react'

const Menu = ({img,title,desc,price }) => {
  return (
    <div className='menuSection'>
            <article>
              <img src={img} alt={title} />
              <div className="manuItem">
                <h4>{title}</h4>
                <h4>${price}</h4>
              <p>{desc}</p>
              </div>
            </article>
    </div>
  )
}

export default Menu