import{_ as t,o as e,c as d,a7 as l}from"./chunks/framework.CgLK9O2D.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Snippets/zsh/docker.md","filePath":"Snippets/zsh/docker.md","lastUpdated":1719404103000}'),n={name:"Snippets/zsh/docker.md"},o=l('<table tabindex="0"><thead><tr><th style="text-align:left;">Alias</th><th style="text-align:left;">Command</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">dbl</td><td style="text-align:left;"><code>docker build</code></td><td style="text-align:left;">Build an image from a Dockerfile</td></tr><tr><td style="text-align:left;">dcin</td><td style="text-align:left;"><code>docker container inspect</code></td><td style="text-align:left;">Display detailed information on one or more containers</td></tr><tr><td style="text-align:left;">dcls</td><td style="text-align:left;"><code>docker container ls</code></td><td style="text-align:left;">List all the running docker containers</td></tr><tr><td style="text-align:left;">dclsa</td><td style="text-align:left;"><code>docker container ls -a</code></td><td style="text-align:left;">List all running and stopped containers</td></tr><tr><td style="text-align:left;">dib</td><td style="text-align:left;"><code>docker image build</code></td><td style="text-align:left;">Build an image from a Dockerfile (same as docker build)</td></tr><tr><td style="text-align:left;">dii</td><td style="text-align:left;"><code>docker image inspect</code></td><td style="text-align:left;">Display detailed information on one or more images</td></tr><tr><td style="text-align:left;">dils</td><td style="text-align:left;"><code>docker image ls</code></td><td style="text-align:left;">List docker images</td></tr><tr><td style="text-align:left;">dipu</td><td style="text-align:left;"><code>docker image push</code></td><td style="text-align:left;">Push an image or repository to a remote registry</td></tr><tr><td style="text-align:left;">dirm</td><td style="text-align:left;"><code>docker image rm</code></td><td style="text-align:left;">Remove one or more images</td></tr><tr><td style="text-align:left;">dit</td><td style="text-align:left;"><code>docker image tag</code></td><td style="text-align:left;">Add a name and tag to a particular image</td></tr><tr><td style="text-align:left;">dlo</td><td style="text-align:left;"><code>docker container logs</code></td><td style="text-align:left;">Fetch the logs of a docker container</td></tr><tr><td style="text-align:left;">dnc</td><td style="text-align:left;"><code>docker network create</code></td><td style="text-align:left;">Create a new network</td></tr><tr><td style="text-align:left;">dncn</td><td style="text-align:left;"><code>docker network connect</code></td><td style="text-align:left;">Connect a container to a network</td></tr><tr><td style="text-align:left;">dndcn</td><td style="text-align:left;"><code>docker network disconnect</code></td><td style="text-align:left;">Disconnect a container from a network</td></tr><tr><td style="text-align:left;">dni</td><td style="text-align:left;"><code>docker network inspect</code></td><td style="text-align:left;">Return information about one or more networks</td></tr><tr><td style="text-align:left;">dnls</td><td style="text-align:left;"><code>docker network ls</code></td><td style="text-align:left;">List all networks the engine daemon knows about, including those spanning multiple hosts</td></tr><tr><td style="text-align:left;">dnrm</td><td style="text-align:left;"><code>docker network rm</code></td><td style="text-align:left;">Remove one or more networks</td></tr><tr><td style="text-align:left;">dpo</td><td style="text-align:left;"><code>docker container port</code></td><td style="text-align:left;">List port mappings or a specific mapping for the container</td></tr><tr><td style="text-align:left;">dpu</td><td style="text-align:left;"><code>docker pull</code></td><td style="text-align:left;">Pull an image or a repository from a registry</td></tr><tr><td style="text-align:left;">dr</td><td style="text-align:left;"><code>docker container run</code></td><td style="text-align:left;">Create a new container and start it using the specified command</td></tr><tr><td style="text-align:left;">drit</td><td style="text-align:left;"><code>docker container run -it</code></td><td style="text-align:left;">Create a new container and start it in an interactive shell</td></tr><tr><td style="text-align:left;">drm</td><td style="text-align:left;"><code>docker container rm</code></td><td style="text-align:left;">Remove the specified container(s)</td></tr><tr><td style="text-align:left;">drm!</td><td style="text-align:left;"><code>docker container rm -f</code></td><td style="text-align:left;">Force the removal of a running container (uses SIGKILL)</td></tr><tr><td style="text-align:left;">dst</td><td style="text-align:left;"><code>docker container start</code></td><td style="text-align:left;">Start one or more stopped containers</td></tr><tr><td style="text-align:left;">drs</td><td style="text-align:left;"><code>docker container restart</code></td><td style="text-align:left;">Restart one or more containers</td></tr><tr><td style="text-align:left;">dsta</td><td style="text-align:left;"><code>docker stop $(docker ps -q)</code></td><td style="text-align:left;">Stop all running containers</td></tr><tr><td style="text-align:left;">dstp</td><td style="text-align:left;"><code>docker container stop</code></td><td style="text-align:left;">Stop one or more running containers</td></tr><tr><td style="text-align:left;">dtop</td><td style="text-align:left;"><code>docker top</code></td><td style="text-align:left;">Display the running processes of a container</td></tr><tr><td style="text-align:left;">dvi</td><td style="text-align:left;"><code>docker volume inspect</code></td><td style="text-align:left;">Display detailed information about one or more volumes</td></tr><tr><td style="text-align:left;">dvls</td><td style="text-align:left;"><code>docker volume ls</code></td><td style="text-align:left;">List all the volumes known to docker</td></tr><tr><td style="text-align:left;">dvprune</td><td style="text-align:left;"><code>docker volume prune</code></td><td style="text-align:left;">Cleanup dangling volumes</td></tr><tr><td style="text-align:left;">dxc</td><td style="text-align:left;"><code>docker container exec</code></td><td style="text-align:left;">Run a new command in a running container</td></tr><tr><td style="text-align:left;">dxcit</td><td style="text-align:left;"><code>docker container exec -it</code></td><td style="text-align:left;">Run a new command in a running container in an interactive shell</td></tr></tbody></table><div style="display:none;" data-pagefind-meta="base64:JTdCJTIyZGF0ZSUyMiUzQTE3MTk0MDQxMDMwMDAlN0Q="></div>',2),a=[o];function r(i,s,c,g,f,y){return e(),d("div",null,a)}const p=t(n,[["render",r]]);export{m as __pageData,p as default};
