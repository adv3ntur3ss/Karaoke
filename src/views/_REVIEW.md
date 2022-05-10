# 03.05 matija
[] body????? (ked chces wrapper tak pouzi div)
[x] nazov componentov vzdy velkym zaciatocnym pismenom
[x] cHeader? nazov nema ziadny context
[] css classes cez kebab-case nie cez camelCase
[x] odsadenia su naprd, pouzivat prittier
[] do css class by som nedaval nazov tagu, proste popisne nazvat ze co to meni alebo na co sa viaze, ak je to nadpis tak dat ze title alebo nieco
    - tiez nerobit take ze playPosition proste daj tam napr ze play-button alebo nieco take, nedavaj presne mena attributov do nazvu clase
    - vsetky nazvy po anglicky davat v priebehovom (cize namiesto hide bude hidden)
[] vsetky classes by malo byt jasne co menia / ovplyvnuju, ked ju nazves place tak ja netusim co to ma znamenat
[x] levels nech nejsu staticke ale maj bud v datach array a sprav v-for alebo nejlepsie nech sa z BE dotahuju
[x] attributes ak su prazdne tak ich ani nedavat (href="" tam je)
[] tu h1 s . na konci vyjebat a dat tam div s height nejakym a width: 100vw;
[x] v scripte prazdne attribues mozes vyjebat
[x] nazov green nedava vobec zmysel, methods sa maju nazyvat tym co robia, cize napriklad toggleSelected() alebo select()
[x] naco mas vue ked robis querySelector?? mas 1. ref co ale nebude tu pripada a mozes rovno pouzit v-model na premennu, do ktorej si iba nastavis ktore cislo sa ma zobrazit, potom kazdy button mude mat classu podmienkovo zobrazenu ze ci je active alebo nie (activeLevel == 1 napr) a v clicku bude mat ze @click="activeLevel = 1"
[x] /* eslint-disable */ nedavat 😡 (ked tak si v .eslintrc.js nastav pravidla, ktore ti vadia)

// gameplay

[x] zakomentovane veci vyjebat
[x] zle zarovnane
[x] string spravit bud ako component alebo si spravit v datach array stringova a cez v-for ich vykreslit pretoze maju vsetky rovnake attributes
[x] znovu methods, hiddedState nie je popisne pre method, lebo ten nazov nie je akcia, ked tak uz updateHiddedState, ale najlepsie toggleHidden alebo pod
[x] listen premena nedava zmysle, neviem z nej zistit, ze co vlastne osetruje a k tomu za k nej priraduju cisla, cize neviem co ktore znamena
[x] je blbost mat hidden a isHidden premenu zaroven, kazda by sa mala bindovat k niecomu, cize isNiecoHidden a isNiecoIneHIdden napriklad
[x] chunks premenna najlepsie keby bola ze niecoChunks, aby som vedel co vyjadruje
    - pripadne vestky veci ako blob, chunks, playback a take by som v datach obalil do objektu, nieco ze song: {chunks: [], blob: null} atd
