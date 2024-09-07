import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    decodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decodedData?.id;
    console.log(req.userId);
    next();
  } catch (error) {
    console.log(error);
    console.log("Authorization Not Found...".red);
    res.status(400).json({error: 'unauthorised access!'});
  }
};

export default auth;