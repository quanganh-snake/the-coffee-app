# 0. NOTE IMPORTANT

Run command line: Dùng để dọn sạch cache sau khi cài đặt các package tại mục **#1**

- cd vào folder android

```bash
cd ./android
```

```bash
./gradlew clean
```

# 1. Config with ANDROID

## 1.1. Config MODE "portrait" [AndroidManifest.xml](android/app/src/main/AndroidManifest.xml)

(Helpter: App chỉ hoạt động ở chế độ đọc <mode: portrait> không bị xoay )

```xml
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
    +   android:screenOrientation="portrait"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
```

## 1.2. Các thư viện sử dụng chính

- **@react-navigation/native** && **@react-navigation/native-stack** : dùng điều hướng qua các màn [Documents](https://reactnavigation.org/docs/getting-started)

Các package:

- **@react-navigation/native** : dùng quản lý cấu trúc điều hướng giữa các màn với **NavigationContainer**

- **@react-navigation/native-stack** : chứa các `Screen Component`, dùng để xác định màn hình cho việc điều hướng tới màn hình đấy.

- **react-native-screens**, **react-native-safe-area-context** : là các gói phụ liên quan đến màn hình

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

```

- **@react-navigation/bottom-tabs** : dùng tạo Bottom Tabs Navigator [Documents](https://reactnavigation.org/docs/tab-based-navigation)

```bash
npm install @react-navigation/bottom-tabs

```

- **@react-native-async-storage/async-storage** : dùng lưu trữ các giá trị bất đồng bộ, không mã hóa [Documents](https://www.npmjs.com/package/@react-native-async-storage/async-storage)

```bash
npm i @react-native-async-storage/async-storage

```

- **zustand** : dùng quản lý state global [Documents](https://www.npmjs.com/package/zustand)

```bash
npm i zustand

```

- **lottie-react-native** : Tạo hoạt ảnh animations [Documents](https://www.npmjs.com/package/lottie-react-native)

```bash
npm i lottie-react-native

```

- **react-native-vector-icons** && **@types/react-native-vector-icons** : icons [Documents](https://github.com/oblador/react-native-vector-icons)

```bash
npm install --save react-native-vector-icons @types/react-native-vector-icons

```

- **react-native-linear-gradient** : Tạo Background Linear Gradient [Documents](https://www.npmjs.com/package/react-native-linear-gradient)

```bash
npm i react-native-linear-gradient

```

- **@react-native-community/blur** : Tạo Background blur [Documents](https://www.npmjs.com/package/@react-native-community/blur)

```bash
npm i @react-native-community/blur

```

# 2. Config with iOS

Comming soon...

# 3. Linking assets to Android & iOS

- Tạo file: **react-native.config.js** ngang hàng với file **App.tsx**

```typescript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets'],
}
```

```bash
npx react-native-asset

```

# 4. Set up ESLint and Prettier

## 4.1. Install and setup ESLint

1. Xoá file `.eslintrc.js`

2. `npm uninstall @react-native-community/eslint-config` - React Native 0.74.5 (tại thời điểm file markdown này) đi kèm với cấu hình eslint có sẵn tại file `.eslintrc.js`, nhưng ta sẽ xoá đi và cấu hình lại.

3. `npm uninstall eslint` - React Native 0.74.5 (tại thời điểm file markdown này) không sử dụng eslint mới nhất `eslint v.8.19.0` - gỡ đi để cài bản eslint mới nhất `eslint - v9.8.0`.

4. `npm install eslint --save-dev` - cài đặt `eslint` mới nhất.

5. `npx eslint --init` - tạo file cấu hình `eslint`. Sau khi chạy lệnh xong, cần chọn các cấu hình eslint từ các câu hỏi hiển thị CLI (`✔` hoặc `❯` : là chọn).

```bash
# Câu hỏi 1:
? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems

# Câu hỏi 2:
? What type of modules does your project use? …
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

# Câu hỏi 3:
? Which framework does your project use? …
❯ React
  Vue.js
  None of these

# Câu hỏi 4: (Chọn "Yes", vì dự án mình dùng TypeScript):
? Does your project use TypeScript? › No / Yes

# Câu hỏi 5:
? Where does your code run? …
  Browser
✔ Node

# Câu hỏi 6: (Chọn "Yes")
The config that you have selected requires the following dependencies

eslint@9.x, globals, @eslint/js, typescript-eslint, eslint-plugin-react
? Would you like to install them now? » No / Yes

# Câu hỏi 7: (Ở đây mình dùng "npm" thì mình sẽ chọn "npm")
? Which package manager do you want to use? ...
❯ npm
  yarn
  pnpm
  bun
```

Cuồi cùng, ta sẽ có file `eslint.config.mjs`, câu hình mặc định:

```mjs
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]
```

# 4.2. Cấu hình lại như sau:

1. `npm install @antfu/eslint-config@latest` : Sử dụng thư viện antfu [Documents](https://github.com/antfu/eslint-config)

```mjs
// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    rules: {},
  },
)
```

2. Thêm lệnh script vào file `package.json`

```json
{
  "scripts": {
    ...
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
    ...
  }
}
```
