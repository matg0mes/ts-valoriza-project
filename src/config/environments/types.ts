interface IEnvironment {
    secretJWT: string,
    host: {
        port: Number
    }
}

export { IEnvironment }