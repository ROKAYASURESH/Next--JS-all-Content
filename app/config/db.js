import mysql from "mysql2/promise"
export const db = mysql.createPool({
	host:"localhost",
	user:"root",
	password:"Suresh@123",
	database:"hospital_db"
})


try{
	const connection = await db.getConnection();
	console.log( "Database Conncected Successfully")
	connection.release();
} catch (error){
	console.log("Database conndction failed", error)
	process.exit(1);
}