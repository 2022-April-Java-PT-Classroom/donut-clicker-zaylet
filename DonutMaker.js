class DonutMaker{


    constructor(numDonuts, numAutoClickers,autoClickerCost, numDonutMultiplier){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickerCost = autoClickerCost;
        this.numDonutMultiplier = this.numDonutMultiplier;
    }

    addDonut(){
        this.numDonuts += 1;
        if(this.numAutoClickers >=1){
            this.numDonuts++;
        }
    }

    addAutoClicker(){
        if(this.numDonuts >=100){
        this.numDonuts -= 100;
        this.numAutoClickers += 1;
        }

        if(this.numAutoClickers >= 1){
            this.autoClickerCost += this.autoClickerCost * 0.1;
        }
    }

    addDonutMultiplier(){
        this.numDonutMultiplier += 1;
        
    }
}

export default DonutMaker;