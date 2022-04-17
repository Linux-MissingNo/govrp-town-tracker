'use strict'
import Town from './town_source.js'



// convert town class into JSON Object
export default function exportJSON(townExport) {

    const townExportArray = [townExport.getDemo(0), townExport.getDemo(1)];
    const exportTown = {
            nameTown: townExport.getName(),
            popTown: townExportArray,
            cashTown: townExport.getCash(),
            gdpTown: townExport.getGDP(),
            econStren: townExport.getEconStren(),
            foodUnits: townExport.getFoodUnits(),
            literacy: townExport.getLiteracy(),
            popularity: townExport.getPopularity()
    };
return exportTown;
}