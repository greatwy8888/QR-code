# Android 构建说明

当前仓库提供响应式 Web/PWA 核心。要生成原生 Android APK，可使用 Capacitor 将其封装；首次构建需要安装 Node.js、Android Studio 与 Android SDK。

## 建议流程
1. 安装 Node.js 20+，运行 `npm install`。
2. 添加 Capacitor：`npm install @capacitor/core @capacitor/cli @capacitor/android`。
3. 在项目根目录初始化 Capacitor，appName 设置为「二维码制作」，appId 设置为 `com.greatwy8888.qrcodemaker`，webDir 设置为项目 Web 输出目录（建议先创建 `www` 并复制 index.html、styles.css、app.js、manifest.webmanifest、assets）。
4. `npx cap add android`，然后 `npx cap sync android`。
5. 用 Android Studio 打开 android 目录，运行测试；发布时使用 Build > Generate Signed Bundle / APK。

## 正式签名
在 Android Studio 中创建或选择自己的 keystore，妥善备份 keystore 与密码。不要提交私钥、密码或签名文件到 Git 仓库。此仓库没有包含发布者的签名证书，因此目前不能声称已有正式签名 APK。

## 文件二维码的限制
普通二维码容量有限，不能承载任意大小的 Office 文件或 APK。大文件必须先上传到可以公开访问的托管位置，再把下载 URL 编码进二维码。当前应用不会在未经用户同意的情况下上传文件。
