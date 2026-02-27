function openPage(e, t, a) {
    var o, r, n;
    for (r = document.getElementsByClassName("tabcontent"), o = 0; o < r.length; o++) r[o].style.display = "none";
    for (n = document.getElementsByClassName("tablink"), o = 0; o < n.length; o++) n[o].style.backgroundColor = "";
    document.getElementById(e).style.display = "block", t.style.backgroundColor = a
}

function load() {
	
    var e = document.forms.roundtripform.pickupdate.value,
        t = (document.forms.roundtripform.dropoffdate.value, (o = new Date).getDate()),
        a = o.getMonth() + 1;
		//alert(e);
		
    t < 10 && (t = "0" + t), a < 10 && (a = "0" + a);
    var o = o.getFullYear() + "-" + a + "-" + t,
        r = new Date,
        n = new Date(r);
    n.setDate(n.getDate() + 30);
    var u = n.getDate(),
        d = n.getMonth() + 1;
        //tt= n.getTime();
		
    u < 10 && (u = "0" + u), d < 10 && (d = "0" + d);
    var l = n.getFullYear() + "-" + d + "-" + u;
    o <= e && e <= l || (e < o ? (alert("Pickup Date must be greater than Today Date"), 
	document.getElementById("pickupdate").value = "") : l <= e && (alert("Choose Booking Before " + l), 
	document.getElementById("pickupdate").value = ""))
	//alert(o);
	//alert(e);

	if(o == e){
		//alert('cbig');
		$('#mySelect').show();
		$('#demySelect').hide();
	}
	else{
		//alert('csmall');
		 $('#demySelect').show();
		$('#mySelect').hide();
	}
	
}

function load2() {
    var e = document.forms.roundtripform.pickupdate.value,
		pt=document.forms.roundtripform.pickuptime.value,
		pt1=document.forms.roundtripform.pickuptime1.value,
		dt=document.forms.roundtripform.dropofftime.value,
		dt1=document.forms.roundtripform.dropofftime1.value,
        t = document.forms.roundtripform.dropoffdate.value;
		
		 tt = (document.forms.roundtripform.dropoffdate.value, (o = new Date).getDate()),
        a = o.getMonth() + 1;
		//alert(e);
		//alert(dt);
		//alert(dt1);
		
    tt < 10 && (tt = "0" + tt), a < 10 && (a = "0" + a);
    var o = o.getFullYear() + "-" + a + "-" + tt,
	r = new Date,
        n = new Date(r);
		
    roundtripform.pickupdate.value || (alert("Please Enter a Start Date First"), document.getElementById("dropoffdate").value = "", roundtripform.pickup_city.focus()), t < e && (alert("Pickup date must be smaller than drop date"), document.getElementById("dropoffdate").value = "")
//alert(e); //pickdate
//alert(o); //today date
//alert(t); //dropoffdate

 	if(t == e){
	
		$('#pmySelect').show();
		$('#pimySelect').hide();
	}
	
	else{
		
		 $('#pmySelect').hide();
		$('#pimySelect').show();
	} 
	
}
function load3() {
    var e = document.forms.roundtripform.pickupdate.value,
		pt=document.forms.roundtripform.pickuptime.value,
		pt1=document.forms.roundtripform.pickuptime1.value,
		dt=document.forms.roundtripform.dropofftime.value,
		dt1=document.forms.roundtripform.dropofftime1.value,
        t = document.forms.roundtripform.dropoffdate.value;
		//alert(pt);
		//alert(dt);
		if(pt < dt ){
			//alert('please choos ecorrect time');
		}
		
		else{
			if(t == e){
			alert('Plese choose Drop time greater than pickup time');
			document.getElementById("dropofftime").value = ""
			}
			else{
				
			}
		}
		
		
}




function onewayvalidate() {
    var e = document.forms.onewaytripform.oneway_pickup_city.value,
        t = document.forms.onewaytripform.oneway_dropoff_city.value;
    return t == e ? (alert("Destination city is different from Pickup City"), $("#oneway_dropoff_city")[0].selectedIndex = 0, !1) : e == t ? (alert("Pickup city is different from Destination"), $("#oneway_pickup_city")[0].selectedIndex = 0, !1) : void 0
}

function checkowdate() {
    var e = document.forms.onewaytripform.owpickupdate.value,
        t = (o = new Date).getDate(),
        a = o.getMonth() + 1;
    t < 10 && (t = "0" + t), a < 10 && (a = "0" + a);
    var o = o.getFullYear() + "-" + a + "-" + t,
        r = new Date,
        n = new Date(r);
    n.setDate(n.getDate() + 30);
    var u = n.getDate(),
        d = n.getMonth() + 1;
    u < 10 && (u = "0" + u), d < 10 && (d = "0" + d);
    var l = n.getFullYear() + "-" + d + "-" + u;
    o <= e && e <= l || (e < o ? (alert("Pickup Date must be greater than Today Date"), document.getElementById("owpickupdate").value = "") : l <= e && (alert("Choose Booking Before " + l), document.getElementById("owpickupdate").value = ""))
	
	if(o == e){
		//alert('cbig');
		$('#myoneSelect').show();
		$('#demyoneSelect').hide();
	}
	else{
		//alert('csmall');
		 $('#demyoneSelect').show();
		$('#myoneSelect').hide();
	}
	
	
	
}

function checkhrdate() {
    var e = document.forms.hourlytripform.hrpickupdate.value,
        t = (o = new Date).getDate(),
        a = o.getMonth() + 1;
    t < 10 && (t = "0" + t), a < 10 && (a = "0" + a);
    var o = o.getFullYear() + "-" + a + "-" + t,
        r = new Date,
        n = new Date(r);
    n.setDate(n.getDate() + 30);
    var u = n.getDate(),
        d = n.getMonth() + 1;
    u < 10 && (u = "0" + u), d < 10 && (d = "0" + d);
    var l = n.getFullYear() + "-" + d + "-" + u;
    o <= e && e <= l || (e < o ? (alert("Pickup Date must be greater than Today Date"), document.getElementById("hrpickupdate").value = "") : l <= e && (alert("Choose Booking Before " + l), document.getElementById("hrpickupdate").value = ""))
	
	if(o == e){
		//alert('cbig');
		$('#myhrSelect').show();
		$('#demyhrSelect').hide();
	}
	else{
		//alert('csmall');
		 $('#demyhrSelect').show();
		$('#myhrSelect').hide();
	}
	
	
}
document.getElementById("defaultOpen").click();


	$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
			alert(optionValue);
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});	