import React, { useEffect, useState } from 'react'


export default function RandomPerson() {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const personData = {
          name: data.results[0].name.first,
          lastname: data.results[0].name.last,
          img: data.results[0].picture.large
        }

        setPerson(personData)
      })

  }, [])

  return (
    <div>
      {person ? (<div className='card w-100 justify-content-center align-items-center p-3'>  
      <img width="300px" src={person.img} alt="profile" />
      <p className='text-uppercase titulo'>{person.name} {person.lastname}</p>
      <p className='text-justify'>Su carrera artística así como su vida es un misterio, 
      tal cual como lo muestra en sus pinturas. Y esto tal vez se deba a algo más allá de lo terrorífico… 
      o simplemente sea su forma de trabajar.</p>
      </div>) : null}
    </div>
  )
}
