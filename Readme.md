# 概要

国土地理院が配信している基盤地図情報のうちの基本項目を扱いやすいオブジェクトに変換するプラグインです
配信リンク=> https://www.gsi.go.jp/kiban/

github リポジトリ=> https://github.com/inaridiy/jpgis-parser

# 使用方法

```js
const { Parser } = require("jpgis-parser");
const fs = require("fs");
const xml = fs.readFileSync("./FG-GML-513574-BldL-20210701-0001.xml", "utf8");
const obj = Parser.parse(xml);
console.dir(obj.BldL[0], { depth: null });
/* {
  fid: '48780-12450-s-16685',       
  orgGILvl: 2500,
  lfSpanFr: '2021-03-17',
  devDate: '2021-07-01',
  vis: undefined,
  type: '普通建物',
  name: undefined,
  loc: [
    [ 34.588021306, 135.502216889 ],
    [ 34.588032861, 135.502287667 ],
    [ 34.587958556, 135.50230175 ], 
    [ 34.587946972, 135.502222778 ],
    [ 34.588010028, 135.502214222 ],
    [ 34.588021306, 135.502216889 ] 
  ]
}*/
```

こんな感じでダウンロードしてきた基盤地図情報を`parse`メソッドで変換することができます
また、複数の xml をまとめてパースし、一つのオブジェクトにまとめる`parseMany`メソッドもあります。
パースした後にどのようなデータになるかは`converted`の名前空間の型定義ファイルを読んでください

また、基本データのうちに近畿のデータに含まれているデータしかパースできません。
近畿地方以外をパースする場合はまれに一部データが出力されないです。

# 使用上の注意

国土地理院が発行する利用規約に従ってください
また、バグとか普通にある可能性があります
一度に大量のデータをパースするとメモリリークします
最後にこのプログラムを利用した際に発生したいかなる不利益の責任はとりません
