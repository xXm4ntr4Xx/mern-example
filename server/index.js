import express from 'express';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import mongoose from 'mongoose';
import ExampleSchema from './models/ExampleSchema.js'

const app = express()

//middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const router = express.Router()
const port = 3000


app.use('/',router)

//Connect to mongoose
mongoose.connect("mongodb+srv://pietroannobil:300488@cluster0.se4b4.mongodb.net/ExampleMern?retryWrites=true&w=majority",{
  useNewUrlParser:true,
})
.then(()=>{
  console.log('connected to mongoose')

  //routes list
  router.get('/',async (req,res)=>{
    const info = await ExampleSchema.find()
  res.json({
    message:'all data show',
    data:info
  })
})

router.post('/',async(req,res)=>{
  const data =  ExampleSchema(req.body)
  await data.save();
  console.log(data)
  res.json({
    data:data
  })
})
  
}).catch(err=>{
  console.log(err)
})

router.delete('/',async(req,res)=>{
  const dataId = req.body.id
  const data = await ExampleSchema.findOneAndRemove({dataId})
  console.log(data,'---id data server side')
  res.json({
    message:'data deleted',
  })
})




app.listen(port,()=>{
  console.log(`Connected on port: ${port}`)
})