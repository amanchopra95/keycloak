package com.taazaa.keycloak;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;

import org.keycloak.models.KeycloakSession;
import org.keycloak.services.resource.RealmResourceProvider;

public class SsoProvider implements RealmResourceProvider {
    private KeycloakSession session;

    public SsoProvider(KeycloakSession session) {
        this.session = session;
    }

    @Override
    public void close() {
        
    }

    @Override
    public Object getResource() {
        return this;
    }

    @GET
    @Produces("application/json")
    public String get() {
        String name = session.getContext().getRealm().getDisplayName();
        if (name == null) {
            name = session.getContext().getRealm().getName();
        }
        return name;
    }


    
}
