// Images
import fruitImage from '../images/watermelon_320.png';
// Styles
import '../stylesheets/Message.scss';

function Message() {
    return (
        <div className="containerMessage">
            <p className="containerMessage__title"><span className="containerMessage__bold">no item</span> in the list</p>
            <p className="containerMessage__subtitle">write down your <span className="containerMessage__bold">shopping</span></p>
            <img src={fruitImage} alt="fruit" className="containerMessage__img" />
        </div>
    )
}

export default Message;