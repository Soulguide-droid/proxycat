document.addEventListener('DOMContentLoaded', function() {
    const buttonsGrid = document.querySelector('.buttons-grid');
    const dateHeader = document.getElementById('current-date');

    // Устанавливаем сегодняшнюю дату вверху страницы
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    dateHeader.textContent += new Date().toLocaleDateString('ru-RU', options);

    // ==========================================
    // ВСТАВЬТЕ СЮДА ВАШИ ССЫЛКИ ИЗ TXT-ФАЙЛА
    // Каждая ссылка должна быть в кавычках и через запятую.
    // Если строка пустая или содержит пробелы, она проигнорируется.
    const proxyLinks = [
        "tg://proxy?server=proxy65.arixo.shop&port=443&secret=ee3ceb82a3b4254e6e6ae1971021f3c209617669746f2e7275",
"tg://proxy?server=tg.soika.site.mtproto.icu&port=443&secret=ee28f8ec821a175c1890c4b4da2342f50f67616261676f6f6c2e73697465",
"tg://proxy?server=tg.soika.site&port=443&secret=ee28f8ec821a175c1890c4b4da2342f50f67616261676f6f6c2e73697465",
"tg://proxy?server=ad1.arixo.shop&port=443&secret=eee09f46368021f91b92ad3dea14c7ac896164312e617269786f2e73686f70",
"tg://proxy?server=ad3.arixo.shop&port=443&secret=ee722fba8d97b9027b5fc4deb041b290cb6164332e617269786f2e73686f70",
"tg://proxy?server=proxy.vmelectronics.ru&port=443&secret=ee6164732e78352e72759c6509729477",
"tg://proxy?server=proxy.lodkirmm.ru&port=8443&secret=ee16309abd572d284b309ef26bd7a3f685d0b7d0ba70726f78792e6c6f646b69726d6d2e7275",
"tg://proxy?server=dev-lab.ngstream.top&port=443&secret=dd6a45d23efc54b5f08389d7685051dcd3",
"tg://proxy?server=ardesvpn1.ru&port=8443&secret=ee05cf8e164f926f4a664b2404d276a1d6617264657376706e312e7275",
"tg://proxy?server=ad2.arixo.shop&port=443&secret=eed09b88cbbd4e744865b890e5a0bd26876164322e617269786f2e73686f70",
"tg://proxy?server=s1.postpulse.space&port=443&secret=ee402900cd57c3daef160c3a2aef80a29c6164312e617269786f2e73686f70",
"tg://proxy?server=cloud.mtproxy.pw&port=443&secret=ee3f8a91c2d7e04b6a9f12c5e8370bd4aa786170692e6f7a6f6e2e7275",
"tg://proxy?server=s3.postpulse.space&port=443&secret=eede09f27f5ed0877907c31d53a7aca5526164332e617269786f2e73686f70",
"tg://proxy?server=85.192.33.204&port=8443&secret=ee9e1dde0de02a2e7c22d10e2fff84101374676e6e2e6c697665",
"tg://proxy?server=app-tag.ngstream.top&port=443&secret=dd70dab8b3c4b1528f54956269b6c0ec35",
"tg://proxy?server=aerie.sosun4ik.top&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=syzygy.sosun4ik.top&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=skein.chunkycorp.shop&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=sisu.proxytales.life&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=eerie.proxytales.life&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=s2.postpulse.space&port=443&secret=ee263bf8f7de3c2b04aa1c008ab21e4a566164322e617269786f2e73686f70",
"tg://proxy?server=petrichor.slarkfat.icu&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=213.219.212.4&port=443&secret=dd9e1dde0de02a2e7c22d10e2fff841013",
"tg://proxy?server=app.kvakzon.top&port=443&secret=eed8c5a0bc36cd4c65fb0ccf24b4309d0f6170702e6b76616b7a6f6e2e746f70",
"tg://proxy?server=phloe.slarkfat.icu&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=portal.malevich7.top&port=443&secret=eee88d425e6bb7750fa9ef99a37432ad16706f7274616c2e6d616c6576696368372e746f70",
"tg://proxy?server=secure.medhata.org&port=443&secret=ee97c440b6fc10d01379a0ca5e7075a9297365637572652e6d6564686174612e6f7267",
"tg://proxy?server=fast.garden-troll.life&port=443&secret=ee02242f5cfccda66733fbae55d4fe628d666173742e67617264656e2d74726f6c6c2e6c696665",
"tg://proxy?server=web.utkanos.life&port=443&secret=ee36fd02bb86fbc4266de3a70114c13a247765622e75746b616e6f732e6c696665",
"tg://proxy?server=secure.gorbushkin.click&port=443&secret=eed670b22b89d073390327d03894d223fa7365637572652e676f72627573686b696e2e636c69636b",
"tg://proxy?server=cdn.savelyev.click&port=443&secret=eec7a0d41c67c2a5d6adf926c20d369ad363646e2e736176656c7965762e636c69636b",
"tg://proxy?server=app.rknwatch.digital&port=443&secret=ee7fb8b71569b0536bb15039e506afb65a6170702e726b6e77617463682e6469676974616c",
"tg://proxy?server=portal.balalaika.click&port=443&secret=ee5ae5279b60e4b6424d71e8cbd973a347706f7274616c2e62616c616c61696b612e636c69636b",
"tg://proxy?server=go.antitspu.com&port=443&secret=ee384880aa36690ef47c455bedf049055c676f2e616e7469747370752e636f6d",
"tg://proxy?server=net.pelmeshka.top&port=443&secret=eefe12a66db0212791c3ba09df4f6123806e65742e70656c6d6573686b612e746f70",
"tg://proxy?server=link.mishkalapy.life&port=443&secret=ee3f7873753de9de7d62bf4f6e2034b2d66c696e6b2e6d6973686b616c6170792e6c696665",
"tg://proxy?server=mirror.malevich7.top&port=443&secret=ee291d58b9456c5824c8675ad904b2386e6d6972726f722e6d616c6576696368372e746f70",
"tg://proxy?server=gate.klyuch1k.org&port=443&secret=eeae941a76ec4acf04faabaf8a24571080676174652e6b6c79756368316b2e6f7267",
"tg://proxy?server=fast.mtmajestic.space&port=853&secret=616cf892574b078aab3f73e63b8b7df4",
"tg://proxy?server=fast.mtmajestic.space&port=853&secret=dd616cf892574b078aab3f73e63b8b7df4",
"tg://proxy?server=fast.mtmajestic.space&port=853&secret=ee616cf892574b078aab3f73e63b8b7df4786170692e6f7a6f6e2e7275",
"tg://proxy?server=coca.mtmajestic.space&port=443&secret=ee616cf892574b078aab3f73e63b8b7df4786170692e6f7a6f6e2e7275",
"tg://proxy?server=coca.mtmajestic.space&port=853&secret=ee616cf892574b078aab3f73e63b8b7df4786170692e6f7a6f6e2e7275",
"tg://proxy?server=37.139.34.75&port=443&secret=dd2ed7517b077ef414e24b106e0729335d",
"tg://proxy?server=login.klyuch1k.org&port=443&secret=eecb24cfd140162ae643c8e43b331fa7cb6c6f67696e2e6b6c79756368316b2e6f7267",
"tg://proxy?server=ad2.arixo.shop&port=443&secret=ee722fba8d97b9027b5fc4deb041b290cb6164332e617269786f2e73686f70",
"tg://proxy?server=edge.rknwatch.digital&port=443&secret=ee4150a680b9414d8e96ed4a8e7524e2e6656467652e726b6e77617463682e6469676974616c",
"tg://proxy?server=go.pelmeshka.top&port=443&secret=ee238184d019311e0e9666994a44ee43ad676f2e70656c6d6573686b612e746f70",
"tg://proxy?server=ethereal.arixo.shop&port=443&secret=ee5f8b31d631d413f83f1f6e8da233f69c657468657265616c2e617269786f2e73686f70",
"tg://proxy?server=boost.telehelp.top&port=443&secret=eed4f42b03cae4d1a0f2e2a51454a6e0d7626f6f73742e74656c6568656c702e746f70",
"tg://proxy?server=login.veltura.digital&port=443&secret=ee4d94e300e81887ff06746b069e359bb16c6f67696e2e76656c747572612e6469676974616c",
"tg://proxy?server=webgah.masachoset-belosan.co.uk&port=443&secret=ee1603010200010001fc030386e24c3ad37765622e79656b74616e65742e636f6d",
"tg://proxy?server=51.250.90.143&port=443&secret=ee6a0333c1db3f8eaba5c76731a44203b6617669746f2e7275",
"tg://proxy?server=mtp2.hlebushek.com&port=443&secret=ee8263f1fdfbfa0629c67c40d208806873706574726f766963682e7275",
"tg://proxy?server=cstudio.semiconductor.mistloop.ir&port=443&secret=ee1603010200010001fc030386e24c3add626973636f7474692e79656b74616e65742e636f6d",
"tg://proxy?server=87.199.79-294.ir&port=443&secret=ee1603010200010001fc030386e24c3add626973636f7474692e79656b74616e65742e636f6d",
"tg://proxy?server=adn-stg.yourservice.janosup.ir&port=443&secret=ee1603010200010001fc030386e24c3add626973636f7474692e79656b74616e65742e636f6d",
"tg://proxy?server=rf1.data-edge.fyi&port=443&secret=ee4b8b183c13a3c4b63ddf54838b7e52527275747562652e7275",
    ];
    // ==========================================

    let validCount = 0;

    proxyLinks.forEach((link, rawIndex) => {
        const cleanLink = link.trim();
        
        // Проверяем, что строка не пустая и начинается с tg://
        if (cleanLink.length > 0 && cleanLink.startsWith('tg://')) {
            validCount++;
            
            const btn = document.createElement('a');
            btn.className = 'proxy-btn';
            btn.href = cleanLink;
            
            // Нумерация идет только по реально добавленным ссылкам (Proxy 01, Proxy 02...)
            const orderNumber = String(validCount).padStart(2, '0');
            btn.textContent = `Proxy ${orderNumber}`;
            
            buttonsGrid.appendChild(btn);
        }
    });

    // Если ни одной валидной ссылки не найдено
    if (validCount === 0) {
        buttonsGrid.innerHTML = '<p style="grid-column: 1 / -1; color: #666;">Список прокси пуст.</p>';
    }
});