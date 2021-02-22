import { useEffect, useState } from 'react';
import { statusTexts } from '../../helpers/constants';
import { useServicesState } from '../../state/services.state';
import { Status } from '../../types/common-types';
import './status.scss';

function StatusComponent() {

    const { services } = useServicesState();
    const [status, updateStatus] = useState<Status>('green');

    useEffect(() => {
        const faultyService = services.find((service) => service.status === 'red' || service.status === 'yellow');
        faultyService? updateStatus(faultyService.status) : updateStatus('green')
    }, [services])

    return (
        <div className='status'>
            <div className={`main-status ${status}`}>
                <p className='text'>{statusTexts[status]}</p>
            </div>
            <div className='status-text'>
                <p className='text'>
                Last incident S3 outage occured at 04: 35 AM Jan 12 2021
                </p>
            </div>
        </div>
    )
}

export default StatusComponent;