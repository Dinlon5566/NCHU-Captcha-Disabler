# NCHU-Captcha-Disabler

## 描述（Description）

基於漏洞 [ZD-2023-00422](https://zeroday.hitcon.org/vulnerability/ZD-2023-00422) 發現之驗證碼弱點，禁用中興大學單一登入頁面上的驗證碼。

![img1](./img1.png)

## 安裝和使用

### 安裝油猴

1. **Google Chrome / Microsoft Edge（基於Chromium）**
   - 前往 [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) 下載 Tampermonkey 擴充功能。
  
2. **Mozilla Firefox**
   - 前往 [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) 下載 Tampermonkey 擴充功能。

3. **Safari**
   - 前往 [Safari Extensions](https://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC) 下載 Tampermonkey。

安裝完後，您應該能在瀏覽器的擴充功能或附加元件中看到 Tampermonkey。

### 安裝 NCHU-Captcha-Disabler

1. 複製這個連結：  
https://gist.githubusercontent.com/Dinlon5566/4d68067e3b747d56d004990a42eafaa6/raw/c23b2da3763b22b242a2210c280c1270ce599a93/NCHU-Captcha-Disabler.js  
2. 進入 Tampermonkey，點擊 [匯入與匯出工具](extension://iikmkjmpaadaobahmlepeloendndfphd/options.html#nav=utils) 。

3. 在「自 URL 安裝」欄位貼上連結，點擊安裝。

4. 安裝完成後，您應該能在 Tampermonkey 的儀表板（Dashboard）看到 `NCHU-Captcha-Disabler`。

5. 自網址列貼上 chrome://extensions/ 後開啟右上方 **開發人員模式** ( Edge 在右方)。

### 使用

1. 當訪問中興大學相關的認證頁面時，腳本自動運行。


## 注意事項

1. 本腳本僅供教育或研究用途，不應用於違法或不道德的行為。

2. 使用本腳本所產生的任何後果，作者不承擔任何責任。

---

