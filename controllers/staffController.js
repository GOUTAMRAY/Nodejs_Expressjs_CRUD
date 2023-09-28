/***
 * 
 * get all staff
 */

export const getAllStaff = (req, res)=> {
  res.status(200).json({message : "All staff data is done "});
};

export const createStaff = (req, res)=> {
  res.status(200).json(req.body);
};







