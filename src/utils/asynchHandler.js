// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {} 


const asyncHandler = (func)=> async (req,res,next)=>{
    
    try{

        await func(req,res,next);

    }
    catch(err){
        res.status(err.status || 500).json({
        success: false,    
        message: err.message});
    }
}


const asyncHandler2 = (func) => {
    (req,res,next) => {
        Promise.resolve(func(req,res,next))
        .catch(err => next(err));
    }
}

export {asyncHandler}