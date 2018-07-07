var tabs = [
    [1041, 1145],
    [1193, 1101],
    [],
    [1097, 1076],
    [1191, 1185, 454, 1147, 1209],
    [1192, 1210, 1053],
]
var selectedIndex = [0,0,0,0,0,0];
var wineNums=[1041,1145,1193,1101,1097,1076,1191,1185,454,1147,1209,1192,1210,1053]
var wineDescr=[
    'Een frisse, droge wijn met volle rijpe smaken van fruit aangevuld met een vleugje limoen en vers gemaaid gras',
    'Geurig bouquet van exotisch fruit zoals ananas en mango met een vleugje honing',
    'Delicate en harmonische strogeel wijn met heerlijke geuren van gouden appels, citrusvruchten en peer',
    'fris, licht pittig en tonen van geroosterde noten',
    'het fruit domineert in de mond met tonen van rijpe zwarte kersen, peperige kruiden. Een mooi elegant gemaakt glas wijn!',
    'Aroma van zwarte bessen en kersen en een vleugje kruidnagel. Deze volwaardige rode wijn is rond en elegant met een lange afdronk en mooie tannines.',
    'Volle wijn met intense fruitige geuren. Zachte soepele tannines met een lange afdronk',
    'Pittig, fruitig met tonen van framboos en braam',
    'Zwart fruit, bosbes , bramen en een subtiele houttoets.',
    'Aroma van rood herfstfruit met een vleugje kaneel en zoethout. Mooie rijpe afdronk maakt het geheel helemaal af',
    'Aroma van zacht fruit en kruiden',
    'Een volle wijn met intense fruitige geuren. Zachte, soepele tannines met een lange afdronk',
    'Veel primaire aroma\'s van kersen en bessen. Mooie zachte afdronk',
    'Delicaat boeket, droog, zacht en licht bitter.'
]

$(document).ready(function(){
    setOpacityActive();
    $(".av-tab-arrow-container").hide();

    var nav = $('.av-tab-section-tab-title-container');
    var nav_cont = $('.av-tab-section-inner-container');
    var nav_menu_image = $('.av-tab-section-image');
    var nav_menu_text = $('.av-outer-tab-title');
    var minMenu = 0;
    var fixedMenu = 0;
    var countNav = 0;


    var vW = $(document).width();
    SetNewSize();

    $(window).scroll(function () {
        var curWidth = $(this).width();
        if (($(this).scrollTop() > 190)&&(curWidth>972)) { // fixed menu
            if(fixedMenu==1) {
                fixedMenu = 0;
                nav.addClass("f-menu-nav");
                nav_cont.addClass("f-menu-content");
            }
        } else {
            if(fixedMenu==0) {
                fixedMenu = 1;
                nav.removeClass("f-menu-nav");
                nav_cont.removeClass("f-menu-content");
            }
        }
        SetNewSize();
    });
    $(window).resize(function(){
        SetNewSize();
    });

    function SetNewSize() {
        var curWidth = $(this).width();
        var curScrol = $(this).scrollTop();
/*
        if(curWidth>900) {
            nav_menu_image.style.width = "90px";
        }else{
            nav_menu_image.style.width = "50px";
        }
*/

        if((curWidth>500)||(curScrol<280)){       // set normal size when
            if(minMenu==1) {
                minMenu = 0;
                nav_menu_image.removeClass("minimized-nav-menu-img");
                nav_menu_text.show();
                nav.removeClass("f-menu-nav-minimized");
                nav_cont.removeClass("f-menu-content-minimized");
            }
        }else{
            if(minMenu==0) {
                minMenu = 1;// set lower size
                nav_menu_image.addClass("minimized-nav-menu-img");
                nav_menu_text.hide();
                nav.addClass("f-menu-nav-minimized");
                nav_cont.addClass("f-menu-content-minimized");
            }
        }

    }

    $(".av-section-tab-title").click(function(){

        var curWidth = $(window).width();
        var curScrol = $(window).scrollTop();
        var body = $("body, html");
        if(curWidth>500){
            if(curScrol>190){
                body.animate({scrollTop: 191}, 500, function () {});
//                $(window).scrollTop(191);
            }
        }else{
            if(countNav) {
                body.animate({scrollTop: 330}, 500, function () {});
           }else{
                countNav++;
            }
            //if(curScrol>280){
            //    $(window).scrollTop(281);
            //}
        }
    });

});
function clickCarousel(prodid){
    var activeTabMenu = $(document.getElementsByClassName("av-active-tab-title")[0]).attr("data-av-tab-section-title");
    var newImg = document.getElementById("wine_img_"+prodid);
    var newImgSrc = $(newImg).attr("src");

    var activeTab = document.getElementsByClassName("av-layout-tab")[parseInt(activeTabMenu)-1];
    var prodImg = activeTab.getElementsByClassName("prod-image-carousel-selected")[0];

    var Img = prodImg.getElementsByTagName("img");
    $(Img[0]).attr('src', newImgSrc );

    var wooProd = document.getElementsByClassName("post-"+prodid)[0];

    var hrefWooProd = $(wooProd.getElementsByClassName("woocommerce-LoopProduct-link")[0]).attr("href");
    var nameWooProd = wooProd.getElementsByClassName("woocommerce-loop-product__title")[0].innerHTML;

    var vineTitle = document.getElementById("wine-title-"+activeTabMenu).innerHTML = nameWooProd;
    document.getElementById("wine-title-"+activeTabMenu+"-small").innerHTML = nameWooProd;
    var newLink = document.getElementById("wine_"+activeTabMenu+"_link");
    $(newLink).attr("href", hrefWooProd);
    var newLinkSmall = document.getElementById("wine_"+activeTabMenu+"_link_small");
    $(newLinkSmall).attr("href", hrefWooProd);


    var wineNum = window.wineNums.indexOf(parseInt(prodid));
    document.getElementById("wine-descr-"+activeTabMenu).innerHTML = window.wineDescr[wineNum];
    document.getElementById("wine-descr-"+activeTabMenu+"-small").innerHTML = window.wineDescr[wineNum];
    window.selectedIndex[activeTabMenu-1] = window.tabs[activeTabMenu-1].indexOf(parseInt(prodid));
    setOpacityActive();
}

function clickProdOffset(prodid, offset){
    var activeTabMenu = $(document.getElementsByClassName("av-active-tab-title")[0]).attr("data-av-tab-section-title");

    var pos = selectedIndex[activeTabMenu-1];
    if(pos==-1){
        pos = 0;
    }
    var cnt = tabs[activeTabMenu-1].length;
    pos += offset;
    if(pos<0){pos = cnt-1;}
    if(pos==cnt){pos = 0;}
    window.selectedIndex[activeTabMenu-1] = pos;
    var newProdID = clickCarousel(tabs[activeTabMenu-1][pos]);
}

function setOpacityActive(){
    for(var i=0;i<window.tabs.length;i++){
        for(var j=0;j<window.tabs[i].length;j++){
            if((window.selectedIndex[i]==j)||(window.selectedIndex[i]==-1)){
                $(document.getElementById('wine_img_'+window.tabs[i][j])).removeClass('wine-carousel-opacity');
            }else{
                $(document.getElementById('wine_img_'+window.tabs[i][j])).addClass('wine-carousel-opacity');
            }
        }
    }

}
