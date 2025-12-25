import logo from '../assets/logo.jpg'
import Buttons from '../UI/Buttons'
export default function Header() {
    return(
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="Logo" />
                <h1></h1>
            </div>
            <nav>
                <Buttons textOnly>Cart(0)</Buttons>
            </nav>
        </header>
    )
}