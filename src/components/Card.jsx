import React from 'react'
import { Link } from 'react-router-dom';
import {TbListDetails, TbShoppingBagCheck} from "react-icons/tb";
import { ShortenText } from '../helpers/helper';
import styles from "./Card.module.css"

function Card({data}) {
    const {id, title , image, price} = data;

  return (
    <div className={styles.card}>
        <img src={image} alt={title}  />
        <h3>{ShortenText(title)}</h3>
        <p>{price}</p>
        <div className={styles.action}>
            <Link to={`/products/${id}`}>  
                <TbListDetails/>
            </Link>
           
                <div >
                    <button>
                        <TbShoppingBagCheck/>
                    </button>
                </div>
           
        </div>

    </div>
  )
}

export default Card