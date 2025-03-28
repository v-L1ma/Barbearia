# Clients
ng g c clients/new-client &&
ng g c clients/list-clients &&
ng g c clients/edit-client &&
ng g c clients/components/client-form &&
ng g c clients/components/client-table &&

touch src/app/clients/client.models.ts &&

# Schedules
ng g c schedules/schedules-month &&
ng g c schedules/components/schedule-calendar &&

touch src/app/schedules/schedule.models.ts &&

# Commons Components
ng g c commons/components/card-header &&
ng g c commons/components/menu-bar &&
ng g c commons/components/yes-no-dialog &&

# Services
ng g s services/dialog-manager &&
ng g s services/snackbar-manager &&
ng g s services/api-client/clients/clients &&
ng g s services/api-client/schedules/schedules &&

touch src/app/services/dialog-manager.service.ts &&
touch src/app/services/snackbar-manager.service.ts &&
touch src/app/services/service.token.ts &&

# API Client Services
touch src/app/services/api-client/clients/clients.service.ts &&
touch src/app/services/api-client/clients/client.models.ts &&

touch src/app/services/api-client/schedules/schedules.service.ts &&
touch src/app/services/api-client/schedules/schedule.models.ts &&

# Instalação de Dependênciaschmod +x setup.sh
npm install @angular/cdk bootstrap ngx-mask
