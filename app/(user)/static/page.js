
import { db } from "@/app/config/db"
const StatiPage = async() => {
	const [doctors]=await db.execute("select * from doctors")
	console.log(doctors)
  return (
	<div>
	  <h1>This is Static page for DB Connection</h1>
	  <ul>
		{doctors.map((doctor, index)=>{
			return (
				<>
				<li>{doctor.doctor_id}</li>
				<li>{doctor.first_name}</li>
				</>
						)
		})}
	  </ul>
	</div>
  )
}

export default StatiPage
