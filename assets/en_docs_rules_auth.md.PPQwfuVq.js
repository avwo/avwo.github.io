import{_ as s,c as e,o as n,ae as t}from"./chunks/framework.Dgg8-8ov.js";const u=JSON.parse('{"title":"auth","description":"","frontmatter":{},"headers":[],"relativePath":"en/docs/rules/auth.md","filePath":"en/docs/rules/auth.md"}'),p={name:"en/docs/rules/auth.md"};function o(l,a,i,r,c,d){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="auth" tabindex="-1">auth <a class="header-anchor" href="#auth" aria-label="Permalink to &quot;auth&quot;">​</a></h1><p>Modify the shortcut protocol for the <code>authorization</code> field in the request header and set authentication information.</p><h2 id="rule-syntax" tabindex="-1">Rule Syntax <a class="header-anchor" href="#rule-syntax" aria-label="Permalink to &quot;Rule Syntax&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>pattern auth://value [filters...]</span></span></code></pre></div><table tabindex="0"><thead><tr><th>Parameters</th><th>Description</th><th>Detailed Documentation</th></tr></thead><tbody><tr><td>pattern</td><td>An expression to match the request URL</td><td><a href="./pattern.html">Match Pattern Documentation</a></td></tr><tr><td>value</td><td><code>username:password</code> or an object containing <code>username</code> and <code>password</code>. Supports the following types:<br>• Directory/File Path<br>• Remote URL<br>• Inline/Embedded/Values Content</td><td><a href="./operation.html">Operation Instruction Documentation</a></td></tr><tr><td>filters</td><td>Optional filters. Supports matching:<br>• Request URL/Method/Header/Content<br>• Response Status Code/Header</td><td><a href="./filters.html">Filter Documentation</a></td></tr></tbody></table><h2 id="configuration-example" tabindex="-1">Configuration Example <a class="header-anchor" href="#configuration-example" aria-label="Permalink to &quot;Configuration Example&quot;">​</a></h2><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Inline Mode</span></span>
<span class="line"><span>www.example.com/path auth://test:123</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Or</span></span>
<span class="line"><span>www.example.com/path auth://username=test&amp;password=123</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Inline/Values</span></span>
<span class="line"><span>\`\`\` auth.json</span></span>
<span class="line"><span>username: test</span></span>
<span class="line"><span>password: 123</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Or</span></span>
<span class="line"><span>\`\`\` auth.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  username: test,</span></span>
<span class="line"><span>  password: 123</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>www.example.com/path auth://{auth.json}</span></span></code></pre></div><h4 id="local-remote-resources" tabindex="-1">Local/Remote Resources <a class="header-anchor" href="#local-remote-resources" aria-label="Permalink to &quot;Local/Remote Resources&quot;">​</a></h4><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>www.example.com/path1 auth:///User/xxx/auth.json</span></span>
<span class="line"><span>www.example.com/path2 auth://https://www.xxx.com/xxx/auth.json</span></span>
<span class="line"><span># By editing a temporary file</span></span>
<span class="line"><span>www.example.com/path3 auth://temp/blank.json</span></span></code></pre></div><h2 id="associated-protocols" tabindex="-1">Associated Protocols <a class="header-anchor" href="#associated-protocols" aria-label="Permalink to &quot;Associated Protocols&quot;">​</a></h2><ol><li>Modify the request header directly: <a href="./reqHeaders.html">reqHeaders://authorization=value</a></li></ol>`,11)]))}const m=s(p,[["render",o]]);export{u as __pageData,m as default};
