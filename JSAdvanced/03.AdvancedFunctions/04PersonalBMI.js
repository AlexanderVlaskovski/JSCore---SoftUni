(function (name, age, weight, height) {

    let summary = {
        'name': name,
        'personalInfo': {
            'age': age,
            'weight': weight,
            'height': height
        },
        'BMI': findBMI(weight, height),
        'status': checkStatus(findBMI(weight, height))
    };
    if(summary['status'] === 'obese'){
        summary['recommendetion'] = 'admission required';
    }


    function findBMI(a, b) {
        return Math.round(a/Math.pow(b/100, 2));

    }

    function checkStatus(a) {

        if(a<18.5){
            return "underweight";
        }
        else if(a<25){
            return "normal";
        }
        else if(a<30){
            return "overweight";
        }
        else{
            return "obese";
        }


    }

    console.log(summary);


}('Honey Boo Boo', 9, 57, 137));