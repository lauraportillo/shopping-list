import fruitImage from '../images/watermelon_320.png';

function Message() {
    return (
        <div>
            <p>write down your shopping list</p>
            <img src={fruitImage} alt="fruit" />
        </div>
    )
}

export default Message;