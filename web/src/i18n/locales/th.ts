const en = {
    translation: {
      head: {
        desktop: 'Remote Desktop',
        login: 'เข้าสู่ระบบ',
        changePassword: 'เปลี่ยนรหัสผ่าน',
        terminal: 'Terminal',
        wifi: 'Wi-Fi'
      },
      auth: {
        login: 'เข้าสู่ระบบ',
        placeholderUsername: 'ชื่อผู้ใช้งาน',
        placeholderPassword: 'รห้สผ่าน',
        placeholderPassword2: 'ใส่รหัสผ่านอีกครั้ง',
        noEmptyUsername: 'ต้องใส่ชื่อผู้ใช้งาน',
        noEmptyPassword: 'ต้องใส้รหัสผ่าน',
        noAccount: 'ไม่สามารถอ่านข้อมูลได้, โปรดรีเฟรชหน้าเว็บหรือรีเซ็ตรหัสผ่าน',
        invalidUser: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
        error: 'เกิดข้อผิดพลาด',
        changePassword: 'เปลี่ยนรหัสผ่าน',
        changePasswordDesc: 'เพื่อความปลอดภัย, โปรดเปลี่ยนรหัสผ่าน!',
        differentPassword: 'รหัสผ่านไม่ตรงกัน',
        illegalUsername: 'ชื่อผู้ใช้ไม่สามารถมีอักขระที่ไม่ถูกต้อง',
        illegalPassword: 'รหัสผ่านไม่สามารถมีอักขระที่ไม่ถูกต้อง',
        forgetPassword: 'ลืมรหัสผ่าน',
        ok: 'โอเค',
        cancel: 'ยกเลิก',
        loginButtonText: 'เข้าสู่ระบบ',
        tips: {
          reset1:
            'เพื่อรีเช็ทรหัสผ่าน, กดปุ่ม BOOT ค้างไว้ 10 วินาที.',
          reset2: 'สำหรับวิธีแบบลงลึก โปรดอ่าน::',
          reset3: 'ค่าเริ่มต้นบัญชีเว็บ:',
          reset4: 'ค่าเริ่มต้นบัญชี SSH:',
          change1: 'โปรดทราบ การกระทำนี้จะเปลี่ยนรหัสดีงกล่าว:',
          change2: 'รหัสผ่านเว็บไชต์',
          change3: 'รหัส Root ของระบบ (ใช้เข้า SSH)',
          change4: 'เพื่อรีเช็ทรหัสผ่าน, กรุณากดปุ่ม BOOT บนอุปกรณ์ NanoKVM ค้างไว้.'
        }
      },
      wifi: {
        title: 'Wi-Fi',
        description: 'ตั้งค้า Wi-Fi สำหรับ NanoKVM',
        success: 'กรุณาตรวจสอบสถานะเครื่องข่ายของ NanoKVM และไปที่ IP address ใหม่',
        failed: 'เกิดข้อผิดพลาด กรุณาลองใหม่.',
        confirmBtn: 'โอเค',
        finishBtn: 'เสร็จ'
      },
      screen: {
        video: 'โหมดวีดีโอ',
        resolution: 'ความคมชัด',
        auto: 'อัตโนมัติ',
        autoTips:
          "อาการภาพฉีกขาดหรือเมาส์ไม่ตรงตำแหน่งอาจเกิดขึ้นที่ความละเอียดบางระดับ แนะนำให้ปรับความละเอียดของคอมพิวเตอร์ต้นทางหรือปิดโหมดอัตโนมัติ",
        fps: 'FPS',
        customizeFps: 'กำหนดเอง',
        quality: 'คุณภาพ',
        qualityLossless: 'ไม่สูญเสียคุณภาพ',
        qualityHigh: 'สูง',
        qualityMedium: 'กลาง',
        qualityLow: 'ต่ำ',
        frameDetect: 'ตรวจจับเฟรม',
        frameDetectTip:
          "ระบบจะคำนวณความแตกต่างระหว่างเฟรม และหยุดส่งสตรีมวิดีโอเมื่อไม่พบการเปลี่ยนแปลงบนหน้าจอของคอมพิวเตอร์ต้นทาง",
        resetHdmi: 'รีเช็ท HDMI'
      },
      keyboard: {
        paste: 'วาง',
        tips: 'รองรับเฉพาะตัวอักษรและสัญลักษณ์มาตรฐานของแป้นพิมพ์เท่านั้น',
        placeholder: 'กรุณาป้อน',
        submit: 'ยืนยัน',
        virtual: 'คีบอร์ด',
        ctrlaltdel: 'Ctrl+Alt+Del'
      },
      mouse: {
        default: 'ตัวชี้เริ่มต้น',
        pointer: 'ตัวชี้แบบชี้',
        cell: 'ตัวชี้แบบเซลล์',
        text: 'ตัวชี้แบบข้อความ',
        grab: 'ตัวชี้แบบจับ',
        hide: 'ซ่อนตัวชี้',
        mode: 'โหมดเมาส์',
        absolute: 'โหมดสัมบูรณ์',
        relative: 'โหมดสัมพัทธ์',
        requestPointer: 'กำลังใช้โหมดสัมพัทธ์ กรุณาคลิกที่เดสก์ท็อปเพื่อรับตัวชี้เมาส์',
        resetHid: 'รีเซ็ต HID'
      },
      image: {
        title: 'ดิสก์จำลอง',
        loading: 'กำลังโหลด...',
        empty: 'ไม่พบดิสก์',
        mountFailed: 'การติดตั้งล้มเหลว',
        mountDesc:
          "ในบางระบบ, จะต้อง eject ดิสก์จำลองก่อนที่จะใส่ดิสก์ใหม่.",
        tips: {
            title: 'วิธีการอัปโหลด',
            usb1: 'เชื่อมต่อ NanoKVM กับคอมพิวเตอร์ของคุณผ่าน USB',
            usb2: 'ตรวจสอบให้แน่ใจว่าได้เปิดใช้งานดิสก์เสมือนแล้ว (ตั้งค่า - ดิสก์เสมือน)',
            usb3: 'เปิดดิสก์บนคอมพิวเตอร์ของคุณและคัดลอกไฟล์อิมเมจไปยังไดเรกทอรีหลักของดิสก์',
            scp1: 'ตรวจสอบให้แน่ใจว่า NanoKVM และคอมพิวเตอร์ของคุณอยู่ในเครือข่ายเดียวกัน',
            scp2: 'เปิดเทอร์มินัลบนคอมพิวเตอร์ของคุณและใช้คำสั่ง SCP เพื่ออัปโหลดไฟล์อิมเมจไปยังไดเรกทอรี /data บน NanoKVM',
            scp3: 'ตัวอย่าง: scp <ที่อยู่ของไฟล์> root@<ip อุปกรณ์>:/data',
            tfCard: 'การ์ด TF',
            tf1: 'วิธีนี้รองรับแค่บนระบบปฏิบัติการ Linux',
            tf2: 'นำการ์ด TF ออกจาก NanoKVM',
            tf3: 'ใส่การ์ด TF ลงในเครื่องอ่านการ์ดและเชื่อมต่อกับคอมพิวเตอร์ของคุณ',
            tf4: 'คัดลอกไฟล์อิมเมจไปยังไดเรกทอรี /data บนการ์ด TF',
            tf5: 'ใส่การ์ด TF กลับเข้า NanoKVM'
        }
      },
      script: {
        title: 'สคริปต์',
        upload: 'อัปโหลด',
        run: 'เรียกใช้',
        runBackground: 'เรียกใช้ในพื้นหลัง',
        runFailed: 'การเรียกใช้ล้มเหลว',
        attention: 'ความสนใจ',
        delDesc: 'คุณแน่ใจที่จะลบไฟล์นี้หรือไม่?',
        confirm: 'ใช่',
        cancel: 'ไม่ใช่',
        delete: 'ลบ',
        close: 'ปิด'
    },
      terminal: {
        title: 'เทอร์มินอล',
        nanokvm: 'เทอร์มินอลของ NanoKVM',
        serial: 'เทอร์มินอลของ Serial Port',
        serialPort: 'Serial Port',
        serialPortPlaceholder: 'กรุณาเลือก serial port',
        baudrate: 'Baud rate',
        confirm: 'ยืนยัน'
      },
      wol: {
        title: 'Wake-on-LAN',
        sending: 'กำลังส่งคำสั่ง...',
        sent: 'ส่งคำสั่งแล้ว',
        input: 'กรุณาใส่ MAC Address ของเครื่องที่ต้องการปลุก',
        ok: 'ยืนยัน'
      },
      download: {
        title: 'Download Image',
        input: 'Please enter a remote image URL',
        ok: 'Ok',
        disabled: '/data partition is RO, so we cannot download the image'
      },
      power: {
        title: 'Power',
        reset: 'Reset',
        power: 'Power',
        powerShort: 'Power (short click)',
        powerLong: 'Power (long click)'
      },
      settings: {
        title: 'Settings',
        about: {
          title: 'About NanoKVM',
          information: 'Information',
          ip: 'IP',
          mdns: 'mDNS',
          application: 'Application Version',
          applicationTip: 'NanoKVM web application version',
          image: 'Image Version',
          imageTip: 'NanoKVM system image version',
          deviceKey: 'Device Key',
          community: 'Community'
        },
        appearance: {
          title: 'Appearance',
          display: 'Display',
          language: 'Language',
          menuBar: 'Menu Bar',
          menuBarDesc: 'Display icons in the menu bar'
        },
        device: {
          title: 'Device',
          oled: {
            title: 'OLED',
            description: 'OLED screen automatically sleep',
            0: 'Never',
            15: '15 sec',
            30: '30 sec',
            60: '1 min',
            180: '3 min',
            300: '5 min',
            600: '10 min',
            1800: '30 min',
            3600: '1 hour'
          },
          wifi: {
            title: 'Wi-Fi',
            description: 'Configure Wi-Fi',
            setBtn: 'Config'
          },
          ssh: {
            description: 'Enable SSH remote access',
            tip: 'Set a strong password before enabling (Account - Change Password)'
          },
          disk: 'Virtual Disk',
          diskDesc: 'Mount virtual U-disk on the remote host',
          network: 'Virtual Network',
          networkDesc: 'Mount virtual network card on the remote host'
        },
        tailscale: {
          title: 'Tailscale',
          memory: {
            title: 'Memory optimization',
            tip: "When memory usage exceeds the limit, garbage collection is performed more aggressively to attempt to free up memory. it's recommended to set to 50MB if using Tailscale. A Tailscale restart is required for the change to take effect.",
            disable: 'Disable'
          },
          restart: 'Are you sure to restart Tailscale?',
          stop: 'Are you sure to stop Tailscale?',
          stopDesc: 'Log out Tailscale and disable automatic startup on boot.',
          loading: 'Loading...',
          notInstall: 'Tailscale not found! Please install.',
          install: 'Install',
          installing: 'Installing',
          failed: 'Install failed',
          retry: 'Please refresh and try again. Or try to install manually',
          download: 'Download the',
          package: 'installation package',
          unzip: 'and unzip it',
          upTailscale: 'Upload tailscale to NanoKVM directory /usr/bin/',
          upTailscaled: 'Upload tailscaled to NanoKVM directory /usr/sbin/',
          refresh: 'Refresh current page',
          notLogin:
            'The device has not been bound yet. Please login and bind this device to your account.',
          urlPeriod: 'This url is valid for 10 minutes',
          login: 'Login',
          loginSuccess: 'Login Success',
          enable: 'Enable Tailscale',
          deviceName: 'Device Name',
          deviceIP: 'Device IP',
          account: 'Account',
          logout: 'Logout',
          logout2: 'Sure to logout?',
          uninstall: 'Uninstall Tailscale',
          okBtn: 'Yes',
          cancelBtn: 'No'
        },
        update: {
          title: 'Check for Updates',
          queryFailed: 'Get version failed',
          updateFailed: 'Update failed. Please retry.',
          isLatest: 'You already have the latest version.',
          available: 'An update is available. Are you sure to update?',
          updating: 'Update started. Please wait...',
          confirm: 'Confirm',
          cancel: 'Cancel'
        },
        account: {
          title: 'Account',
          webAccount: 'Web Account Name',
          password: 'Password',
          updateBtn: 'Change',
          logoutBtn: 'Logout'
        }
      }
    }
  };
  
  export default en;
  