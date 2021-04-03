# BibTrip-infra
Settings for Kubernetes, CI, Helm charts, docker and etc

# Local start
Run the command `npm run deps: local:up`. This will launch containers for local development like db and nginx

Also add `127.0.0.1 local.otr.ru` to the hosts file. This will make your life easier, as this domain is used in configuration files

# Use helm charts:
Befure you ned install Tiller:

```
helm init
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl patch deploy --namespace kube-system tiller-deploy --patch '{"spec": {"template": {"spec": {"serviceAccount": "tiller"} } } }'
```

# Verdaccio
It is used to store the npm repository. Its address is `http://local.otr.ru:4875`

All our repositories are prefixed with `@otr-ai`. In order to tell npm that this prefix needs to be addressed to the local server, there are 2 ways:

You can add a user and log in with a specific prefix
`npm adduser --registry = http://local.otr.ru:4875` and then` npm login --scope = @otr-ai --registry=http://local.otr.ru:4875`

OR you can just change the global config
`npm config set @ otr-ai: registry http: //local.otr.ru: 4875`

# ELK
Access to the admin panel is blocked. To assign a username and password, just change the `USER` and` PASSWORD` environment variables in the `nginx` container

Note that the `metricbeat.yml` and` nginx.conf` contain the container name `otr_elk:9200`

# Mongo
The first start will create databases and users. They can be viewed in the file `entrypoint/init.js`

# Helm
install https://github.com/helm/helm/releases

- `helm repo add stable https://charts.helm.sh/stable`
- `helm repo add nginx-stable https://helm.nginx.com/stable`
- `helm repo update`
- `helm install --set containerPort.http=80 ingress nginx-stable/nginx-ingress` (https://github.com/helm/charts/blob/master/stable/nginx-ingress/values.yaml)

# minio
- `helm repo add minio https://operator.min.io/`
- `helm repo update`
- `helm install --namespace minio-operator --create-namespace minio-operator minio/minio-operator` (https://github.com/minio/charts/blob/master/minio/values.yaml)

# Production
For sale, configuration files are used with the `prod-` prefix. Important containers are password-locked (can be configured in `traefik / prod / file-source.yml`)