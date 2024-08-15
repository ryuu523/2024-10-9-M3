# 若年者ものづくり競技大会2024 ウェブデザイン 練習問題

第19回(2024年)若年者ものづくり競技大会のウェブデザイン職種の当日課題に似せて作成した練習問題になります。

## 課題に関すること

- 各モジュールの課題資料`src/docs`にあります。
- 各モジュールの画像素材は`src/assets`にあります。
- モジュール1のテンプレートは`src/template`にあります。

## 必須環境

- Docker (Docker Desktop, Docker Engine)
- Hyper-V (Windowsのみ)
- WSL2 (Windowsのみ)

※Hyper-VとWSL2はどちらか一方がセットアップされている必要があります。

## セットアップ

1. リポジトリをクローンする

    ```sh
    git clone https://github.com/saitogo555/jakunen2024-webdesign-dev
    ```

2. ディレクトリを移動する

    ```sh
    cd ./jakunen2024-webdesign-dev
    ```

3. dockerで各サービスを起動する

    ```sh
    docker compose up -d
    ```

## サービス一覧

| サービス名             | URL                   | 説明                          |
|-----------------------|-----------------------|-------------------------------|
| [ViteDev](#vitedev)   | http://localhost:5173 | ViteのReactやVueの開発サーバー |
| [WebDev](#webdev)     | http://localhost:8080 | 作業用のWebサーバー            |
| [M1Server](#m1server) | http://localhost:8081 | モジュール1提出用のWebサーバー |
| [M2Server](#m2server) | http://localhost:8082 | モジュール2提出用のWebサーバー |
| [APIDocs](#apidocs)   | http://localhost:8083 | API仕様書サイト               |
| [APIHost](#apihost)   | http://localhost:8084 | APIホスト                    |

## ViteDev

ViteでReactやVueを使った開発をするためのサービスです。

### セットアップ

1. `src/lib`のReact又はVueのzipを`src/workspace`にコピーする

    (※下記はReactの場合で、Vueの場合は2024jakunen-reactを2024jakunen-vueを置き換えて実行してください)

    ```sh
    cp ./src/lib/2024jakunen-react.zip ./src/workspace/2024jakunen-react.zip
    ```

2. srcコンテナに入る

    ```sh
    docker compose exec src sh
    ```

3. zipファイルを展開する

    ```sh
    unzip 2024jakunen-react.zip
    ```

4. zipを削除する

    ```sh
    rm 2024jakunen-react.zip
    ```

5. 展開後のフォルダ内の全てのファイルとフォルダをworkspace直下に移動させる

    ```sh
    mv -f 2024jakunen-react/.[!.]* 2024jakunen-react/* .
    ```

6. 展開後のフォルダを削除する

    ```sh
    rm -r 2024jakunen-react
    ```

7. viteコマンドに実行権限を付与する

    ```
    chmod +x node_modules/.bin/vite
    ```

8. 依存関係のインストール

    ```sh
    npm i
    ```

9. コンテナから出る

    ```sh
    exit
    ```

### 開発サーバー

1. ターミナルからコマンドで開発サーバーを起動する。

    ```powershell
    docker compose exec src npm run dev
    ```

    又は

    ```powershell
    docker compose exec src sh
    ```

    ```sh
    npm run dev
    ```

2. [http://localhost:5173](http://localhost:5173)にアクセスする。

### 注意事項

- React/Vueを使う場合は`src/workspace`内で作業してください。
- React/Vueを使わない場合は`src/public`内で作業してください。
- 開発サーバーのポートはデフォルトの5173を使用してください。

## WebDev

HTML・CSS・JavaScriptを使った開発をするためのサービスです。

### セットアップ

1. `src/public`にhtmlファイルなどを設置する
2. 必要に応じて`src/lib`からbootstrap又はfontawesomeのzipを展開する。

### 表示確認

[http://localhost:8080](http://localhost:8080)にアクセスすることで確認出来ます。

### 注意事項

- React/Vueを使う場合は`src/workspace`内で作業してください。
- React/Vueを使わない場合は`src/public`内で作業してください。

## M1Server

モジュール1の成果物を表示するためのサービスです。

### 提出方法

#### React/Vueの場合

1. ターミナルからビルドコマンドを実行する

    ```powershell
    docker compose exec src npm run build
    ```

    又は

    ```powershell
    docker compose exec src sh
    ```

    ```sh
    npm run build
    ```
2. ビルド完了後に生成される`dist`内の全てのファイル・フォルダを`www/m1`内にコピーする。

#### React/Vue以外の場合

`src/public`内の全てのファイル・フォルダを`www/m1`内にコピーする。

### 表示確認

[http://localhost:8081](http://localhost:8081)にアクセスすることで確認出来ます。

## M2Server

モジュール2の成果物を表示するためのサービスです。

### 提出方法

#### React/Vueの場合

1. ターミナルからビルドコマンドを実行する

    ```powershell
    docker compose exec src npm run build
    ```

    又は

    ```powershell
    docker compose exec src sh
    ```

    ```sh
    npm run build
    ```
2. ビルド完了後に生成される`dist`内の全てのファイル・フォルダを`www/m2`内にコピーする。

#### React/Vue以外の場合

`src/public`内の全てのファイル・フォルダを`www/m2`内にコピーする。

### 表示確認

[http://localhost:8082](http://localhost:8082)にアクセスすることで確認出来ます。

## APIDocs

モジュール1のAPIの仕様書を閲覧出来るサービスです。

[http://localhost:8083](http://localhost:8083)にアクセスすることでAPIの仕様書を確認出来ます。

## APIHost

モジュール1のAPIを提供するサービスです。

APIのホストは`http://localhost:8084`になります。


## 関連リンク

- モジュール1のマップ画像: [ドット絵世界 - 森と草原2](https://yms.main.jp/page-msets/forest2.html)
- モジュール1のキャラ画像: [ぴぽやブログ - ぴぽや32×32キャラチップ素材](https://pipoya.net/blog/pipoya32x32charachip-charactermanaj/)
- モジュール2の画像: [O-DAN(オーダン)](https://o-dan.net/ja/)
- モジュール2の画像: [Freepik - 著者Freepik](https://jp.freepik.com/author/freepik)
