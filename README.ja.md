# fullscreen-canvas

1行の簡単な説明を入れる。

## デモ
https://taisukefukuno.github.io/fullscreen-canvas/ でデモを確認できます。

## 機能
- 画面全体に広がるキャンバスを提供する
- リサイズ時にキャンバスのサイズを自動調整する
- 描画処理を呼び出し元で定義できる

## 使い方
`fullscreen-canvas.js`をモジュールとしてインポートし、`FullscreenCanvas`クラスを使用します。
描画処理は`onredraw`コールバック関数で定義します。
以下は基本的な使用例です:

```html
<script type="module">
import { FullscreenCanvas } from "./fullscreen-canvas.js";

document.body.appendChild(new FullscreenCanvas((g, w, h) => {
  const x = Math.random() * w;
  const y = Math.random() * h;
  g.beginPath();
  g.moveTo(w / 2, h / 2);
  g.lineTo(x, y);
  g.strokeStyle = `hsl(${Math.random() * 360} 50% 50%)`;
  g.stroke();
}, true));
</script>
```

## ライセンス
MITライセンスの下で提供されています。