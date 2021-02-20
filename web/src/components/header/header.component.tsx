
import './header.scss';
import LinkComponent from './links/links.component';
import Logo from './logo/logo.component';


function Header() {
    return (
        <div className="header">
            <Logo />
            <LinkComponent />
        </div>
    )
}

export default Header;