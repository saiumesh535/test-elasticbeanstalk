export interface HeaderLink {
    name: string;
    link: string;
}

export type Status = 'red' | 'yellow' | 'green';

export interface Service {
    name: string;
    desc: string;
    status: Status;
}

export const demoServices: Service[] = [
    {
        name: 'S3',
        desc: 'S3 bucket',
        status: 'red'
    },
    {
        name: 'ES',
        desc: 'Elastic Search',
        status: 'green'
    },
    {
        name: 'Redis',
        desc: 'Redis redis',
        status: 'yellow'
    },
    {
        name: 'S31',
        desc: 'S3 bucket',
        status: 'red'
    },
    {
        name: 'ES1',
        desc: 'Elastic Search',
        status: 'green'
    },
    {
        name: 'Redis1',
        desc: 'Redis redis',
        status: 'yellow'
    },
    {
        name: 'S32',
        desc: 'S3 bucket',
        status: 'red'
    },
    {
        name: 'ES2',
        desc: 'Elastic Search',
        status: 'green'
    },
    {
        name: 'Redis2',
        desc: 'Redis redis',
        status: 'yellow'
    }
]