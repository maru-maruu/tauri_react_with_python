# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

```text
✔ Project name · tauri-example
✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, bun)
✔ Choose your package manager · pnpm
✔ Choose your UI template · React - (https://react.dev/)
✔ Choose your UI flavor · TypeScript
```

```bash
mise use -g rust

cargo --version
rustc --version
```

```bash
pnpm install
```

## Prerequisites

このプロジェクトを開発・ビルドするには、以下のツールが必要です。

- Node.js
- pnpm
- Rust
- macOS の場合: Xcode Command Line Tools

Rust は `mise` を使っている場合、以下のようにセットアップできます。

```bash
mise use -g rust
```

インストール後、以下のコマンドで Rust が利用できることを確認します。

```bash
cargo --version
rustc --version
```

macOS で Xcode Command Line Tools が未インストールの場合は、以下を実行します。

```bash
xcode-select --install
```

## Development

依存関係をインストールします。

```bash
pnpm install
```

開発用のデスクトップアプリを起動します。

```bash
pnpm tauri dev
```

React のホットリロードが有効な状態で、Tauri のデスクトップウィンドウが起動します。

フロントエンドだけを Vite で起動したい場合は、以下を使用します。

```bash
pnpm dev
```

## Build Desktop App

本番用のデスクトップアプリをビルドします。

```bash
pnpm tauri build
```

ビルドが成功すると、成果物は `src-tauri/target/release/bundle/` 以下に生成されます。

- macOS: `.dmg` / `.app`
- Windows: `.msi` / `.exe`
- Linux: `.deb` / `.AppImage`

macOS の場合、主な出力先は以下です。

```text
src-tauri/target/release/bundle/dmg/
src-tauri/target/release/bundle/macos/
```

## Project Structure

```text
tauri_react_with_python/
├── src/              # React (TypeScript) フロントエンド
│   ├── App.tsx
│   └── main.tsx
├── src-tauri/        # Tauri (Rust) バックエンド
│   ├── src/
│   │   ├── lib.rs    # Tauri コマンド定義
│   │   └── main.rs
│   └── Cargo.toml
├── public/
├── package.json
└── vite.config.ts
```

## Python Integration

プロジェクト名は Python 連携を想定していますが、現時点では Python 実行環境やサイドカー設定はまだ追加されていません。

現在の Tauri 側では、Rust で定義したコマンドを React から呼び出す構成になっています。Python スクリプトをデスクトップアプリに同梱して実行したい場合は、Tauri の sidecar 機能を使って Python 実行ファイルまたは Python でビルドしたバイナリを組み込む構成にします。
