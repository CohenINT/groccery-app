import express from 'express';
import colors  from 'colors';
import IItem from './types/Item';

const app = express();
const PORT = process.env.PORT || "8000";

const  fetchItemsListByUserid = async(userid:string):Promise<IItem[]>=>
{
 const data = [
   {
     name:"bamba"
   }
  ,
  {
    name:"cola",
    description: "it's good"
  }
 ];

  return data;

}

app.get('/listItems/:userid', async (req, res) => {
  const userid = req.params.id;
  const data:IItem[]  = await fetchItemsListByUserid(userid);
  res.json(data);

});


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
