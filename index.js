var usuario = prompt ("¿cual es tu peso?"); 
var planeta = parseInt(prompt("Elige el numero tu planeta \n1 marte \n2 jupiter \n3 mercurio \n4 venus \n5 saturno \n6 pluton \n7 urano \n8 sol"))
var peso = parseInt (usuario);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var g_mercurio = 3.7;
var g_saturno = 10.44;
var g_venus = 8.87;
var g_urano = 8.87;
var g_neptuno = 11.15;
var g_pluton = 0.62;
var g_sol = 274;
var peso_final
if(planeta == 1 )
{
    peso_final = peso * g_marte / g_tierra ;
} 
else if(planeta == 2)
{
    peso_final = peso * g_jupiter / g_tierra ;
}
else if(planeta == 3)
{
    peso_final = peso * g_mercurio / g_tierra ;
}
else if(planeta == 4)
{
    peso_final = peso * g_venus / g_tierra ;
}
else if(planeta == 5)
{
    peso_final = peso * g_saturno / g_tierra ;
}
else if(planeta == 6)
{
    peso_final = peso * g_pluton / g_tierra ;
}
else if(planeta == 7)
{
    peso_final = peso * g_urano / g_tierra ;
}
else if(planeta == 8)
{
    peso_final = peso * g_sol / g_tierra ;
}
else  
{
    peso_final = "pesas mucho :(" ;
}
peso_final = parseInt (peso_final)
document.write(" tu peso es <b>" + peso_final + " kilos <b> ");