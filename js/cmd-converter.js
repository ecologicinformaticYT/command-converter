const commandMap = {
    'ls': 'dir', 'cp': 'copy', 'mv': 'move', 'rm': 'del', 'mkdir': 'mkdir', 'rmdir': 'rmdir',
    'cat': 'type', 'echo': 'echo', 'grep': 'find', 'clear': 'cls', 'cd': 'chdir', 'ifconfig': 'ipconfig',
    'ps aux': 'tasklist', 'kill': 'taskkill', 'shutdown': 'shutdown', 'netstat': 'netstat', 'ping': 'ping',
    'traceroute': 'tracert', 'uname -a': 'systeminfo', 'hostname': 'hostname', 'whoami': 'whoami',
    'export': 'set', 'chmod': 'attrib', 'diff': 'fc', 'tree': 'tree', 'read -p "Press any key to continue..."': 'pause',
    'systemctl': 'sc', 'cron': 'schtasks', 'timedatectl': 'w32tm', 'arp': 'arp', 'route': 'route',
    'mkfs': 'format', 'fdisk': 'diskpart', 'fsck': 'chkdsk', 'grub-mkconfig': 'bcdedit', 'invoke-rc.d': 'gpupdate',
    'getent group': 'gpresult', 'sudo': 'runas', 'gsettings': 'reg', 'bzip2': 'compact', 'bunzip2': 'expand',
    'dir': 'ls', 'copy': 'cp', 'move': 'mv', 'del': 'rm', 'type': 'cat', 'find': 'grep', 'cls': 'clear',
    'chdir': 'cd', 'ipconfig': 'ifconfig', 'tasklist': 'ps aux', 'taskkill': 'kill', 'set': 'export',
    'attrib': 'chmod', 'comp': 'diff', 'fc': 'diff', 'pause': 'read -p "Press any key to continue..."',
    'sc': 'systemctl', 'schtasks': 'cron', 'w32tm': 'timedatectl', 'format': 'mkfs', 'diskpart': 'fdisk',
    'sfc': 'fsck', 'chkdsk': 'fsck', 'bootcfg': 'grub-mkconfig', 'bcdedit': 'grub-mkconfig',
    'gpupdate': 'invoke-rc.d', 'gpresult': 'getent group', 'runas': 'sudo', 'reg': 'gsettings',
    'compact': 'bzip2', 'expand': 'bunzip2', 'cacls': 'chmod', 'icacls': 'chmod'
};

function convert_command(input_) {
    try {
        const opt = document.getElementById('mode').value;
        const output = input_.split('\n').map(line => 
            line.split(" ").map(w => {
                const command = opt === 'windows/linux' ? commandMap[w] : Object.keys(commandMap).find(key => commandMap[key] === w);
                return command || w;
            }).join(" ")
        ).join("\n");
        
        document.getElementById('OUT').value = output;
    } catch (e) {
        console.log(e);
    }
}

setInterval(function() {
    const input = document.getElementById("IN").value;
    convert_command(input);
}, 1000);
