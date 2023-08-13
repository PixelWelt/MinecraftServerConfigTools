window.onload = function () {
    const ramSlider = document.getElementById("ramSlider");
    const ramValue = document.getElementById("ramValue");
    const generateBtn  = document.getElementById("generateBtn");
    const outputContainer = document.getElementById("output");

    ramSlider.oninput = function(){
        ramValue.innerHTML = "RAM: " + this.value +"gb"; 
    }

    generateBtn.onclick = function(){
        var server;
        serverRam = 1024*ramSlider.value;
        serverRamText = `-Xmx${serverRam}M -Xms${serverRam}`
        cmd = `java -jar ${serverRamText}`
        if(document.getElementById("spigot").checked){
            console.log("spigot");
            server ="spigot*.jar"
            cmd = `${cmd} ${server}`
        }else if(document.getElementById("vanilla").checked){
            console.log("vanilla");
            server = "minecraft_server*.jar"
            outputContainer.innerHTML = `${cmd} ${server}`
            return;
        }else if(document.getElementById("paper").checked){
            console.log("paper");
            server = "paper*.jar";
            cmd = `${cmd} ${server}`;
        }else{
            alert("Please choose a server type");
            return;
        }
        if(document.getElementById("agreeToEula").checked){
            cmd = `${cmd} -Dcom.mojang.eula.agree=true`;
        }
        if(document.getElementById("noConsole").checked){
            cmd = `${cmd} --noconsole`;
        }
        if(document.getElementById("noGUI").checked){
            cmd = `${cmd} --nogui`;
        }
        if(!document.getElementById("port").value == ""){
            cmd = `${cmd} -port ${document.getElementById("port").value}`;
        }
        
        outputContainer.innerHTML = cmd ;
        navigator.clipboard.writeText(cmd);
        outputContainer.style.visibility = "visible";
        
    }
}



