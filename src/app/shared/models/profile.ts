import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';

import { Cloud } from './cloud';

export class Credentials {
    id: string;
    name: string;
    default: boolean;
    cloud: Cloud;
    cloud_id: string; // only used when saving new record
}

export class AWSCredentials extends Credentials {
    access_key: string;
    secret_key: string;
}

export class OpenStackCredentials extends Credentials {
    username: string;
    password: string;
    project_name: string;
    project_domain_name: string;
    user_domain_name: string;
    identity_api_version: string;
}

export class AzureCredentials extends Credentials {
    subscription_id: string;
    client_id: string;
    secret: string;
    tenant: string;
}

export class UserProfile {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    aws_creds: AWSCredentials[];
    openstack_creds: OpenStackCredentials[];
    azure_creds: AzureCredentials[];
}

export class CredVerificationResult {
    result: string;
    details: string;
}