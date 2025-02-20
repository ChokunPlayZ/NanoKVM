import { http } from '@/lib/http.ts';

// wake on lan
export function wol(mac: string) {
  const data = {
    mac
  };
  return http.post('/api/network/wol', data);
}

// get wake-on-lan macs history
export function getWolMacs() {
  return http.get('/api/network/wol/mac');
}

export function deleteWolMac(mac: string) {
  return http.request({
    method: 'delete',
    url: '/api/network/wol/mac',
    data: { mac }
  });
}

// get wifi information
export function getWiFi() {
  return http.get('/api/network/wifi');
}

// connect wifi
export function connectWifi(ssid: string, password: string) {
  const data = {
    ssid,
    password
  };
  return http.post('/api/network/wifi', data);
}

// get network information
export function getNetwork() {
  return http.get('/api/network/ip');
}

// set network settings (dhcp/static)
export function setNetworkSettings(mode: ('static' | 'dhcp'), dns?: string[], ip?: string, netmask?: string, gateway?: string) {
  const data: any = {
    mode,
    dns
  };

  if (ip) data.ip = ip;
  if (netmask) data.netmask = netmask;
  if (gateway) data.gateway = gateway;

  return http.post('/api/network/ip', data);
}