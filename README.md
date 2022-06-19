# basicSample

以下のサイトを参考に Node.js+Vue.js で簡単なログイン認証を作る。

https://www.chuken-engineer.com/entry/2020/08/21/163721

完成後は MySQL を使用したログイン管理を追加したい。

# トラブルシューティング

- vue-router がインストールできない
  引数つけるとインストールできます
  npm i vue-router --save --legacy-peer-deps

- vuex がインストールできない
  npm install vuex --save --legacy-peer-deps

- vue-router 関係のワーニングが出る
  npm install vue-router@3 で解決
  https://laracasts.com/discuss/channels/vue/cant-not-import-vue-vuerouter-correctly

-vue3 へ、vuetify を 3.0beta でインストール

https://tedate.jp/vue-js/i-tried-installing-vuetify3-beta

バージョンの依存関係解決できず。。。
