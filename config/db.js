import mongoose from "mongoose"

export const db = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("Db Conectada")
        return conn
    } catch(error) {
        console.log("Ocurrio un error " + error)
    }
}        