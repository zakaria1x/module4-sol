var names = ["zakaria", "john", "joe",
    "simo", "robert", "ronaldo",
    "jcole", "karl"];

function hello(names) {
    var word = "hello";
    console.log(word + " " + names);
}
function goodbye(names) {
    var word = "goodbye";
    console.log(word + " " + names);
}

for (var i = 0; i < names.length; i++) {
    var firstletter=names[i].charAt(0);
    if(firstletter==='j'){
        goodbye(names[i]);
    }
    else {
        hello(names[i]);
    }

}