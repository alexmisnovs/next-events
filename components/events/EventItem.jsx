import React from 'react'
import Link from 'next/link'

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
      <li>
         <img src={`/${image}`} alt={title} />
         <div>
            <div>
               <h2>{title}</h2>
               <div>
                  <time>{humanReadableDate(date)}</time>
               </div>
               <address>{formattedAddress}</address>
            </div>
         
            <div>
               <Link href={`events/${id}`}>View event</Link>

            </div>
         </div>
      </li>
   )
}

export default EventItem
