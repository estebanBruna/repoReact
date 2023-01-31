import CartWidget from "./CartWidget"

export const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#title" class="brand-logo">Crane</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#modelos">Modelos</a></li>
                        <li><a href="#sobreNosotros">Sobre Nostros</a></li>
                        <li><a href="#cartWidget"><CartWidget /></a></li>
                    </ul>
            </div>
        </nav>
    )
}