let name = prompt("請輸入你的名字");

function Fortune(){

 const fortunes = [
 "大吉",
 "吉",
 "小吉",
 "普通",
 "小凶",
 "凶"
 ];

 const result =
 fortunes[Math.floor(Math.random()*fortunes.length)];

 document.getElementById("result").innerHTML =
 name + " 今日運勢：" + result;
}

function showSection(id){

 let sections =
 document.querySelectorAll(".section");

 sections.forEach(section=>{
   section.style.display="none";
 });

 document.getElementById(id).style.display="block";
}

showSection("home");