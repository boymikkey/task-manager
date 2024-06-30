const asyncWrapper = (fncallback) => {
    return async (req, res, next) => {
    try {
        await fncallback(req,res,next)
    } catch (error) {
        next(error) // next() passes it to the next middleware and handles the request
    }
    }
}

module.exports = asyncWrapper