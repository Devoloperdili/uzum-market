import React from 'react'

function NavbarBootom() {
  const ITEMS = [
    "Elektronika",
    "Aksesuarlar",
    "Maishiy texnika",
    "Kiyimlar",
    "Poyabzallar",
    "Go'zallik va parvarish",
    "Salomatlik",
    "Uy-ro'zgor buyumlari",
    "Qurilish va tamirlash",
    "Avto tovarlar",
    "Salomatlik",
    "Uy-ro'zgor buyumlari",
    "Qurilish va tamirlash",
    "Avto tovarlar",
  ]
  return (
    <div className='container'>
            <div className="navbar__bottom">
        {
          ITEMS?.map((el, inx)=> <div className='navbar__bottom-item' key={inx}>
            <p>{el}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default NavbarBootom