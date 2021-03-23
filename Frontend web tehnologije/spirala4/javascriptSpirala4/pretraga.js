
        //po predmetu
        function pretragaPredmet() {
          var input, filter, table,table2, tr,tr2, td, i, txtValue;
          input = document.getElementById("predmeti");
          filter = input.value.toUpperCase();
          table = document.getElementById("1");
          tr = table.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == " " ) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
          }
          table2 = document.getElementById("2");
          tr2 = table2.getElementsByTagName("tr");
          for (i = 0; i < tr2.length; i++) {
            td = tr2[i].getElementsByTagName("td")[0];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == " " ) {
                tr2[i].style.display = "";
              } else {
                tr2[i].style.display = "none";
              }
            }       
          }
  
        }
      
      //po profesoru
         function pretragaNastavnik() {
          var input, filter, table, tr, td, i, txtValue;
          input = document.getElementById("profesori");
          filter = input.value.toUpperCase();
          table = document.getElementById("1");
          tr = table.lastChild.getElementsByTagName("tr");
          for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == " " ) {
                tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
            }       
          }
          table2 = document.getElementById("2");
          tr2 = table2.getElementsByTagName("tr");
          for (i = 0; i < tr2.length; i++) {
            td = tr2[i].getElementsByTagName("td")[2];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == " " ) {
                tr2[i].style.display = "";
              } else {
                tr2[i].style.display = "none";
              }
            }       
          }
        }
        //po godini
        function pretragaGodina(){
            
          var input = document.getElementById("godine").value;            
            if(input == 1){
              $("#1").show();
              $("#2").hide();
            }
            else if (input == 2){
              $("#1").hide();
              $("#2").show();
            }
             else{
              $("#1").show();
              $("#2").show();
             }


        }
    
