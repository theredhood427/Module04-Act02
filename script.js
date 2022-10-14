function compare(){
    let val1= prompt('Please enter value A', '');
    let val2= prompt('Please enter value B', '');
    
    if(val1>val2){
        alert(`Value ${val1} is higher!`);
    } else if (val1<val2){
            alert(`Value ${val2} is higher!`);
    } else if (val1==val2){
        alert(`Both ${val1} and ${val2} are equal!`);
    }
}
