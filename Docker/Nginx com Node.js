# https://hub.docker.com/repository/docker/leandrolandiosii/fullcycle-nginx-node-mysql/general


ADD file ... in /

CMD ["bash"]

/bin/sh -c set -eux; apt-get

/bin/sh -c set -ex; if

/bin/sh -c apt-get update &&

/bin/sh -c set -ex; apt-get

/bin/sh -c groupadd --gid 1000

ENV NODE_VERSION=14.21.3

/bin/sh -c ARCH= && dpkgArch="$(dpkg

ENV YARN_VERSION=1.22.19

/bin/sh -c set -ex

COPY file:4d192565a7220e135cab6c77fbc1c73211b69f3d9fb37e62857b2c6eb9363d51 in /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["node"]

WORKDIR /usr/src/app

COPY package*.json ./ # buildkit

RUN /bin/sh -c npm install

COPY . . # buildkit

EXPOSE map[3000/tcp:{}]
0 B
20
CMD ["npm" "start"]
