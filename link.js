async function getData()
{
    const resl = await fetch('https://api.github.com/users/shanilmohd');
    const datal = await resl.json();
    const resr = await fetch('https://api.github.com/users/shanilmohd/repos');
    const datar = await resr.json();
    const user = document.querySelector("#username");
    const no = document.querySelector("#repo");
    const fol = document.querySelector("#fol");
    const folr = document.querySelector("#for");
    const text1= document.createTextNode(datal.login);
    user.appendChild(text1);
    const text2= document.createTextNode(datar.length);
    no.appendChild(text2);
    const text3= document.createTextNode(datal.followers);
    fol.appendChild(text3);
    const text4= document.createTextNode(datal.following);
    folr.appendChild(text4);



}
getData();