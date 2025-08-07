import React from 'react'
import DisplayCard from './DisplayCard'

export default async function SearchParamsa(props) {
	const searchParams = await props.searchParams
	const userName = searchParams.name
  return (
	<div>
	  <DisplayCard userName={userName}/>
	</div>
  )
}
