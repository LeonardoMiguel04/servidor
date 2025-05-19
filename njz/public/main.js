function funcao(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let resposta = fetch('/soma',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringfy({a,b})
    });
    let valor = resposta.json();
    document.getElementById("resultado").innerHTML = valor;
}