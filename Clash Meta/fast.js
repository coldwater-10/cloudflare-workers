const maxConfigItems = 500
const maxPerType = 300
const includeOriginalConfigs = 0

const subLinks = [
]
const cnfLinks = [
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/Eternity.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt",
  "https://raw.githubusercontent.com/mahdibland/ShadowsocksAggregator/master/EternityAir.txt"
]
const cleanIPLink = "https://raw.githubusercontent.com/coldwater-10/clash_rules/main/List%20of%20clean%20IPs.txt"
const operatorList = ["AST", "HWB", "IRC", "MBT", "MCI", "MKB", "PRS", "RTL", "SHT", "ZTL", "PIS", "DAT", "SAB", "ASR", "FAN", "ZTL", "SFR", "DID", "LAY", "MAH", "TAK", "PET", "AND", "RES", "AFR", "ARA", "SAM", "APT", "ALL", "PLUS", "TEST", "ENG", "FA", "IPV6", "IRCF"]
const addressList = ["discord.com", "cloudflare.com", "nginx.com", "cdnjs.com", "vimeo.com", "networksolutions.com"]
const fpList = ["chrome", "chrome", "chrome", "firefox", "safari", "edge", "ios", "android", "360", "qq", "random", "random"]
const alpnList = ["http/1.1", "h2,http/1.1", "h2,http/1.1"]
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
    conf.name = (conf.name ? conf.name : conf.ps) + '-Worker'
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
      name: conf.name ? conf.name : conf.ps,
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
    config.name = config.name.replace(/[^\x20-\x7E]/g, "").replace(/[\s\/:|\[\]@\(\)\.]/g, "") + "-" + proxyCount;
    proxyCount++;
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
geodata-mode: true
tcp-concurrent: true
log-level: info
external-controller: 0.0.0.0:9090
secret: ''
bind-address: '*'
unified-delay: true
profile:
  store-selected: true
  store-fake-ip: true
dns:
  enable: true
  ipv6: false
  prefer-h3: true
  nameserver-policy:
    geosite:ir:
    - https://1.1.1.1/dns-query
  enhanced-mode: fake-ip
  listen: 0.0.0.0:7874
  use-host: true
  proxy-server-nameserver:
    - https://1.1.1.1/dns-query
  nameserver:
    - 'https://1.1.1.1/dns-query#en0'
    - https://cloudflare-dns.com/dns-query
    - https://1.1.1.1/dns-query
    - 1.1.1.1
    - 1.0.0.1
    - tls://1.0.0.1:853
    - tls://1.1.1.1:853
    - tcp://1.1.1.1
    - tcp://1.1.1.1#en0
  fallback:
    - 8.8.8.8
    - 8.8.4.4
    - 4.2.2.4
    - 9.9.9.9
    - 119.29.29.29
    - 223.5.5.5
    - 119.28.28.28
    - 112.215.203.254
    - 114.114.114.114
    - 127.0.0.1
    - 114.114.114.114
    - 87.118.100.175:110
    - '8.8.8.8#en0'
    - https://dns.google/dns-query
    - https://8.8.8.8/dns-query
    - https://9.9.9.9/dns-query
    - https://rubyfish.cn/dns-query
    - https://doh.opendns.com/dns-query
    - https://doh.dns.sb/dns-query
    - https://doh.pub/dns-query
    - https://dns.alidns.com/dns-query
    - dhcp://en0
    - 'tcp://8.8.8.8#en0'
    - 'tls://8.8.8.8#en0'
    - tls://dns.google:853
    - tls://dns.rubyfish.cn:853
    - tls://dot.pub:853
  fallback-filter:
    geoip: true
    geoip-code: IR
    ipcidr:
      - '0.0.0.0/8'
      - '10.0.0.0/8'
      - '100.64.0.0/10'
      - '127.0.0.0/8'
      - '169.254.0.0/16'
      - '172.16.0.0/12'
      - '192.0.0.0/24'
      - '192.0.2.0/24'
      - '192.88.99.0/24'
      - '192.168.0.0/16'
      - '198.18.0.0/15'
      - '198.51.100.0/24'
      - '203.0.113.0/24'
      - '224.0.0.0/3'
      - '240.0.0.0/4'
      - '::1/128'
      - '64:ff9b:1::/48'
      - 'fc00::/7'
      - 'fe80::/10'
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
    url: >-
      https://github.com/bootmortis/iran-hosted-domains/releases/latest/download/clash_rules.yaml
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

proxies:
${configList.map(cnf => "  - " + JSON.stringify(cnf)).join("\n")}

proxy-groups:
  - name: 🚀 انتخاب پروکسی
    type: select
    proxies:
      - ♻️ خودکار (بهترین پینگ)
      - DIRECT
${configList.map(cnf => "      - " + cnf.name.trim()).join("\n")}
  - name: ♻️ خودکار (بهترین پینگ)
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:
${configList.map(cnf => "      - " + cnf.name.trim()).join("\n")}

  - name: 🎮 استیم
    type: select
    proxies:
      - DIRECT
      - REJECT
      - ♻️ خودکار (بهترین پینگ)
      - 🚀 انتخاب پروکسی
  - name: 🛑 رهگیری جهانی
    type: select
    proxies:
      - REJECT
      - DIRECT
      - ♻️ خودکار (بهترین پینگ)
      - 🚀 انتخاب پروکسی
  - name: 🍃 تصفیه برنامه
    type: select
    proxies:
      - REJECT
      - DIRECT
      - ♻️ خودکار (بهترین پینگ)
      - 🚀 انتخاب پروکسی
  - name: 🆎 تبلیغات
    type: select
    proxies:
      - REJECT
      - DIRECT
      - ♻️ خودکار (بهترین پینگ)
      - 🚀 انتخاب پروکسی
  - name: 🇮🇷 سایتای ایرانی
    type: select
    proxies:
      - DIRECT
      - REJECT
      - ♻️ خودکار (بهترین پینگ)
      - 🚀 انتخاب پروکسی

rules:
  - DOMAIN-SUFFIX,ir,🇮🇷 سایتای ایرانی
  - GEOIP,IR,🇮🇷 سایتای ایرانی
  - GEOSITE,category-ir,🇮🇷 سایتای ایرانی
  - RULE-SET,iran,🇮🇷 سایتای ایرانی
  - DOMAIN-KEYWORD,freeserver.top,🇮🇷 سایتای ایرانی
  - DOMAIN-KEYWORD,sermovie.xyz,🇮🇷 سایتای ایرانی
  - DOMAIN-KEYWORD,mobo-dl-filter-nakon.xyz,🇮🇷 سایتای ایرانی
  - RULE-SET,steam,🎮 استیم
  - GEOSITE,category-ads-all,🆎 تبلیغات 
  - RULE-SET,add,🆎 تبلیغات
  - RULE-SET,AntiAd,🆎 تبلیغات
  - RULE-SET,Purification,🍃 تصفیه برنامه
  - RULE-SET,Global,🛑 رهگیری جهانی
  - GEOSITE,win-spy,🛑 رهگیری جهانی
  - IP-CIDR,23.109.87.42/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.109.87.101/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,35.232.188.118/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,37.1.209.213/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.96/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.97/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.98/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.99/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.100/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.101/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.102/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.77.227.103/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.136/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.137/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.138/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.139/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.140/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.141/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.142/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,51.89.187.143/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,162.252.214.4/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,167.99.31.227/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,167.206.10.148/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,203.195.121.11/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.89.50.180/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.91.3.114/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.234.217.11/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.234.217.12/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,23.244.43.212/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,60.190.139.164/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,103.21.91.144/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,104.197.140.120/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,104.198.198.188/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,104.203.72.254/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,104.203.214.3/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,104.233.177.93/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,107.148.199.181/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,107.165.206.26/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,107.172.176.197/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,107.183.137.18/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,107.187.122.172/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,108.171.248.234/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,119.29.207.87/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,120.27.34.156/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,121.40.25.88/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,122.114.239.160/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,134.73.54.252/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,136.0.56.196/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,137.175.69.92/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,142.0.129.74/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,146.148.85.61/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,154.196.143.171/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,156.232.37.2/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,156.246.162.2/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,163.197.136.33/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,163.197.167.236/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,164.155.185.254/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,172.121.4.251/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,172.121.4.252/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,174.139.53.195/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,180.76.171.28/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,211.167.105.131/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,213.232.113.250/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,216.172.154.226/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,220.115.251.25/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,221.204.213.222/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,222.186.12.235/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,0.0.0.1/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,35.194.26.233/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,35.239.57.233/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,45.32.105.134/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,77.162.125.199/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,185.165.169.108/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,185.193.38.148/32,🆎 تبلیغات,no-resolve
  - IP-CIDR,101.227.200.0/24,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,101.227.200.11/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,101.227.200.28/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,101.227.97.240/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,124.192.153.42/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,117.177.248.17/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,117.177.248.41/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.176.139/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.176.176/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.180/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.182/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.184/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.43/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.47/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.177.80/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.182.101/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.182.102/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.182.11/32,🍃 تصفیه برنامه,no-resolve
  - IP-CIDR,223.87.182.52/32,🍃 تصفیه برنامه,no-resolve
  - MATCH,🚀 انتخاب پروکسی
`
   return yaml
}