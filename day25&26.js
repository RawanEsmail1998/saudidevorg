for(var i=50,j=0;i>40;i--){
  checkj:while(j<20){
    j++;
    if(!(j%2)==0){
      continue checkj;
    }
    document.write("<br>"+j+"is even <br>");

    }
    checki:while(i>40){
      if ((i%7)==0){
        document.write("i= "+i+" and j = "+j);
        break checki;
      }
    }

  }
