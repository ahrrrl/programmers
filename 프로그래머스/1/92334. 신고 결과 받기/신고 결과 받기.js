function solution(id_list, report, k) {
    const reportedMap = Object.fromEntries(id_list.map(v => [v, []]));
    const pastReport = new Map();
    const valiedReportCount = Object.fromEntries(id_list.map(name => [name, 0]));
    
    for (name of report) {
        const [reporter, reported] = name.split(' ');
        
        if(!pastReport.has(reporter)) {
            pastReport.set(reporter, new Set());
        }
        if(pastReport.get(reporter).has(reported)) continue;
  
        pastReport.get(reporter).add(reported);
        reportedMap[reported].push(reporter);
    }

    Object.entries(reportedMap).map(([reported, arr], i) => {
        if(arr.length >= k) {
            for( name of arr) {
                valiedReportCount[name] += 1;
            }
            
        }
    })

    return Object.values(valiedReportCount)
    
}