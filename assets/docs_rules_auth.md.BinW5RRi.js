import{_ as s,c as n,o as t,ae as e}from"./chunks/framework.Dgg8-8ov.js";const u=JSON.parse('{"title":"auth","description":"","frontmatter":{},"headers":[],"relativePath":"docs/rules/auth.md","filePath":"docs/rules/auth.md"}'),p={name:"docs/rules/auth.md"};function l(i,a,o,r,d,h){return t(),n("div",null,a[0]||(a[0]=[e(`<h1 id="auth" tabindex="-1">auth <a class="header-anchor" href="#auth" aria-label="Permalink to &quot;auth&quot;">​</a></h1><p>修改请求头的 <code>authorization</code> 字段的快捷协议，设置鉴权信息。</p><h2 id="规则语法" tabindex="-1">规则语法 <a class="header-anchor" href="#规则语法" aria-label="Permalink to &quot;规则语法&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pattern auth://value [filters...]</span></span></code></pre></div><table tabindex="0"><thead><tr><th>参数</th><th>描述</th><th>详细文档</th></tr></thead><tbody><tr><td>pattern</td><td>匹配请求 URL 的表达式</td><td><a href="./pattern.html">匹配模式文档</a></td></tr><tr><td>value</td><td><code>username:password</code> 或包含 <code>username</code> 和 <code>password</code> 的对象，支持以下类型：<br>• 目录/文件路径<br>• 远程 URL<br>• 内联/内嵌/Values内容</td><td><a href="./operation.html">操作指令文档</a></td></tr><tr><td>filters</td><td>可选过滤器，支持匹配：<br>• 请求URL/方法/头部/内容<br>• 响应状态码/头部</td><td><a href="./filters.html">过滤器文档</a></td></tr></tbody></table><h2 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to &quot;配置示例&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 内联方式</span></span>
<span class="line"><span>www.example.com/path auth://test:123</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或</span></span>
<span class="line"><span>www.example.com/path auth://username=test&amp;password=123</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 内嵌/Values</span></span>
<span class="line"><span>\`\`\` auth.json</span></span>
<span class="line"><span>username: test</span></span>
<span class="line"><span>password: 123</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 或</span></span>
<span class="line"><span>\`\`\` auth.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  username: test,</span></span>
<span class="line"><span>  password: 123</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.example.com/path auth://{auth.json}</span></span></code></pre></div><h4 id="本地-远程资源" tabindex="-1">本地/远程资源 <a class="header-anchor" href="#本地-远程资源" aria-label="Permalink to &quot;本地/远程资源&quot;">​</a></h4><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>www.example.com/path1 auth:///User/xxx/auth.json</span></span>
<span class="line"><span>www.example.com/path2 auth://https://www.xxx.com/xxx/auth.json</span></span>
<span class="line"><span># 通过编辑临时文件</span></span>
<span class="line"><span>www.example.com/path3 auth://temp/blank.json</span></span></code></pre></div><h2 id="关联协议" tabindex="-1">关联协议 <a class="header-anchor" href="#关联协议" aria-label="Permalink to &quot;关联协议&quot;">​</a></h2><ol><li>直接修改请求头：<a href="./reqHeaders.html">reqHeaders://authorization=value</a></li></ol>`,11)]))}const m=s(p,[["render",l]]);export{u as __pageData,m as default};
