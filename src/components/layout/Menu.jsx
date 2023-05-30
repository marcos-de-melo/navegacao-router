import './Menu.css'
import {Link} from 'react-router-dom';
const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`about`}>Sobre</Link>
                </li>
                <li>
                    <Link to={`param/1/33`}>Com parâmentos</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu