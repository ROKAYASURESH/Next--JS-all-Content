import React from 'react'
import style from '../loading.module.css'
export default function loading() {
	return (
		<div className={style.loading}>
			<div className={style.pl}>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__dot}></div>
			<div className={style.pl__text}>Loading…</div>
		</div>
		</div>
	)
}
