import express, { Router } from 'express';
import colors  from 'colors';
import cors from 'cors';
import IItem from './types/Item';

const app = express();
app.use(cors());
const PORT = process.env.PORT || "8000";


const  fetchItemsListByUserid = async(userid:string):Promise<IItem[]>=>
{
 const data = [
   {
     name:"bamba111"
   }
  ,
  {
    name:"cola",
    description: "it's good"
  }
 ];
  return data;
}

app.get('/api/listItems/:userid', async (req, res) => {
  const userid = req.params.id;
  const data:IItem[]  = await fetchItemsListByUserid(userid);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  console.log("data sent to client");
  res.json(data);

});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
