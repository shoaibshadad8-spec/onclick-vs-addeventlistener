

   const btn = document.getElementById("myBtn");
      const output = document.getElementById("output");

      function firstOnClick() {
        console.log("First onclick handler");
      }

      function secondOnClick() {
        console.log("Second onclick handler (overwrites first)");
      }
      btn.onclick = firstOnClick;
      btn.onclick = secondOnClick;
       


      function firstListener(){
        console.log("First addEventListener handler");
      }

      function secondlistener(){
        console.log("Second addEventListener handler");
      }
      function updateOutput(){
        output.textContent="Button clickd check the console!";
      }
      btn.addEventListener("click",firstListener);
      btn.addEventListener("click",secondlistener);
      btn.addEventListener("click",updateOutput);














/*
 function startTasbeh(){
      const suartElment = document.getElementById("status");
      const startBtnElment = document.getElementById("startBtn");
 
      startBtnElment.disabled = true;
      let count = 0;
      let phese = 1;

      function updatTasbeh(){
        count++;
        if(phese ===1){
          suartElment.textContent="سبحان الله"+count;
          suartElment.style.color="red";
          if(count===33){
            phese = 2;
            count = 0;
          }
        }
        else if(phese ===2){
          suartElment.textContent="الحمد لله "+count;
          suartElment.style.color="black";
          if(count===33){
            phese = 3;
            count = 0;
          }
        }
        else if (phese===3){
          suartElment.textContent= "الله اكبر"+count;
          suartElment.style.color="blue"+count;
          if(count===33){
            phese=4;
            count=0;
          }
        }
        else if (phese ===4){
          suartElment.textContent=" لا اله الا الله وحده لا شريك له الملك وله الحمد وهو علي كل شي قدير"+count;
          suartElment.style.color=" black "+count;
          clearInterval(invalID);

          setTimeout(()=>alert(" ميزان حسناتكم "),500)
        }
      }
      let invalID = setInterval(updatTasbeh,500);
    }*/
