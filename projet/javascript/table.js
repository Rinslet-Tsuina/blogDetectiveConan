/*mettre un objet Date pour ajouter et reécrire les nombres qui changent*/
function changefin() {
	var d=new Date();
	var last=960;
	var dlast=new Date(2019, 11, 21);
	var d962=new Date(2019, 11, 7);
	var d963=new Date(2019, 11, 14);
	var d20a=new Date(2020, 0, 4);
	var d20b=new Date(2020, 0, 11);
	var d20c=new Date(2020, 0, 18);
	var d20d=new Date(2020, 0, 25);
	if (d>d962) {last=962;}
	if (d>d963) {last=963;}
	if (d>dlast) {last=964;}
	if (d>d20a) {last=965;}
	if (d>d20b) {last=966;}
	if (d>d20c) {last=967;}
	if (d>d20d) {last=968;}
	document.getElementById('finpro').innerHTML=last;
}
