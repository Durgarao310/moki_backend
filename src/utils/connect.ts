import mongoose from "mongoose"

type DBInput = {
  dbUri: string,
}

export default ({ dbUri }: DBInput) => {
  const connect = () => {
    mongoose
      .connect(dbUri)
      .then(() => {
        return console.info(`Successfully connected to ${dbUri}`)
      })
      .catch(err => {
        console.error(`Error connecting to database :`, err)
        return process.exit(1)
      })
  }
  connect()
  mongoose.connection.on("disconnected", connect)

}