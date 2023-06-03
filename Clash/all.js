const maxConfigItems = 600
const maxPerType = 300
const includeOriginalConfigs = 0

const subLinks = [
  "https://raw.githubusercontent.com/freefq/free/master/v2",
  "https://raw.githubusercontent.com/Pawdroid/Free-servers/main/sub",
  "https://raw.githubusercontent.com/AzadNetCH/Clash/main/V2Ray.txt",
  "https://raw.githubusercontent.com/Leon406/SubCrawler/main/sub/share/v2",
  "https://raw.githubusercontent.com/ermaozi/get_subscribe/main/subscribe/v2ray.txt",
  "https://raw.githubusercontent.com/xiyaowong/freeFQ/main/v2ray",
  "https://raw.githubusercontent.com/iwxf/free-v2ray/master/index.html",
  "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.txt",
  "https://ghproxy.net/https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.txt",
  "https://fastly.jsdelivr.net/gh/peasoft/NoMoreWalls@master/list.txt",
  "https://cdn.staticaly.com/gh/peasoft/NoMoreWalls/master/list.txt",
  "https://raw.githubusercontent.com/RescueNet/TelegramFreeServer/main/base64/vmess",
  "https://raw.githubusercontent.com/RescueNet/TelegramFreeServer/main/base64/reality",
  "https://raw.githubusercontent.com/RescueNet/TelegramFreeServer/main/base64/temporary",
  "https://raw.githubusercontent.com/vpei/Free-Node-Merge/main/o/node.txt",
  "https://raw.githubusercontent.com/Jsnzkpg/Jsnzkpg/Jsnzkpg/Jsnzkpg",
  "https://raw.fastgit.org/codingbox/Free-Node-Merge/main/node.txt",
  "https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/V2Ray",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/ss-sub",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/trojan",
  "https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription_num",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription1",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription2",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription3",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription4",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription5",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription6",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription7",
  "https://raw.githubusercontent.com/w1770946466/Auto_proxy/main/Long_term_subscription8",
  "https://sub.pmsub.me/base64",
  "https://proxy.yugogo.xyz/vmess/sub",
  "https://proxy.yugogo.xyz/trojan/sub",
  "https://free.iam7.tk/trojan/sub",
  "https://free.iam7.tk/vmess/sub",
  "https://free.jingfu.cf/vmess/sub",
  "https://free.jingfu.cf/trojan/sub",
  "https://raw.githubusercontent.com/learnhard-cn/free_proxy_ss/main/free",
  "https://raw.githubusercontent.com/learnhard-cn/free_proxy_ss/main/v2ray/v2raysub"
]
const cnfLinks = [
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/sub/sub_merge.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/hossein-mohseni/Free-V2ray-Config/main/All_Configs_Sub.txt",
  "https://raw.githubusercontent.com/AlienVPN402/AlienVPN402-subscribe-servers/main/index.html",
  "https://alienvpn402.github.io/AlienVPN402-subscribe-servers/",
  "https://tunnel.nbproject.wiki/7tNk9VH7uGdMVjs3qp8/f8a44475-fe9e-4087-bcb5-d640886365aa/all.txt",
  "https://wfi.sahnama.com/nCRTlqXjXo20Pgr0R/61280f80-cd25-4c7b-8e5a-b1560617047a/all.txt",
  "https://sahnama.com/s9No4vnWft1Q/df68f678-62c3-4799-91a8-4d301e8cf565/all.txt",
  "https://sublink.ashorayiha.xyz/ONQWC5FErmKE8Q/9c3422b7-5bf1-46ac-946e-7cbfdcbe5dee/all.txt",
  "https://ww3.nbproject.wiki/014iMLCQaPjBasesdQY/f6568008-e722-4aba-90e3-62b78bb51d66/all.txt",
  "https://cu.wfitech.net/1mkViriOFligbGewTkMrOQE/030ae75a-1a4a-45cc-88f1-f1b7d9fe15f3/all.txt",
  "https://raw.githubusercontent.com/IranianCypherpunks/sub/main/config",
  "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt",
  "https://raw.githubusercontent.com/LonUp/NodeList/main/V2RAY/Latest.txt",
  "https://raw.githubusercontent.com/RescueNet/TelegramFreeServer/main/Raw/All_Sub",
  "https://raw.githubusercontent.com/awesome-vpn/awesome-vpn/master/all"
]
const cleanIPLink = "https://raw.githubusercontent.com/coldwater-10/clash_rules/main/List%20of%20clean%20IPs.txt"
const operatorList = ["AST", "HWB", "IRC", "MBT", "MCI", "MKB", "PRS", "RTL", "SHT", "ZTL", "PIS", "DAT", "SAB", "ASR", "FAN", "ZTL", "SFR", "DID", "LAY", "MAH", "TAK", "PET", "AND", "RES", "AFR", "ARA", "SAM", "APT", "ALL", "PLUS", "TEST", "ENG", "FA", "IPV6", "IRCF", "ANTY"]
const addressList = ["discord.com", "cloudflare.com", "nginx.com", "cdnjs.com", "vimeo.com", "networksolutions.com"]
const fpList = ["chrome", "chrome", "chrome", "firefox", "safari", "edge", "ios", "android", "360", "qq", "random", "random"]
const alpnList = ["http/1.1", "h2,http/1.1", "h2,http/1.1", "h2,http/1.1"]
var cleanIPs = []

export default {
  async fetch(request) {
    var url = new URL(request.url)
    var pathParts = url.pathname.replace(/^\/|\/$/g, "").split("/")
    var type = pathParts[0].toLowerCase()
    if (["sub", "clash"].includes(type)) {
      if (pathParts[1] !== undefined) {
        var operator = pathParts[1].toUpperCase()
        if (operatorList.includes(operator)) {
          cleanIPs = await fetch(cleanIPLink).then(r => r.text()).then(t => t.split("\n"))
          cleanIPs = cleanIPs.filter(line => (line.search(operator) > 0))
          cleanIPs = cleanIPs.map(line => line.split(" ")[0].trim())
        } else {
          cleanIPs = [operator.toLowerCase()]
        }
      }

      var configList = []
      for (var subLink of subLinks) {
        try {
          configList = configList.concat(await fetch(subLink).then(r => r.text()).then(a => atob(a)).then(t => t.split("\n")))
        } catch (e) { }
      }
      for (var cnfLink of cnfLinks) {
        try {
          configList = configList.concat(await fetch(cnfLink).then(r => r.text()).then(t => t.split("\n")))
        } catch (e) { }
      }
      
      var vmessConfigList = configList.filter(cnf => (cnf.search("vmess://") == 0))
      var trojanConfigList = configList.filter(cnf => (cnf.search("trojan://") == 0))
      var ssConfigList = configList.filter(cnf => (cnf.search("ss://") == 0))
      var mergedConfigList = []
      
      if (type == "sub") {
        if (includeOriginalConfigs) {
          mergedConfigList = mergedConfigList.concat(getMultipleRandomElements(vmessConfigList, maxPerType))
        }
        mergedConfigList = mergedConfigList.concat(
          getMultipleRandomElements(
            vmessConfigList.map(decodeVmess).map(cnf => mixConfig(cnf, url, "vmess")).filter(cnf => (!!cnf && cnf.id)).map(encodeVmess).filter(cnf => !!cnf),
            maxPerType
          )
        )

        if (includeOriginalConfigs) {
          mergedConfigList = mergedConfigList.concat(getMultipleRandomElements(trojanConfigList, maxPerType))
          mergedConfigList = mergedConfigList.concat(getMultipleRandomElements(ssConfigList, maxPerType))
        }

        return new Response(btoa(getMultipleRandomElements(mergedConfigList, maxConfigItems).join("\n")));
      } else { // clash
        if (includeOriginalConfigs) {
          mergedConfigList = mergedConfigList.concat(
            getMultipleRandomElements(
              vmessConfigList.map(decodeVmess).filter(cnf => (cnf && cnf.id)).map(cnf => toClash(cnf, "vmess")).filter(cnf => (cnf && cnf.uuid)),
              maxPerType
            )
          )
        }
        mergedConfigList = mergedConfigList.concat(
          getMultipleRandomElements(
            vmessConfigList.map(decodeVmess).map(cnf => mixConfig(cnf, url, "vmess")).filter(cnf => (cnf && cnf.id)).map(cnf => toClash(cnf, "vmess")),
            maxPerType
          )
        )
        return new Response(toYaml(mergedConfigList));
      }
    } else {
      var url = new URL(request.url)
      var newUrl = new URL("https://" + url.pathname.replace(/^\/|\/$/g, ""))
      return fetch(new Request(newUrl, request));
    }
  }
}

function encodeVmess(conf) {
  try {
    return "vmess://" + btoa(JSON.stringify(conf))
  } catch {
    return null
  }
}

function decodeVmess(conf) {
  try {
    return JSON.parse(atob(conf.substr(8)))
  } catch {
    return {}
  }
}

function mixConfig(conf, url, protocol) {
  try {
    if (conf.tls != "tls") {
      return {}
    }
    var addr = conf.sni
    if (!addr) {
      if (conf.add && !isIp(conf.add)) {
        addr = conf.add
      } else if (conf.host && !isIp(conf.host)) {
        addr = conf.host
      }
    }
    if (!addr) {
      return conf
    }
    conf.name = (conf.name ? conf.name : conf.ps) + '-👷‍'
    conf.sni = url.hostname
    if (cleanIPs.length) {
      conf.add = cleanIPs[Math.floor(Math.random() * cleanIPs.length)]
    } else {
      conf.add = addressList[Math.floor(Math.random() * addressList.length)]
    }
    
    if (protocol == "vmess") {
      conf.sni = url.hostname
      conf.host = url.hostname
      if (conf.path == undefined) {
        conf.path = ""
      }
      conf.path = "/" + addr + ":" + conf.port + "/" + conf.path.replace(/^\//g, "")
      conf.fp = fpList[Math.floor(Math.random() * fpList.length)]
      conf.alpn = alpnList[Math.floor(Math.random() * alpnList.length)]
      conf.port = 443
    }
    return conf
  } catch (e) {
    return {}
  }
}

function getMultipleRandomElements(arr, num) {
  var shuffled = arr //[...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, num)
}

function isIp(str) {
  try {
    if (str == "" || str == undefined) return false
    if (!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){2}\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-4])$/.test(str)) {
      return false
    }
    var ls = str.split('.')
    if (ls == null || ls.length != 4 || ls[3] == "0" || parseInt(ls[3]) === 0) {
      return false
    }
    return true
  } catch (e) { }
  return false
}

let proxyCount = 1;

function toClash(conf, protocol) {
  const regexUUID = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi
  var config = {}
  try {
    config = {
      name: (conf.name ? conf.name : conf.ps).replace("www.", ""),
      type: protocol,
      server: conf.add,
      port: conf.port,
      uuid: conf.id,
      alterId: 0,
      tls: true,
      cipher: conf.cipher ? conf.cipher : "auto",
      "skip-cert-verify": true,
      servername: conf.sni,
      network: conf.net,
      "ws-opts": {
        path: conf.path,
        headers: {
          host: conf.host
        }
      }
    }

    // Increment proxyCount
    config.name += "-" + "ip:" + conf.add + "-🔢" + (proxyCount++);
    if (!regexUUID.test(config.uuid)) {
      return {}
    }
    return config
  } catch (e) {
    return {}
  }
}

function toYaml(configList) {
  var yaml = 
`
global-client-fingerprint: chrome
port: 7890
socks-port: 7891
redir-port: 7892
mixed-port: 7893
tproxy-port: 7895
allow-lan: true
log-level: info
cfw-latency-timeout: 6000
cfw-latency-url: https://api.v2fly.org/checkConnection.svgz
cfw-proxies-order: latency
external-controller: 0.0.0.0:9090
secret: ''
bind-address: '*'
#hosts:
  # '+.workers.dev': 185.59.218.86
unified-delay: true
profile:
  store-selected: true
  store-fake-ip: true
dns:
  enable: true
  ipv6: true
  use-host: true
  enhanced-mode: fake-ip
  listen: 0.0.0.0:7874
  nameserver:
    - https://cloudflare-dns.com/dns-query
    - 'https://1.1.1.1/dns-query#en0'
    - https://1.1.1.1/dns-query
    - https://dns.google/dns-query
    - https://dns.quad9.net/dns-query
    - https://dns.nextdns.io
    - https://doh.opendns.com/dns-query
    - https://dns.adguard.com/dns-query
    - https://dns.surfshark.com/dns-query
    - https://8.8.8.8/dns-query
    - https://9.9.9.9/dns-query
    - https://doh.cleanbrowsing.org/doh/security-filter/
    - https://resolver2.dns.watch/dns-query 
    - https://doh-de.blahdns.com/dns-query
    - https://freedns.controld.com/p2
    - https://dns.dnswarden.com/adblock
    - https://adblock.doh.mullvad.net/dns-query
    - https://basic.rethinkdns.com/dns-query
    - tls://1.0.0.1:853
    - tls://1.1.1.1:853
    - tls://dns.google:853
    - 162.159.36.1
    - 162.159.46.1
    - https://dns.aa.net.uk/dns-query
    - https://rubyfish.cn/dns-query
    - https://nsc.torgues.net/dns-query
    - https://xmission-slc-1.edge.nextdns.io/dns-query
    - https://Doh1.B-Cdn.net/dns-query
    - https://dns.melalandia.tk/dns-query
    - https://jp-kix2.doh.sb/
    - https://dns.gi.co.id/dns-query
    - https://dns.controld.com/
    - https://xtom-osa-1.edge.nextdns.io/dns-query
    - https://170.176.145.150/
    - https://ipv4-zepto-mci-1.edge.nextdns.io/dns-query
    - https://res-acst3.absolight.net/
    - https://zepto-sto-1.edge.nextdns.io
    - https://xtom-osa-1.edge.nextdns.io/
    - https://ipv4-zepto-mci-1.edge.nextdns.io/
    - https://nsc.torgues.net/
    - https://zepto-sto-1.edge.nextdns.io/
    - https://doh.dns.sb/dns-query
    - tls://dns.rubyfish.cn:853
    - 'tls://8.8.8.8#en0'
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - '*.lan'
    - '*.localdomain'
    - '*.example'
    - '*.invalid'
    - '*.localhost'
    - '*.test'
    - '*.local'
    - '*.home.arpa'
    - time.*.com
    - time.*.gov
    - time.*.edu.cn
    - time.*.apple.com
    - time1.*.com
    - time2.*.com
    - time3.*.com
    - time4.*.com
    - time5.*.com
    - time6.*.com
    - time7.*.com
    - ntp.*.com
    - ntp1.*.com
    - ntp2.*.com
    - ntp3.*.com
    - ntp4.*.com
    - ntp5.*.com
    - ntp6.*.com
    - ntp7.*.com
    - '*.time.edu.cn'
    - '*.ntp.org.cn'
    - +.pool.ntp.org
    - time1.cloud.tencent.com
    - music.163.com
    - '*.music.163.com'
    - '*.126.net'
    - musicapi.taihe.com
    - music.taihe.com
    - songsearch.kugou.com
    - trackercdn.kugou.com
    - '*.kuwo.cn'
    - api-jooxtt.sanook.com
    - api.joox.com
    - joox.com
    - y.qq.com
    - '*.y.qq.com'
    - streamoc.music.tc.qq.com
    - mobileoc.music.tc.qq.com
    - isure.stream.qqmusic.qq.com
    - dl.stream.qqmusic.qq.com
    - aqqmusic.tc.qq.com
    - amobile.music.tc.qq.com
    - '*.xiami.com'
    - '*.music.migu.cn'
    - music.migu.cn
    - '*.msftconnecttest.com'
    - '*.msftncsi.com'
    - msftconnecttest.com
    - msftncsi.com
    - localhost.ptlogin2.qq.com
    - localhost.sec.qq.com
    - +.srv.nintendo.net
    - +.stun.playstation.net
    - xbox.*.microsoft.com
    - xnotify.xboxlive.com
    - +.battlenet.com.cn
    - +.wotgame.cn
    - +.wggames.cn
    - +.wowsgame.cn
    - +.wargaming.net
    - proxy.golang.org
    - stun.*.*
    - stun.*.*.*
    - +.stun.*.*
    - +.stun.*.*.*
    - +.stun.*.*.*.*
    - heartbeat.belkin.com
    - '*.linksys.com'
    - '*.linksyssmartwifi.com'
    - '*.router.asus.com'
    - mesu.apple.com
    - swscan.apple.com
    - swquery.apple.com
    - swdownload.apple.com
    - swcdn.apple.com
    - swdist.apple.com
    - lens.l.google.com
    - stun.l.google.com
    - +.nflxvideo.net
    - '*.square-enix.com'
    - '*.finalfantasyxiv.com'
    - '*.ffxiv.com'
    - '*.mcdn.bilivideo.cn'
    - +.media.dssott.com
    
#tun:
  #enable: true
  #stack: system # or gvisor
  #dns-hijack:
    #- any:53
  #auto-redir: true # or false
  #auto-route: true 
  #auto-detect-interface: true

rule-providers:
  iran:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/coldwater-10/clash_rules/main/iran.yaml
    path: ./ruleset/iran.yaml
    interval: 432000
  steam:
    type: http
    behavior: classical
    url: >-
      https://raw.githubusercontent.com/coldwater-10/clash_rules/main/steam.yaml
    path: ./ruleset/steam.yaml
    interval: 432000
  add:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/coldwater-10/clash_rules/main/add.yaml
    path: ./ruleset/add.yaml
    interval: 432000
  Purification:
    type: http
    behavior: classical
    url: >-
      https://raw.githubusercontent.com/coldwater-10/clash_rules/main/Purification%20app.yaml
    path: ./ruleset/Purification.yaml
    interval: 432000
  Global:
    type: http
    behavior: classical
    url: >-
      https://raw.githubusercontent.com/coldwater-10/clash_rules/main/Global%20tracking.yaml
    path: ./ruleset/Global.yaml
    interval: 432000
  AntiAd:
    type: http
    behavior: domain
    url: >-
      https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-clash.yaml
    path: ./ruleset/AntiAd.yaml
    interval: 432000
  MoreAd:
    type: http
    behavior: domain
    url: https://howdy.id/download/rules/clash.txt
    path: ./providers/rule-provider_clash.yaml
    interval: 86400
  iran_other:
    type: http
    behavior: domain
    url: "https://github.com/bootmortis/iran-hosted-domains/releases/latest/download/clash_rules_other.yaml"
    path: ./ruleset/iran_other.yaml
    interval: 432000
  iran_ads:
    type: http
    behavior: domain
    url: "https://github.com/bootmortis/iran-hosted-domains/releases/latest/download/clash_rules_ads.yaml"
    path: ./ruleset/iran_ads.yaml
    interval: 432000
  blocked:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/coldwater-10/clash_rules/main/blocked-sites.yml"
    path: ./ruleset/blocked.yaml
    interval: 432000
  tahrim:
    type: http
    behavior: classical
    url: "https://raw.githubusercontent.com/coldwater-10/clash_rules/main/tahrim.yaml"
    path: ./ruleset/tahrim.yaml
    interval: 432000
  ads_ip:
    type: http
    behavior: classical
    url: https://raw.githubusercontent.com/coldwater-10/clash_rules/main/ads%20ip.yaml
    path: ./ruleset/adsip.yaml
    interval: 432000
  Purification_ip:
    type: http
    behavior: classical
    url: >-
      https://raw.githubusercontent.com/coldwater-10/clash_rules/main/Purification%20app%20ip.yaml
    path: ./ruleset/Purificationip.yaml
    interval: 432000

proxies:
${configList.map(cnf => "  - " + JSON.stringify(cnf)).join("\n")}

proxy-groups:

  - name: 🔀 نوع انتخاب پروکسی
    type: select
    proxies:
      - خودکار (بهترین پینگ) 🤖
      - دستی 🤏🏻
      - ⛔ قطع اینترنت
      - 🛡️ بدون فیلترشکن

  - name: 📶 انتخاب نوع اتصال
    type: select
    proxies:
      - 🌐 همه سایتا
      - 🔐 فقط سایتای فیلتر شده

  - name: دستی 🤏🏻
    type: select
    proxies:
${configList.map(cnf => "      - " + cnf.name.trim()).join("\n")}

  - name: خودکار (بهترین پینگ) 🤖
    type: url-test
    url: https://api.v2fly.org/checkConnection.svgz
    interval: 600
    tolerance: 180
    proxies:
${configList.map(cnf => "      - " + cnf.name.trim()).join("\n")}

  - name: 🇮🇷 سایتای ایرانی
    type: select
    proxies:
      - 🛡️ بدون فیلترشکن
      - 🚫 اجازه ندادن
      - 🔀 نوع انتخاب پروکسی

  - name: 🏴‍☠️ سایتای تحریمی
    type: select
    proxies:
      - 🔀 نوع انتخاب پروکسی
      - 🛡️ بدون فیلترشکن
      - 🚫 اجازه ندادن

  - name: 🆎 تبلیغات
    type: select
    proxies:
      - 🚫 اجازه ندادن
      - 🛡️ بدون فیلترشکن
      - 🔀 نوع انتخاب پروکسی

  - name: 🍃 تصفیه برنامه
    type: select
    proxies:
      - 🚫 اجازه ندادن
      - 🛡️ بدون فیلترشکن
      - 🔀 نوع انتخاب پروکسی

  - name: 🛑 رهگیری جهانی
    type: select
    proxies:
      - 🚫 اجازه ندادن
      - 🛡️ بدون فیلترشکن
      - 🔀 نوع انتخاب پروکسی

  - name: 🎮 استیم
    type: select
    proxies:
      - 🛡️ بدون فیلترشکن
      - 🚫 اجازه ندادن
      - 🔀 نوع انتخاب پروکسی

  - name: 🛡️ بدون فیلترشکن
    type: select
    proxies:
      - DIRECT

  - name: ⛔ قطع اینترنت
    type: select
    proxies:
      - REJECT

  - name: 🚫 اجازه ندادن
    type: select
    proxies:
      - REJECT

  - name: 🔐 فقط سایتای فیلتر شده
    type: select
    proxies:
      - DIRECT

  - name: 🌐 همه سایتا
    type: select
    proxies:
      - 🔀 نوع انتخاب پروکسی

rules:
  - RULE-SET,blocked,🔀 نوع انتخاب پروکسی
  - GEOIP,IR,🇮🇷 سایتای ایرانی
  - RULE-SET,iran,🇮🇷 سایتای ایرانی
  - RULE-SET,iran_other,🇮🇷 سایتای ایرانی
  - RULE-SET,steam,🎮 استیم
  - RULE-SET,Purification_ip,🍃 تصفیه برنامه,no-resolve
  - RULE-SET,Purification,🍃 تصفیه برنامه
  - RULE-SET,Global,🛑 رهگیری جهانی
  - RULE-SET,iran_ads,🆎 تبلیغات
  - RULE-SET,ads_ip,🆎 تبلیغات,no-resolve
  - RULE-SET,add,🆎 تبلیغات
  - RULE-SET,MoreAd,🆎 تبلیغات
  - RULE-SET,AntiAd,🆎 تبلیغات
  - RULE-SET,tahrim,🏴‍☠️ سایتای تحریمی
  - MATCH,📶 انتخاب نوع اتصال
`
return yaml;
}
