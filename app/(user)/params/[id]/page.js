'use client'
import React, { use } from 'react'
import DisplayCard from './DisplayCard'

export default function page(props) {
	const params = use(props.params)
	const {id}=params
	console.log(params)
  return (
	<div>
	  <DisplayCard id={id}/>
	</div>
  )
}
