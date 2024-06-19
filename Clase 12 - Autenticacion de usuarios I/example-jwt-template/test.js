import jwt from 'jsonwebtoken'

const verifyToken = (token) => {
    const verify = jwt.verify(token, "skxinnvJFs")
    
    console.log(verify);
}

try {
    const token = jwt.sign({
        name: "Sebita",
        lastname: "Anka",
    }, "skxinnvJFs", {expiresIn: '400'})
    
    console.log(token);
    
    setTimeout(()=> {
        verifyToken(token)
    }, 3000)
    
    const decoded = jwt.decode(token)
    
    console.log(decoded);
} catch (error) {
    console.log(error);
}