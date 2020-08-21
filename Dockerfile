FROM alpine

RUN apk update \
  && apk add --no-cache vim \
  && apk add --no-cache curl

VOLUME [ "/wang" ]

WORKDIR /root

RUN mkdir rpa \
  && cd rpa \
  && echo "hello" > world.txt

WORKDIR /usr

RUN mkdir datagrand \
  && cd datagrand \
  && echo "world" > world.txt


COPY package.json /wang/yu/

ENV VERSION=1.0 \
  NAME="wanger"

# ENTRYPOINT [ "curl", "http://cheat.sh" ]

CMD [ "echo", "Hello Docker"]

EXPOSE 80

# ------

FROM golang:1.9-alpine as builder

RUN apk --no-chche add git

WORKDIR /go/src/github.com/go/helloworld/

RUN go get -d -v github.com/go-sql-driver/mysql

COPY app.go .

RUN CGO_ENABLED=0 

FROM alpine:lastest as prod

RUN apk --noo-cacje add ca-certificates

WORKDIR /root/

COPY --from=0 /go/src/github.com/go/helloworld/app .

CMD ["./app"]