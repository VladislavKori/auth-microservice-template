export const RegisterValidationScheme = {
    schema: {
        body: {
            type: "object",
            properties: {
                email: { type: "string" },
                password: { type: "string", minLength: 3 }
            },
            required: ['email', 'password']
        },
    }
}

export const LoginValidationScheme = {
    schema: {
        body: {
            type: "object",
            properties: {
                email: { type: "string" },
                password: { type: "string", minLength: 3 }
            },
            required: ['email', 'password']
        },
    }
}