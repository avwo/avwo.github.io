# urlParams

修改请求参数，配置模式：

	pattern urlParams://filepath
	
filepath为[Values](http://local.whistlejs.com/#values)里面的{key}或者本地文件:

	field1: value1
	field2: value2
	filedN: valueN
	
pattern参见[匹配方式](../pattern.html)，更多模式请参考[匹配模式](../mode.html)，json格式参考[数据格式](../data.html)。

例子：

	www.ifeng.com urlParams://test=1