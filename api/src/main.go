package main

import (
	"github.com/gin-gonic/gin"
	"github.com/saitogo555/jyakunen2024-webdesign-dev/controllers"
	"github.com/gin-contrib/cors"
	"time"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	api := r.Group("/api")

	api.GET("/field", controllers.GetField)
	api.GET("/score", controllers.GetScore)
	api.POST("/score", controllers.PostScore)
	api.PUT("/score/:id", controllers.PutScore)
	api.DELETE("/score/:id", controllers.DeleteScore)

	r.Run(":80")
}
