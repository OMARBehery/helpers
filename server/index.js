const express=require('express')
const app = express()
const clientRoutes=require('./routes/clientRoutes')
const helperRoutes=require('./routes/helperRoutes') 
const mongoose=require('mongoose')
const cors=require('cors')
const Match=require('./models/matches')
mongoose.connect('mongodb+srv://omar:dbpass1234@cluster0.huymcu2.mongodb.net/node_course').then(()=>{

  app.listen(3001)
  console.log('Connected to MongoDB')
}).catch((err)=>{
  console.log(err)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use('/helpers',helperRoutes)
app.use('/clients',clientRoutes)
app.post('/match',async(req ,res)=>{
match=await Match.create(req.body)
res.send(match)
})