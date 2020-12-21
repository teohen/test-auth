class MainError extends Error {
    statusCode = 500
    message = "Internal Server Error"

    constructor(statusCode, message) {
        super(message)
        this.message = message
        this.statusCode = statusCode
    }
}

module.exports = MainError