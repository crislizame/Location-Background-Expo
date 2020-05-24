import { Alert, AsyncStorage } from "react-native"
const BASE_DEV = "http://192.168.1.13:3333/"
const BASE_URL = "http://test:3333/"
const END_POINT = BASE_URL+"api/v1/"
const HEADER_DEFAULT = {
    'Content-Type':'application/json'
}

class API{
    getBaseURL(){ return BASE_URL; }
    getEndPoint(){ return END_POINT; }
    getHeader(){ return HEADER_DEFAULT; }


}

export default new API()
