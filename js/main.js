// ******************************* TIMELINE *************************************************************

// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {id: 1, content: 'Graduation', start: '2014-12-12', className: 'no-box diamond gray'},
//{id: 2, content: 'Today', start: Date.now()}, 
  {id: 3, content: 'Job Prep', start: '2016-02-05', end: '2017-08-15', className: 'lightblue'},
  {id: 4, content: 'Job application', start: '2016-08-15', className: 'circle green'},
  {id: 5, content: 'Job application', start: '2017-02-15', className: 'circle green'},
  {id: 6, content: 'Job application', start: '2017-08-15', className: 'circle yellow'},
  {id: 7, content: 'GMAT Prep', start: '2018-02-01', end: '2018-07-31', className: 'blue'},
  {id: 8, content: 'GMAT', start: '2018-07-31', className: 'diamond purple'}, 
  {id: 9, content: 'Applications', start: '2018-08-02', end: '2018-10-31', className: 'key'}, 
  {id: 10, content: 'MBA preparation', start: '2018-11-01', end: '2019-07-31', className: 'blue'}, 
  {id: 11, content: 'MBA start', start: '2019-08-01', className: 'diamond purple'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);

// ******************************* TABLE *************************************************************

var source = $("#business-schools").html();
var template = Handlebars.compile(source);

var data = {schools: [{"School":"Harvard","Employer":4,"Alumni":2,"Student":19,"Salary":2,"Job":35,"Score":100,"Type":"US"},{"School":"Western (Ivey)","Employer":1,"Alumni":18,"Student":6,"Salary":11,"Job":11,"Score":100,"Type":"International"},{"School":"London Business School","Employer":4,"Alumni":6,"Student":7,"Salary":3,"Job":3,"Score":99.1,"Type":"International"},{"School":"Chicago (Booth)","Employer":1,"Alumni":29,"Student":10,"Salary":6,"Job":1,"Score":98.47,"Type":"US"},{"School":"Northwestern (Kellogg)","Employer":2,"Alumni":11,"Student":6,"Salary":5,"Job":34,"Score":98.24,"Type":"US"},{"School":"MIT (Sloan)","Employer":5,"Alumni":15,"Student":18,"Salary":3,"Job":16,"Score":96.05,"Type":"US"},{"School":"Pennsylvania (Wharton)","Employer":6,"Alumni":14,"Student":27,"Salary":4,"Job":7,"Score":95.92,"Type":"US"},{"School":"Columbia","Employer":3,"Alumni":19,"Student":16,"Salary":9,"Job":25,"Score":95.61,"Type":"US"},{"School":"Stanford","Employer":14,"Alumni":1,"Student":14,"Salary":1,"Job":21,"Score":94.66,"Type":"US"},{"School":"Duke (Fuqua)","Employer":7,"Alumni":7,"Student":12,"Salary":11,"Job":51,"Score":94.07,"Type":"US"},{"School":"INSEAD","Employer":5,"Alumni":13,"Student":4,"Salary":2,"Job":21,"Score":93.65,"Type":"International"},{"School":"IE","Employer":14,"Alumni":3,"Student":2,"Salary":5,"Job":4,"Score":93.43,"Type":"International"},{"School":"IMD","Employer":11,"Alumni":5,"Student":3,"Salary":1,"Job":16,"Score":92.85,"Type":"International"},{"School":"UC Berkeley (Haas)","Employer":11,"Alumni":4,"Student":4,"Salary":7,"Job":49,"Score":91.83,"Type":"US"},{"School":"Michigan (Ross)","Employer":8,"Alumni":28,"Student":5,"Salary":10,"Job":32,"Score":91.74,"Type":"US"},{"School":"Yale","Employer":9,"Alumni":9,"Student":23,"Salary":14,"Job":37,"Score":88.07,"Type":"US"},{"School":"Virginia (Darden)","Employer":10,"Alumni":18,"Student":9,"Salary":13,"Job":13,"Score":87.8,"Type":"US"},{"School":"UCLA (Anderson)","Employer":19,"Alumni":6,"Student":3,"Salary":16,"Job":40,"Score":87.28,"Type":"US"},{"School":"Oxford (Saïd)","Employer":8,"Alumni":1,"Student":9,"Salary":16,"Job":23,"Score":86.16,"Type":"International"},{"School":"Dartmouth (Tuck)","Employer":21,"Alumni":8,"Student":17,"Salary":8,"Job":11,"Score":85.96,"Type":"US"},{"School":"IESE","Employer":9,"Alumni":10,"Student":8,"Salary":6,"Job":7,"Score":85.74,"Type":"International"},{"School":"Cambridge (Judge)","Employer":13,"Alumni":7,"Student":5,"Salary":10,"Job":12,"Score":82.5,"Type":"International"},{"School":"Queen's","Employer":2,"Alumni":15,"Student":11,"Salary":19,"Job":26,"Score":82.25,"Type":"International"},{"School":"Emory (Goizueta)","Employer":29,"Alumni":5,"Student":13,"Salary":17,"Job":9,"Score":82.24,"Type":"US"},{"School":"Cornell (Johnson)","Employer":18,"Alumni":10,"Student":35,"Salary":15,"Job":30,"Score":82.07,"Type":"US"},{"School":"North Carolina (Kenan-Flagler)","Employer":17,"Alumni":22,"Student":11,"Salary":23,"Job":36,"Score":81.82,"Type":"US"},{"School":"Carnegie Mellon (Tepper)","Employer":13,"Alumni":31,"Student":25,"Salary":12,"Job":42,"Score":80.48,"Type":"US"},{"School":"Rice (Jones)","Employer":40,"Alumni":3,"Student":2,"Salary":30,"Job":46,"Score":80.31,"Type":"US"},{"School":"HEC Paris","Employer":7,"Alumni":14,"Student":21,"Salary":4,"Job":9,"Score":79.75,"Type":"International"},{"School":"Washington (Foster)","Employer":12,"Alumni":34,"Student":41,"Salary":19,"Job":5,"Score":79.74,"Type":"US"},{"School":"ESADE","Employer":10,"Alumni":12,"Student":12,"Salary":17,"Job":15,"Score":76.54,"Type":"International"},{"School":"SDA Bocconi","Employer":12,"Alumni":2,"Student":24,"Salary":12,"Job":18,"Score":75.99,"Type":"International"},{"School":"Cranfield","Employer":16,"Alumni":11,"Student":1,"Salary":13,"Job":20,"Score":74.9,"Type":"International"},{"School":"St. Gallen","Employer":19,"Alumni":8,"Student":28,"Salary":7,"Job":2,"Score":65.52,"Type":"International"},{"School":"ESMT","Employer":6,"Alumni":26,"Student":10,"Salary":26,"Job":19,"Score":64.98,"Type":"International"},{"School":"McGill (Desautels)","Employer":17,"Alumni":16,"Student":13,"Salary":18,"Job":13,"Score":63.98,"Type":"International"},{"School":"Mannheim","Employer":20,"Alumni":20,"Student":14,"Salary":9,"Job":8,"Score":61.1,"Type":"International"},{"School":"Toronto (Rotman)","Employer":3,"Alumni":21,"Student":27,"Salary":20,"Job":27,"Score":60.66,"Type":"International"},{"School":"Manchester","Employer":15,"Alumni":9,"Student":23,"Salary":14,"Job":29,"Score":57.67,"Type":"International"},{"School":"Imperial College London","Employer":28,"Alumni":22,"Student":22,"Salary":8,"Job":6,"Score":53.51,"Type":"International"}]}


$(document).ready(function() {
  $('#bs-schools').append(template(data));
})

Handlebars.registerHelper("inc", function(value, options)
{
  return parseInt(value) + 1;
});