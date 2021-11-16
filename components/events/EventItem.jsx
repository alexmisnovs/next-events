import React from 'react'
import styles from './EventItem.module.css'
import Button from '../ui/Button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

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
                  <DateIcon />
                  <time>{humanReadableDate(date)}</time>
               </div>
              
               <div className={styles.address}>
               <AddressIcon />
               <address>{formattedAddress}</address>
               </div>
             
            </div>
         
            <div className={styles.actions}>
               
               <Button link={`/events/${id}`}>
                  
                  <span>Explore Event</span>
                  <span className={styles.icon}><ArrowRightIcon /></span>
                  </Button>

            </div>
         </div>
      </li>
   )
}

export default EventItem
