# Android 正式签名（选项 A：自行生成密钥）

本项目不把签名私钥提交到 Git。建议在你自己的 Windows 电脑上生成密钥库，并离线备份。

## 1. 安装工具
安装 Android Studio（包含 Android SDK），并安装 JDK 17 或兼容的 JDK。打开 PowerShell，确认：

```powershell
keytool -help
```

## 2. 在本地生成密钥库
在你自己电脑的安全目录执行以下命令。请自行替换别名和有效期；命令会提示你输入并确认密码。不要把密码发给任何人，也不要把密钥库放进仓库目录。

```powershell
keytool -genkeypair -v -keystore "$HOME\qrcode-release.jks" -alias qrcode-release -keyalg RSA -keysize 2048 -validity 10000
```

请将密钥库至少备份到两个安全位置，并单独保存密码。丢失密钥可能导致无法向已安装此签名版本的用户发布可直接覆盖安装的更新。

## 3. 生成 Android 项目
在仓库根目录：

```powershell
npm install
npm run android:add
npm run android:sync
npx cap open android
```

如果 Android 目录已经存在，不要再次执行 `android:add`；只执行 `npm run android:sync`。

在 Android Studio 中等待 Gradle 同步完成，选择 Build > Generate Signed Bundle / APK > APK，选择你在第 2 步创建的 JKS，输入别名与密码，构建 Release APK。

## 4. 验证签名
使用 Android SDK Build Tools 中的 apksigner：

```powershell
apksigner verify --verbose --print-certs path\to\app-release.apk
```

还可将 APK 安装到自己的测试设备验证启动、生成二维码和保存图片等功能。

## 重要安全说明
- 不要将 `.jks`、`.keystore`、密码、私钥提交到 GitHub。
- 不要把密码写进源码、工作流日志或公开 issue。
- 此仓库的 `.gitignore` 已忽略常见密钥库扩展名，但仍需检查 Git 状态，避免误提交。
- 自签名是 Android 应用发布常用的签名方式，不代表第三方对开发者身份作出认证。
- 本指南是构建步骤；在实际构建并验证之前，不应声称 APK 已签名或已通过测试。
