# 10.05 matija
[] zakomentovany kod odjebat
[] <button class="level-design"><img src="https://th.bing.com/th/id/R.8ced636f3075d2d9423b48bb9a68fb95?rik=3OYgMTR7784DtQ&pid=ImgRaw&r=0"></button> dogrcam sa, normalne v data si spravit array kde si najebes jednotlive potrebne veci a potom iba cez v-for si ich vyrenderujes
[] prazdne data?? vydrbat to co je prazdne
[] neviem ci by som zrovna reserved keyword daval ako nazov componentu :D mozno ze GuitarString?
[] urcite by som nedadval nazov refu ze movin3, note alebo nieco tak by som dal, a index nemozes doplnat rucne ale musi byt dynamicky generovany
[] Strings tiez cez v-for more nie to mat 10x napastovane iba pod seba
[] changeValue() sa preco tak vola ked to spusta timer?
[] setTimeout(() => this.move(this.$refs.movin0), 430) toto je tiez kokotina mat 10x pod sebou ale asi sa caka na BE my guess


# 03.05 matija
[x] body????? (ked chces wrapper tak pouzi div)
[x] nazov componentov vzdy velkym zaciatocnym pismenom
[x] cHeader? nazov nema ziadny context
[x] css classes cez kebab-case nie cez camelCase
[x] odsadenia su naprd, pouzivat prittier
[x] do css class by som nedaval nazov tagu, proste popisne nazvat ze co to meni alebo na co sa viaze, ak je to nadpis tak dat ze title alebo nieco
    - tiez nerobit take ze playPosition proste daj tam napr ze play-button alebo nieco take, nedavaj presne mena attributov do nazvu clase
    - vsetky nazvy po anglicky davat v priebehovom (cize namiesto hide bude hidden)
[x] vsetky classes by malo byt jasne co menia / ovplyvnuju, ked ju nazves place tak ja netusim co to ma znamenat
[x] levels nech nejsu staticke ale maj bud v datach array a sprav v-for alebo nejlepsie nech sa z BE dotahuju
[x] attributes ak su prazdne tak ich ani nedavat (href="" tam je)
[x] tu h1 s . na konci vyjebat a dat tam div s height nejakym a width: 100vw;
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
