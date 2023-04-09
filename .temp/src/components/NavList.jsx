const NavList = (props) => {
    return (
        <li
            className={`flex items-center cursor-pointer hover:bg-blue-600 text-lg py-3 px-3 my-1 rounded ${props.styleName}`}
            onClick={props.onClick}
        >
            <span className='mr-3 text-blue-300'>
                <props.icon />
            </span>
            <span>{props.iconText}</span>
        </li>
    );
}

export default NavList;