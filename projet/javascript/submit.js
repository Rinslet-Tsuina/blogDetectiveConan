function submit(){
	var qa=new Array(15);
	var qb=new Array(15);
	var qc=new Array(15);
	for (var i=0;i<qa.length;i++) { qa[i]="q"+(i+1)+"a";}
	for (var i=0;i<qb.length;i++) { qb[i]="q"+(i+1)+"b";}
	for (var i=0;i<qc.length;i++) { qc[i]="q"+(i+1)+"c";}
	var cpt=0;
	for (var i=0;i<=qa.length-1;i++) {
		var a=document.getElementById(qa[i]);
		var b=document.getElementById(qb[i]);
		var c=document.getElementById(qc[i]);
		if (a.checked==true ) {	
			a.focus();
			cpt=cpt+1;
		}
		else if (b.checked==true) {cpt=cpt+1; b.focus(); } 
		else if (c.checked==true) {cpt=cpt+1; c.focus(); }
	}
	if (cpt<15) {alert("Veuillez sélectionner un bouton radio par question");}
	if (cpt==15) {alert("Le formulaire a été pris en compte");}
}
function submit2() {
	var doc=document.forms["form1"];
	  var nbr =parseInt(doc.nb.value);
	  var fin=true;
	  var cperso=0;
	  var cet=0;
	if (doc.nom.value=="") {
		doc.nom.focus();return false;}
		else if (doc.prenom.value=="") {doc.prenom.focus();fin = false;}
			else if (doc.mdp.value=="") {doc.mdp.focus();fin = false;}
				else if (doc.mail.value=="" ) { doc.mail.focus();fin = false;}
					else if (doc.nb.value=="" || !(nbr>0 && nbr<100)) { doc.nb.focus();fin = false;}
						else if (doc.birth.value=="") {doc.birth.focus();fin = false;}
							else if (doc.color.value=="#000000") {doc.color.focus();fin = false;}
	var click=document.forms[0];
	for (var i=7;i<=19;i++) {
		if (i!=7) {
			if (click[i].checked){cperso=cperso+1;}
		}
	}	
	var click=document.forms[0];
	for (var i=19;i<=24;i++) {
		if (i!=19) {
			if (click[i].checked){cet=cet+1;}
		}
	}	
	if (cperso==0) {fin=false;}if (cet<1) {fin=false;}
	var tele=doc.tel.value;
	var stel="";
	var nombre="1234567890";
	var ctel=0;
	if (doc.tel.value=="") {
		for (var i=0;i<15;i++) {
			if (!(tele.charAt(i)==' ' || tele.charAt(i)=='-' || tele.charAt(i)=='.')) {
				stel=stel+tele.charAt(i);}
		}
		for (var i=0;i<11;i++) {
			for (var j=0;j<10;j++) {
				if (stel.charAt(i)==nombre.charAt(j)) {
					ctel=ctel+1;}
			}
		}
		if (ctel!=stel.length()) {fin=false;}
	}
	var pays=doc.py;
	var pos=pays.selectedIndex;
	var pr=pays[pos].value;
	if (pr=="choix") {fin=false;}
	if (fin==false) {alert("Remplisser les champs manquants");}
	if (fin==true) {alert("Le formulaire a été pris en compte");}
	
}


