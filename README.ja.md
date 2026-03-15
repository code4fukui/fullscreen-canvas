# fullscreen-canvas

`fullscreen-canvas`は、画面全体を覆う簡単な HTML5 canvas コンポーネントです。

## デモ
https://taisukefukuno.github.io/fullscreen-canvas/ で動作確認できます。

## 機能
- 画面全体にキャンバスを表示する
- ウィンドウサイズの変更に合わせてキャンバスのサイズを自動調整する
- 描画処理をカスタマイズできる

## 使い方
`fullscreen-canvas.js`をモジュールとしてインポートし、`FullscreenCanvas`クラスを使用します。描画処理は`onredraw`コールバック関数で定義できます。

```html
<script type="module">
import { FullscreenCanvas } from "./fullscreen-canvas.js";

document.body.appendChild(new FullscreenCanvas((g, w, h) => {
  // キャンバスに何かを描画する処理
  g.beginPath();
  g.moveTo(w / 2, h / 2);
  g.lineTo(Math.random() * w, Math.random() * h);
  g.stroke();
}, true));
</script>
```

## ライセンス
MITライセンスの下で提供されています。