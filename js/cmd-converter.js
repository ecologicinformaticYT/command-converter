//Debian à Windows
const DebToWin_ = {
    'ls': 'dir',
    'cp': 'copy',
    'mv': 'move',
    'rm': 'del',
    'mkdir': 'mkdir',
    'rmdir': 'rmdir',
    'cat': 'type',
    'echo': 'echo',
    'grep': 'find',
    'clear': 'cls',
    'cd': 'chdir',
    'ifconfig': 'ipconfig',
    'ps aux': 'tasklist',
    'kill': 'taskkill',
    'shutdown': 'shutdown',
    'netstat': 'netstat',
    'ping': 'ping',
    'traceroute': 'tracert',
    'uname -a': 'systeminfo',
    'hostname': 'hostname',
    'whoami': 'whoami',
    'export': 'set',
    'chmod': 'attrib',
    'diff': 'comp',
    'diff': 'fc',
    'tree': 'tree',
    'read -p "Press any key to continue..."': 'pause',
    'systemctl': 'sc',
    'cron': 'schtasks',
    'timedatectl': 'w32tm',
    'arp': 'arp',
    'route': 'route',
    'mkfs': 'format',
    'fdisk': 'diskpart',
    'fsck': 'sfc',
    'fsck': 'chkdsk',
    'grub-mkconfig': 'bootcfg',
    'grub-mkconfig': 'bcdedit',
    'invoke-rc.d': 'gpupdate',
    'getent group': 'gpresult',
    'sudo': 'runas',
    'gsettings': 'reg',
    'bzip2': 'compact',
    'bunzip2': 'expand'
};
//Windows à Debian
const WinToDeb_ = {
    'dir': 'ls',
    'copy': 'cp',
    'move': 'mv',
    'del': 'rm',
    'mkdir': 'mkdir',
    'rmdir': 'rmdir',
    'type': 'cat',
    'echo': 'echo',
    'find': 'grep',
    'cls': 'clear',
    'chdir': 'cd',
    'ipconfig': 'ifconfig',
    'tasklist': 'ps aux',
    'taskkill': 'kill',
    'shutdown': 'shutdown',
    'netstat': 'netstat',
    'ping': 'ping',
    'tracert': 'traceroute',
    'systeminfo': 'uname -a',
    'hostname': 'hostname',
    'whoami': 'whoami',
    'set': 'export',
    'attrib': 'chmod',
    'comp': 'diff',
    'fc': 'diff',
    'start': '',
    'assoc': '',
    'ftype': '',
    'tree': 'tree',
    'pause': 'read -p "Press any key to continue..."',
    'sc': 'systemctl',
    'schtasks': 'cron',
    'w32tm': 'timedatectl',
    'arp': 'arp',
    'route': 'route',
    'format': 'mkfs',
    'diskpart': 'fdisk',
    'sfc': 'fsck',
    'chkdsk': 'fsck',
    'bootcfg': 'grub-mkconfig',
    'bcdedit': 'grub-mkconfig',
    'gpupdate': 'invoke-rc.d',
    'gpresult': 'getent group',
    'runas': 'sudo',
    'reg': 'gsettings',
    'compact': 'bzip2',
    'expand': 'bunzip2',
    'cacls': 'chmod',
    'icacls': 'chmod'
};

//fonction de conversion
function convert_command(input_){

    try {
        const opt = document.getElementById('mode').value;

        let output = '';

        let input = input_.split('\n');

        //remplacement
        if (opt == 'windows/linux'){
            input.forEach(line => {
                let words=line.split(" ")
                words.forEach(w=>{
                    if(WinToDeb_[w]) output+=`${WinToDeb_[w]} `
                    else output+=w+" "
                })
            output+="\n"
            })
        } else if (opt == 'linux/windows') {
            input.forEach(line => {
                let words=line.split(" ")
                words.forEach(w=>{
                    if(DebToWin_[w]) output+=`${DebToWin_[w]} `
                    else output+=w+" "
                })
            output+="\n"
            })
        }

        //affichage de la sortie
        document.getElementById('OUT').value = output;
    } catch (e){
        console.log(e);
    }
}


setInterval(function() {
    // Récupérer la valeur d'un champ de saisie
    let input = document.getElementById("IN").value;
    let result = convert_command(input);
    console.log(result);
}, 1000);

