'use strict'
const buttonClick = document.getElementById('button--next');
const itemGrid = document.getElementsByClassName('item_grid');
const itemGridForm = document.getElementsByClassName('item_grid_form');
const itemNalog = document.getElementsByClassName('item_grid_2');

for (let i = 0; i < itemGrid.length; i++) {
    itemGrid[i].addEventListener('click', function() {
        for (let j = 0; j < itemGrid.length; j++) {
            itemGrid[j].classList.remove('focus');
        }
        this.classList.add('focus');
    })
}
for (let i = 0; i < itemGridForm.length; i++) {
    itemGridForm[i].addEventListener('click', function() {
        for (let j = 0; j < itemGridForm.length; j++) {
            itemGridForm[j].classList.remove('focus_form');
        }
        this.classList.add('focus_form');
    })
}
for (let i = 0; i < itemNalog.length; i++) {
    itemNalog[i].addEventListener('click', function() {
        for (let j = 0; j < itemNalog.length; j++) {
            itemNalog[j].classList.remove('focus_procent');
        }
        this.classList.add('focus_procent');
    })
}

buttonClick.onclick = function(){
    //стр 2 по слайду
    let p_hide_procent = document.querySelector('.focus');
    let name_space = p_hide_procent.querySelector('p:nth-child(1)').innerHTML;
    let name_set = p_hide_procent.querySelector('p:nth-child(2)').innerHTML;

    //стр 3 по слайду
    let  name_space2 = document.querySelector('.focus_form');
    let focus_form =name_space2.querySelector('p:nth-child(1)').innerHTML; 

    //next
    let name = document.querySelector('.focus_procent');
    let focus_name = name.querySelector('p:nth-child(1)').innerHTML;
    let focus_procent = name.querySelector('p:nth-child(2)').innerHTML;
    //страница 4
    let input_volumeOfProduction = parseFloat(document.getElementById('volumeOfProduction').value);
    let input_costOfProduction = parseFloat(document.getElementById('costOfProduction').value);
    //страница 5
    let input_registration = parseFloat(document.getElementById('registration').value);
    let input_duty = parseFloat(document.getElementById('duty').value);
    let input_technic = parseFloat(document.getElementById('technic').value);
    let input_rental = parseFloat(document.getElementById('rental').value);
    let input_marketing = parseFloat(document.getElementById('marketing').value);
    let input_workPay = parseFloat(document.getElementById('workPay').value);
    let input_furniture = parseFloat(document.getElementById('furniture').value);
    let input_consumables = parseFloat(document.getElementById('consumables').value);
    let input_personal = parseFloat(document.getElementById('personal').value);
    let input_rental_tools = parseFloat(document.getElementById('rental_tools').value);
    let input_communications = parseFloat(document.getElementById('communications').value);
    //страница 8
    let input_investment = parseFloat(document.getElementById('investment').value);
    let input_durationProject = document.getElementById('durationProject').value;
    let inflation = parseFloat(document.getElementById('inflation').textContent)
    let numberRisk = parseFloat(document.getElementById('numberRisk').value);

    //РАСЧЕТЫ
    //4
    const revenue = document.getElementById('revenue');
    const scoreRevenue = input_volumeOfProduction * input_costOfProduction * 12;
    revenue.innerHTML = scoreRevenue;
    //5
    const summStartUp = document.getElementById('summStartUp');
    var summ = input_registration + input_duty + input_technic + input_rental + input_marketing + input_workPay + input_furniture + input_consumables + input_personal + input_rental_tools + input_communications;
    summStartUp.innerHTML =  `${summ}`;
    //6
    const scoreMaterialCosts = input_consumables * 12;
    const materialCosts = document.getElementById('materialCosts');
    materialCosts.innerHTML = scoreMaterialCosts;

    const scoreLaboCosts = (input_workPay + input_personal) * 12
    const laboCosts = document.getElementById('laboCosts');
    laboCosts.innerHTML = scoreLaboCosts;

    const scoreSocialInsurance = input_duty * (30/100)
    const socialInsurance = document.getElementById('socialInsurance');
    socialInsurance.innerHTML = scoreSocialInsurance;

    const scoreDepreciationLease = ((input_technic + input_furniture) / 5) + (input_rental_tools * 12)
    const depreciationLease = document.getElementById('depreciationLease');
    depreciationLease.innerHTML = scoreDepreciationLease;

    const scoreOthers = input_communications * 12 + input_marketing + input_duty + input_registration
    const others = document.getElementById('others');
    others.innerHTML = scoreOthers;
    
    const summResultExpenses = scoreMaterialCosts + scoreLaboCosts + scoreSocialInsurance + scoreDepreciationLease + scoreOthers;
    const resultExpenses = document.getElementById('resultExpenses');
    resultExpenses.innerHTML = summResultExpenses;

    //7
    document.getElementById('estimatedRevenue').innerHTML = scoreRevenue;
    document.getElementById('plannedCosts').innerHTML = summResultExpenses;
    const scoreProfitBeforeTax =  scoreRevenue - summResultExpenses;
    document.getElementById('profitBeforeTax').innerHTML = scoreProfitBeforeTax;
    const scoreIncomeTax = scoreProfitBeforeTax * (name_set/100);
    document.getElementById('incomeTax').innerHTML = scoreIncomeTax;
    const scoreNetProfit = scoreProfitBeforeTax - scoreIncomeTax;
    document.getElementById('netProfit').innerHTML = scoreNetProfit;
    const scoreCostEffectiveness = (scoreNetProfit/summResultExpenses) * 100
    document.getElementById('costEffectiveness').innerHTML = scoreCostEffectiveness;
    const scoreReturnOnSales = (scoreNetProfit/scoreRevenue) * 100
    document.getElementById('returnOnSales').innerHTML = scoreReturnOnSales;
    
    //8
    const scoreDepreciationCharges = input_investment/input_durationProject;
    document.getElementById('scoreDepreciationCharges').innerHTML = scoreDepreciationCharges;
    const scoreDiscounting = inflation + numberRisk;
    document.getElementById('scoreDiscounting').innerHTML = scoreDiscounting;


    const data = {
        "name_space" : name_space,
        "name_set" : name_set,
        "focus_form" : focus_form,
        "focus_name" : focus_name,
        "focus_procent" : focus_procent,
        "volumeOfProduction" : input_volumeOfProduction,
        "costOfProduction" : input_costOfProduction,
        "registration" : input_registration,
        "duty" :  input_duty,
        "technic" :  input_technic,
        "rental" :  input_rental,
        "marketing" :  input_marketing,
        "workPay" :  input_workPay,
        "furniture" : input_furniture,
        "consumables" : input_consumables,
        "personal" : input_personal,
        "rental_tools" : input_rental_tools,
        "communications" : input_communications,
        "materialCosts" : scoreMaterialCosts,
        "laboCosts" : scoreLaboCosts,
        "socialInsurance" : scoreSocialInsurance,
        "depreciationLease" : scoreDepreciationLease,
        "others" : scoreOthers
        // "estimatedRevenue": input_estimatedRevenue,
        // "plannedCosts": input_plannedCosts,
        // "profitBeforeTax":input_profitBeforeTax,
        // "incomeTax": input_incomeTax,
        // "netProfit": input_netProfit,
        // "costEffectiveness": input_costEffectiveness,
        // "returnOnSales": input_returnOnSales,
        // "durationProject": input_durationProject
    }
    const table = document.querySelectorAll('.smeta_result').textContent
    console.log(table);
    
    let results = JSON.stringify(data);
    console.log(results);
    return results;
}
