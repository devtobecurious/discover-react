const dev = {
    apis: {
        authentication: {
            url: ''
        }
    }
}

const prod = {
    apis: {
        authentication: {
            url: ''
        }
    }
}

export const config = process.env.NODE_ENV === 'production' ? prod : dev;