import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from './layout.module.css'
export default function Userlayout({children} ) {
  return (
	<div>
		<div className={style.header}>
			<div className={style.logo}> 
				<Image className={style.img} src={'/next.svg'} width={100} height={100} alt='2'/>
			</div>
			<nav className={style['nav-bar']}>
				<Link href={'/'}>Home</Link>
				<Link href={'/about'}>About</Link>
				<Link href={'/service'}>Service</Link>
				<Link href={'/contact'}>Contact</Link>
			</nav>
		</div>
		{children}
	</div>
  )
}
