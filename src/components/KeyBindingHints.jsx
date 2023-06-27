const KeyBindingHints = () => {
    return (
        <div className="keybinding-hints">
            <ul>
                <li>
                    <img className="icon" src="/assets/down.svg"/>
                    <img className="icon" src="/assets/up.svg"/>
                    <span className="keybinding">to nagivate</span>
                </li>
                <li>
                <img className="icon" src="/assets/enter.svg"/>

                    <span className="keybinding">to select</span>
                </li>
                <li>
                <img className="icon" src="/assets/esc.svg"/>

                    <span className="keybinding">to close</span>
                </li>
            </ul>
        </div>
    )
}

export default KeyBindingHints;