package controllers

import (
	"net/http"
	"slices"
	"strconv"

	"github.com/gin-gonic/gin"
)

type Score struct {
	ID       int    `json:"id"`
	Nickname string `json:"nickname" binding:"required"`
	Score    int    `json:"score" binding:"required"`
}

var scoreList = []Score{
	{ID: 1, Nickname: "Sato Keita", Score: 12345678},
	{ID: 2, Nickname: "Nakamura Hiroshi", Score: 345678},
	{ID: 3, Nickname: "Ito Miyu", Score: 5678},
}

func GetScore(c *gin.Context) {
	c.JSON(http.StatusOK, scoreList)
}

func PostScore(c *gin.Context) {
	var newScore Score

	if err := c.ShouldBindJSON(&newScore); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "無効なリクエストです"})
		return
	}

	newScore.ID = 4
	c.JSON(http.StatusOK, gin.H{
		"message": "スコアを投稿しました",
		"id":      newScore.ID,
	})
}

func PutScore(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "無効なリクエストです"})
		return
	}

	var input struct {
		Nickname string `json:"nickname" binding:"required"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "無効なリクエストです"})
		return
	}

	var isExists bool = slices.Contains([]int{1, 2, 3, 4}, id)
	if !isExists {
		c.JSON(http.StatusNotFound, gin.H{"message": "存在しないIDです"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ニックネームを更新しました"})
}

func DeleteScore(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "無効なリクエストです"})
		return
	}

	var isExists bool = false
	for _, score := range scoreList {
		if score.ID == id {
			isExists = true
			break
		}
	}
	if !isExists {
		c.JSON(http.StatusNotFound, gin.H{"message": "存在しないIDです"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "スコアを削除しました"})
}
