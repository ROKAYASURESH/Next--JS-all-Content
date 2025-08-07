import React from 'react'

export default async function DisplayCard({userName}) {
	const res = await fetch(`https://api.genderize.io/?name=${userName}`)
	const data = await res.json()
	console.log(data)
	
  return (
	<div>
	  <h1>{data.name}</h1>
	  <h3>{data.gender}</h3>
	  <h5>{data.probability}</h5>
	</div>
  )
}
