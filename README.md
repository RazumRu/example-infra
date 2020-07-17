# infra
Settings for Kubernetes, CI, Helm charts and docker

# Local start
You can run `npm run deps:up` command. It run add dependency for local server.

This command also running nginx, where you can customize rewrite.

Add to hosts file line `127.0.0.1 local.example.com`

# Use helm charts:
Befure you ned install Tiller:

```
helm init
kubectl create serviceaccount --namespace kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
kubectl patch deploy --namespace kube-system tiller-deploy --patch '{"spec": {"template": {"spec": {"serviceAccount": "tiller"} } } }'
```

# npm registry
We used https://verdaccio.org/docs/en/kubernetes

When you install this helm chart, you need set auth.htpasswd.max_users to 1 and add your main user.
Then set it to -1

`npm adduser --registry=http://npm.example.com`
 And then
`npm login --scope=@example --registry=http://npm.example.com`
