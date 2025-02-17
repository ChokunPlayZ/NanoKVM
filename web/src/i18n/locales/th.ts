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
        paste: 'Paste',
        tips: 'Only standard keyboard letters and symbols are supported',
        placeholder: 'Please input',
        submit: 'Submit',
        virtual: 'Keyboard',
        ctrlaltdel: 'Ctrl+Alt+Del'
      },
      mouse: {
        default: 'Default cursor',
        pointer: 'Pointer cursor',
        cell: 'Cell cursor',
        text: 'Text cursor',
        grab: 'Grab cursor',
        hide: 'Hide cursor',
        mode: 'Mouse mode',
        absolute: 'Absolute mode',
        relative: 'Relative mode',
        requestPointer: 'Using relative mode. Please click desktop to get mouse pointer.',
        resetHid: 'Reset HID'
      },
      image: {
        title: 'Image',
        loading: 'Loading...',
        empty: 'Nothing Found',
        mountFailed: 'Mount Failed',
        mountDesc:
          "In some systems, it's necessary to eject the virtual disk on the remote host before mounting the image.",
        tips: {
          title: 'How to upload',
          usb1: 'Connect the NanoKVM to your computer via USB.',
          usb2: 'Ensure that the virtual disk is mounted (Settings - Virtual Disk).',
          usb3: 'Open the virtual disk on your computer and copy the image file to the root directory of the virtual disk.',
          scp1: 'Make sure the NanoKVM and your computer are on the same local network.',
          scp2: 'Open a terminal on your computer and use the SCP command to upload the image file to the /data directory on the NanoKVM.',
          scp3: 'Example: scp your-image-path root@your-nanokvm-ip:/data',
          tfCard: 'TF Card',
          tf1: 'This method is supported on Linux system',
          tf2: 'Get TF card from the NanoKVM (for the FULL version, disassemble the case first).',
          tf3: 'Insert the TF card into a card reader and connect it to your computer.',
          tf4: 'Copy the image file to the /data directory on the TF card.',
          tf5: 'Insert the TF card into the NanoKVM.'
        }
      },
      script: {
        title: 'Script',
        upload: 'Upload',
        run: 'Run',
        runBackground: 'Run Background',
        runFailed: 'Run failed',
        attention: 'Attention',
        delDesc: 'Are you sure to delete this file?',
        confirm: 'Yes',
        cancel: 'No',
        delete: 'Delete',
        close: 'Close'
      },
      terminal: {
        title: 'Terminal',
        nanokvm: 'NanoKVM Terminal',
        serial: 'Serial Port Terminal',
        serialPort: 'Serial Port',
        serialPortPlaceholder: 'Please enter the serial port',
        baudrate: 'Baud rate',
        confirm: 'Ok'
      },
      wol: {
        title: 'Wake-on-LAN',
        sending: 'Sending command...',
        sent: 'Command sent',
        input: 'Please enter the MAC',
        ok: 'Ok'
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
  