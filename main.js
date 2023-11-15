const config = {
    url : "https://api.recursionist.io/builder/computers?type=",
    parent : document.getElementById("target"),
    
    cpuBrand : "cpuBrand",
    cpuModel : "cpuModel",

    gpuBrand : "gpuBrand",
    gpuModel : "gpuModel",

    ramBrand : "ramBrand",
    ramModel : "ramModel",
    ramNumber : "ramNumber",

    storageBrand : "storageBrand",
    storageModel : "storageModel",
    storageSize : "storageSize",
    storageType : "storageType",
}

class PC {
    constructor() {
        //初期化処理
        this.cpuBrand = null;
        this.cpuModel = null;
        this.cpuBenchmark = null;

        this.gpuBrand = null;
        this.gpuModel = null;
        this.gpuBenchmark = null;

        this.ramBrand = null;
        this.ramModel = null;
        this.ramNumber = null;
        this.ramBenchmark = null;

        this.storageBrand = null;
        this.storageModel = null;
        this.storageSize = null;
        this.storageType = null;
        this.storageBenchmark = null;
    }

    static addBrandData(parts, selectedBrand, pc) {
        switch(parts){
            case "cpu":
                pc.cpuBrand = selectedBrand;
                break;
            case "gpu":
                pc.gpuBrand = selectedBrand;
                break;
            case "ram":
                pc.ramBrand = selectedBrand;
                break;
            case "hdd":
                pc.storageBrand = selectedBrand;
                break;
            case "ssd":
                pc.storageBrand = selectedBrand;
                break;
        }
    }

    static addModelData(aparts, selectedModel, pc) {
        switch(aparts){
            case "cpu":
                pc.cpuModel = selectedModel;
                break;
            case "gpu":
                pc.gpuModel = selectedModel;
                break;
            case "ram":
                pc.ramModel = selectedModel;
                break;
            case "hdd":
                pc.storageModel = selectedModel;
                break;
            case "ssd":
                pc.storageModel = selectedModel;
                break;
        }
    }

    static addBenchmarkData(aparts, Benchmark, pc) {
        switch(aparts){
            case "cpu":
                pc.cpuBenchmark = Benchmark;
                break;
            case "gpu":
                pc.gpuBenchmark = Benchmark;
                break;
            case "ram":
                pc.ramBenchmark = Benchmark;
                break;
            case "hdd":
                pc.storageBenchmark = Benchmark;
                break;
            case "ssd":
                pc.storageBenchmark = Benchmark;
                break;
        }
    }

    static addStorageSize(size, pc){
        pc.storageSize = size;
    }
    static addStorageType(type, pc){
        pc.storageType = type;
    }

    static getGamingBenchmark(pc){
        let cpuScore = parseInt(pc.cpuBenchmark * 0.25);
        let gpuScore = parseInt(pc.gpuBenchmark * 0.6);
        let ramScore = parseInt(pc.ramBenchmark * 0.125);
        let storageScore = pc.storageType === "ssd" ? parseInt(pc.storageBenchmark * 0.1) : parseInt(pc.storageBenchmark * 0.025);
        return cpuScore + gpuScore + ramScore + storageScore ;
    }

    

    static getWorkBenchmark(pc){
        let cpuScore = parseInt(pc.cpuBenchmark * 0.6);
        let gpuScore = parseInt(pc.gpuBenchmark * 0.25);
        let ramScore = parseInt(pc.ramBenchmark * 0.1);
        let storageScore = parseInt(pc.storageBenchmark * 0.05);
        return cpuScore + gpuScore + ramScore + storageScore;
    }
}

class View{
    static createFirstPage(pc) {
        const parent = config.parent;
        let container = document.createElement("div");
        container.classList.add("bg-white");
        container.innerHTML = 
        `
            <div class="p-3 bg-primary col-12 d-flex justify-content-center align-items-center">
                <h1 class="text-white text-center">自分のコンピュータを作りましょう</h1>
            </div>
            <div class="m-2 pt-3">
                <h4>step1: Select Your CPU</h4>
            </div>
            <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
                <h5>Brand</h5>
                <select class="mx-3 col-9 col-sm-3 custom-select" id="cpuBrand">
                    <option>-</option>
                </select>
                <h5>Model</h5>
                <select class="mx-3 col-9 col-sm-3 custom-select" id="cpuModel">
                    <option>-</option>
                </select>        
            </div>
            <div class="m-2 pt-3">
                <h4>step2: Select Your GPU</h4>
            </div>
            <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
                <h5>Brand</h5>
                <select class="mx-3 col-9 col-sm-3 custom-select" id="gpuBrand">
                    <option>-</option>
                </select>
                <h5>Model</h5>
                <select class="mx-3 col-9 col-sm-3 custom-select" id="gpuModel">
                    <option>-</option>
                </select>        
            </div>
            <div class="m-2 pt-3">
                <h4>step3: Select Your Memory Card</h4>
            </div>
            <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
                <h5>How many?</h5>
                <select class="mx-3 col-9 col-sm-1 custom-select" id="ramNumber">
                    <option>-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <h5>Brand</h5>
                <select class="mx-3 col-9 col-sm-3 custom-select" id="ramBrand">
                    <option>-</option>
                </select>
                <h5>Model</h5>
                <select class="mx-3 col-9 col-sm-3 
                custom-select" id="ramModel">
                    <option>-</option>
                </select>        
            </div>
            <div class="m-2 pt-3">
                <h4>step4: Select Your Storage</h4>
            </div>
            <div class="p-2 d-flex justify-content-start flex-column d-sm-flex flex-sm-row justify-content-sm-start align-items-sm-center">
                <h5>HDD or SSD</h5>
                <select class="mx-3 col-9 col-sm-2 custom-select" id="storageType">
                    <option>-</option>
                    <option>HDD</option>
                    <option>SSD</option>
                </select>
                <h5>Storage</h5>
                <select class="mx-3 col-9 col-sm-2 custom-select" id="storageSize">
                    <option>-</option>
                </select>
                <h5>Brand</h5>
                <select class="mx-3 col-9 col-sm-2 custom-select" id="storageBrand">
                    <option>-</option>
                </select>
                <h5>Model</h5>
                <select class="mx-3 col-9 col-sm-2 custom-select" id="storageModel">
                    <option>-</option>
                </select>        
            </div>
            <div>
                <button type="submit" class="my-3 ml-3 btn btn-primary col-2" id="addPc">Add PC</button>
            </div>
            <div id="displayPC">
            </div>
        
        `;

        parent.append(container);
        const addPc = document.querySelectorAll("#addPc")[0];
        addPc.addEventListener("click", function() {
            Controller.clickAddPc(pc);
        });

        return parent;
    }

    static createResultPage(pc, count) {
        const container = document.querySelectorAll("#displayPC")[0];
        let div = document.createElement("div");
        let gamingScore = PC.getGamingBenchmark(pc);
        let workingScore = PC.getWorkBenchmark(pc);

        div.classList.add("bg-primary", "text-white", "m-2", "col-12");
        div.innerHTML = 
        `
        <div class="m-2 pt-3 d-flex justify-content-center">
            <h1>Your PC${count}</h1>
        </div>
        <div class="m-2 pt-3 d-flex flex-column">
            <h1>CPU</h1>
            <h5>Brand: ${pc.cpuBrand}</h5>
            <h5>Model: ${pc.cpuModel}</h5>
        </div>
        <div class="m-2 pt-3 d-flex flex-column">
            <h1>GPU</h1>
            <h5>Brand: ${pc.gpuBrand}</h5>
            <h5>Model: ${pc.gpuModel}</h5>
        </div>
        <div class="m-2 pt-3 d-flex flex-column">
            <h1>RAM</h1>
            <h5>Brand: ${pc.ramBrand}</h5>
            <h5>Model: ${pc.ramModel}</h5>
        </div>
        <div class="m-2 pt-3 d-flex flex-column">
            <h1>Storage</h1>
            <h5>Disk: ${pc.storageType}</h5>
            <h5>Storage: ${pc.storageSize}</h5>
            <h5>Brand: ${pc.storageBrand}</h5>
            <h5>Model: ${pc.storageModel}</h5>
        </div>
        <div class="m-2 pt-3 d-flex justify-content-around align-items-center">
            <h1>Gaming: ${gamingScore}%</h1>
            <h1>Work: ${workingScore}%</h1>
        </div>
        `
        container.append(div);
        return container;
    }
}

class Controller {
    static count = 0;

    static startBuildcomputer() {
        const pc = new PC();
        View.createFirstPage(pc);
        Controller.getAllData(pc);
    }

    static getAllData(pc) {
        const cpuBrand = document.getElementById(config.cpuBrand);
        const cpuModel = document.getElementById(config.cpuModel);
        const gpuBrand = document.getElementById(config.gpuBrand);
        const gpuModel = document.getElementById(config.gpuModel);
        const ramBrand = document.getElementById(config.ramBrand);
        const ramModel = document.getElementById(config.ramModel);
        const ramNumber = document.getElementById(config.ramNumber);
        const storageBrand = document.getElementById(config.storageBrand);
        const storageModel = document.getElementById(config.storageModel);


        Controller.getBrandData("cpu", cpuBrand, cpuModel, pc);
        Controller.getBrandData("gpu", gpuBrand, gpuModel, pc);
        Controller.getRamData(ramNumber, ramBrand, ramModel, pc);
        Controller.getStorageData(storageBrand, storageModel, pc);
    }

    static getBrandData(parts, brandOp, modelOp, pc) {
        fetch(config.url + parts).then(response => response.json()).then(function(data) {
            brandOp.innerHTML = `<option>-</option>`;
            let brandData = Controller.getBrand(data);
            for (let brand in brandData) {
                let option = document.createElement("option");
                option.value = brandData[brand];
                option.innerText = brandData[brand];
                brandOp.append(option);
            }
            brandOp.addEventListener("change", function() {
                let selectedBrand = brandOp.value;
                PC.addBrandData(parts, selectedBrand, pc);
                Controller.getModelData(parts, brandOp, modelOp, pc);
              
            });
        })
    }
    //
    static getModelData(parts,brandSelect,modelSelect,pc) {
        fetch(config.url + parts).then(response => response.json()).then(function(data) {
            let modelData = Controller.getModel(data);
            if(parts === "ram"){
                modelSelect.innerHTML = `<option value="">-</option>`
                for(let i in modelData[brandSelect.value]){
                    if(modelData[brandSelect.value][i].indexOf(ramNumber.value) !== -1){
                      let option = document.createElement("option");
                      option.value = modelData[brandSelect.value][i];
                      option.innerText = modelData[brandSelect.value][i];
                      modelSelect.append(option);
                    }
                }
            }
            if(parts === "cpu" || parts === "gpu"){
                modelSelect.innerHTML = `<option value="">-</option>`
                for(let i in modelData[brandSelect.value]){
                    let option = document.createElement("option");
                    option.value = modelData[brandSelect.value][i];
                    option.innerText = modelData[brandSelect.value][i];
                    modelSelect.append(option);
                }
            }
            if(parts === "hdd" || parts === "ssd"){
                modelSelect.innerHTML = `<option value="">-</option>`;
                for(let i in modelData[brandSelect.value]){
                  if(modelData[brandSelect.value][i].indexOf(storageSize.value) !== -1){
                    let option = document.createElement("option");
                    option.value = modelData[brandSelect.value][i];
                    option.innerText = modelData[brandSelect.value][i];
                    modelSelect.append(option);
                  }
                }
              }
            
            modelSelect.addEventListener("change", function() {
                let selectedModel = modelSelect.value;
                PC.addModelData(parts, selectedModel, pc);
                Controller.getBenchmarkData(parts, selectedModel, pc);
            })
        }); 
    }

    static getRamData(ramNumberOp, ramBrandOp, ramModelOp, pc) {
        ramNumberOp.addEventListener("change", function(){
            Controller.getBrandData("ram", ramBrandOp, ramModelOp, pc);
        });
    }

    static getStorageData(storageBrandOp, storageModelOp, pc) {
        const storageTypeOp = document.getElementById(config.storageType);
        const storageSizeOp = document.getElementById(config.storageSize);
        storageTypeOp.addEventListener("change", function() 
        {
            storageSizeOp.innerHTML = `<option>-</option>`;
            let selectedStorageType = storageTypeOp.value;
            pc.storageType = selectedStorageType;
            if(selectedStorageType == "HDD"){
                Controller.getStorageSizeData("hdd");
                storageSizeOp.addEventListener("change", function(){
                    storageBrandOp.innerHTML = `<option>-</option>`;
                    let selectedSize = storageSizeOp.value;
                    pc.storageSize = selectedSize;
                    Controller.getBrandData("hdd", storageBrandOp, storageModelOp, pc);            
                })
            } else {
                Controller.getStorageSizeData("ssd");
                storageSizeOp.addEventListener("change", function(){
                    storageModelOp.innerHTML = `<option>-</option>`;
                    let selectedSize = storageSizeOp.value;
                    pc.storageSize = selectedSize;
                    Controller.getBrandData("ssd", storageBrandOp, storageModelOp, pc);
                })
            }
        });
    }


    static addOptionList(arr, op) {
        arr.forEach(word => {
            let option = document.createElement("option");
            option.value = word;
            option.innerText = word;
            op.append(option);
        });
    }

    static getStorageSizeData(type) {
        fetch(config.url + type).then(response=>response.json()).then(function(data) {
            const storageSizeOp = document.getElementById(config.storageSize);
            let storagemodelData = Controller.getStorageModel(data);
            let storageSizeList = Controller.getStorageSizeList(storagemodelData);
            Controller.addOptionList(storageSizeList, storageSizeOp);
        });
    }

    static getStorageSizeList(storageModelData) { 
        let storageModelList = Object.keys(storageModelData); 
        let tbSizeList = [];
        let gbSizeList = [];

        storageModelList.forEach(model =>{
            if(model.includes("TB")) tbSizeList.push(parseFloat(model.replace("TB",'')));
            else gbSizeList.push(parseFloat(model.replace("GB",'')));
        })

        let sortedTb = tbSizeList.sort((a, b) => b - a).map(x => x.toString() + "TB");
        let sortedGb = gbSizeList.sort((a, b) => b - a).map(x => x.toString() + "GB");
        return sortedTb.concat(sortedGb);
    }

    static getBrand(data) {
        let brandData = {};
        for(let i in data){
            let currentData = data[i];
            if(brandData[currentData.Brand] == undefined) brandData[currentData.Brand] = currentData.Brand;
        }
        return brandData;
    }

    static getModel(data) { 
        let modelData = {};
        for(let i in data){
            let currentData = data[i];
            if(modelData[currentData.Brand] == undefined) modelData[currentData.Brand] = [currentData.Model];
            else {
                modelData[currentData.Brand].push(currentData.Model);
            }
        }
        return modelData;
    }

    static getBenchmarkData(parts, model, pc) {
        fetch(config.url + parts).then(response => response.json()).then(data => {
            let benchmark = Controller.getBenchmark(data, model);
            PC.addBenchmark(parts, benchmark, pc);
        });
    }
    
    static getBenchmark(data,model){
        let benchmark = 0;
        for(let i in data){
            if(data[i]["Model"] === model){
            benchmark = parseInt(data[i]["Benchmark"]);
            break;
            }
        }
        return benchmark;
    }

    

    static getStorageModel(data){ 
        let modelData = {};
        for(let i in data){
            let currentData = Controller.getStorageSizeString(data[i].Model);
            if(modelData[currentData] == undefined) modelData[currentData] = currentData;
        }
        return modelData;
    }

    static getStorageSizeString(storageModel){
        let storageSize = storageModel.split(' ').filter(word => word.includes("GB") || word.includes("TB")).join('');
        return storageSize;
    }



    static clickAddPc(pc){
        let modelList = [pc.cpuModel, pc.gpuModel, pc.ramModel, pc.storageModel];
        for(let i = 0; i < modelList.length; i++){
            if(modelList[i] == null) return alert("フォーム内の内容をすべて埋めてください.")
        }
        Controller.count++;
        return View.createResultPage(pc, Controller.count);
    }


}
Controller.startBuildcomputer();


