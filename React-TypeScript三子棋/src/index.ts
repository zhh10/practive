import { type } from "os";
interface User {
    loginId: string
    loginpwd: string
} 

type String<T> = {
    [p in keyof T]: string
}

const u:String<User> = {
    loginId:'abc',
    loginpwd:'abcd'
}