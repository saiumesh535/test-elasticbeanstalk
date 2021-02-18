import axios from 'axios';

export interface Statuses {
    [key: string]: string;
}

export async function getStatusesAPI(): Promise<Statuses> {
    const resp = await axios.get('http://awsstatus-env.eba-kfp7zb2p.us-east-1.elasticbeanstalk.com/');
    return resp.data;
}