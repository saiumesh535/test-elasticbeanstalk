import { demoServices } from "../../types/common-types";
import ServiceComponent from "./service/service.component";
import './services.scss';

function ServicesComponent(){
    return (
        <div className='services'>
            {demoServices.map((service) =>
                <ServiceComponent {...service} key={service.name}/>
            )}
        </div>
    )
}

export default ServicesComponent;