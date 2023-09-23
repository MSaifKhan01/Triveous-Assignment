const maxRequest = 10;
const windowMs = 60 * 1000;// 1 minute

const requestCounter = new Map()


const requestTimer = new Map()



const rateLimit = (req, res, next) => {
    try {
        const clientIP = req.ip;

        // if ip not present and request timer is less than current time (rate limit window is expired)
        if (!requestCounter.has(clientIP) || requestTimer.get(clientIP) < Date.now()) {
            //set counter to 1
            requestCounter.set(clientIP, 1)
            //set timer to current time + 1 minute
            requestTimer.set(clientIP, Date.now() + windowMs)
        } else {
            // if ip is present and the window is not crossed 1 minute (increment number of request)
            requestCounter.set(clientIP, requestCounter.get(clientIP) + 1)
            // if counter exceeds 10 request , send response 
            if (requestCounter.get(clientIP) > maxRequest) {
                return res.status(429).json({ msg: "Rate Limit Exceeded. Please try after 1 minute", success: false })
            }
        }
        // otherwise call the next
        next()
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}
module.exports = { rateLimit }