package com.taazaa.keycloak;

import org.keycloak.Config.Scope;
import org.keycloak.models.KeycloakSession;
import org.keycloak.models.KeycloakSessionFactory;
import org.keycloak.models.RealmProvider;
import org.keycloak.models.RealmProviderFactory;

public class SsoProviderFactory implements RealmProviderFactory {

    @Override
    public void close() {
        
    }

    @Override
    public RealmProvider create(KeycloakSession arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String getId() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void init(Scope arg0) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void postInit(KeycloakSessionFactory arg0) {
        // TODO Auto-generated method stub
        
    }
    
}
