import React from 'react'
import { ShortenText } from '../helpers/helper'
import { MdDeleteOutline } from 'react-icons/md';
import styles from "./BasketCard.module.css"


function BasketCard({data, clickHandler}) {
  const {image, title, quantity} = data;
  return (
    <div className={styles.card}>
        <img src={data.image} alt={data.title} />
        <p>{ShortenText(data.title)}</p>
        <div className={styles.actions}>
            {data.quantity === 1 && (<button onClick={() => clickHandler("REMOVE_ITEM", data) }>
                <MdDeleteOutline/>
            </button>)}


        {data.quantity >1 && <button onClick={() => clickHandler("DECREASE", data) }>-</button>}
        <span>{data.quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data) }>+</button>
        </div>
    </div>
  )
}

export default BasketCard