import './status.scss';

function StatusComponent() {
    return (
        <div className='status'>
            <div className='main-status'>
                <p className='text'>All Systems Operational</p>
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