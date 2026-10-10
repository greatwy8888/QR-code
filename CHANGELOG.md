# 更新日志

## 1.0.2 - 文件二维码与打包优化（2026-10-10）
- TXT 文件二维码直接编码正文，扫码后显示文字，不再把正文包装成 Base64。
- HTML 文件使用非 Base64 的 UTF-8 data URL；扫码器是否允许直接打开 data URL 取决于扫描应用，建议正式网页使用 HTTPS 链接。
- APK、Office、图片等二进制文件改为明确提示使用可访问的下载链接，避免生成扫码后只看到 Base64 的二维码。
- Electron 启用 ASAR 打包与最高压缩级别，尽量减小 Windows 安装包体积。

## 1.0.1 - 构建流程改进（2026-10-10）
- Android APK 与 Windows 构建产物名称自动读取 package.json 版本。
- 更新 GitHub Actions 构建流程，便于后续小版本递增时产物名称保持一致。
- 保留现有应用图标、应用名称与应用标识。

## 1.0.0 - 初始版本
- 建立浅色响应式二维码制作界面。
- 支持网址二维码生成、预览和 PNG 保存。
- 提供小文件内嵌二维码实验功能及容量提示。
- 添加 SVG 应用图标、PWA 清单与 Electron Windows 打包配置。
- 添加 Windows GitHub Actions 构建流程。
- 文档说明 Android 封装与正式签名流程。
