<template>
  <section class="nav-bar">
    <ul>
    	<li>
			<div class="icon">
				<img src="@/assets/logo.png" alt="">
			</div>
		</li>
    	<li>
			<div class="icon"><img class="img-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAllBMVEUAAABubm5xcXFxcXFvb29xcXFycnJwcHBxcXF3d3d2dnZwcHBwcHBtbW1wcHBwcHBycnJ0dHRwcHBwcHBwcHBwcHBwcHBqampwcHBwcHBwcHBzc3NwcHBwcHBwcHBwcHBwcHB6enpxcXFwcHBxcXFwcHBwcHBxcXFwcHBwcHBwcHBxcXFwcHBvb29wcHBwcHBwcHBwcHDmBwfKAAAAMnRSTlMAAhVLVT4vv/////WOCrP7//9yK/HuxxCJ0HwGfySCWx7/q9SEGZpDUDllpeuV3+S22PgUu6wAAAK1SURBVHgB7ZaFmqMwEIBnqhMozUzd3QV23//lLjU0t3CufyX2/cRDABC+HoRSufIFVDFeXa1OqjiO2/Ai22sqTVwYYmlBSFsTdbqFcbX0onGqMXEVS/1ClGCgZJiU21CYUUauwRgLMYaJRUYoBCbl/zJ+lm+qGXNkBK9dszNFwA9lBJwR2+nMAXLkxVARk43lyoMfV/O39DkH/GXz/OvlmeJ1oT7b5NFyWf/qmmvNXhkMWXlc2UxCNpWxzff6YJMRKrRUIUuq5DQoKbeWEsHLVkzGJyZikw3b3XoYst5tISQ0jGuXM43ESBi394dK+bi4JbOyxY6SpdN57YrwpXctRwUF5tkElR45wjfE6Zxr9pptIIwHWojJ7XQ7rgnFrwBgMRnGOybWvVF1u20frj7T/WjAD5odX81MHLQ8eDDdaeLu3iLHnDAsu8z+ESB8aEuT9EqA2anK2P03oUdF4azNWEvLRO2LJFofpmIimkCiH/268Hs/JSO0FCdWpvk1hP1tqk0VYn3IyPPXxqD5M2fbY75CSl70hAYmYtuS0W5EmF6YU5vLJHaKmxnZsveJ+ZgqRdgo6WVlfBHJZJFnSoYFam53mA8Z+aq4XkBerJlH0YBFc7/Lkw3eWbjnpUa72mV9yt8YCCchnRhuE70KXaaA+fJ0zTzcJo6hg0uyg4xss1tMvOrfLZNCgKPPFBgj5+75vI+L5mYNHjpgxWctDYjkKVjBR8OHoiXYVE3tsDicNWvi9/3jUTUiejuvslynT7vWE2IJ6s3VW881UWYS/2Fv144WFeE4z3B5fe3y7dVlFpPviDH90+Bh34rnHVEWHNWIzpf9KnDZcYQ6740p4M0OjG3Y71Y2BuEE3YLpqXE+7yaHkknebQ6qkCX3HYMPW628j24xcQFeefhIbci5InwVxp63tvAJwN9WhCnsGIoAAAAASUVORK5CYII=" alt=""></div>
			<div class="title">我的订单</div>
		</li>
    	<li>
			<div class="icon"><img class="img-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAkFBMVEUAAABiYmJoaGhxcXFwcHBwcHBycnJwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBzc3NycnJwcHB2dnZwcHBwcHBxcXFwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBnZ2dwcHC6NtRcAAAAMHRSTlMAAwoXHycsRXWfxdzz+jB+vv8ljv/+72HU682aahOXTQ+wNblUtazlb1elWuE7B4ObTEwxAAADdklEQVR4AZWWh5rqOgyEnd7LEA2k0Os24P3f7vLdBVOSTTizBbfflmVZWHXJUBeZlu24rmNbpm56U5bnB2EUJ0kchYHvWep9pVke40FxnqX9hLZ4VEQQgEk8vihOCAiiYnTpHGKNSQmAVd1MvdRxUm/a1BUBlJNLZz87mycAo2axNHTjctFEBJL5rI82lL0SYjxfX+sX/ZbW8zEoK1sZPexGiHL7cDa6uC1B2XTQ2uaVEDv3idS8uwNl9bflhRB7q7vbUNYelOKvhRck8g5W0znIhTI6+2rwsO5zyfpA1N2zfwg5Ub2akPLR6a0I2Jn9J2nugKjLZ5/s3FDLLfxUba0guTUYgLlg1e6wIkg2HPqZIJq1DRpj3Gu1HlbpYbrVT6QcDcOjWpKPFlxAclMNyswFRQv+ElmpN7QS+WrBe5H9kNV6XP/Kre5HuL3yHLIx1LB2gnkLzii1peuW9RwES10KhVkL/o5x8G6tXlnq8kXTn91vCjHU8Ufi75Zv3AMwvbUWIuFSGbebWIlsr+UpcXBVSyHk6zbjBGRxO3UnB+PrPT99CULVVkZU66txy42Q+/X/w7c1KGdtBJh1wE6lM5Sh0lKIn+Dbm+5iEF+3O1wIK0d1aA6Oj7ddpzkAxuMEv9le/bprTDSdsZNWxEanCescERAgCSeXputuwCrtjsMMRHEZdI2p1N/XUdhMLB1lBYjsrzSxAZk9BOPSSUfGfTaflFyb1kqtEZhkevjvqNv/U5YQUU9qXlQgG/s+n6GH2gGIaqF6tD2ACL/NVg74DEEctqpXXg0i3kxe5lzFIGpPDcgJElA4ffouiYVIAkcN6vRdM0HsKkP7MUHC8PvUz11d3JDE8Q57QrL47Rt4DB2bmMRudoetXMi4OQ4+h2b+Dwis7Ke7vieIH3/Zz7orgizPs5eT8ksS3Lt97LEE8XN+fa9dKs75AKI89rCREJujemavVS8HJTr+FdpuKUQwa6FX3ArAru8znXtQmH8/aMwClFX3gDOI5tT3oDk1IM6dG44fEknPjY+7nLbDLXuqvscUsGs3b2NtUR+dgfG2tcRe9PusD7ZLyKplzw94VidjSKoAfvTurrAPRLZ6Q3YE+C8WBoLQHjmjATkjO4QEL8EVgUn1lhKidJXxAC9A4k2RWDzBn5LwPSVkIp9Pm16m7j8ovWaF/wCc31NtcLeHeAAAAABJRU5ErkJggg==" alt=""></div>
			<div class="title">个人中心</div>
		</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
.nav-bar{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 88px;
	display: -webkit-box;
	background: #F2F2F2;
	text-align: center;
}
.nav-bar ul{
	display: -webkit-box;
	-webkit-box-align: center;
	width: 100%;
}
.nav-bar li{
	flex: 1;
}
.nav-bar .title{
	margin-top: 5px;
	font-size: 20px;
}
.nav-bar .icon{
	margin: 0 auto;
	width: 34px;
	height: 34px;
}
</style>
