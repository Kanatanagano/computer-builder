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
}

class View{
    static createFirstPage(pc) {
        
    }
}



