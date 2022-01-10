const errorHandlerMiddlware = ( err,res,res,next ) => {
  console.log(err);
  res.status(500).json({ msg: 'there was an error'})
}

export default errorHandlerMiddlware