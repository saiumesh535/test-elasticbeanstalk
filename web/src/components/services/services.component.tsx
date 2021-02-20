import { useEffect, useState } from "react";
import { useSearchState } from "../../state/search.state";
import { useServicesState } from "../../state/services.state";
import { demoServices, Service } from "../../types/common-types";
import ServiceComponent from "./service/service.component";
import './services.scss';

function ServicesComponent(){

    const { services } = useServicesState();
    const { searchTerm } = useSearchState();

    const [list, setList] = useState<Service[]>(services);


    useEffect(() => {
        const filteredList = services.filter((s) => s.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
        setList(filteredList);
    }, [searchTerm, services]);

    return (
        <div className='services'>
            {list.map((service) =>
                <ServiceComponent {...service} key={service.name}/>
            )}
        </div>
    )
}

export default ServicesComponent;