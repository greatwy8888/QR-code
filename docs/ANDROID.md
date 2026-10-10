# Android 构建说明

项目使用 Capacitor 封装现有响应式 Web 界面。构建需要本地 Node.js、JDK 与 Android Studio/SDK 环境。

## 构建准备
1. 安装 Node.js 20+、JDK 17 和 Android Studio。
2. 在仓库根目录运行 `npm install`。
3. 首次添加 Android 工程：`npm run android:add`。
4. 后续同步网页代码：`npm run android:sync`。
5. 运行 `npx cap open android`，在 Android Studio 中构建与测试。

## Release APK 签名
请遵循 [ANDROID_SIGNING.md](ANDROID_SIGNING.md)，在自己的电脑生成并保管签名密钥库。仓库不会存储密钥库或密码。使用 Android Studio 的 Generate Signed Bundle / APK 向导构建 Release APK，并通过 `apksigner verify --verbose --print-certs app-release.apk` 检查签名。

## 文件二维码的限制
普通二维码容量有限，无法承载任意大小的 Office 文档或 APK。大文件需先上传到可公开访问的托管位置，再将下载 URL 编码进二维码。当前应用不会未经同意自动上传文件。
