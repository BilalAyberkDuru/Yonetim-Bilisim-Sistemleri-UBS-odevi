
//  Soruyu değiştirmek için innerHTML arkaplan değiştirmek için classlist kullan ve css ile tanımla ----- To change the question use innerHTML and change for the background use classlist and define it with css
var question = document.getElementById("question-area")


//  Cevabı değiştirmek için innerHTML arkaplan değiştirmek için classlist kullan ve css ile tanımla ----- To change the answer use innerHTML and change for the background use classlist and define it with css
var answer = document.getElementById("answer-area")

// Geri butonu için
var back = document.getElementById('backButton')

// Fonksiyonlar - Functions

// Reset butonunun en başa döndürmesi için  -- For the reset button to return to the beginning
function reset() {
    question.innerHTML = question.innerHTML = `<span class="tquestion-1">Hangi dilde devam etmek istersiniz ?</span>
    <span class="equestion-1">In which language would you like to contiune ?</span>`;
    question.removeAttribute("class");
    question.classList.add("start-question-area");
    answer.innerHTML = `<div class="image-text"><button onclick="turkish()" class="flagButton"><img src="images/turkey.png"
        alt="Türkçe" class="flagImage"></button><button class="text"
    onclick="turkish()">TÜRKÇE</button></div>
    <div class="image-text"><button onclick="english()" class="flagButton"><img
    src="images/british.png" alt="English" class="flagImage"></button><button class="text"
    onclick="english()">ENGLISH</button></div>`;
    answer.removeAttribute("class");
    answer.classList.add("start-answer-area")
}


// Sorular ve cevapları *** questions and answers

function turkish() {
    question.innerHTML = '<span class="tquestion1">Hangi tarzda bilgisayar kullanmak istersiniz ?</span>';
    question.removeAttribute('class');
    question.classList.add('turkishquestion1-area');
    answer.innerHTML = `<button onclick="laptoptr();" class="pc"><img src="images/laptop.png" alt="Laptop" class="pc">
    </button><button onclick="desktoptr();" class="pc"><img src="images/desktop.png" alt="Dekstop" class="pc"></button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer1-area');
    document.getElementById('backButton').onclick = reset;
}

function english() {
    question.innerHTML = '<span class="tquestion1">What type of computer would you like to use?</span>';
    question.removeAttribute('class');
    question.classList.add('turkishquestion1-area');
    answer.innerHTML = `<button onclick="laptopen();" class="pc"><img src="images/laptop.png" alt="Laptop" class="pc">
    </button><button onclick="desktopen();" class="pc"><img src="images/desktop.png" alt="Dekstop" class="pc"></button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer1-area');
    document.getElementById('backButton').onclick = reset;

}

function laptoptr() {
    question.innerHTML = '<span class="tquestion1">Bilgisayarı hangi amaç için kullanacaksınız ?</span>';
    question.removeAttribute('class');
    question.classList.add('turkishquestion2-area');
    answer.innerHTML = ` <div class="computerpoint">
    <div class="schoolzone">
        <div class="headpoint"><span class="headtext1">Okul</span></div>
        <div class="optionzone">
            <div><span><button class="button-1"
                        onclick="ilkogrenim();">İlköğrenim</button></span></div>
            <div><span><button class="button-1"
                        onclick="ortaogrenim();">Ortaöğrenim</button></span></div>
            <div><span><button
                        class="button-1"
                        onclick="yuksekogrenim();">Yükseköğrenim</button></span></div>
        </div>
    </div>
    <div class="officezone">
        <div class="headpoint"><span class="headtext2">Ofis</span></div>
        <div class="optionzone">
            <div><span><button class="button-1"
                        onclick="eticaret();">E-Ticaret</button></span></div>
            <div><span><button class="button-1"
                        onclick="muhasebe();">Muhasebe</button></span></div>
            <div><span><button
                        class="button-1" onclick="buro();">Büro</button></span></div>
        </div>
    </div>
    <div class="hobbyzone">
        <div class="headpoint"><span class="headtext1">Hobi</span></div>
        <div class="optionzone">
            <div><span><button class="button-1"
                        onclick="muzik();">Müzik</button></span></div>
            <div><span><button class="button-1"
                        onclick="oyun();">Oyun</button></span></div>
            <div><span><button class="button-1" onclick="ucd();">3D
                        Görüntüleme</button></span></div>
            <div><span><button class="button-1"
                        onclick="yapayzeka();">Yapay Zeka</button></span></div>
        </div>
    </div>`;
    answer.removeAttribute('class');
    document.getElementById('backButton').onclick = turkish;
}

function laptopen() {
    question.innerHTML = '<span class="tquestion1">For what purpose will you use the computer?</span>';
    question.removeAttribute('class');
    question.classList.add('turkishquestion2-area');
    answer.innerHTML = ` <div class="computerpoint">
        <div class="schoolzone">
            <div class="headpoint2"><span class="headtext1">Education</span></div>
            <div class="optionzone">
                <div><span><button class="button-1"
                            onclick="Primary();">Primary</button></span></div>
                <div><span><button class="button-1"
                            onclick="Secondary();">Secondary</button></span></div>
                <div><span><button
                            class="button-1"
                            onclick="Higher();">Higher</button></span></div>
            </div>
        </div>
        <div class="officezone">
            <div class="headpoint"><span class="headtext2">Office</span></div>
            <div class="optionzone">
                <div><span><button class="button-1"
                            onclick="Commerce();">E-Commerce</button></span></div>
                <div><span><button class="button-1"
                            onclick="Accounting();">Accounting</button></span></div>
                <div><span><button
                            class="button-1" onclick="Agency();">Agency</button></span></div>
            </div>
        </div>
        <div class="hobbyzone">
            <div class="headpoint"><span class="headtext1">Hobby</span></div>
            <div class="optionzone">
                <div><span><button class="button-1"
                            onclick="Music();">Music</button></span></div>
                <div><span><button class="button-1"
                            onclick="Game();">Game</button></span></div>
                <div><span><button class="button-1" onclick="Display();">3D Display</button></span></div>
                <div><span><button class="button-1"
                            onclick="AI();">AI</button></span></div>
            </div>
        </div>`;
    answer.removeAttribute('class');
    document.getElementById('backButton').onclick = english;
}

function Primary() {
    question.innerHTML = `<span class="tquestion1">Is your budget limited ?</span>`;
    question.removeAttribute('class');
    question.classList.add('englishQuestion1-area')
    answer.innerHTML = `<button onclick="elimitedbudget();" class="yes">Yes</button>
    <button onclick="eunlimitedbudget();" class="no">No</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer3-area')
    document.getElementById('backButton').onclick = laptopen;
}


function ilkogrenim() {
    question.innerHTML = `<span class="tquestion1">Bütçeniz kısıtlı mı ?</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion3-area')
    answer.innerHTML = `<button onclick="limitedbudget();" class="yes">Evet</button>
    <button onclick="unlimitedbudget();" class="no">Hayır</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer3-area')
    document.getElementById('backButton').onclick = laptoptr;
}

function elimitedbudget() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute("class");
    question.classList.add("turkishQuestion4-area");
    answer.innerHTML = `<div class="pcbox">
    <h2>Ixtech ThinBook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>2GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel Z3735F 1.33 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-ixtech-thinbook-intel-atom-z3735f-2gb-32gb-emmc-windows-10-home-11-6-fhd-tasinabilir-bilgisayar-fiyati,820654122.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Technopc Aura</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N3710 1.66 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-technopc-aura-ti14n37-n3710-4-gb-128-gb-ssd-hd-graphics-14-full-hd-notebook-fiyati,993739931.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus X543MA-DM1098</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4020 1.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-x543ma-dm1098-celeron-n4020-4-gb-1-tb-hdd-15-6-w10-fhd-dizustu-bilgisayar-fiyati,1367320174.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer ChromeBook Spin 511</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>LED (IPS)</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 2666MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.26 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>ChromeOS</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-chromebook-spin-511-r752t-c5y6-nx-atmey-001-n4120-8-gb-64-gb-11-6-crome-os-hd-touch-dizustu-bilgisayar-fiyati,1593257027.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo IdeaPad1</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-1-82v7006ntx-n4120-4-gb-128-gb-emmc-uhd-graphics-600-15-6-notebook-fiyati,315202316.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute("class");
    answer.classList.add("pc-list");
    document.getElementById('backButton').onclick = Primary;
}

function eunlimitedbudget() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Monster Tulpar T7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>FHD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12650H 4.7 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4060 8GB 128 Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.5kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/tulpar/monster-tulpar-t7-v20-7-5/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>MSI GF63 Thin</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144 Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4050 6GB 128 Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.86kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-gf63-thin-12ve-082xtr-i5-12450h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,399782033.html?gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiecGiBMlbGnuXGeQB3BGmRLnjAaINNq8gj3o5jriUs7JURaUSyYPHNQaAtlUEALw_wcB" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte G5 MF-E2EE333SD</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12500H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4050 6GB 96Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-g5-mf-e2ee333sd-i5-12500h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,423463136.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>Casper Excalibur G870</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4060 8G</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-excalibur-g870-1245-bvb0x-b-i5-12450h-16-gb-500-gb-ssd-rtx4060-15-6-full-hd-notebook-fiyati,417410067.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Primary;
}

function limitedbudget() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute("class");
    question.classList.add("turkishQuestion4-area");
    answer.innerHTML = `<div class="pcbox">
    <h2>Ixtech ThinBook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>2GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel Z3735F 1.33 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-ixtech-thinbook-intel-atom-z3735f-2gb-32gb-emmc-windows-10-home-11-6-fhd-tasinabilir-bilgisayar-fiyati,820654122.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Technopc Aura</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N3710 1.66 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-technopc-aura-ti14n37-n3710-4-gb-128-gb-ssd-hd-graphics-14-full-hd-notebook-fiyati,993739931.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus X543MA-DM1098</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4020 1.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-x543ma-dm1098-celeron-n4020-4-gb-1-tb-hdd-15-6-w10-fhd-dizustu-bilgisayar-fiyati,1367320174.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer ChromeBook Spin 511</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>LED (IPS)</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 2666MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.26 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>ChromeOS</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-chromebook-spin-511-r752t-c5y6-nx-atmey-001-n4120-8-gb-64-gb-11-6-crome-os-hd-touch-dizustu-bilgisayar-fiyati,1593257027.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo IdeaPad1</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-1-82v7006ntx-n4120-4-gb-128-gb-emmc-uhd-graphics-600-15-6-notebook-fiyati,315202316.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute("class");
    answer.classList.add("pc-list");
    document.getElementById('backButton').onclick = ilkogrenim;
}

function unlimitedbudget() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Monster Tulpar T7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>FHD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12650H 4.7 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4060 8GB 128 Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.5kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/tulpar/monster-tulpar-t7-v20-7-5/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>MSI GF63 Thin</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144 Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4050 6GB 128 Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.86kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-gf63-thin-12ve-082xtr-i5-12450h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,399782033.html?gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiecGiBMlbGnuXGeQB3BGmRLnjAaINNq8gj3o5jriUs7JURaUSyYPHNQaAtlUEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte G5 MF-E2EE333SD</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12500H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4050 6GB 96Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-g5-mf-e2ee333sd-i5-12500h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,423463136.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>Casper Excalibur G870</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4060 8G</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-excalibur-g870-1245-bvb0x-b-i5-12450h-16-gb-500-gb-ssd-rtx4060-15-6-full-hd-notebook-fiyati,417410067.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = ilkogrenim;
}

function Secondary() {
    question.innerHTML = `<span class="tquestion1">How much is the budget you have allocated ?</span>`;
    question.removeAttribute('class');
    question.classList.add('englishquestion2-area');
    answer.innerHTML = `<button onclick="elimitedbudgeto();" class="button-1 button-2">Under 10,000 TL</button>
    <button onclick="ethirteen();" class="button-1 button-2">Between 10,000-13,000 TL</button>
    <button onclick="etwenty();" class="button-1 button-2">Between 13.000-20.000 TL</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer4-area');
    document.getElementById('backButton').onclick = laptopen;
}

function ortaogrenim() {
    question.innerHTML = `<span class="tquestion1">Ayırdığınız bütçe ne kadardır ?</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishquestion5-area');
    answer.innerHTML = `<button onclick="limitedbudgeto();" class="button-1 button-2">10.000 TL altı</button>
    <button onclick="thirteen();" class="button-1 button-2">10.000-13.000 Arası</button>
    <button onclick="twenty();" class="button-1 button-2">13.000-20.000 Arası</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer4-area');
    document.getElementById('backButton').onclick = laptoptr;
}

function elimitedbudgeto() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute("class");
    question.classList.add("turkishQuestion4-area");
    answer.innerHTML = `<div class="pcbox">
    <h2>Ixtech ThinBook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>2GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel Z3735F 1.33 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-ixtech-thinbook-intel-atom-z3735f-2gb-32gb-emmc-windows-10-home-11-6-fhd-tasinabilir-bilgisayar-fiyati,820654122.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Technopc Aura</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N3710 1.66 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-technopc-aura-ti14n37-n3710-4-gb-128-gb-ssd-hd-graphics-14-full-hd-notebook-fiyati,993739931.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus X543MA-DM1098</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4020 1.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-x543ma-dm1098-celeron-n4020-4-gb-1-tb-hdd-15-6-w10-fhd-dizustu-bilgisayar-fiyati,1367320174.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer ChromeBook Spin 511</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>LED (IPS)</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 2666MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.26 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>ChromeOS</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-chromebook-spin-511-r752t-c5y6-nx-atmey-001-n4120-8-gb-64-gb-11-6-crome-os-hd-touch-dizustu-bilgisayar-fiyati,1593257027.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo IdeaPad1</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-1-82v7006ntx-n4120-4-gb-128-gb-emmc-uhd-graphics-600-15-6-notebook-fiyati,315202316.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute("class");
    answer.classList.add("pc-list");
    document.getElementById('backButton').onclick = Secondary;
}

function ethirteen() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Acer Extensa 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-extensa-ex215-54-intel-core-i5-1135g7-8-gb-512-gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-nx-egjey-005-fiyati,2104218925.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo Ideapad 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>>Full HD TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i3-1115G4 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-5-82fe00lctx-i3-1115g4-4-gb-256-gb-ssd-14-w11h-fhd-dizustu-bilgisayar-fiyati,1745660592.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Carper Nirvana C500</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-nirvana-c500-1155-bv00x-g-f-i5-1155g7-16-gb-500-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,430340375.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo V14 G2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i3-1115G4 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-v14-g2-82ka010xtx-intel-core-i3-1115g4-8gb-256gb-ssd-14-full-hd-notebook-fiyati,1802206165.html?gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiedYdRRipq9sSIdLasYjArfkO_zOOlly15AJkrmZ8LGE7CfsIkbmS-0aAivEEALw_wcB" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235u 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-x1502za-ej490w-i5-1235u-8-gb-512-gb-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,277850311.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Secondary;
}

function etwenty() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>HP G25 G7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 3500U 2.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-255-g7-2m3e3es-ryzen-5-3500u-4-gb-256-gb-ssd-vega-8-15-6-full-hd-notebook-fiyati,961749887.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Huawei MateBook D15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.56 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-huawei-matebook-d15-i5-1155g7-8-gb-256-gb-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,274579713.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer TravelMate P2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.4 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX330</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-travelmate-p2-tmp215-53g-nx-vptey-005-i5-1135g7-8-gb-512-gb-ssd-mx330-15-6-full-hd-notebook-fiyati,27287064.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 14S-DQ40005NT</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-dizustu-bilgisayar-14-inc-fhd-ips-intel-core-i5-1155g7-8-gb-ram-intel-iris-x-512-gb-ssd-freedos-siyah-68n17ea-fiyati,1982166275.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire A315-57G</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1035G1</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX330 2GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href=https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-3-a315-57g-nx-hzrey-001-i5-1035g1-8-gb-ram-256-gb-ssd-2-gb-mx330-15-6-w10h-dizustu-bilgisayar-fiyati,1590281531.html"" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Monster Huma H4</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14.1"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235U 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/huma/monster-huma-h4-v5-1-11-rose-gold/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Secondary;
}

function limitedbudgeto() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute("class");
    question.classList.add("turkishQuestion4-area");
    answer.innerHTML = `<div class="pcbox">
    <h2>Ixtech ThinBook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>2GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel Z3735F 1.33 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-ixtech-thinbook-intel-atom-z3735f-2gb-32gb-emmc-windows-10-home-11-6-fhd-tasinabilir-bilgisayar-fiyati,820654122.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Technopc Aura</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 1600MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N3710 1.66 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-technopc-aura-ti14n37-n3710-4-gb-128-gb-ssd-hd-graphics-14-full-hd-notebook-fiyati,993739931.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus X543MA-DM1098</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4020 1.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel HD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-x543ma-dm1098-celeron-n4020-4-gb-1-tb-hdd-15-6-w10-fhd-dizustu-bilgisayar-fiyati,1367320174.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer ChromeBook Spin 511</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>LED (IPS)</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>11.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 2666MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.26 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>ChromeOS</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-chromebook-spin-511-r752t-c5y6-nx-atmey-001-n4120-8-gb-64-gb-11-6-crome-os-hd-touch-dizustu-bilgisayar-fiyati,1593257027.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo IdeaPad1</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel N4120</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 600</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-1-82v7006ntx-n4120-4-gb-128-gb-emmc-uhd-graphics-600-15-6-notebook-fiyati,315202316.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute("class");
    answer.classList.add("pc-list");
    document.getElementById('backButton').onclick = ortaogrenim;
}

function thirteen() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Acer Extensa 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-extensa-ex215-54-intel-core-i5-1135g7-8-gb-512-gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-nx-egjey-005-fiyati,2104218925.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo Ideapad 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>>Full HD TN Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i3-1115G4 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-ideapad-5-82fe00lctx-i3-1115g4-4-gb-256-gb-ssd-14-w11h-fhd-dizustu-bilgisayar-fiyati,1745660592.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Carper Nirvana C500</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-nirvana-c500-1155-bv00x-g-f-i5-1155g7-16-gb-500-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,430340375.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo V14 G2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i3-1115G4 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-v14-g2-82ka010xtx-intel-core-i3-1115g4-8gb-256gb-ssd-14-full-hd-notebook-fiyati,1802206165.html?gad_source=1&gclid=Cj0KCQiAkeSsBhDUARIsAK3tiedYdRRipq9sSIdLasYjArfkO_zOOlly15AJkrmZ8LGE7CfsIkbmS-0aAivEEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235u 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-x1502za-ej490w-i5-1235u-8-gb-512-gb-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,277850311.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = ortaogrenim;
}

function twenty() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>HP G25 G7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 3500U 2.10 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-255-g7-2m3e3es-ryzen-5-3500u-4-gb-256-gb-ssd-vega-8-15-6-full-hd-notebook-fiyati,961749887.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Huawei MateBook D15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.56 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-huawei-matebook-d15-i5-1155g7-8-gb-256-gb-ssd-iris-xe-graphics-15-6-full-hd-notebook-fiyati,274579713.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer TravelMate P2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.4 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX330</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-travelmate-p2-tmp215-53g-nx-vptey-005-i5-1135g7-8-gb-512-gb-ssd-mx330-15-6-full-hd-notebook-fiyati,27287064.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 14S-DQ40005NT</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-dizustu-bilgisayar-14-inc-fhd-ips-intel-core-i5-1155g7-8-gb-ram-intel-iris-x-512-gb-ssd-freedos-siyah-68n17ea-fiyati,1982166275.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire A315-57G</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1035G1</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX330 2GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href=https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-3-a315-57g-nx-hzrey-001-i5-1035g1-8-gb-ram-256-gb-ssd-2-gb-mx330-15-6-w10h-dizustu-bilgisayar-fiyati,1590281531.html"" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Monster Huma H4</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14.1"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235U 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/huma/monster-huma-h4-v5-1-11-rose-gold/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = ortaogrenim;
}

function yuksekogrenim() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Huawei MateBook 14</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2160x1440</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 4600H 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-huawei-matebook-14-ryzen-5-4600h-8-gb-512-gb-ssd-radeon-graphics-14-2k-notebook-fiyati,1326972887.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP Pavilion 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-pavillion-laptop-15-eh0000nt-2n2k2ea-r7-4700u-8-gb-512-gb-ssd-15-6-w10h-fhd-dizustu-bilgisayar-fiyati,1579813376.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Air</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>IPS LED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560xx1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>13"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>8 Çekirdekli M1 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>7 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.29 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-air/?afid=p238%7Cs4iyNz6v2-dc_mtid_187079nc38483_pcrid_665173239589_pgrid_78607208608_pntwk_g_pchan__pexid__&cid=aos-tr-kwgo-mac--slid---product-" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>MSI Modern 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-dizustu-bilgisayar-14-inc-fhd-ips-intel-core-i5-1155g7-8-gb-ram-intel-iris-x-512-gb-ssd-freedos-siyah-68n17ea-fiyati,1982166275.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Huawei MateBook D16</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 300Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/c/?z=125&v=11707&s=1&p=1954151587&c=20155&g=485996449&f=%2Fr%2F%3Fpr%3D1954151587%26vd%3D11707%26pg%3D485996449" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>OLED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5500U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-oled-d513ua-l1346-ryzen-5-5500u-8-gb-512-gb-ssd-15-6-free-dos-dizustu-bilgisayar-fiyati,1997573595.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}

function Higher() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Huawei MateBook 14</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2160x1440</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 4600H 3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-huawei-matebook-14-ryzen-5-4600h-8-gb-512-gb-ssd-radeon-graphics-14-2k-notebook-fiyati,1326972887.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP Pavilion 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-pavillion-laptop-15-eh0000nt-2n2k2ea-r7-4700u-8-gb-512-gb-ssd-15-6-w10h-fhd-dizustu-bilgisayar-fiyati,1579813376.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Air</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>IPS LED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560xx1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>13"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>8 Çekirdekli M1 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>7 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.29 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-air/?afid=p238%7Cs4iyNz6v2-dc_mtid_187079nc38483_pcrid_665173239589_pgrid_78607208608_pntwk_g_pchan__pexid__&cid=aos-tr-kwgo-mac--slid---product-" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>MSI Modern 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-dizustu-bilgisayar-14-inc-fhd-ips-intel-core-i5-1155g7-8-gb-ram-intel-iris-x-512-gb-ssd-freedos-siyah-68n17ea-fiyati,1982166275.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Huawei MateBook D16</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 300Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/c/?z=125&v=11707&s=1&p=1954151587&c=20155&g=485996449&f=%2Fr%2F%3Fpr%3D1954151587%26vd%3D11707%26pg%3D485996449" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>OLED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5500U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-oled-d513ua-l1346-ryzen-5-5500u-8-gb-512-gb-ssd-15-6-free-dos-dizustu-bilgisayar-fiyati,1997573595.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function eticaret() {
    question.innerHTML = `<span class="tquestion1">Yaklaşık istemci sayısı nedir ?</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishquestion5-area');
    answer.innerHTML = `<button onclick="fifty();" class="button-1 button-2">50~</button>
    <button onclick="fivehundred();" class="button-1 button-2">500~</button>
    <button onclick="athousand();" class="button-1 button-2">1000~</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer4-area');
    document.getElementById('backButton').onclick = laptoptr;
}

function Commerce() {
    question.innerHTML = `<span class="tquestion1">What is the approximate number of clients ?</span>`;
    question.removeAttribute('class');
    question.classList.add('englishquestion2-area');
    answer.innerHTML = `<button onclick="efifty();" class="button-1 button-2">50~</button>
    <button onclick="efivehundred();" class="button-1 button-2">500~</button>
    <button onclick="eathousand();" class="button-1 button-2">1000~</button>`;
    answer.removeAttribute('class');
    answer.classList.add('turkishAnswer4-area');
    document.getElementById('backButton').onclick = laptopen;
}

function efifty() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Category = 50~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1</li>
        <li><div class="icon"></div>CPU : Intel i5 3rd generation or better</li>
        <li><div class="icon"></div>Memory : 2GB or higher</li>
        <li><div class="icon"></div>HDD : 100GB</li>
        <li><div class="icon"></div>Network Bandwidth : 10 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Commerce;
}

function efivehundred() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Category = 500~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1</li>
        <li><div class="icon"></div>CPU : Intel i 3rd generation or better</li>
        <li><div class="icon"></div>Memory : 4GB or higher</li>
        <li><div class="icon"></div>HDD : 1TB</li>
        <li><div class="icon"></div>Network Bandwidth : 100 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Commerce;
}

function eathousand() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Category = 1000~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1 Windows Server 2008 R2 SP1</li>
        <li><div class="icon"></div>CPU : Intel Xeon E5-2600</li>
        <li><div class="icon"></div>Memory : 8GB or higher</li>
        <li><div class="icon"></div>HDD : 2TB (RAID 1)</li>
        <li><div class="icon"></div>Network Bandwidth : 100 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = Commerce;
}

function fifty() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Kategori = 50~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1</li>
        <li><div class="icon"></div>CPU : Intel i5 3rd generation or better</li>
        <li><div class="icon"></div>Memory : 2GB or higher</li>
        <li><div class="icon"></div>HDD : 100GB</li>
        <li><div class="icon"></div>Network Bandwidth : 10 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = eticaret;
}

function fivehundred() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Kategori = 500~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1</li>
        <li><div class="icon"></div>CPU : Intel i 3rd generation or better</li>
        <li><div class="icon"></div>Memory : 4GB or higher</li>
        <li><div class="icon"></div>HDD : 1TB</li>
        <li><div class="icon"></div>Network Bandwidth : 100 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = eticaret;
}

function athousand() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Kategori = 1000~</h2>
    <ul>
        <li><div class="icon"></div>Server Construction : Single Server</li>
        <li><div class="icon"></div>Recommended OS : Windows 7 SP1 Windows 8.1 Windows Server 2008 R2 SP1</li>
        <li><div class="icon"></div>CPU : Intel Xeon E5-2600</li>
        <li><div class="icon"></div>Memory : 8GB or higher</li>
        <li><div class="icon"></div>HDD : 2TB (RAID 1)</li>
        <li><div class="icon"></div>Network Bandwidth : 100 Mbps</li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = eticaret;
}

function muhasebe() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>>Dell Latitude 5310</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>13.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-10310U 1.7GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Professional</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-latitude-5310-n015l5310132in1-w-i5-10310u-16-gb-512-gb-ssd-uhd-graphics-13-3-fiyati,719147366.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Zenbook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7-4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA Geforce MX350</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.9 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.n11.com/urun/asus-zenbook-15-q507iq-202bl-r7-4700u-8-gb-256-gb-ssd-2-gb-mx350-156-w10h-dizustu-bilgisayar-1993970?magaza=yasincomputer&utm_source=comp_akakce&utm_medium=cpc&utm_campaign=akakce_genel" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD1</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 1.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA MX450</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-5-a515-56g-nx-at2ey-001-i5-1135g7-8-gb-ram-512-gb-ssd-mx450-15-6-full-hd-notebook-fiyati,245379792.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}

function buro() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Huawei MateBook D16</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>FHD 300Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/c/?z=125&v=11707&s=1&p=1954151587&c=20155&g=485996449&f=%2Fr%2F%3Fpr%3D1954151587%26vd%3D11707%26pg%3D485996449" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>OLED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5500U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-oled-d513ua-l1346-ryzen-5-5500u-8-gb-512-gb-ssd-15-6-free-dos-dizustu-bilgisayar-fiyati,1997573595.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Monster Huma H4</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14.1"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235U 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/huma/monster-huma-h4-v5-1-11-rose-gold/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 255 G9</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200 MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-nb-6q8n2es-255-g9-amd-ryzen-5-5625u-8gb-512gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-fiyati,2075690192.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Extensa 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-extensa-ex215-54-intel-core-i5-1135g7-8-gb-512-gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-nx-egjey-005-fiyati,2104218925.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo V15 G3</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD TN</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 5825U 2 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-v15-g3-82tv004mtx-ryzen-7-5825u-16-gb-512-gb-ssd-radeon-graphics-15-6-full-hd-notebook-fiyati,428534362.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Casper Nirvana X400</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-nirvana-x400-1155-8v00t-g-f-i5-1155g7-8-gb-500-gb-ssd-14-w11h-dizustu-bilgisayar-fiyati,246257564.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}


function Accounting() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>>Dell Latitude 5310</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>13.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-10310U 1.7GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Professional</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-latitude-5310-n015l5310132in1-w-i5-10310u-16-gb-512-gb-ssd-uhd-graphics-13-3-fiyati,719147366.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button"Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Zenbook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7-4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA Geforce MX350</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.9 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.n11.com/urun/asus-zenbook-15-q507iq-202bl-r7-4700u-8-gb-256-gb-ssd-2-gb-mx350-156-w10h-dizustu-bilgisayar-1993970?magaza=yasincomputer&utm_source=comp_akakce&utm_medium=cpc&utm_campaign=akakce_genel" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD1</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 1.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA MX450</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-5-a515-56g-nx-at2ey-001-i5-1135g7-8-gb-ram-512-gb-ssd-mx450-15-6-full-hd-notebook-fiyati,245379792.html" class="linkbutton"><button class="purchase-button"Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function Agency() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Huawei MateBook D16</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>FHD 300Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/c/?z=125&v=11707&s=1&p=1954151587&c=20155&g=485996449&f=%2Fr%2F%3Fpr%3D1954151587%26vd%3D11707%26pg%3D485996449" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Vivobook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>OLED</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5500U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-vivobook-15-oled-d513ua-l1346-ryzen-5-5500u-8-gb-512-gb-ssd-15-6-free-dos-dizustu-bilgisayar-fiyati,1997573595.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Monster Huma H4</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14.1"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1235U 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/huma/monster-huma-h4-v5-1-11-rose-gold/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 255 G9</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200 MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-nb-6q8n2es-255-g9-amd-ryzen-5-5625u-8gb-512gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-fiyati,2075690192.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Extensa 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-extensa-ex215-54-intel-core-i5-1135g7-8-gb-512-gb-ssd-freedos-15-6-fhd-tasinabilir-bilgisayar-nx-egjey-005-fiyati,2104218925.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Lenovo V15 G3</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD TN</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 5825U 2 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.7 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-v15-g3-82tv004mtx-ryzen-7-5825u-16-gb-512-gb-ssd-radeon-graphics-15-6-full-hd-notebook-fiyati,428534362.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Casper Nirvana X400</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>14"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1155G7 2.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel Iris Xe Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-nirvana-x400-1155-8v00t-g-f-i5-1155g7-8-gb-500-gb-ssd-14-w11h-dizustu-bilgisayar-fiyati,246257564.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function Music() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Microsoft Surface Pro 6</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD LCD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2736x1824</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>12.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-8250U 1.6 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 620</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>770 gr</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 </li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/tablet/en-ucuz-microsoft-surface-pro-6-intel-core-i5-8-gb-128-gb-ssd-12-3-fiyati,374339630.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Alienware AW15R3</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 3.8 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVDIA GeForce GTX 1060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.59 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.amazon.ca/Alienware-AW15R3-7001SLV-PUS-Gaming-Laptop-Generation/dp/B01NCOSCY7?th=1" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 255 G7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>HD Ready</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 3 3200U 2.6 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Vega 3</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-255-g7-255s4es-ryzen-3-3200u-4-gb-256-gb-ssd-radeon-vega-3-15-6-notebook-fiyati,1017985173.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 1.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX450</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-5-a515-56g-nx-at2ey-001-i5-1135g7-8-gb-ram-512-gb-ssd-mx450-15-6-full-hd-notebook-fiyati,245379792.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell XPS 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i-12700H 3.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3050 TI 4GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.92 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Professional</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-xps-15-xps159520adlp1900-i7-12700h-16-gb-1-tb-ssd-rtx3050ti-15-6-full-hd-notebook-fiyati,1947443340.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function Game() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Monster Tulpar T7 v20.6.2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-13700H 3.70GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTXX 4060 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.5kg kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/tulpar/monster-tulpar-t7-v20-6-2/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>MSI Titan GT77HX</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus ROG Strix Scar 18</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>Casper Excalibur G870</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4060 8G</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-excalibur-g870-1245-bvb0x-b-i5-12450h-16-gb-500-gb-ssd-rtx4060-15-6-full-hd-notebook-fiyati,417410067.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>HP OMEN 17-ck</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD 240Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-13700HX 3.7GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4080 12GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-omen-17-ck2010nt-intel-core-i7-13700hx-17-3-32-gb-ram-2-tb-ssd-12-gb-rtx4080-qhd-freedos-gaming-laptop-fiyati,426464502.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>Lenovo Legion 5 Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H 3.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-legion-5-82rf00svtx-i7-12700h-32-gb-1-tb-ssd-rtx3060-16-notebook-fiyati,319891428.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>Dell G15 Gaming 5521</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD  WVA</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H 3.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-g15-5521-g55212300seu-i7-12700h-16gb-1tbssd-rtx3060-15-6-fullhd-freedos-tasinabilir-bilgisayar-fiyati,2110843749.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte Aorus 15P</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-10870H 2.2GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3070 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-aorus-15p-xc-i7-10870h-32-gb-512-gb-ssd-rtx3070-15-6-full-hd-notebook-fiyati,1132748240.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Game Garaj Slayer2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3070TI 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.60 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-game-garaj-slayer2-10xl-3070ti-c2-i7-12700h-32gb-1tb-ssd-rtx3070ti-8gb-17-3-free-dos-fiyati,1876684654.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Predator Helios</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>MSI Katana GF76</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-11800H 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA 3050TI 4GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-katana-gf76-11ud-059xtr-i7-11800h-16-gb-512-gb-ssd-rtx-3050ti-17-3-full-hd-notebook-fiyati,1165144942.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function Display() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP Pavilion 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-pavillion-laptop-15-eh0000nt-2n2k2ea-r7-4700u-8-gb-512-gb-ssd-15-6-w10h-fhd-dizustu-bilgisayar-fiyati,1579813376.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Zenbook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7-4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA Geforce MX350</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.9 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.n11.com/urun/asus-zenbook-15-q507iq-202bl-r7-4700u-8-gb-256-gb-ssd-2-gb-mx350-156-w10h-dizustu-bilgisayar-1993970?magaza=yasincomputer&utm_source=comp_akakce&utm_medium=cpc&utm_campaign=akakce_genel" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus ROG Strix Scar 18</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
<h2>MSI Cyborg 2023</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12650H</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4060 4GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.98 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-cyborg-15-a12ve-216xtr-i7-12650h-16-gb-1-tb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,457243317.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2></h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div></li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>


<div class="pcbox">
<h2>Dell Inspiron 16 5625</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>MSI Titan GT77HX</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>Gigabyte Aorus 15P</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-10870H 2.2GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3070 8GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-aorus-15p-xc-i7-10870h-32-gb-512-gb-ssd-rtx3070-15-6-full-hd-notebook-fiyati,1132748240.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>Acer Predator Helios</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
</ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function AI() {
    question.innerHTML = `<span class="tquestion1">Here are our suggestions for you.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `            <div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte G5 MF-E2EE333SD</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12500H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4050 6GB 96Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-g5-mf-e2ee333sd-i5-12500h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,423463136.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Predator Helios</h2>
    <ul>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
    <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
    <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
    <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
    <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
    <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
    <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
    </ul>
    </div>

    <div class="pcbox">
        <h2>Asus ROG Strix Scar 18</h2>
        <ul>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
            <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
            <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
            <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
            <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
            <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
            <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
        </ul>
    </div>

    <div class="pcbox">
        <h2>MSI Titan GT77HX</h2>
        <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Purchase</button></a></li>
        </ul>
        </div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptopen;
}

function muzik() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Microsoft Surface Pro 6</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD LCD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2736x1824</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>12.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-8250U 1.6 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics 620</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>770 gr</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 </li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/tablet/en-ucuz-microsoft-surface-pro-6-intel-core-i5-8-gb-128-gb-ssd-12-3-fiyati,374339630.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Alienware AW15R3</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 2400MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 3.8 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVDIA GeForce GTX 1060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.59 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.amazon.ca/Alienware-AW15R3-7001SLV-PUS-Gaming-Laptop-Generation/dp/B01NCOSCY7?th=1" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell Inspiron 16 5625</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP 255 G7</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>HD Ready</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1366x768</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>4GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 3 3200U 2.6 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Vega 3</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-255-g7-255s4es-ryzen-3-3200u-4-gb-256-gb-ssd-radeon-vega-3-15-6-notebook-fiyati,1017985173.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Aspire 5</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-1135G7 1.4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA MX450</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.8 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-aspire-5-a515-56g-nx-at2ey-001-i5-1135g7-8-gb-ram-512-gb-ssd-mx450-15-6-full-hd-notebook-fiyati,245379792.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Dell XPS 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i-12700H 3.5 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3050 TI 4GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.92 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Professional</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-xps-15-xps159520adlp1900-i7-12700h-16-gb-1-tb-ssd-rtx3050ti-15-6-full-hd-notebook-fiyati,1947443340.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}

function oyun() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Monster Tulpar T7 v20.6.2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-13700H 3.70GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTXX 4060 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.5kg kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.monsternotebook.com.tr/tulpar/monster-tulpar-t7-v20-6-2/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>MSI Titan GT77HX</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus ROG Strix Scar 18</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>>Casper Excalibur G870</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12450H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA RTX4060 8G</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div><=2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-casper-excalibur-g870-1245-bvb0x-b-i5-12450h-16-gb-500-gb-ssd-rtx4060-15-6-full-hd-notebook-fiyati,417410067.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>HP OMEN 17-ck</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD 240Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-13700HX 3.7GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4080 12GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-omen-17-ck2010nt-intel-core-i7-13700hx-17-3-32-gb-ram-2-tb-ssd-12-gb-rtx4080-qhd-freedos-gaming-laptop-fiyati,426464502.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>Lenovo Legion 5 Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H 3.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-lenovo-legion-5-82rf00svtx-i7-12700h-32-gb-1-tb-ssd-rtx3060-16-notebook-fiyati,319891428.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>


<div class="pcbox">
    <h2>Dell G15 Gaming 5521</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD  WVA</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H 3.5GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-g15-5521-g55212300seu-i7-12700h-16gb-1tbssd-rtx3060-15-6-fullhd-freedos-tasinabilir-bilgisayar-fiyati,2110843749.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte Aorus 15P</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-10870H 2.2GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3070 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-aorus-15p-xc-i7-10870h-32-gb-512-gb-ssd-rtx3070-15-6-full-hd-notebook-fiyati,1132748240.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Game Garaj Slayer2</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12700H</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 3070TI 8GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.60 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-game-garaj-slayer2-10xl-3070ti-c2-i7-12700h-32gb-1tb-ssd-rtx3070ti-8gb-17-3-free-dos-fiyati,1876684654.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Predator Helios</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>MSI Katana GF76</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-11800H 2.3 GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA 3050TI 4GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.6 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-katana-gf76-11ud-059xtr-i7-11800h-16-gb-512-gb-ssd-rtx-3050ti-17-3-full-hd-notebook-fiyati,1165144942.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}

function ucd() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `<div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>HP Pavilion 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS Panel</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7 4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-hp-pavillion-laptop-15-eh0000nt-2n2k2ea-r7-4700u-8-gb-512-gb-ssd-15-6-w10h-fhd-dizustu-bilgisayar-fiyati,1579813376.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus Zenbook 15</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 7-4700U</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>>NVIDIA Geforce MX350</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.9 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.n11.com/urun/asus-zenbook-15-q507iq-202bl-r7-4700u-8-gb-256-gb-ssd-2-gb-mx350-156-w10h-dizustu-bilgisayar-1993970?magaza=yasincomputer&utm_source=comp_akakce&utm_medium=cpc&utm_campaign=akakce_genel" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Asus ROG Strix Scar 18</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
<h2>MSI Cyborg 2023</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-12650H</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4060 4GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1.98 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-cyborg-15-a12ve-216xtr-i7-12650h-16-gb-1-tb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,457243317.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2></h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div></li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>Intel UHD Graphics</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>


<div class="pcbox">
<h2>Dell Inspiron 16 5625</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>AMD Ryzen 5 5625U</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>AMD Radeon Graphics</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1 - 2 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-dell-inspiron-16-5625-i5625101wh-ryzen-5-5625u-8-gb-256-gb-ssd-radeon-graphics-16-notebook-fiyati,156092604.html?gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5ya5VqG5XpjJo7C8Qt5eOtYbkrUTyLRA93jqSnvwvaL0z3433cODQWUaArocEALw_wcB" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>MSI Titan GT77HX</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>Gigabyte Aorus 15P</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD IPS</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>32GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-10870H 2.2GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX3070 8GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-aorus-15p-xc-i7-10870h-32-gb-512-gb-ssd-rtx3070-15-6-full-hd-notebook-fiyati,1132748240.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>

<div class="pcbox">
<h2>Acer Predator Helios</h2>
<ul>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
<li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
<li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
<li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
<li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
<li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
<li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
<li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
</ul>
</div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}

function yapayzeka() {
    question.innerHTML = `<span class="tquestion1">Sizin için önerilerimiz şunlardır.</span>`;
    question.removeAttribute('class');
    question.classList.add('turkishQuestion4-area');
    answer.innerHTML = `            <div class="pcbox">
    <h2>Apple MacBook Pro</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Liquid Retina XDR Ekran</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>3456x2234</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>16.2"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16 GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>12 Çekirdekli M2 Çip</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>19 Çekirdekli ve 16 Çekirdekli Neural Engine</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>MacOS</li>
        <li class="purchase"><a target="_blank" href="https://www.apple.com/tr/macbook-pro/" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Gigabyte G5 MF-E2EE333SD</h2>
    <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>15.6"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>8GB 3200MHz Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i5-12500H 3.3GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX4050 6GB 96Bit</li>
        <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>1-2kg</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-gigabyte-g5-mf-e2ee333sd-i5-12500h-8-gb-512-gb-ssd-rtx4050-15-6-full-hd-notebook-fiyati,423463136.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
</div>

<div class="pcbox">
    <h2>Acer Predator Helios</h2>
    <ul>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD</li>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>1920x1080</li>
    <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
    <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
    <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i7-7700HQ 2.8GHz</li>
    <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA GTX 1060 6GB</li>
    <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>2.4 kg</li>
    <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win10 Home</li>
    <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-acer-predator-helios-300-ph317-51-70kp-nh-q29ey-00-i7-7700hq-16-gb-1-tb-256-gb-ssd-gtx-1060-17-3-notebook-fiyati,107558997.html?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOU4TVz1_QC8qTSqyB_IqcxMQwIrlyHEk4Gbh_F43pMOSWle53fH7fRoCHBgQAvD_BwE" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
    </ul>
    </div>

    <div class="pcbox">
        <h2>Asus ROG Strix Scar 18</h2>
        <ul>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>QHD IPS</li>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>2560x1600</li>
            <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>18"</li>
            <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB 4800MHz Ram</li>
            <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX</li>
            <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
            <li><div class="icon"><img src="images/weight.png" alt="screen icon" width="15em" height="15em"></div>3.1 kg</li>
            <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>FreeDos</li>
            <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-asus-rog-strix-scar-18-g834jy-n6040-13-nesil-intel-i9-13980hx-32gb-ram-2tb-ssd-16gb-rtx4090-18-inc-qhd-240hz-fiyati,282560068.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
        </ul>
    </div>

    <div class="pcbox">
        <h2>MSI Titan GT77HX</h2>
        <ul>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>Full HD 144Hz</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>4K</li>
        <li><div class="icon"><img src="images/screen.png" alt="screen icon" width="15em" height="15em"></div>17.3"</li>
        <li><div class="icon"><img src="images/ram.png" alt="screen icon" width="15em" height="15em"></div>16GB Ram</li>
        <li><div class="icon"><img src="images/processor.png" alt="screen icon" width="15em" height="15em"></div>Intel i9-13980HX 4GHz</li>
        <li><div class="icon"><img src="images/g-card.png" alt="screen icon" width="15em" height="15em"></div>NVIDIA RTX 4090 16GB</li>
        <li><div class="icon"><img src="images/system.png" alt="screen icon" width="15em" height="15em"></div>Win11 Home</li>
        <li class="purchase"><a target="_blank" href="https://www.akakce.com/laptop-notebook/en-ucuz-msi-titan-gt77hx-13vi-069tr-i9-13980hx-128-gb-4-tb-ssd-rtx4090-17-3-notebook-fiyati,274887014.html" class="linkbutton"><button class="purchase-button">Satın al</button></a></li>
        </ul>
        </div>`;
    answer.removeAttribute('class');
    answer.classList.add('pc-list');
    document.getElementById('backButton').onclick = laptoptr;
}