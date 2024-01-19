# computer-builder

## 概要
仮想のコンピュータを作り、その性能を評価するアプリケーションです。

このアプリケーションはユーザーがコンピュータ構成を探索し組み立てることができる動的なシングルページアプリケーションを作成しました。
JavaScriptのfetch関数を使用して、アプリケーションはさまざまなWeb APIからコンピュータコンポーネントのデータを取得し、このデータを
オブジェクトにパースしています。応答性とスムーズな対話を確保するために、非同期のサーバー通信に対してJavaScriptのプロミスを使用しました。
UIは新しいデータで動的に更新され、JavaScriptのDOMを介して動的なサイトを提供しています。

利便性を向上させるために、アプリケーションの状態とユーザーの選択はJavaScriptのlocalStorageを使用して管理されています。これによりリアル
タイムの更新を行い、コンピュータの構築の複雑さをわかりやすく、ユーザーに親しみやすいサイトになっています。

## URL
https://kanatanagano.github.io/computer-builder/


## デモ
https://github.com/Kanatanagano/computer-builder/assets/112442087/59c349c5-243f-4806-ba0d-d47772ec3b25



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

また、チーム開発でのテトリスの開発経験の反省点からクラスを分けて今後の拡張性を意識した設計にしています。

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
