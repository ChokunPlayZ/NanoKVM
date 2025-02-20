package network

import (
	"NanoKVM-Server/proto"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
)

const (
	StaticIPConfigFile  = "/boot/eth.nodhcp"
	HostNameConfigFile  = "/boot/hostname"
	DNSServerConfigFile = "/boot/resolv.conf"
)

func (s *Service) GetNetworkInfo(c *gin.Context) {
	var rsp proto.Response

	data := &proto.GetWifiRsp{}

	rsp.OkRspWithData(c, data)
	log.Debugf("network info: %s", state)
}