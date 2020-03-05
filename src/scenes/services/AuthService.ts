import { User, UserManager, WebStorageStateStore } from 'oidc-client';

export class AuthService {
    public userManager: UserManager;

    constructor() {
        const host = window.location.origin;

        const settings = {
            authority: process.env.REACT_APP_OIDC_AUTHORITY,
            client_name: process.env.REACT_APP_OIDC_CLIENT_NAME,
            client_id: process.env.REACT_APP_OIDC_CLIENT_ID,
            redirect_uri: `${host}/auth/callback`,
            post_logout_redirect_uri: `${host}/auth/logout`,
            response_type: 'id_token token',
            scope: "openid profile",
            automaticSilentRenew: true,
            userStore: new WebStorageStateStore({ store: window.sessionStorage })
        };

        this.userManager = new UserManager(settings);
    }

    public getUser(): Promise<User | null> {
        return this.userManager.getUser();
    }

    public login(): Promise<void> {
        return this.userManager.signinRedirect();
    }

    public renewToken(): Promise<User> {
        return this.userManager.signinSilent();
    }

    public logout(): Promise<void> {
        return this.userManager.signoutRedirect();
    }
}
