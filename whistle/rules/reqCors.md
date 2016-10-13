# reqCors

修改请求的[cors](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)，配置模式：

	pattern reqCors://filepath
	
filepath为[Values](http://local.whistlejs.com/#values)里面的{key}或者本地文件:

	origin: *
	method: POST
	headers: x-test

pattern参见[匹配方式](../pattern.html)，更多模式请参考[配置模式](../mode.html)，json格式参考[数据格式](../data.html)。

例子：

	www.ifeng.com reqCors://{test-reqCors.json}
	

test-reqCors.json:

	origin: *
	method: POST
	headers: x-test
