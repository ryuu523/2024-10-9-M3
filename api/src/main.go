package main

import (
	"github.com/gin-gonic/gin"
	"github.com/saitogo555/jyakunen2024-webdesign-dev/controllers"
)

func main() {
	r := gin.Default()
	api := r.Group("/api")

	api.GET("/field", controllers.GetField)
	api.GET("/score", controllers.GetScore)
	api.POST("/score", controllers.PostScore)
	api.PUT("/score/:id", controllers.PutScore)
	api.DELETE("/score/:id", controllers.DeleteScore)

	r.Run(":80")
}
