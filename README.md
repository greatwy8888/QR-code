# 二维码制作

跨平台二维码制作应用，目标平台为 Android 与 Windows。

## 功能
- 输入网址生成二维码并保存 PNG
- TXT 文件二维码直接包含文字正文；HTML 尝试使用网页 data URL（部分扫码器会拦截）
- APK、Office、图片等二进制文件请先上传到可公开访问的托管服务，再用下载链接生成二维码；文件不会自动上传
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

当前版本：`1.0.2`。后续修复递增 patch 版本号。

## 安全与发布
Android 正式签名需由发布者自行提供并安全保管 keystore；仓库不包含私钥。GitHub Actions 构建产物并不自动等于正式签名版本。
