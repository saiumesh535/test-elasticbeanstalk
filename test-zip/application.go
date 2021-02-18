package main

import (
	"log"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/go-slide/slide"
)

func main() {
	validate := validator.New()
	config := slide.Config{
		Validator: validate,
	}
	app := slide.InitServer(&config)
	app.Get("/health", func(ctx *slide.Ctx) error {
		return ctx.SendStatusCode(http.StatusOK)
	})
	app.ServerDir("/*", "build")
	log.Fatal(app.Listen(":5000"))
}
