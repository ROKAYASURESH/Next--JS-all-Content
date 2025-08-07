import Link from 'next/link'
import React from 'react'

export default function Dashboardlayout({children}) {
  return (
	<div>
		<div>
			<nav>
				<Link href={'/admin'}>Dashboard</Link>
				<Link href={'/admin/params'}>Params</Link>
			</nav>
		</div>
	  {children}
	</div>
  )
}
