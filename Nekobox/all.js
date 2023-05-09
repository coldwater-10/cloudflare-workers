const maxConfigItems = 2000
const maxPerType = 600
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
  "https://raw.githubusercontent.com/vpei/Free-Node-Merge/main/o/node.txt",
  "https://raw.githubusercontent.com/Jsnzkpg/Jsnzkpg/Jsnzkpg/Jsnzkpg",
  "https://raw.fastgit.org/codingbox/Free-Node-Merge/main/node.txt",
  "https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/V2Ray",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/ss-sub",
  "https://raw.githubusercontent.com/ssrsub/ssr/master/trojan",
  "https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray",
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
  "https://tunnel.nbproject.wiki/7tNk9VH7uGdMVjs3qp8/f8a44475-fe9e-4087-bcb5-d640886365aa/all.txt",
  "https://sahnama.com/s9No4vnWft1Q/df68f678-62c3-4799-91a8-4d301e8cf565/all.txt",
  "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list_raw.txt",
  "https://raw.githubusercontent.com/LonUp/NodeList/main/V2RAY/Latest.txt",
  "https://raw.githubusercontent.com/awesome-vpn/awesome-vpn/master/all"
]
const cleanIPLink = "https://raw.githubusercontent.com/coldwater-10/clash_rules/main/List%20of%20clean%20IPs.txt"
const operatorList = ["AST", "HWB", "IRC", "MBT", "MCI", "MKB", "PRS", "RTL", "SHT", "ZTL", "PIS", "DAT", "SAB", "ASR", "FAN", "ZTL", "SFR", "DID", "LAY", "MAH", "TAK", "PET", "AND", "RES", "AFR", "ARA", "SAM", "APT", "ALL", "PLUS", "TEST", "ENG", "FA", "IPV6", "IRCF", "ANTY"]
const addressList = ["discord.com", "cloudflare.com", "nginx.com", "cdnjs.com", "vimeo.com", "networksolutions.com"]
const fpList = ["randomized", "randomized", "360", "android", "android"]
const alpnList = ["http/1.1", "h3", "h3,http/1.1", "h3,http/1.1", "h3,http/1.1"]
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
    config.name = config.name.replace(/[^\x20-\x7E]/g, "").replace(/[\s\/:|\[\]@\(\)\.]/g, "") + "-" + Math.floor(Math.random() * 10000)
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
`
   return yaml
}
