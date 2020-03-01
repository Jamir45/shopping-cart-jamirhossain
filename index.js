//Phone Section Handler Start
    const minus = document.getElementById("minusBtn");
    minus.addEventListener("click", function(){
    const iphone = document.getElementById("iphoneNumber").value--;
    const iphonePrice = document.getElementById("iphonePrice").innerText;
    const iphonePriceNumber = parseFloat(iphonePrice);
    const totalPrice = iphonePriceNumber - 1219;
    document.getElementById("iphonePrice").innerText = totalPrice;
    
    minusPrice("totalAmount");
    minusPrice("subtotalAmount");
    });

    const plus = document.getElementById("plusBtn");
    plus.addEventListener("click", function(){
    const iphone = document.getElementById("iphoneNumber").value++;
    const iphonePrice = document.getElementById("iphonePrice").innerText;
    const iphonePriceNumber = parseFloat(iphonePrice);
    const totalPrice = iphonePriceNumber + 1219;
    document.getElementById("iphonePrice").innerText = totalPrice;

    addPrice("totalAmount");
    addPrice("subtotalAmount");
    });
    function minusPrice(id){
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber - 1219;
    document.getElementById(id).innerText = subtotalPrice;
    }

    function addPrice(id){
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber + 1219;
    document.getElementById(id).innerText = subtotalPrice;
    }

//Phone Section Handler End

//Phone Case Section Handler Start
    const caseMinus = document.getElementById("caseMinus");
    caseMinus.addEventListener("click", function(){
    const Case = document.getElementById("caseNumber").value--;
    const casePrice = document.getElementById("casePrice").innerText;
    const casePriceNumber = parseFloat(casePrice);
    const totalCasePrice = casePriceNumber - 59;
    document.getElementById("casePrice").innerText = totalCasePrice;

    minusCasePrice("subtotalAmount");
    minusCasePrice("totalAmount");
    });

    const casePlus = document.getElementById("casePlus");
    casePlus.addEventListener("click", function(){
    const Case = document.getElementById("caseNumber").value++;
    const casePrice = document.getElementById("casePrice").innerText;
    const casePriceNumber = parseFloat(casePrice);
    const totalCasePrice = casePriceNumber + 59;
    document.getElementById("casePrice").innerText = totalCasePrice;

    addCasePrice("subtotalAmount");
    addCasePrice("totalAmount");
    });

    function minusCasePrice(id){
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber - 59;
    document.getElementById(id).innerText = subtotalPrice;
    }

    function addCasePrice(id){
    const subtotal = document.getElementById(id).innerText;
    const subtotalNumber = parseFloat(subtotal);
    const subtotalPrice = subtotalNumber + 59;
    document.getElementById(id).innerText = subtotalPrice;
    }
//Phone Case Section Handler End

    const checkOutBtn = document.querySelector("#checkOutBtn");
    checkOutBtn.addEventListener("click", function(){
        const sectionArea1 = document.querySelector(".sectionArea1");
        sectionArea1.style.display = "none";
        const sectionArea2 = document.querySelector(".sectionArea2");
        sectionArea2.style.display = "block";
    });