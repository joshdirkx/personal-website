FROM golang:1.20 as build

WORKDIR /app

COPY go.mod go.sum ./

COPY main.go .

RUN go build -o main main.go

FROM public.ecr.aws/lambda/provided:al2023

COPY --from=build /app/main ./main

ENTRYPOINT [ "./main" ]
