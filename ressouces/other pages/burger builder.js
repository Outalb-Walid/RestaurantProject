function hovering(){
    document.getElementsByTagName('audio')[0].play();
}

function trueOrFalse(n){
    if(n%2==1) return false;
    if(n%2==0) return true;
}

var MyIngredients=[]  //Those are the ingrdient that going to be sent to the server 

Ingredients = document.getElementsByClassName("ingredient");
coorespondance = {'cheese ing':['cheese',0],
                'meat ing':['meat',0],
                'green ing':['khoss',0],
                'onion ing':['onion',0],
                'tomato ing' : ['tomato',0],
                'cheese blue ing':['cheese blue',0]
                }


for (let ingr of Ingredients) {
    ingr.addEventListener("click", function (e){
        className = coorespondance[e.target.id];
        indicator = className[1];
        if(trueOrFalse(indicator)){
            document.getElementsByClassName(className[0])[0].style.display='flex';
            document.getElementById(e.target.id).style.border='solid limegreen';
            MyIngredients.push(className[0]);
        }
        else {
            document.getElementById(e.target.id).style.border='none';
            document.getElementsByClassName(className[0])[0].style.display='none';
            MyIngredients.splice(MyIngredients.indexOf(className[0]),1);
        }
        className[1] += 1;
        console.log(MyIngredients.toString());
    });
  }
