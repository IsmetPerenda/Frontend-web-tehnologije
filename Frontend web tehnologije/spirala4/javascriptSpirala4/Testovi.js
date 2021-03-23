
document.getElementById("predmeti").addEventListener("keyup",function() {
    pretragaPredmet();
  }, false);
  
  document.getElementById("profesori").addEventListener("keyup",function() {
    pretragaNastavnik();
  
  }, false);

  let assert = chai.assert;
    describe('pretragaPredmet()', function() {
        it('treba prikazati predmet Frontend Web programiranje kad je proslijeđen string "Frontend" ', function() {
            document.getElementById("profesori").value = "Frontend";
            pretragaPredmet();
            let tabela = document.getElementById("1");
            let tr = tabela.getElementsByTagName("tr");
            let i;
            for(i=0; i<tr.length; i++) {
                if(tr[i].classList.contains("predmet") && tr[i].style.display ===  "") {
                    td = tr[i].getElementsByTagName("td")[0];
                    predmeti++;
                }
            }
            assert.equal(predmeti, 1, 'niz predmeta ima jedan predmet koji u svom opisu ima string "linux');
        });