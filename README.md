### Run Keycloak
cd /keycloak-14.0.0/bin/
RUN ./standalone.sh

### Client
cd client
npm run start

### Comments (Dummy Service)
cd comments 
npm run start

### Posts (Dummy Service)
cd posts
npm run start

### Service (Dummy Auth Service)
cd service
npm run start

