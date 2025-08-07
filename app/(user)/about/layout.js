import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({ children }) {
	return (
		<div>
			<div>
				<nav>
					<Link href={'/about'}>About</Link>
					<Link href={'/about/my-team'}>My Team</Link>
				</nav>
			</div>
			{children}
		</div>
	)
}
