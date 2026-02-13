const calcular = document.getElementById('calcular');

function poup(){
    const raio = document.getElementById('raio').value;
    const pi = document.getElementById('pi').value;
    const resultado = document.getElementById('resultado');

    if(raio !==''&& pi!==''){
        const valorPOU = pi*(raio*raio).toFixed(1);
        let classificacao = '';
        if(valorPOU <= 20){
            classificacao = 'Nível Zero: Ruim';

        } else if(valorPOU <= 40){
            classificacao = 'Nível 1: Médio';

        } else if(valorPOU <= 60){
            classificacao = 'Nível 2: Bom';

        } else if(valorPOU <= 80){
            classificacao = 'Nível 3: Muito bom';
        
        } else if(valorPOU <= 100){
            classificacao = 'Nível 4: Perfeito';

        }
        resultado.textContent = `Seu círculo é ${valorPOU} então o nível dele é ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}
calcular.addEventListener('click', poup);