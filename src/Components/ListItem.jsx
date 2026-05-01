export default function ListItem(props) {
    return (
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href={props.href}>
                <img src={props.imgSrc}
                    alt={props.imgAlt} />
            </a>
        </li>
    );
}