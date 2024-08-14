package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

var fieldData = [][]int{
	{0, 1, 0},
	{0, 0, 0},
	{0, 0, 0},
	{2, 0, 0},
	{0, 0, 0},
	{0, 0, 0},
	{0, 0, 0},
	{0, 0, 1},
	{0, 0, 0},
	{0, 3, 0},
	{0, 0, 0},
	{0, 0, 0},
	{1, 0, 0},
	{0, 0, 0},
	{0, 2, 0},
	{0, 0, 0},
	{0, 0, 0},
	{0, 1, 0},
	{0, 0, 0},
	{0, 0, 3},
	{0, 0, 0},
	{2, 0, 0},
	{0, 0, 0},
	{0, 0, 1},
	{0, 0, 0},
	{0, 0, 0},
	{3, 0, 0},
	{0, 0, 0},
	{0, 1, 0},
	{0, 0, 2},
}

func GetField(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"field": fieldData,
	})
}
