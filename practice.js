
var input = document.getElementsByClassName('text-box')[0].value;
document.getElementById('click-me').addEventListener('click', function(event){
      if(input === 30){
        console.log('you did it');
        // document.getElementsByClassName('above30')[0].style['color']= 'red';
        // document.getElementsByClassName('between10and20')[0].style['display']='none';
        // document.getElementsByClassName('between10and0')[0].style['display']='none';
        // document.getElementsByClassName('between0andneg20')[0].style['display']='none';
        // document.getElementsByClassName('below20')[0].style['display']='none';
       }
      // else if (input >= 10 && input <= 20){
      //   document.getElementsByClassName('above30').style.display= 'none';
      //   document.getElementsByClassName('between10and20')[0].style.color= 'red';
      //   document.getElementsByClassName('between10and0')[0].style.display='none';
      //   document.getElementsByClassName('between0andneg20')[0].style.display='none';
      //   document.getElementsByClassName('below20')[0].style.display='none';
      //  }
      // else if(input < 10 && input >= 0){
      //   document.getElementsByClassName('above30').style.display= 'none';
      //   document.getElementsByClassName('between10and20')[0].style.display= 'none';
      //   document.getElementsByClassName('between10and0')[0].style.color='red';
      //   document.getElementsByClassName('between0andneg20')[0].style.display='none';
      //   document.getElementsByClassName('below20')[0].style.display='none';
      //  }
      //  else if(input < 0 && input > -20){
      //    document.getElementsByClassName('above30').style.display= 'none';
      //    document.getElementsByClassName('between10and20')[0].style.display= 'none';
      //    document.getElementsByClassName('between10and0')[0].style.display='none';
      //    document.getElementsByClassName('between0andneg20')[0].style.color='red';
      //    document.getElementsByClassName('below20')[0].style.display='none';
      //   }
      //   else if(input <=-20){
      //     document.getElementsByClassName('above30').style.display= 'none';
      //     document.getElementsByClassName('between10and20')[0].style.display= 'none';
      //     document.getElementsByClassName('between10and0')[0].style.display='none';
      //     document.getElementsByClassName('between0andneg20')[0].style.display='none';
      //     document.getElementsByClassName('below20')[0].style.color='red';
      //    }
         else {
        console.log('this did not work');
        //    document.getElementsByClassName('above30').style.display= 'none';
        //    document.getElementsByClassName('between10and20').style.display= 'none';
        //    document.getElementsByClassName('between10and0').style.display='none';
        //    document.getElementsByClassName('between0andneg20').style.display='none';
        //    document.getElementsByClassName('below20').style.display='none';
         }

});





// var input = document.getElementsByClassName('text-box').value;
//
// function entry(input){
//     if(typeof input === "string") {
//             window.alert("Please input a real number");
//           }
//     else {
//           if (input>=30){
//             window.alert("2 tops, 1 bottom. long sleeve + vest + tights");
//           else if (input >= 10 && input <= 20){
//             window.alert("2 tops, 2 bottoms. base layer + jacket + tights + pants");
//             }
//           else if (input < 10 && input >= 0) {
//             window.alert("3 tops, 2 bottoms. base layer + fleece + jacket + tights + pants");
//             }
//           else if (input < 0 && input > -20) {
//             window.alert("3 tops, 3 bottoms. base layer + fleece + jacket + tights + pants + 2 pairs mittens + facemask");
//             }
//           else if (input <=-20){
//             window.alert("don't run");
//             }
//         }
// }
// }
// entry(input);
