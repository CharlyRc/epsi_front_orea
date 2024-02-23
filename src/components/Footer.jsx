import { NavLink} from "react-router-dom";

const Footer = () => {
    return(
        <footer>
		    <div className="foot">
            	<h3>Contact</h3>
            	<address>
            		<p><span className="first-word">Mail : </span><a href="mailto:oreapatisserie@gmail.com" rel="noreferrer" target="_blank">oreapatisserie@gmail.com</a></p>
            		<p><span className="first-word">Téléphone : </span><a href="tel:+336675360419" rel="noreferrer" target="_blank">06 75 36 04 19</a></p>
            		<p><span className="first-word">Adresse : </span>507 La Verdinière 44810 HERIC</p>
                </address>
            </div>
            <div className="foot market">
                <h3>Sur les marchés :</h3>
                <p><span className="first-word">Mercredi matin : </span>Châteaubriant</p>
                <p><span className="first-word">Jeudi matin : </span>Treillières</p>
                <p><span className="first-word">Vendredi matin : </span>La Chapelle-sur-Erdre</p>
                <p><span className="first-word">Vendredi soir : </span>Sucé-sur-Erdre</p>
            </div>
            <div className="foot">
                <h3>Réseaux sociaux</h3>
                <div className="networks networks-foot">
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100082526761298" rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/oréa-pâtisserie-4b436a276/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/orea.patisserie/?hl=fr" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="mentions-legales">
                    <NavLink to="mentions_legales">Mentions légales</NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
