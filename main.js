const config = {
    url : "https://api.recursionist.io/builder/computers?type=",
    parentId : document.getElementById("parent"),
    
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

    addPcButton : "addPcButton",
    pcList : "pcList"
}
class PC {
    constructor() {
        this.cpuBrand = null;
        this.cpuModel = null;
        thiscpuBenchmark = null;

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

    static addStorageData(size, pc){
        pc.storageSize = size;
    }

    static getGamingBenchmark(pc){
        let cpuScore = parseInt(pc.cpuBenchmark * 0.25);
        let gpuScore = parseInt(pc.gpuBenchmark * 0.6);
        let ramScore = parseInt(pc.ramBenchmark * 0.125);
        let storageScore = this.storageType === "SSD" ? parseInt(pc.storageBenchmark * 0.1) : parseInt(pc.storageBenchmark * 0.025);

        return cpuScore + gpuScore + ramScore + storageScore;
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
        const parent = config.parentId;
        let container = document.createElement("div");
        container.classList.add("bg-white");
        container.innerHTML = 
        `
            <div class="bg-dark col-12 d-flex justify-content-center align-items-center">
                <h1 class="text-white text-center">Build Your Own Computer</h1>
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
                <select class="mx-3 col-9 col-sm-1 custom-select" id="ramNum">
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
                <select class="mx-3 col-9 col-sm-3 custom-select" id="ramModel">
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
        
        `

        parent.appendChild(container);

        const addPcButton = document.querySelectorAll("#addPc");
        addPcButton.addEventListener("click", () => {
            Controller.clickaddPc(pc);
        });
        return parent;
    }

    static createResultPage(count,pc){
        let result = document.getElementById(config.result);
        let container = document.createElement("div");
        let gamingScore = PC.getGamingScore(pc);
        let workingScore = PC.getWorkingScore(pc);
  
        container.innerHTML = 
        `
            <div class="d-flex flex-column bg-primary text-white p-3">
                <h4 class="p-3">Your PC ${count}</h4>
                <h4>CPU</h4>
                <p>Brand: ${pc.cpuBrand}</p>
                <p>Model: ${pc.cpuModel}</p>
                <h4>GPU</h4>
                <p>Brand: ${pc.gpuBrand}</p>
                <p>Model: ${pc.gpuModel}</p>
                <h4>RAM</h4>
                <p>Brand: ${pc.ramBrand}</p>
                <p>Model: ${pc.ramModel}</p>
                <h4>Storage</h4>
                <p>Disk: ${pc.storageType.toUpperCase()}</p>
                <p>Disk: ${pc.storageSize}</p>
                <p>Brand: ${pc.storageBrand}</p>
                <p>Model: ${pc.storageModel}</p>
            </div>
  
            <div class="d-flex flex-row justify-content-center bg-success">
                <h4 class="p-2">Gaming: ${gamingScore}%</h4>
                <h4 class="p-2">Work: ${workingScore}%</h4>
            </div>
        `
        parent.append(container);
    }
}

class Controller {
    static count = 0;

    static startBuildcomputer(pc) {
        const pc = new PC();
        View.createFirstPage(pc);
        Controller.getAllData(pc);
    }

    static getAllData(pc) {
        const cpuBrandOp = document.querySelectorAll(config.cpuBrand);
        const cpuModelOp = document.querySelectorAll(config.cpuModel);
        const gpuBrandOp = document.querySelectorAll(config.gpuBrand);
        const gpuModelOp = document.querySelectorAll(config.gpuModel);
        const ramBrandOp = document.querySelectorAll(config.ramBrand);
        const ramModelOp = document.querySelectorAll(config.ramModel);
        const ramNumOp = document.querySelectorAll(config.ramNumber);
        const storageBrandOp = document.querySelectorAll(config.storageBrand);
        const storageModelOp = document.querySelectorAll(config.storageModel);


        Controller.getBrandData("cpu", cpuBrandOp, cpuModelOp, pc);
        Controller.getBrandData("gpu", gpuBrandOp, gpuModelOp, pc);
        Controller.getRamBrandData(ramNumOp, ramBrandOp, ramModelOp, pc);
        Controller.getStorageBrandData(storageBrandOp, storageModelOp, pc);
    }

    static getBrandData(parts, brandOp, modelOp, pc) {
        fetch(config.url + parts).then(res => res.json()).then(function(data) {
            brandOp.innerHTML = `<option>-</option>`;
            let brandData = Controller.getUniqueBrandData(data);
            let modelData = Controller.getUniqueModelData(data);
            let BenchmarkData = Controller.getUniqueBenchmarkData(data);

            for (let brand in brandData) {
                let option = document.createElement("option");
                option.value = brandData[brand];
                option.innerHTML = brandData[brand];
                brandOp.appendChild(option);
            }

            brandOp.addEventListener("change", () => {
                let selectedBrand = brandOp.value;
                Controller.getModelData(parts, selectedBrand, modelData, modelOp, pc);
              
            });
        })
    }

    static getModelData(parts, brandOp, modelOp, modelData, BenchmarkData, pc) {
        fetch(config.url + parts).then(res => res.json()).then(function(data) {
            modelOp.innerHTML = `<option>-</option>`;
            let selectedBrand = brandOp.value;
            PC.addBrandData(parts, selectedBrand, pc);

            if(parts == "hdd" || parts == "ssd"){
                const storageSizeOp = document.querySelectorAll(config.storageSize);
                let selectedSize = storageSizeOp.value;
            }

        }); 
    }


}

Controller.startBuildcomputer();





