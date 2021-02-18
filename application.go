package main

import (
	"log"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/go-slide/slide"
	"github.com/go-slide/slide/middleware"
)

func main() {
	validate := validator.New()
	config := slide.Config{
		Validator: validate,
	}
	app := slide.InitServer(&config)
	app.Use(middleware.Compress())
	app.Get("/health", func(ctx *slide.Ctx) error {
		return ctx.SendStatusCode(http.StatusOK)
	})
	app.ServerDir("/*", "build")
	log.Fatal(app.Listen(":5000"))
}
