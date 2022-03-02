var ID=0;

function selectDemographics(Demographics) {
    return Demographics(Demographics);{
        return Demographics.id==ID;
}
function selectSamples(Samples) {
    return Samples.id == ID;

}

//Function to build the bar chart
function createBarCart(BarSamples){
    let title= 'Top 10 OTUs found in subject ID';
    let OTUIDarray= [];
    for(let i=0; i<10; i++){
        OTUIDarray.push("OTU"+ BarSamples.otu_ids[i]);
    };

//Build the bubble chart
function createBubbleChart(BubbleSamples){

let MarketArray=[]

for(let i=0; i<Bubblesamples.otu_ids.length; i++){
    MarketArray.push(Math.sqrt(BubbleSamples.sample_values[i])*5);
};
    var bubbletrace = [{
        x: BubbleSamples.otu_ids,
        y: BubbleSamples.sample_values,
        text: text,
        mode: 'markers',
        hovertext: Bubblesamples.otu_labels,
        marker: {
            colorscale: "Earth",
            size: MarketArray,
            color: BubbleSamples.otu_ids
        }
    }];

    var layout = {
        showlegend: false,
        xAxis: {title: "OTU ID"}
    };

    Plotly.newPlot('bubble', data, bubblelayout);
}

console.log(option);

d3.json("samples.json").then(function(sampledata) {
    Names = sampledata.names;
    Demographics = sampledata.metadata
    samples= sampledata.samples;
    ID = option;
    var FilterDemographics = Demographics.filter(selectDemographics);
    var FilterSamples = samples.filter(selectSamples);
    console.log(FilterDemographics);
    console.log(Filtersamples);

    createDemData(FilterDemographics[0]);
    createBarCart(Filtersamples[0]);
    createBubbleChart(filtersamples[0]);
    createGuageChart(FilterDemographics[0])

    })
 };

//reading the data to display the selected ID
d3.json("samples.json").then(function(sampledata) {
    console.log(sampledata);

    Names=sampledata.names;
    Demographics= sampledata.metadata;
    Samples= sampledata.samples;


    ID=Names[0];

    console.log(names);
    console.log(Demographics);
    console.log(Sammples);
    Builddropdown(names);

    var FilterDemographics = Demographics.filter(selectDemographics);
    var FilterSamples = samples.filter(selectSamples);
    console.log(FilterDemographics);
    console.log(Filtersamples);

    createDemData(FilterDemographics[0]);
    createBarCart(Filtersamples[0]);
    createBubbleChart(filtersamples[0]);
    createGuageChart(FilterDemographics[0]);

    })
};
