const asyncHandler = (reqHandler) => {
    (req,res,next) => {
        Promise.resolve(reqHandler(req,res,next))
        .catch((err)=> next(err))
    }
};




export {asyncHandler}

// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) =>async () => {};


// const asyncHandler = (fn) =>async () => {}