const jsonwebtoken=require('jsonwebtoken')


async function Auth(req,res,next){
    try{
    token=req.headers.token
    verifiedtoken=await jsonwebtoken.verify(token,SECRET_KEY)
    if (verifiedtoken){
        console.log(verifiedtoken.id)
        req.id=verifiedtoken.id
        console.log('User Verified')
        next()
    }
    else{
        res.status(403).send("User Not Verified")
    }

}
catch(e){
    res.status(403).send({
        error:"AUth Error",
        messaage:e.messaage
    })
}

}

module.exports={
    Auth,SECRET_KEY
}