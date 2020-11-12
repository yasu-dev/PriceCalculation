<template>
  <div>
    <div id="app-pricecal" class="button-cal">
      <el-row>
        <el-button class="button-cal-button" type="primary" v-on:click="PriceCal">送料計算</el-button>
      </el-row>
    </div>
    <div id="app-reset" class="button-res">
      <el-row>
        <el-button class="button-res-button" type="danger" v-on:click="ResetData">リセット</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    PriceCal: function (event) {
      var xmldata = []
      var sendtype = ['Priority Mail Express', 'Priority']

      for (let typecount = 0; typecount < 2; ++typecount) {
        xmldata[typecount] = '<RateV4Request USERID="980AROUN5345">'
        xmldata[typecount] += '<Revision>2</Revision>'
        xmldata[typecount] += '<Package ID="0">'
        xmldata[typecount] += '<Service>'
        xmldata[typecount] += sendtype[typecount]
        xmldata[typecount] += '</Service>'
        xmldata[typecount] += '<ZipOrigination>'
        xmldata[typecount] += this.$store.state.zipcode1
        xmldata[typecount] += '</ZipOrigination>'
        xmldata[typecount] += '<ZipDestination>'
        xmldata[typecount] += this.$store.state.zipcode2
        xmldata[typecount] += '</ZipDestination>'
        xmldata[typecount] += '<Pounds>'
        xmldata[typecount] += this.$store.state.weight * 2.20462
        xmldata[typecount] += '</Pounds>'
        xmldata[typecount] += '<Ounces>0</Ounces>'
        xmldata[typecount] += '<Container></Container>'
        xmldata[typecount] += '<Width>'
        xmldata[typecount] += this.$store.state.length1 * 0.393701
        xmldata[typecount] += '</Width>'
        xmldata[typecount] += '<Length>'
        xmldata[typecount] += this.$store.state.length2 * 0.393701
        xmldata[typecount] += '</Length>'
        xmldata[typecount] += '<Height>'
        xmldata[typecount] += this.$store.state.length3 * 0.393701
        xmldata[typecount] += '</Height>'
        xmldata[typecount] += '<Girth></Girth>'
        xmldata[typecount] += '</Package>'
        xmldata[typecount] += '</RateV4Request>'

        this.$store.dispatch('getPricedata', {Xmldata: xmldata[typecount]})
      }

      window.localStorage.setItem('zip1', this.$store.state.zipcode1)
      window.localStorage.setItem('zip2', this.$store.state.zipcode2)
      window.localStorage.setItem('len1', this.$store.state.length1)
      window.localStorage.setItem('len2', this.$store.state.length2)
      window.localStorage.setItem('len3', this.$store.state.length3)
      window.localStorage.setItem('wei', this.$store.state.weight)
      this.$store.dispatch('getZipcodedata')
      this.$store.dispatch('getLengthdata')
      this.$store.dispatch('getWeightdata')

      this.$router.push('/pageresult')
    },

    ResetData: function (event) {
      window.localStorage.setItem('zip1', '92111')
      window.localStorage.setItem('zip2', '')
      window.localStorage.setItem('len1', '')
      window.localStorage.setItem('len2', '')
      window.localStorage.setItem('len3', '')
      window.localStorage.setItem('wei', '')
      this.$store.dispatch('getZipcodedata')
      this.$store.dispatch('getLengthdata')
      this.$store.dispatch('getWeightdata')
    }
  }
}
</script>

<style>
.button-cal {
  display: inline-block;
}
.button-cal-button {
  width: 200px;
}
.button-res {
  display: inline-block;
  width: 100px;
}
.button-res-button {
  width: 100px;
}
</style>
