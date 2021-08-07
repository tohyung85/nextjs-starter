This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Additional Configurations Included:

- Material UI & Icons
- Typescript
- SCSS
- Next Images
- Next Bundle Analyzer
- Redux with next-redux-wrapper for SSG/SSR
- next-redux-cookie-persist to maintain state across SSR reloads
- Nginx Proxy for https local development

For Development Use:
This repository is set up for usage with VSCode Remote Container extension.
The development container has been set up to create an isolated docker volume for storage and and editing of source code.
This is to enable better disk write performance on Mac/Windows and also prevent file polution on your local file system.
Refer to the [vscode docs](https://code.visualstudio.com/docs/remote/containers-advanced#_improving-container-disk-performance) for more details

0. To enable https, following needs to be done:

- create local CA certs in proxy/certs folder on local machine
- Update /etc/hosts to add the following line:

```
127.0.0.1 yourapp.local
```

- update nginx conf as necessary.

1. You should also configure your ssh agents to set up your keys to enable git usage in the container especially for private repositories. For MacOs it will simply be

```
ssh-add $HOME/.ssh/github_rsa
```

\*Replace github_rsa with the name of your private key file

More details can be found [here](https://code.visualstudio.com/docs/remote/containers#_using-ssh-keys)

2. In VSCode, Run command Remote Containers: Open Folder in Container... 4. You can then do your development within the container

Alternatively you can do your development without using any containers. In which case you will need to do an:

```
npm install
```

or

```
yarn install
```

For Deployment in a Docker Container:

You will just need to run:

```sh
docker-compose up
```
