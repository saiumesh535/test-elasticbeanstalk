package main

import (
	"log"

	"github.com/go-playground/validator/v10"
	"github.com/go-slide/slide"
)

func main() {
	validate := validator.New()
	config := slide.Config{
		Validator: validate,
	}
	app := slide.InitServer(&config)
	app.ServerDir("/*", "public")
	log.Fatal(app.Listen(":5000"))
}
