// Images
import fruitImage from '../images/watermelon_320.png';
// Styles
import '../stylesheets/Message.scss';

function Message() {
    return (
        <div className="containerMessage">
            <p className="containerMessage__text">write down your shopping list</p>
            <img src={fruitImage} alt="fruit" className="containerMessage__img" />
        </div>
    )
}

export default Message;