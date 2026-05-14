# fullscreen-canvas

ブラウザウィンドウ全体を埋めるHTML5キャンバスを作成する、依存関係のないWebコンポーネントです。

## デモ

ライブデモは[こちら](https://taisukef.github.io/fullscreen-canvas/)からご覧いただけます。

デモでは、画面の中央から放射状に広がるカラフルな線を連続して描画します。

## 機能

- **依存関係のないWebコンポーネント**: HTMLで宣言的に、またはJavaScriptでプログラム的に使用できます。
- **フルスクリーン**: キャンバスは自動的にリサイズされ、ウィンドウ全体を埋めます。
- **高DPI対応**: `devicePixelRatio` を使用して高解像度ディスプレイを正しく処理します。
- **カスタム描画**: 独自の描画ロジックを実装するためのコールバック関数を指定できます。
- **アニメーション制御**: アニメーションループを制御する `start()` および `stop()` メソッドを備えています。

## 使い方

まず、プロジェクトに `fullscreen-canvas.js` をモジュールとして読み込みます。

### 1. 宣言的な使用 (HTML内)

HTML内に `<fullscreen-canvas>` タグを配置します。その後、JavaScriptで要素の参照を取得し、`onredraw` コールバックを設定してアニメーションを制御できます。

```html
<!-- index.html -->
<body>
  <fullscreen-canvas id="main-canvas"></fullscreen-canvas>
</body>

<script type="module">
  import "./fullscreen-canvas.js"; // <fullscreen-canvas>要素を登録

  const canvas = document.getElementById("main-canvas");

  // onredrawプロパティに関数を割り当て
  canvas.onredraw = (g, w, h) => {
    // g: CanvasRenderingContext2D
    // w: キャンバス幅（devicePixelRatioでスケーリング済み）
    // h: キャンバス高さ（devicePixelRatioでスケーリング済み）
    g.clearRect(0, 0, w, h); // 各フレームでキャンバスをクリア
    g.beginPath();
    g.arc(w / 2, h / 2, Math.min(w, h) / 4, 0, Math.PI * 2);
    g.stroke();
  };

  // アニメーションループを手動で開始
  canvas.start();
</script>
```

### 2. プログラムによる使用 (JavaScript内)

あるいは、JavaScript内で直接 `FullscreenCanvas` のインスタンスを作成し、ドキュメントに追加することもできます。

```html
<script type="module">
import { FullscreenCanvas } from "./fullscreen-canvas.js";

const draw = (g, w, h) => {
  // 例: 中心からランダムな色の線を描画
  g.beginPath();
  g.moveTo(w / 2, h / 2);
  g.lineTo(Math.random() * w, Math.random() * h);
  g.strokeStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
  g.stroke();
};

// 新しいインスタンスを作成し、ページに追加
// 第2引数の`true`でアニメーションを自動的に開始
document.body.appendChild(new FullscreenCanvas(draw, true));
</script>
```

## APIリファレンス

### コンストラクタ

`new FullscreenCanvas(onredraw, autostart)`

- **`onredraw`** `(g, w, h) => void` (オプション): キャンバスへの描画用コールバック関数。
  - `g`: `CanvasRenderingContext2D` オブジェクト。
  - `w`: 物理ピクセル単位のキャンバス幅（`devicePixelRatio` でスケーリング済み）。
  - `h`: 物理ピクセル単位のキャンバス高さ（`devicePixelRatio` でスケーリング済み）。
- **`autostart`** `boolean` (オプション、デフォルト: `false`): `true` の場合、アニメーションループが自動的に開始されます。

### プロパティ

- **`.onredraw`**: 描画コールバック関数を取得または設定します。これは要素の作成後に割り当てることができます。

### メソッド

- **`.start()`**: アニメーションループを開始し、`requestAnimationFrame` で `onredraw` を繰り返し呼び出します。
- **`.stop()`**: アニメーションループを停止します。
- **`.redraw()`**: ループを開始せずに `onredraw` 関数を1回だけ呼び出します。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
