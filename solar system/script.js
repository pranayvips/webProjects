var options_icon = document.getElementsByClassName("options-icon")[0];
var footer = document.getElementsByClassName("footer")[0];
var rings = document.querySelectorAll(".planet-ring");
var info_display = document.getElementsByClassName("info1")[0];
var solar_main = document.getElementsByClassName("system_detail")[0];

var mouse_lock = 0;
var info_mouse_hover_count = 0;
var solar_check = 0;
var outer_detect = 0;
var solar_updates = 0;
var solar_func;

option_icon_value = 0;
info_display.style.display = "none";

var planet_info_val = document.querySelectorAll(".planet-info-val");
var sun_info_val = document.querySelectorAll(".sun-info");
var Planets = {
    mercury : ["mercury.png","Mercury","1","74.8 million km²","46.814 million km","47.36 km/s","59 days"],
    venus : ["venus.png","Venus","2","460.2 million km²","108.49 million km","35.02 km/s","225 days"],
    earth : ["earth.png","Earth","3","510.1 million km²","150.29 million km","29.78 km/s","365.4 days"],
    mars : ["mars.png","Mars","4","144.4 million km²","241.82 million km","24.08 km/s","687 days"],
    jupiter : ["Jupiter.png","Jupiter","5","61.42 billion km²","778.5 million km","13.06 km/s","4,333 days"],
    saturn : ["saturn.png","Saturn","6","42.7 billion km²","1.4 billion km","9.67 km/s","10,756 days"],
    uranus : ["uranus.png","Uranus","7","8.1 billion km²","2.9 billion km","6.79 km/s","30,687 days"],
    neptune : ["neptune.png","Neptune","8","7.61 billion km²","4.49 billion km","5.45 km/s","60,190 days"],
    solar : ["THE SOLAR SYSTEM","8 | 5","200+","1,308,854","3,887","4.571 billion years"],
    sun: ["sun.png","THE SUN","4.5 billion-year-old","yellow dwarf star ","1.989 x 10^30 kg","1.39 million km","220 km/s"]
}


options_icon.addEventListener("click",()=>{
    if (!option_icon_value){
        footer.style.display = "flex";
        option_icon_value = 1;
        document.getElementsByClassName("showdetail")[0].style.marginBottom = "50px";
        document.getElementsByClassName("showdetail")[1].style.marginBottom = "50px";
        document.getElementsByClassName("showdetail")[2].style.marginBottom = "50px";
    }
    else{
        document.getElementsByClassName("showdetail")[0].style.marginBottom = "10px";
        document.getElementsByClassName("showdetail")[1].style.marginBottom = "10px";
        document.getElementsByClassName("showdetail")[2].style.marginBottom = "10px";
        footer.style.display = "none";
        option_icon_value = 0;
    }
});

info_display.addEventListener("mouseout",()=>{
    if (info_mouse_hover_count){
        mouse_lock = 0;
        info_mouse_hover_count = 1;
        console.log("hehehehehehe");
    }
});


function delayer(text,val,speed){
    let kt = text;
    let kt_name = 0;
    let old_content = val.textContent;
    let doer = setInterval(()=>{
        if (kt_name == kt.length){
            if (speed==9){
                solar_check = 0;
            }
            val.textContent = (old_content + kt);
            clearInterval(doer);
        }
        else{
            val.textContent += kt[kt_name];
            kt_name+=1;
        }
    },speed)
    return doer;
}

for ( let i of rings){
    i.addEventListener("mouseover",()=>{
        solar_updates = 1;
        solar_check = 0;
        solar_main.style.display = 'none';
        document.getElementsByClassName("sun-de")[0].style.display = "none";
        document.getElementsByClassName("ast_detail")[0].style.display = "none";
        let to_update = 0;
        i.addEventListener('click', (event) => {
            mouse_lock = 1;
        });
        var vros = 0;
        outer_detect = 1;
        document.getElementsByClassName("details")[0].style.display = "block";
        let current_planet_name = i.getAttribute("name");
        if (current_planet_name ==  "belt"){
            document.getElementsByClassName("details")[0].style.display = "none";
            document.getElementsByClassName("ast_detail")[0].style.display = "block";
            
        }
        else if (!to_update && current_planet_name!="sun"){
            to_update = 1;
            for (let idk of planet_info_val){
                if (vros==0){
                    idk.setAttribute("src",Planets[current_planet_name][vros]);
                }
                else if(vros==1){
                    idk.textContent = "";
                    var delayeder = delayer(Planets[current_planet_name][vros],idk,10,250);
                }
                else{
                    idk.textContent = idk.textContent.split(":")[0]+": ";
                    var delayeder = delayer(Planets[current_planet_name][vros],idk,10,100);
                }
                vros += 1;
            }
        }
        else if(current_planet_name=="sun"){
            document.getElementsByClassName("details")[0].style.display = "none";
            document.getElementsByClassName("sun-de")[0].style.display = "block";

            to_update = 1;
            for (let idk of sun_info_val){
                if (vros==0){
                    idk.setAttribute("src",Planets[current_planet_name][vros]);
                }
                else if(vros==1){
                    idk.textContent = "";
                    var delayeder = delayer(Planets[current_planet_name][vros],idk,sun,250);
                }
                else{
                    idk.textContent = idk.textContent.split(":")[0]+": ";
                    var delayeder = delayer(Planets[current_planet_name][vros],idk,sun,100);
                }
                vros += 1;
            }
        }

        // info_display.style.display = "block";
        // window.addEventListener('mousemove', (event) => {
        //     if (mouse_lock){
        //     }
        //     else if (event.clientY>(window.innerHeight/1.5)){                
        //         info_display.children[0].setAttribute("src","info1.png");
        //         info_display.style.left = event.clientX+"px";
        //         info_display.style.top = event.clientY-232+"px";
        //     }
        //     else{                
        //         info_display.children[0].setAttribute("src","info.png");
        //         info_display.style.left = event.clientX+"px";
        //         info_display.style.top = event.clientY+10+"px";
        //     }
        //   });

    i.addEventListener("mouseout",()=>{
        clearInterval(delayeder);
        outer_detect = 0;
        solar_main.style.display = 'block'
        document.getElementsByClassName("details")[0].style.display = "none";
        document.getElementsByClassName("sun-de")[0].style.display = "none";
        if (solar_updates){
            solar_updates = 0;
            clearInterval(solar_func)
            if (!solar_check){
                solar_update();
            }
        }
        // if (!mouse_lock){
        //     info_display.style.display = "none";
        // }
    })
    })
}

function solar_update(){
        var vro_sun = 0;
        solar_check = 1;
        var sun_info = document.querySelectorAll(".system-info");
        for (let idk of sun_info){
            if(vro_sun==0){
                idk.textContent = "";
                solar_func = delayer(Planets["solar"][vro_sun],idk,9,250);
            }
            else{
                idk.textContent = idk.textContent.split(":")[0]+": ";
                solar_func = delayer(Planets["solar"][vro_sun],idk,9,100);
            }
            vro_sun += 1;
        }
}
solar_update();

window.addEventListener("click",()=>{
    if (mouse_lock){
        mouse_lock = 0;
        removeEventListener(window_clicker);
    }
});
// window.addEventListener("mouseover",()=>{
//     if (!outer_detect){
//         document.getElementsByClassName("details")[0].style.display = "none";
//     }
// });




document.addEventListener('contextmenu', event => event.preventDefault());