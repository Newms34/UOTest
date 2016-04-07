var imageData = [{ name: 'Select BDG Denim', price: '$39'},
    { name: 'BDG Standard-Fit Wide Neck Tee', price: '2 for $28'},
    { name: 'Standard Cloth 5-pocket Stretch Skinny Pant', price: '$29'},
    { name: 'Kimchi Blue Woven A-Line Tee Dress', price: '$39'},
    { name: 'Select String Lights', price: '30% off'},
    { name: 'Select Prints', price: '25% off'}
];
var whichItem=0;
$('.prod').click(function(e) {
    var uriStr = e.currentTarget.currentSrc;
    whichItem = uriStr[uriStr.indexOf('.jpg') - 1];
    $('#modTit').html(imageData[whichItem - 1].name);
    var img = new Image();
    img.src = uriStr;
    $('#modBod').html(img)
    $('#prodInfo').modal();
})
var updatePrice