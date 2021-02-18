package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/endpoints"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/cloudwatch"
	"github.com/go-playground/validator/v10"
	"github.com/go-slide/slide"
	"github.com/go-slide/slide/middleware"
)

func main() {
	validate := validator.New()
	config := slide.Config{
		Validator: validate,
	}

	session := session.Must(session.NewSessionWithOptions(session.Options{
		Config: aws.Config{
			Region: aws.String(endpoints.UsEast1RegionID),
		},
	}))
	svc := cloudwatch.New(session)
	app := slide.InitServer(&config)
	app.Use(middleware.Compress())
	app.Get("/health", func(ctx *slide.Ctx) error {
		return ctx.SendStatusCode(http.StatusOK)
	})
	app.Get("/aws", func(ctx *slide.Ctx) error {
		resp, err := svc.DescribeAlarms(nil)
		if err != nil {
			return ctx.Send(http.StatusInternalServerError, err.Error())
		}
		for _, alarm := range resp.MetricAlarms {
			fmt.Println(*alarm.AlarmName)
		}
		return ctx.Send(http.StatusOK, *resp.MetricAlarms[0].AlarmName)
	})
	app.ServerDir("/*", "build")
	log.Fatal(app.Listen(":5000"))
}
