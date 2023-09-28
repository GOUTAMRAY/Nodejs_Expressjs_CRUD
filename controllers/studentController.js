/***
 * 
 * get all student 
 */


export const getAllStudent = (req, res) => {
  res.status(200).json({ name : "goutam ray"});
}

export const createStudentdata = (req, res) => {
  res.status(200).json(req.body);
}

export const deleteStudent = (req, res) => {
  res.status(200).json({ message : "All data deleted"});
}










