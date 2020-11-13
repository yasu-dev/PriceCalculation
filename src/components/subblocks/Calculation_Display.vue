<template>
<div>
  <div class="cal-top">
    <img src="../../assets/usps_logo.jpg" alt="USPSロゴ" style="width:40px;height:40px;vertical-align:middle;">
    <span style="vertical-align:middle;">
      USPS配送料計算
    </span>
  </div>
  <div class="cal-body">
    USPSのアメリカ国内配送料を計算します。
  </div>
  <div class="cal-bottom">
    配送元: 弊社サンディエゴ倉庫(ZipCode:92111) ※変更可能<br>
    入力: すべて必須
  </div>
</div>
</template>

<style>
.cal-top {
  word-break: break-all;
  font-size: 25px;
  line-height: 250%;
}
.cal-body {
  word-break: break-all;
  font-size: 15px;
  line-height: 200%;
}
.cal-bottom {
  word-break: keep-all;
  padding-left: 1em;
  font-size: 12px;
  line-height: 150%;
}
</style>
