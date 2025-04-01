import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclient.service";
import { ISnackbarManagerService } from "./isnaskbar-manager.service";

export const SERVICES_TOKEN = {
    HTTP :{
        CLIENT: new InjectionToken<IClientService>('SERVICES_TOKEN_HTTP.CLIENT'),
        //SCHEDULE: new InjectionToken<IScheduleService>('SERVICES_TOKEN_HTTP.SCHEDULE')
    },
    SNACKBAR: new InjectionToken<ISnackbarManagerService>('SERVICES_TOKEN.SNACKBAR')
}