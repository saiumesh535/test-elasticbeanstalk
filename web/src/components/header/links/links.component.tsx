import { headerLinks } from "../../../helpers/constants";
import './links.scss';

function LinkComponent() {

    return (
        <div className='links'>
            {
                headerLinks.map((link) =>
                (
                    <a href={link.link} target="_blank" rel="noopener noreferrer"
                    >{link.name}</a>
                )
                )
            }
        </div>
    )
}

export default LinkComponent;
