import { Service } from "../../../types/common-types";

import { ReactComponent as TooltipSvg } from '../../../assets/tooltip.svg';
import './service.scss';
import Tooltip from "../../tooltip/tooltip.component";

function ServiceComponent(props: Service) {
    return (
        <div className='service'>
            <div className='status-line'></div>
            <div className='service-content'>
                <div className='title'>
                    <p className='name'>{props.name}</p>
                    <Tooltip id={props.name} />
                    <TooltipSvg data-for={`${props.name}`}
                        data-tip={props.name} data-id={props.name} />
                </div>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    )
}
export default ServiceComponent;


