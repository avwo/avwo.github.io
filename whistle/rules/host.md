# host

whistle不仅完全兼容操作系统的hosts配置方式，也支持域名、路径、正则三种匹配方式，而且支持配置端口号。
	
host的配置模式：

1. 传统的hosts配置模式：

		ip pattern
		
		# 组合模式
		ip pattern1 pattern2 patternN
		
2. whistle还支持以下配置模式：

		ip pattern
		pattern host://ip
		host://ip pattern
		
		# 带端口号，whistle会把请求转发的指定ip和端口上
		pattern host://ip:port
		host://ip:port pattern
		
		# 组合模式
		pattern ip1 operator-uri1 operator-uriN
		host://ip:port pattern1 pattern2 patternN
		
	
		
	*其中，pattern可以为域名、路径、正则，具体参考[匹配方式](pattern.html)*
		
**例子：**
	
指定[www.ifeng.com](http://www.ifeng.com/)的ip:
	
	www.ifeng.com 127.0.0.1
		
指定[www.ifeng.com](http://www.ifeng.com/)的ip和端口，把请求转发到本地8080端口:
	
	# www.ifeng.com 127.0.0.1
	www.ifeng.com host://127.0.0.1:8080