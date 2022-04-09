import React from 'react'

const ListingItem = ({ el }) => {
  return (
    <div className="item">
        <div className="item-image">
            <a href={el.url}>
                <img src={el.MainImage.url_570xN} alt={el.title}/>
            </a>
        </div>
        <div className="item-details">
            <p className="item-title">{el.title.substr(0, 50) + '...'}</p>
            <p className="item-price">
                {el.currency_code === 'USD' ? 
                `$${el.price}` : 
                el.currency_code === 'EUR' ? 
                `€${el.price}` : `${el.price}${el.currency_code}`}
            </p>
            <p className={`item-quantity ${(el.quantity <= 10 && 'level-low') 
            || (el.quantity <= 20 && 'level-medium') 
            || (el.quantity > 20 && 'level-high')} `}>
                {`${el.quantity} left`}
            </p>
        </div>
    </div>
  )
}

export default ListingItem