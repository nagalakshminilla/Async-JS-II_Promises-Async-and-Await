function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(`Timer of ${duration} ms finished`);
    }, duration);
}

timer(2000, (message) => {
    console.log(message); 
});

timer(5000, function(message) {
    console.log("Callback received:", message);
});