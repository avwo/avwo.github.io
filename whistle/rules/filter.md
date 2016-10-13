# filter

用来过滤设置的操作，还有可以开启拦截HTTPS及隐藏请求，配置模式：

	pattern filetr://operator1|operator2|operatorN
	
pattern参见[匹配方式](../pattern.html)，更多模式请参考[配置模式](../mode.html)。

例子：

开启拦截[www.baidu.com](http://www.baidu.com/)的HTTPS及去除[rule](rule.html)配置

	www.baidu.com filter://https|rule
	www.ifeng.com filter://hide
	
开启拦截HTTPS也可以通过界面上方的Https按钮来启用，filter提供了一种可配置的方式，`filter://hide`可以让www.ifeng.com的请求不在界面上显示，这个与界面上的Filter设置效果相反，可以配合使用。
	
