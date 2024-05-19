'use strict';

const car= {
    carName: 'spark',
    color:'while',
    carNumber: '20모4471',
    performance: {             // 값(value)에는 리터럴 객체를 직접 지정 가능.                             
        speed: 100,
        breakCapability: 10                                               
        }
};

for(const i in car){
    console.log(i,car[i]);
}