import crypto from 'crypto';

const SECTRET = 'muhammadilyas';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    let signer = crypto.createHmac('sha256', [salt, password].join('.'));
    let result = signer.update("text").digest('hex');
    return result;
    //return crypto.createHmac('shah256', [salt, password].join('.')).update(SECTRET).digest('hex');
}