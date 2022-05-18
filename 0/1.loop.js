const intervalId = setInterval(() => {

    console.log('1');

}, 10);

setTimeout(() => {
    const promise = new Promise((resolve) => {

        console.log('2');

        resolve('3');
    });

    promise
        .then((value) => {

            console.log(value);

            setTimeout(() => {

                console.log('4');

                clearInterval(intervalId);

            }, 10);
        });

    console.log('5');

}, 10);