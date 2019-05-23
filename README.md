Hi,

The WakeOnLan module needs the package "wol". You can install it in your gladys folder. 

<i>npm install wol</i>

Please check your bios settings to approve the wake on lan. 

Different settings :
- Wake Up On Lan : enabled
- Wake Up On PCI Device : enabled
- Power on PCIE devices : enabled
- Power on PCI : enabled
- Wake On Lan on S4, S5

This settings change according to your brand. 

In addition, On windows 10, 
- Windows + R
- write "hdwwiz.cpl"
- find your network card driver Right-click on this and clic on "Propriety".
- Clic on "power management" and approve "Magic paquet".

To install gladys,
Go in modules -> Advances
The title is "wakeonlan"
The version is "0.0.1"
The git repository is https://github.com/ISoon14/WakeOnLan-Gladys.git
The slug is wakeonlan

Save this settings and reboot gladys after the installation.

You must create a parameters in your account. The key is "WAKEONLAN_mac" and the value is your physical address.

To know your physical address, you can make "ipconfig /all" on your windows computer and it's a adresse with this format : XX-XX-XX-XX-XX-XX. Replace ":" by "-".

Enjoy ! 
