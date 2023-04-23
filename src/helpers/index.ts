import crypto from 'crypto';

const SECTRET='ilyas-muhammad-1234'

export const random= ()=> crypto.randomBytes(128).toString('base64');
export const authentication=(salt:string, password:string)=>{
    return crypto.createHmac('shah256',[salt,password].join('/')).update(SECTRET).digest('hex');
}