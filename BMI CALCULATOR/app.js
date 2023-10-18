function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let bmiCalculate = (weight.value / (height.value * height.value))*10000;
    document.getElementById('Bmi').value = bmiCalculate;
    console.log(bmi);

    if(bmiCalculate< 18.5){
        document.getElementById('result').innerText = 'UNDERWEIGHT 🍔';
    }else if( bmiCalculate > 18.5 &&  bmiCalculate<24.9){
        document.getElementById('result').innerText = 'NORMAL 🎉';
    }else if( bmiCalculate > 25 &&  bmiCalculate<29.9){
        document.getElementById('result').innerText = 'OVERWEIGHT 🤫';
    }else if( bmiCalculate > 30 &&  bmiCalculate<35){
        document.getElementById('result').innerText = 'OBESITY 🤯';
    }else{
        document.getElementById('result').innerText = 'SEVERE OBESITY 🥱';
    }
}