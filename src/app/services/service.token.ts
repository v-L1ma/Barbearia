import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclient.service";

export const SERVICES_TOKEN = {
    HTTP :{
        CLIENT: new InjectionToken<IClientService>('SERVICES_TOKEN_HTTP.CLIENT'),
        //SCHEDULE: new InjectionToken<IScheduleService>('SERVICES_TOKEN_HTTP.SCHEDULE')
    }
}