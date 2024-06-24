import jwt from 'jsonwebtoken'

//Sign a token (create new one)

try {
    const token = jwt.sign({
        name: "Jose",
        role: "guest"
    }, "7gFckdLks", {expiresIn: '60'} )
    console.log(token);

    setTimeout(()=>{
        const isTokenVerified = jwt.verify(token, "7gFckdLks")
        console.log(isTokenVerified);
    }, 3000)
} catch (error) {
    console.log(error);
}


//Verify created token