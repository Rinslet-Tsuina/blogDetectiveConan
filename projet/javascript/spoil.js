var tab=new Array(7);
tab[0]="s1";
tab[1]="s2";
tab[2]="s3";
tab[3]="s4";
tab[4]="s5";
tab[5]="Boss";
tab[6]="Ver";
function spoil(i) {
	document.getElementById(tab[i]).style.display = "block";
}
function resetspoil(i) {
	document.getElementById(tab[i]).style.display = "none";
}