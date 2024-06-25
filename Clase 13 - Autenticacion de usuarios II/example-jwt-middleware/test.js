import jwt from 'jsonwebtoken'

//View using jsonwebtoken documentation

//function that verifies token
const verifyToken = (token) => {
    const verify = jwt.verify(token, "skxinnvJFs")
    
    console.log(verify);
}

try {
    //Sign a token
    const token = jwt.sign({
        name: "Belen",
        lastname: "Gomez",
        role: "admin"
    }, "skxinnvJFs", {expiresIn: '400'})
    
    //Verify token
    console.log(token);
    
    setTimeout(()=> {
        verifyToken(token)
    }, 3000)
    
    //View decoded (without verifying)
    const decoded = jwt.decode(token)
    
    console.log(decoded);
} catch (error) {
    console.log(error);
}