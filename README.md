# 二维码制作

跨平台二维码制作应用，目标平台为 Android 与 Windows。

## 功能
- 输入网址生成二维码并保存 PNG
- 选择本地文件生成二维码（二维码内嵌小文件；较大文件请先上传至可公开访问的文件托管服务，再使用其下载链接生成二维码）
- 响应式浅色界面，支持手机、平板和桌面
- PWA、Electron 桌面打包配置

## 开发
需要 Node.js 20+

```bash
npm install
npm run start
```

## 构建
- Windows：`npm run dist:win`
- Android：参照 `docs/ANDROID.md` 使用 Android Studio/Gradle 构建。

首次版本：`1.0.0`。后续修复递增 patch 版本号。

## 安全与发布
Android 正式签名需由发布者自行提供并安全保管 keystore；仓库不包含私钥。GitHub Actions 构建产物并不自动等于正式签名版本。
