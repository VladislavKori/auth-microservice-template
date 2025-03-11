import { keyName } from "../config/config.js"

export const createCookie = (authToken: string): string => {
    return `${keyName}=${authToken}; HttpOnly; SameSite=Strict;`
}

export const getTokenFromCookies = (cookies: string): string => {
    const cookiesList = cookies.split("; ")
    const findedIndex = cookiesList.findIndex(el => el.startsWith(keyName))
    if (findedIndex === -1) {
        throw new Error("cookie not found")
    }
    return cookiesList[findedIndex].split("=")[1];
}