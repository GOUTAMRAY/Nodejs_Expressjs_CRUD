
export const agecheck = (req, res , next) => {

if(req.body.age > 21){
   next();
}else{
  res.status(400).json({ message : " you are not allow"});
}

};












