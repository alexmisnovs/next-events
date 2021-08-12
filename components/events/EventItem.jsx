import React from 'react'
import Link from 'next/link'
import styles from './EventItem.module.css'

const EventItem = ({ id, title, location, date, image }) => {

   const humanReadableDate = (date) => {
      const dateObj = new Date(date)
      const month = dateObj.getMonth() + 1
      const day = dateObj.getDate()
      const year = dateObj.getFullYear()
      return `${month}/${day}/${year}`
   }
   const formattedAddress = location.replace(', ', '/n')
  
   return (
      <li className={styles.item}>
         <img src={`/${image}`} alt={title} />
         <div className={styles.content}>
            <div className={styles.summary}>
               <h2>{title}</h2>
               <div className={styles.date}>
                  <time>{humanReadableDate(date)}</time>
               </div>
               <div className={styles.address}>
               <address>{formattedAddress}</address>
               </div>
             
            </div>
         
            <div className={styles.actions}>
               <Link href={`/events/${id}`}>View event</Link>

            </div>
         </div>
      </li>
   )
}

export default EventItem
