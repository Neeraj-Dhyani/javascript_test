// Q5.
for(let i =1; i<=5; i++){
    for(let p=2; p<=i; p++){
        process.stdout.write(" \t");
    }
    for(let j = 5; j >= i; j--){
        process.stdout.write("*\t");
    }
    console.log();
}
//Q6.

function prime(){
    for(num=1 ; n=101; num++){
        if(num%2==0){
            break;
        }
        else if(num%3==0){
            break;
        }
        else if(num%4==0){
            break;
        }
        else if(num%5==0){
            break;
        }
        else if(num%6==0){
            break;
        }
        else if(num%7==0){
            break;
        }
        else if(num%8==0){
            break;
        }
        else if(num%9==0){
            break;
        }
        else if(num%10==0){
            break;
        }
        else if(num%11==0){
            break;
        }
        else if(num%12==0){
            break;
        }
        console.log(num);
    }
}
prime();