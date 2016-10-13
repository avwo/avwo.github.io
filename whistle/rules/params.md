# params

修改请求参数或表单参数，配置模式：

	pattern params://filepath
	
filepath为[Values](http://local.whistlejs.com/#values)里面的{key}或者本地文件:

	field1: value1
	field2: value2
	filedN: valueN
	
pattern参见[匹配方式](../pattern.html)，更多模式请参考[配置模式](../mode.html)，json格式参考[数据格式](../data.html)。
	
params的作用分三种情况：

1. 上传表单：用于修改上传表单的内容字段

		pattern params://{text.txt}

	test.txt
	
		{
		    "name1": "value1",
		    "name2": "value2",
		    "file1": {
		        "filename": "text.txt",
		        "content": "xxxxxxxxxxxxxxx"
		    }
		}
	
2. POST表单提交：用于修改POST表单的内容字段
3. 其它请求：用于修改请求url的参数
	

例子：

	www.ifeng.com params://test=123


