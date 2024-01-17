# computer-builder

## 概要
仮想のコンピュータを作り、その性能を評価するプロジェクトです。  



## URL
https://kanatanagano.github.io/computer-builder/


## デモ
![-GoogleChrome2024-01-1804-32-57-ezgif com-video-to-gif-converter](https://github.com/Kanatanagano/computer-builder/assets/112442087/7d2d75dc-54b1-47f3-b2e1-0d5180e249e6)

## 説明
コンピュータは以下の部品から成り立っています。

- CPU（中央処理装置）
- GPU（グラフィックス処理装置）
- メモリ（RAM）
- ストレージ（HDD または SSD）

ユーザーはCPU、GPU、MemoryCard、Storageにデータを入力することでゲームと作業用のコンピュータのパフォーマンスを評価することができます。

出てくるスコアは各パーツに基づいておりゲーム用ではGPU 性能が 60%、CPU 性能が 25%、RAM が 12.5%、ストレージが 2.5%であり業務用では
CPU 性能 60%、GPU 性能 25%、RAM 10%、ストレージ 5% を基準にしています。パーツが優れている場合スコアは100%を超える場合があります。 

## こだわった点
webAPIとサーバの仕組みを理解し、fetch関数、promiseオブジェクトについて学びJSONをつかって情報の取得について学習しました。これらの
知識を使い実際にwebサイトに表示させるようにしました。

具体的には以下のサイトから各パーツの種類のデータを利用してcomputer-builderに画像を取得するようにしました。  

https://api.recursionist.io/builder/computers  

URLの後ろに?type=gpuのようなパラメータを追加するとGPUについてのデータを取得することができます。

## 使用技術
| カテゴリ   | 技術スタック                            |
|------------|----------------------------------------|
| フロントエンド | HTML                                   |
|            | CSS                                    |
|            | JavaScript                             |
| フレームワーク           | Bootstrap               |
| その他      | Git                                    |
|            | Github                                 |


## 参考文献
### 公式ドキュメント
- [Bootstrap](https://getbootstrap.jp/)
