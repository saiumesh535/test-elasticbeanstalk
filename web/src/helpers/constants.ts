import { HeaderLink } from "../types/common-types";

export const headerLinks: HeaderLink[] = [
    {
        name: "Support",
        link: "https://support.apty.io/"
    },
    {
        name: "Twitter",
        link : "https://twitter.com/Apty_io"
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/apty.io"
    }    
]

export const statusTexts = {
    green: 'All Systems Operational',
    yellow: 'Partially degraded service',
    red: 'Some Systems are experiencing issues'
}