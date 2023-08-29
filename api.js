
let intervalId;
let num = 0;
let min = 0;
let hour = 0;
const watchStart = () => {
    const secondId = document.getElementById("second");

      intervalId = setInterval( () =>{
              num = num + 1;  
     secondId.innerText = num < 10 ? '0'+num: num;

        if (num === 60) {
            num = 0;
            min = min + 1;
            const minId = document.getElementById("minutes");
            minId.innerText = min < 10 ? '0'+min: min;

            if (min === 60) {
                min = 0;
                const hourId = document.getElementById('hourId');
                hour = hour  + 1;
                hourId.innerText = hour < 10 ? '0'+hour : hour;

                // if (hour === 12) {
                //     hour = 0;
                // }
            }
            
        }

      },100)
}


const stopWatch = () =>{
    clearInterval(intervalId);
}


const resetAll = () =>{
      clearInterval(intervalId)
      const secondId = document.getElementById("second");
      const minId = document.getElementById("minutes");
      const hourId = document.getElementById("hourId");

      secondId.innerText = '00';
      minId.innerText = '00';
      hourId.innerText = '00';
}