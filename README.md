# LI Serator Bloker

Je jednostavna ekstenzija za Chrome browser, napravljena prevashodno iz lične frustracije zbog (povremeno) katastrofalnog sadržaja u LinkedIn feed-u.  
Iako blokiram i "unfollow"-ujem neke osobe, određene individue ipak uspijevaju da završe u mom feed-u a zaista mi se ne čitaju a ni ne gledaju koje kakve gluposti (ovo je lični utisak a ne potreba da vrijeđam bilo koga).

Stoga, ova ekstenzija (bar se nadam) efikasno blokira komentare, lajkove i postove od ljudi/kompanija koje ne želite da viđate, jer se ispostavilo da LinkedIn-ov ugrađeni block feature jednostavno nije dovoljan.  
Ja nisam Frontend programer a ni UI nije oblast mog djelovanja pa vas molim da eventualne greške u funkcionalnosti ili kodu ispravite ili da mi bar ukažete na iste.

Ista je testirana na mašinama novije gnereacije (MacOS i Windows) i autor ne snosi nikakvu odgvornost u slučaju da ekstenzija ne radi na vašem rašunaru.

Svaki PR za poboljšanje funkcionalnosti je dobrodošao!

## ⚙️ Instalacija kroz Developer Mode

1. Kloniraj repozitorijum:
   ```bash
   git clone https://github.com/ascepanovic/li-serator-bloker.git

2. Otvori Google Chrome i idi u adres bar-u na:
    ```bash
   chrome://extensions/

3. U gornjem desnom uglu uključi Developer mode.

4. U gornjem lijevom uglu klikni na "Load unpacked" i izaberi folder sa kodom koji si klonirao.

5. Ekstenzija će se pojaviti u tvom Chrome toolbaru i automatski raditi na LinkedIn web stranici.

## 🧑‍💻 Učešće u razvoju

Iako ovo nije striktno neophodno, volim zbog komercijalnih projekata na kojima radim da poštujemo neka pravila.
Stoga preporučujem (ako već nisi) da se upoznaš sa konceptom Conventional Commits:

🔗 https://www.conventionalcommits.org/en/v1.0.0-beta.2/



Nakon toga, možemo da krenemo dalje:

1. Forkuj repozitorijum i kloniraj svoj fork.
    ```bash 
    git clone https://github.com/tvoj-korisnicki-nalog/li-serator-bloker.git
   
2. Kreiraj novu granu (branch) na ovaj način:
    ```bash 
    git checkout -b tvojnickname/naziv-funkcionalnosti
   
3. Napravi izmjene i commituj ih sa porukama u jednom od sledećih formata:
    ```bash 
    feat: dodata nova funkcionalnost

    fix: ispravljen bug

    refactor: refaktorisanje koda

    docs: izmjenjen README
   
4. Same poruke kao i naziv grana može biti na Engleskom i Srpskom jeziku jer je ekstenzija pravljena prije svega za Srpsko govorno pordučje.

5. Push-uj promjene.

6. Otvori Pull Request preko GitHub-a ka main grani:
   👉 [LI Serator Bloker](https://github.com/ascepanovic/li-serator-bloker)

## ✅ Pravila i preporuke

Koristimo conventional commits, dakle: feat, fix, docs, refactor prefikse u commit porukama.

Testiraš izmjene lokalno prije slanja PR-a.

Komentari u kodu nisu neophodni ali ako izvodiš neku "magiju" onda su poželjni.

Ako te interesuje na čemu bi mogao da radiš i kako da nam pomogneš mozeš da pogledaš [otvorene issues](https://github.com/ascepanovic/li-serator-bloker/issues) i napaneš bilo koji od njih.


## 💡 Zahvalnost saradnicima

Hvala [Stanislav-u](https://www.linkedin.com/in/stanislavmanovic/) na korkecijama i pomoći u testiranju.


# 📄 Licenca

MIT
