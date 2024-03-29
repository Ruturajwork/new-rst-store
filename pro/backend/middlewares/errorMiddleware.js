// it is middleware:- it is access to request response cycle
// it has 4 arguments (err,req, res, next)

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(err.message, err.stack);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

// this is one time work

//day 5
