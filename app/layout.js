import React from 'react'
import './globals.css'
import {Geist_Mono, Roboto} from 'next/font/google';

const geistMono = Geist_Mono({
	subsets:['latin'],
	variable:'--font-geist-mono'
})

const roboto = Roboto({
	subsets:['latin'],
	variable: '--font-roboto'
})
export default function Applayout({children}) {
  return (
	<div className={`${roboto.variable} ${geistMono.variable}`} >
	  <html lang='eng'>
		<body>
			{children}
		</body>
	  </html>
	</div>
  )
}
