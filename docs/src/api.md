FORMAT: 1A

# API仕様書 モジュール1

HOST: http://localhost:8084

# Group フィールド

## フィールド取得API [/api/field]

- 2次元配列のフィールドデータを取得する
- 取得したデータは数値の配列となっており、内部は以下を意味する
  - 0: 草
  - 1: 障害物
  - 2: スコア加算アイテム
  - 3: 無敵アイテム

### フィールド取得API [GET]

+ Request
+ Response 200 (application/json)
  + Body
    ```json
    {
      "field": [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
        [2, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
        [0, 3, 0],
        [0, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
        [0, 2, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 3],
        [0, 0, 0],
        [2, 0, 0],
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
        [0, 0, 0],
        [3, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 2]
      ]
    }
    ```


# Group スコア

## スコア一覧取得API [/api/score]

- ニックネーム、スコアの一覧を取得できる

### スコア一覧取得API [GET]

+ Request
+ Response 200 (application/json)
  + Body
    ```json
    [
      {
        "id": 1,
        "nickname": "Sato Keita",
        "score": 12345678
      },
      {
        "id": 2,
        "nickname": "Nakamura Hiroshi",
        "score": 345678
      },
      {
        "id": 3,
        "nickname": "Ito Miyu",
        "score": 5678
      }
    ]
    ```

## スコア投稿API [/api/score]

- ニックネーム、スコアの投稿できる

### スコア投稿API [POST]

+ Request (application/json)
  + Body
    ```json
    {
      "nickname": "Sato Taro",
      "score": 999999
    }
    ```
+ Response 200 (application/json)
  + Body
    ```json
    {
	  	"message": "スコアを投稿しました",
	  	"id": 4
	  }
    ```
+ Response 400 (application/json)
  + Body
    ```json
    {
      "message": "無効なリクエストです"
    }
    ```

## スコア更新API [/api/score/{id}]

- 投稿したスコアのニックネームを更新できる

### スコア更新API [PUT]

+ Parameters
  + id: 1 (number) - スコアのID
+ Request (application/json)
  + Body
    ```json
    {
      "id": 1,
      "nickname": "ito hanako"
    }
    ```
+ Response 200 (application/json)
  + Body
    ```json
    {
	  	"message": "ニックネームを更新しました"
	  }
    ```
+ Response 400 (application/json)
  + Body
    ```json
    {
      "message": "無効なリクエストです"
    }
    ```
+ Response 404 (application/json)
  + Body
    ```json
    {
      "message": "存在しないIDです"
    }
    ```

## スコア削除API [/api/score/{id}]

- 投稿したスコアを削除できる

### スコア削除API [DELETE]

+ Parameters
  + id: 1 (number) - スコアのID
+ Request
+ Response 200 (application/json)
  + Body
    ```json
    {
	  	"message": "スコアを削除しました"
	  }
    ```
+ Response 400 (application/json)
  + Body
    ```json
    {
      "message": "無効なリクエストです"
    }
    ```
+ Response 404 (application/json)
  + Body
    ```json
    {
      "message": "存在しないIDです"
    }
    ```
