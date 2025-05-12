const commandMap = {
    'ls': 'dir', 'cp': 'copy', 'mv': 'move', 'rm': 'del', 'mkdir': 'mkdir', 'rmdir': 'rmdir',
    'cat': 'type', 'echo': 'echo', 'grep': 'find', 'clear': 'cls', 'cd': 'chdir', 'ifconfig': 'ipconfig',
    'ps aux': 'tasklist', 'kill': 'taskkill', 'shutdown': 'shutdown', 'netstat': 'netstat', 'ping': 'ping',
    'traceroute': 'tracert', 'uname -a': 'systeminfo', 'hostname': 'hostname', 'whoami': 'whoami',
    'export': 'set', 'chmod': 'attrib', 'diff': 'fc', 'tree': 'tree', 'read -p "Press any key to continue..."': 'pause',
    'systemctl': 'sc', 'cron': 'schtasks', 'timedatectl': 'w32tm', 'arp': 'arp', 'route': 'route',
    'mkfs': 'format', 'fdisk': 'diskpart', 'fsck': 'chkdsk', 'grub-mkconfig': 'bcdedit', 'invoke-rc.d': 'gpupdate',
    'getent group': 'gpresult', 'sudo': 'runas', 'gsettings': 'reg', 'bzip2': 'compact', 'bunzip2': 'expand',
};

// Inverser le commandMap pour une recherche plus rapide
const invertedCommandMap = Object.fromEntries(Object.entries(commandMap).map(([k, v]) => [v, k]));

function convert_command(input_) {
    try {
        const opt = document.getElementById('mode').value;
        const output = input_.split('\n').map(line => 
            line.split(" ").map(w => {
                const command = opt === 'windows/linux' ? commandMap[w] : invertedCommandMap[w];
                return command || w; // Retourne la commande convertie ou le mot d'origine
            }).join(" ")
        ).join("\n");
        
        document.getElementById('OUT').value = output;
    } catch (e) {
        console.error("Erreur lors de la conversion des commandes:", e);
    }
}

// Fonction de debounce pour réduire la fréquence des appels
let debounceTimer;
document.getElementById("IN").addEventListener("input", function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const input = this.value;
        convert_command(input);
    }, 300); // Délai de 300 ms
});
