

jresp = JSON.stringify(jresp)
var modjresp = JSON.parse(jresp);
/*console.log("typeof modjresponse is:"+typeof(modjresp));
console.log("length modjresponse is:"+jresp.length);
console.log("length modjresponse is:"+modjresp.length);*/
//modjresp = modjresp[0].firstName;
/*var fValue = jresp.map(function(vl){
    return vl.firstName;
});*/
//console.log("The values in json response are:"+modjresp);
//console.log("Type of modjresp:"+typeof(modjresp))
//console.log("values in fvalue:"+fValue)

//First Approach with Tables start
/*var tmpdtlsdiv = document.getElementById("tmpdetailsDiv");

var tmptable = document.createElement("table");
var tmpbody = document.createElement("tbody");
var tmptr = document.createElement("tr");

var tmptd = document.createElement("td");
var tmph4 = document.createElement("h4");
var tmpp1 = document.createElement("p");
var tmpp2 = document.createElement("p");
var tmpp3 = document.createElement("p");

tmptd.appendChild(tmph4);
tmptd.appendChild(tmpp1);
tmptd.appendChild(tmpp2);
tmptd.appendChild(tmpp3);

tmptr.appendChild(tmptd);
tmpbody.appendChild(tmptr);
tmptable.appendChild(tmpbody);
tmpdtlsdiv.appendChild(tmptable);
tmph4 = tmph4.setAttribute("id", "tmpname1");
tmpp1 = tmpp1.setAttribute("id", "tmpcity1");
tmpp2 = tmpp2.setAttribute("id", "tmpstate1");*/

//First Approach with Tables end

//document.getElementsByTagName("h4").setAttribute("id", "name1");
//document.setAttribute(id, tmph4: "tmpidvalh4")
var tmpspandiv = document.getElementById("tmpspandiv");

for(var i=0;i<modjresp.length;i++){

var tmpspan = document.createElement("span");
var tmph4 = document.createElement("h4");
var tmpp1 = document.createElement("p");
var tmpp2 = document.createElement("p");
var tmpp3 = document.createElement("p");
tmpspan.appendChild(tmph4);
tmpspan.appendChild(tmpp1);
tmpspan.appendChild(tmpp2);
tmpspan.appendChild(tmpp3);
tmpspandiv.appendChild(tmpspan);

tmpspan = tmpspan.setAttribute("class", "tmpspaninline");
tmph4 = tmph4.setAttribute("id", "name"+(i+1));
tmpp1 = tmpp1.setAttribute("id", "city"+(i+1));
tmpp2 = tmpp2.setAttribute("id", "state"+(i+1));
tmpp3 = tmpp3.setAttribute("id", "dummy"+(i+1));

}

for (var i=0; i<modjresp.length; i++){

document.getElementById("name"+(i+1)).innerHTML =modjresp[i].firstName  ;
document.getElementById("name"+(i+1)).style.backgroundColor = "magenta";
document.getElementById("city"+(i+1)).innerHTML =modjresp[i].city  ;
document.getElementById("state"+(i+1)).innerHTML =modjresp[i].state.name ;
document.getElementById("dummy"+(i+1)).innerHTML ="viewOrders" ;
document.getElementById("dummy"+(i+1)).style.color = "magenta";
}


//static way of setting values
/*document.getElementById("name1").innerHTML =modjresp[0].firstName  ;
document.getElementById("name2").innerHTML =modjresp[1].firstName ;
document.getElementById("name3").innerHTML =modjresp[2].firstName ;
document.getElementById("city1").innerHTML =modjresp[0].city  ;
document.getElementById("city2").innerHTML =modjresp[1].city ;
document.getElementById("city3").innerHTML =modjresp[2].city ;
document.getElementById("state1").innerHTML =modjresp[0].state.name ;
document.getElementById("state2").innerHTML =modjresp[1].state.name ;
document.getElementById("state3").innerHTML =modjresp[2].state.name ;*/
//document.getElementById("dtlsdivname").innerHTML = modjresp ;

