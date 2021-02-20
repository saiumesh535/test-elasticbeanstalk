import ReactTooltip, { Effect } from 'react-tooltip';

interface Props {
    id: string;
    delay?: number;
    effect?: Effect;
}

function Tooltip(props: Props) {
    return (
        <ReactTooltip
            id={props.id}
            delayHide={props.delay || 0}
            effect={props.effect || 'solid'} />
    );
}

export default Tooltip;
