const initmount = function () {
    var langs = eval(localStorage.language);
    mount("send").as(langs[2]);
    mount("connect").as(`${langs[3]}`);
    mount("transfile").as(langs[4]);
    mount("transtext").as(langs[5]);
    mount("help").as(langs[6]);
    mount("language").as(langs[7]);
    mount("selectlang").as(langs[8]);
    mount("or").as(langs[9]);
    mount("uploadnewlang").as(langs[10]);
    mount("cleanalllang").as(langs[11]);
    mount("about").as(langs[12]);
    mount("theme").as(langs[13]);
    mount("palette").as(langs[14]);
    mount("drag").as(langs[15]);
    mount("thank").as(langs[16]);
    mount("aboutinfo").as(langs[17]);
    mount("yourid").as(langs[18]);
}