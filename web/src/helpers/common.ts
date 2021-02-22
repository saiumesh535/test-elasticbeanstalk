import { getStatusesAPI } from "../api/api";
import { Service, Status } from "../types/common-types"

export const getStatusColor = (serviceStatus: string): Status => {
    if(serviceStatus === 'OK'){
        return 'green';
    } else if(serviceStatus === 'ALARM'){
        return 'red';
    } else {
        return 'yellow';
    }
};

export async function fetchServices() {
    const statuses = await getStatusesAPI();
    const servs: Service[] = []
    Object.keys(statuses).forEach((key) => {
      servs.push({
        name: key,
        desc: statuses[key],
        status: getStatusColor(statuses[key])
      })
    })
    return servs;
  }
