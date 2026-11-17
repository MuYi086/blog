---
tags:
  - 人工智能
---
# AI-Codex-Cli配置代理

`Codex CLI` 的网络请求需要能访问 `Codex` 服务。如果浏览器能联网，但终端里的 `codex` 连不上，常见原因是代理客户端只设置了系统代理，而终端程序没有自动使用它。

下面以本机代理客户端为例。不同客户端、不同配置的端口可能不一样，请以客户端实际显示的端口为准。

## 确认代理端口

打开代理客户端，查看 `HTTP`、`SOCKS5` 或混合端口。常见示例：

| 客户端示例 | HTTP 端口 | SOCKS5 端口 |
| --- | --- | --- |
| v2rayN 常见默认值 | `10809` | `10808` |
| Clash / Mihomo 常见配置 | 混合端口常见为 `7890` | 以客户端配置为准 |

下文使用 `v2rayN` 的 `HTTP` 端口 `10809`。如果你的端口不同，请替换示例中的端口。

## 临时设置：只对当前终端生效

### Windows PowerShell

在启动 `Codex` 的同一个 `PowerShell` 窗口中执行：

```powershell
$env:HTTP_PROXY = "http://127.0.0.1:10809"
$env:HTTPS_PROXY = "http://127.0.0.1:10809"
$env:NO_PROXY = "localhost,127.0.0.1,::1"
```

关闭这个终端后，设置就会失效。`NO_PROXY` 用于让本机回环地址直连，避免本地通信也被送进代理。

如果使用 `cmd.exe`，对应写法是：

```bat
set HTTP_PROXY=http://127.0.0.1:10809
set HTTPS_PROXY=http://127.0.0.1:10809
set NO_PROXY=localhost,127.0.0.1,::1
```

### macOS / Linux / WSL

```bash
export HTTP_PROXY=http://127.0.0.1:10809
export HTTPS_PROXY=http://127.0.0.1:10809
export NO_PROXY=localhost,127.0.0.1,::1
```

如果只使用 `SOCKS5` 代理，先取消前面的 `HTTP_PROXY`、`HTTPS_PROXY`，再设置 `ALL_PROXY`：

```bash
unset HTTP_PROXY HTTPS_PROXY
export ALL_PROXY=socks5h://127.0.0.1:10808
```

### 按需开关代理

如果不希望每个终端程序都一直使用代理，可以在 `PowerShell` 配置文件或 `~/.zshrc`、`~/.bashrc` 中加入快捷函数，需要时再开启。

`PowerShell` 示例：

```powershell
function proxy_on {
  $env:HTTP_PROXY = "http://127.0.0.1:10809"
  $env:HTTPS_PROXY = "http://127.0.0.1:10809"
  $env:NO_PROXY = "localhost,127.0.0.1,::1"
}

function proxy_off {
  Remove-Item Env:HTTP_PROXY, Env:HTTPS_PROXY, Env:ALL_PROXY, Env:NO_PROXY -ErrorAction SilentlyContinue
}
```

保存后重新打开 `PowerShell`，运行 `proxy_on` 再启动 `codex`；不需要代理时运行 `proxy_off`。

`macOS` / `Linux` 示例：

```bash
proxy_on() {
  export HTTP_PROXY=http://127.0.0.1:10809
  export HTTPS_PROXY=http://127.0.0.1:10809
  export NO_PROXY=localhost,127.0.0.1,::1
}

proxy_off() {
  unset HTTP_PROXY HTTPS_PROXY ALL_PROXY NO_PROXY
}
```

把函数加入 `~/.zshrc` 或 `~/.bashrc` 后，重新载入配置文件；运行 `proxy_on` 后再启动 `Codex`。

## 固定设置：使用 Codex 用户级 `.env`

`Codex CLI` 启动时会读取 `Codex` 用户目录中的 `.env` 文件。默认位置是：

- Windows：`~\用户\.codex\.env`
- macOS / Linux：`~/.codex/.env`

如果没有 `.codex` 目录，先创建它，再新建 `.env` 文件，写入：

```dotenv
HTTP_PROXY=http://127.0.0.1:10809
HTTPS_PROXY=http://127.0.0.1:10809
NO_PROXY=localhost,127.0.0.1,::1
```

如果要改用 `SOCKS5` 代理，请将前两项替换为 `ALL_PROXY`：

```dotenv
ALL_PROXY=socks5h://127.0.0.1:10808
```

保存后重新启动 `Codex`。若设置过 `CODEX_HOME`，`.env` 应放在该目录下，而不是默认的 `~/.codex`。不需要代理时，删除 `.env` 中的代理变量并重启 `Codex`。

`Windows` 记事本保存时请确认文件名是 `.env`，不要意外保存成 `.env.txt`。

`.env` 是本机用户配置，不要放进项目仓库；如果代理地址中包含认证信息，也要避免提交或分享这个文件。

## 只让指定程序使用代理

以上环境变量只会传给从该终端启动的程序及其子进程，不会自动修改浏览器或其他已运行程序的代理设置。`Codex CLI` 适合用终端变量或用户级 `.env` 单独设置。

也可以在代理客户端中启用 `TUN` 模式，让系统流量按客户端规则转发；或用 `Proxifier` 等工具按进程配置代理。使用进程规则时，应让本地回环地址直连，并避免代理客户端自身再次进入代理，以免形成转发循环。第二篇参考文章介绍了 `Codex` 桌面端的进程规则示例，桌面端和 `CLI` 的进程名称、启动方式可能不同。

需要注意，`config.toml` 中的 `features.network_proxy` 用于控制沙箱命令的网络访问，不等同于给 `Codex CLI` 自身配置普通 `HTTP` 代理。相关范围见 [Codex 配置参考](https://learn.chatgpt.com/docs/config-file/config-reference)。

## 验证代理

在设置好代理的同一个终端中运行：

```shell
# PowerShell
curl.exe -I --max-time 15 https://api.openai.com/v1/models

# shell
curl -I --max-time 15 https://api.openai.com/v1/models
```

常见结果：

| 结果 | 含义 |
| --- | --- |
| `401 Unauthorized` | 已连接到服务；该请求没有提供 API Key，因此返回未授权是预期结果 |
| `403` 且提示地区不可用 | 网络已连通，但当前出口节点不受服务支持，需更换节点 |
| `Connection refused` | 代理端口不正确，或代理客户端没有运行 |
| 超时或无法解析主机 | 检查代理变量、代理节点以及 DNS 设置 |

这个命令只检查到 `api.openai.com` 的 `HTTP` 连接；`401` 不能证明 `Codex` 登录、`WebSocket` 或其他服务连接都正常。

确认网络可达后，在同一个终端运行 `codex`。如果通过环境变量临时设置代理，必须在设置变量的窗口中启动 `Codex`。

## 常见问题

### 浏览器能用，Codex CLI 仍然连不上

浏览器可能使用系统代理或浏览器插件，而终端程序不会因此自动获得代理设置。请确认代理变量设置在启动 `codex` 的终端中，并且端口与客户端一致。

### Windows 的 PowerShell 能用，WSL 里不能用

`WSL2` 默认 `NAT` 网络模式下，`127.0.0.1` 指向 `WSL` 自己。若代理客户端运行在 `Windows` 上，需要在客户端开启局域网连接，并将代理地址改成 `Windows` 主机在 `WSL` 可访问的地址；使用镜像网络模式时，请按该模式的网络配置确认地址。也可以改用 `TUN` 模式。

### Codex 启动慢或本地功能异常

检查 `NO_PROXY` 是否包含 `localhost,127.0.0.1,::1`，并确认没有让 `Codex` 与本机服务之间的回环流量也经过代理。

## 参考

1. [Codex CLI 怎么设置代理？](https://aikeyong.com/codex/daili-shezhi/)
1. [为浏览器/软件单独设置代理的方法](https://www.manueld.me/index.php/archives/731/)
1. [Codex CLI 加载用户级 `.env` 的实现](https://github.com/openai/codex/blob/main/codex-rs/arg0/src/lib.rs)
